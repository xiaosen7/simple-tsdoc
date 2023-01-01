import * as model from "@microsoft/api-extractor-model";
import * as types from "../types";
import * as tsdoc from "@microsoft/tsdoc";
import * as commentParser from "../commentParser";

const canVisitKinds = [
  model.ApiItemKind.Class,
  model.ApiItemKind.Function,
  model.ApiItemKind.Method,
  model.ApiItemKind.Property,
  model.ApiItemKind.Constructor,
  model.ApiItemKind.Namespace,
] as const;
type CanVisitKind = typeof canVisitKinds[number];
type AfterVisitKind = `After${CanVisitKind}`;
export type Visitor = Partial<
  Record<CanVisitKind | AfterVisitKind, (apiDocItem: types.ApiDocItem) => any>
>;

export function getAnnotation(apiItem: model.ApiDeclaredItem) {
  const tsdocComment: tsdoc.DocComment | undefined = apiItem.tsdocComment;

  let annotation = defaultAnnotation;
  if (tsdocComment) {
    annotation = commentParser.parse(tsdocComment.emitAsTsdoc());
  }

  return annotation;
}

export function traversePackage(
  apiPackage: model.ApiPackage,
  visitor: Visitor
) {
  traverseMembers(apiPackage.members, visitor);
}

function traverseCallback(apiItem: model.ApiItem, visitor: Visitor) {
  let apiDocItem!: types.ApiDocItem;
  let kind!: model.ApiItemKind;
  let canVisit = false;

  if (apiItem instanceof model.ApiDeclaredItem) {
    const annotation = getAnnotation(apiItem);
    kind = getKind(apiItem, annotation);

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
    fn && fn(apiDocItem);
  }

  if (apiItem.members) {
    traverseMembers(apiItem.members, visitor);
  }

  if (canVisit) {
    const after = visitor[getAfterKind(kind as CanVisitKind)];
    after && after(apiDocItem);
  }
}

function traverseMembers(members: readonly model.ApiItem[], visitor: Visitor) {
  if (members?.length) {
    members.forEach((apiItem) => traverseCallback(apiItem, visitor));
  }
}
export const defaultAnnotation: types.Annotation = {
  tags: [],
  deprecated: false,
};

export function isFunctionKind(
  apiItem: model.ApiItem,
  annotation: types.Annotation
) {
  return (
    apiItem.kind === model.ApiItemKind.Function ||
    (apiItem.kind === model.ApiItemKind.Variable &&
      annotation.modifierTags?.includes("@function"))
  );
}

export function isClassKind(
  apiItem: model.ApiItem,
  annotation: types.Annotation
) {
  return (
    apiItem.kind === model.ApiItemKind.Class ||
    (apiItem.kind === model.ApiItemKind.Variable &&
      annotation.modifierTags?.includes("@constructor"))
  );
}

export function getKind(
  apiItem: model.ApiItem,
  annotation: types.Annotation
): model.ApiItemKind {
  if (isFunctionKind(apiItem, annotation)) {
    return model.ApiItemKind.Function;
  }

  if (isClassKind(apiItem, annotation)) {
    return model.ApiItemKind.Class;
  }

  return apiItem.kind;
}

export function getAfterKind(kind: CanVisitKind): AfterVisitKind {
  return `After${kind}` as const;
}
