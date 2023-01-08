import * as model from "@microsoft/api-extractor-model";
import * as types from "./types";
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
  // model.ApiItemKind.Interface,
  // model.ApiItemKind.TypeAlias
] as const;
type CanVisitKind = typeof canVisitKinds[number];
type AfterVisitKind = `After${CanVisitKind}`;
type Visitor = Partial<
  Record<CanVisitKind | AfterVisitKind, (apiDocItem: types.ApiDocItem) => any>
>;

function getAnnotation(
  apiItem: model.ApiDeclaredItem,
  docNodeFormatter: DocNodeFormatter
): types.Annotation {
  const tsdocComment: tsdoc.DocComment | undefined = apiItem.tsdocComment;

  const annotation: types.Annotation = {
    tagNameToDescMap: new Map(),
    description: "",
    params: [],
  };

  // get params
  if (
    apiItem instanceof model.ApiFunction ||
    apiItem instanceof model.ApiMethod
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
  let apiDocItem!: types.ApiDocItem;
  let kind!: model.ApiItemKind;
  let canVisit = false;

  if (apiItem instanceof model.ApiDeclaredItem) {
    const annotation = getAnnotation(apiItem, docNodeFormatter);
    kind = getKind(apiItem);

    if (canVisitKinds.includes(kind as any)) {
      apiDocItem = {
        annotation,
        kind,
        name: apiItem.displayName,
        apiItem,
      };

      canVisit = true;
    }
  }

  if (canVisit) {
    const fn = visitor[kind as CanVisitKind];
    if (fn != null) {
      fn(apiDocItem);
    }
  }

  traverseMembers(apiItem.members, visitor, docNodeFormatter);

  if (canVisit) {
    const after = visitor[getAfterKind(kind as CanVisitKind)];
    if (after != null) {
      after(apiDocItem);
    }
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

function isFunctionKind(apiItem: model.ApiItem): boolean {
  return !!(apiItem.kind === model.ApiItemKind.Function);
}

function isClassKind(apiItem: model.ApiItem): Boolean {
  return !!(apiItem.kind === model.ApiItemKind.Class);
}

function getKind(apiItem: model.ApiItem): model.ApiItemKind {
  if (isFunctionKind(apiItem)) {
    return model.ApiItemKind.Function;
  }

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (isClassKind(apiItem)) {
    return model.ApiItemKind.Class;
  }

  return apiItem.kind;
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

interface GetApiDocItemsOptions {
  docNodeFormatter: DocNodeFormatter;
}

/**
 * Analyze the api.json file to get {@link types.ApiDocItem}.
 * @param apiJsonPath
 * @param options
 * @returns
 */
export function getApiDocItems(
  apiJsonPath: string,
  options: GetApiDocItemsOptions
): types.ApiDocItem[] {
  const apiModel: model.ApiModel = new model.ApiModel();
  const apiPackage: model.ApiPackage = apiModel.loadPackage(apiJsonPath);

  const docItems: types.ApiDocItem[] = [];
  const visitor = createVisitor(docItems);
  traversePackage(apiPackage, visitor, options.docNodeFormatter);

  return docItems;
}
