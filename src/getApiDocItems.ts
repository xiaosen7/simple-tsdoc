import * as model from "@microsoft/api-extractor-model";
import * as types from "./types";
import { ApiDocItem } from "./types";
import * as tsdoc from "@microsoft/tsdoc";
import { DocNodeFormatter } from "./models/DocNodeFormatter";
import * as utils from "./utils";

const canVisitKinds = [
  model.ApiItemKind.Class,
  model.ApiItemKind.Function,
  model.ApiItemKind.Method,
  model.ApiItemKind.Property,
  model.ApiItemKind.Constructor,
  model.ApiItemKind.Namespace,
  model.ApiItemKind.Interface,
  model.ApiItemKind.TypeAlias,
] as const;
type CanVisitKind = typeof canVisitKinds[number];
type AfterVisitKind = `After${CanVisitKind}`;
type Visitor = Partial<
  Record<CanVisitKind | AfterVisitKind, (apiDocItem: types.ApiDocItem) => any>
>;

export interface GetApiDocItemsOptions {
  /**
   * default new DocNodeFormatter()
   */
  docNodeFormatter?: DocNodeFormatter;
  apiJsonFilePath: string;
}

/**
 * Analyze the api.json file to get {@link ApiDocItem}.
 * @param apiJsonPath
 * @param options
 * @returns
 */
export function getApiDocItems(
  options: GetApiDocItemsOptions
): types.ApiDocItem[] {
  const { apiJsonFilePath, docNodeFormatter = new DocNodeFormatter() } =
    options;

  const apiModel: model.ApiModel = new model.ApiModel();
  const apiPackage: model.ApiPackage = apiModel.loadPackage(apiJsonFilePath);

  const docItems: types.ApiDocItem[] = [];
  const visitor = createVisitor(docItems);
  traversePackage(apiPackage, visitor, docNodeFormatter);

  return docItems;
}

function getAnnotation(
  apiItem: model.ApiDeclaredItem,
  docNodeFormatter: DocNodeFormatter
): types.Annotation {
  const tsdocComment: tsdoc.DocComment | undefined = apiItem.tsdocComment;

  const annotation: types.Annotation = {
    tagNameToDescMap: new Map(),
    description: "",
    params: [],
    signature: getSignatureFromApiItem(apiItem),
  };

  // get params
  if (
    apiItem instanceof model.ApiFunction ||
    apiItem instanceof model.ApiMethod ||
    apiItem instanceof model.ApiConstructor
  ) {
    if (apiItem.parameters.length > 0) {
      annotation.params = apiItem.parameters.map((parameter) => {
        const { name, isOptional } = parameter;
        const type = parameter.parameterTypeExcerpt.text;
        let description = "";
        if (parameter.tsdocParamBlock) {
          description = docNodeFormatter
            .format(parameter.tsdocParamBlock.content)
            .trimEnd();
        }

        return {
          name,
          description,
          type,
          isOptional,
        };
      });
    }
  }

  // parse tsdocComment
  if (tsdocComment) {
    annotation.description = docNodeFormatter
      .format(tsdocComment.summarySection)
      .trimEnd();

    if (tsdocComment.deprecatedBlock !== undefined) {
      annotation.tagNameToDescMap.set(
        "@deprecated",
        docNodeFormatter.format(tsdocComment.deprecatedBlock.content).trimEnd()
      );
    }

    [
      ...tsdocComment.customBlocks,
      tsdocComment.remarksBlock,
      ...tsdocComment.seeBlocks,
    ].forEach((block) => {
      if (block === undefined) {
        return;
      }

      const description = docNodeFormatter.format(block.content).trimEnd();
      annotation.tagNameToDescMap.set(
        block.blockTag.tagName as any,
        description
      );
    });

    tsdocComment.modifierTagSet.nodes.forEach((x) => {
      annotation.tagNameToDescMap.set(x.tagName as any, undefined);
    });

    if (tsdocComment.returnsBlock !== undefined) {
      annotation.returns = docNodeFormatter
        .format(tsdocComment.returnsBlock.content)
        .trimEnd();
    }

    if (annotation.params.length === 0) {
      for (const paramBlock of tsdocComment.params.blocks) {
        annotation.params.push({
          name: paramBlock.parameterName,
          description: docNodeFormatter.format(paramBlock.content).trimEnd(),
        });
      }
    }
  }

  return annotation;
}

function getSignatureFromApiItem(apiItem: model.ApiDeclaredItem) {
  let ret = apiItem.getExcerptWithModifiers();

  if (apiItem instanceof model.ApiInterface) {
    ret += "{";
    apiItem.members.forEach((memberApiItem) => {
      if (memberApiItem instanceof model.ApiDeclaredItem) {
        ret += `\n  ${getSignatureFromApiItem(memberApiItem)}`;
      }
    });
    ret += "\n}";
  }

  return ret;
}

function traversePackage(
  apiPackage: model.ApiPackage,
  visitor: Visitor,
  docNodeFormatter: DocNodeFormatter
): void {
  traverseMembers(apiPackage.members, visitor, docNodeFormatter);
}

function traverseCallback(
  apiItem: model.ApiItem,
  visitor: Visitor,
  docNodeFormatter: DocNodeFormatter
): void {
  const canVisit =
    apiItem instanceof model.ApiDeclaredItem &&
    canVisitKinds.includes(apiItem.kind as any);

  if (!canVisit) {
    traverseMembers(apiItem.members, visitor, docNodeFormatter);
    return;
  }

  const annotation = getAnnotation(apiItem, docNodeFormatter);
  const apiDocItem: types.ApiDocItem = {
    annotation,
    kind: apiItem.kind,
    name: apiItem.displayName,
    apiItem,
  };

  const visitFn = visitor[apiItem.kind as CanVisitKind];
  if (visitFn) {
    visitFn(apiDocItem);
  }

  traverseMembers(apiItem.members, visitor, docNodeFormatter);

  const after = visitor[getAfterKind(apiItem.kind as CanVisitKind)];
  if (after) {
    after(apiDocItem);
  }
}

function traverseMembers(
  members: readonly model.ApiItem[],
  visitor: Visitor,
  docNodeFormatter: DocNodeFormatter
): void {
  members.forEach((apiItem) => {
    traverseCallback(apiItem, visitor, docNodeFormatter);
  });
}

function getAfterKind(kind: CanVisitKind): AfterVisitKind {
  return `After${kind}` as const;
}

function createVisitor(docItems: types.ApiDocItem[]): Visitor {
  const classApiDocItemStack: types.ApiDocItem[] = [];
  const namespaceApiDocItemStack: types.ApiDocItem[] = [];

  return {
    [model.ApiItemKind.Function](apiDocItem) {
      if (utils.peekArray(namespaceApiDocItemStack) !== undefined) {
        pushIntoProperties(namespaceApiDocItemStack, apiDocItem);
      } else {
        docItems.push(apiDocItem);
      }
    },
    [model.ApiItemKind.Interface](apiDocItem) {
      if (utils.peekArray(namespaceApiDocItemStack) !== undefined) {
        pushIntoProperties(namespaceApiDocItemStack, apiDocItem);
      } else {
        docItems.push(apiDocItem);
      }
    },
    [model.ApiItemKind.TypeAlias](apiDocItem) {
      if (utils.peekArray(namespaceApiDocItemStack) !== undefined) {
        pushIntoProperties(namespaceApiDocItemStack, apiDocItem);
      } else {
        docItems.push(apiDocItem);
      }
    },
    [model.ApiItemKind.Class](apiDocItem) {
      classApiDocItemStack.push(apiDocItem);
      if (utils.peekArray(namespaceApiDocItemStack) !== undefined) {
        pushIntoProperties(namespaceApiDocItemStack, apiDocItem);
      } else {
        docItems.push(apiDocItem);
      }
    },
    [getAfterKind(model.ApiItemKind.Class)]() {
      classApiDocItemStack.pop();
    },
    [model.ApiItemKind.Property](apiDocItem) {
      pushIntoProperties(classApiDocItemStack, apiDocItem);
    },
    [model.ApiItemKind.Method](apiDocItem) {
      pushIntoProperties(classApiDocItemStack, apiDocItem);
    },
    [model.ApiItemKind.Constructor](apiDocItem) {
      pushIntoProperties(classApiDocItemStack, apiDocItem);
    },

    [model.ApiItemKind.Namespace](apiDocItem) {
      namespaceApiDocItemStack.push(apiDocItem);
      docItems.push(apiDocItem);
    },
    [getAfterKind(model.ApiItemKind.Namespace)]() {
      namespaceApiDocItemStack.pop();
    },
  };
}

function pushIntoProperties(
  parentStack: types.ApiDocItem[],
  apiDocItem: types.ApiDocItem
): void {
  const parent = utils.peekArray(parentStack);
  if (parent !== undefined) {
    if (parent.properties === undefined) {
      parent.properties = [];
    }

    parent.properties.push(apiDocItem);
  }
}
