import * as model from "@microsoft/api-extractor-model";
import { ApiDocItem } from "../types";
import { traversePackage } from "./helpers";
import { createVisitor } from "./visitor";

export function parse(apiJsonFilePath: string) {
  const apiModel: model.ApiModel = new model.ApiModel();
  const apiPackage: model.ApiPackage = apiModel.loadPackage(apiJsonFilePath);

  const docItems: ApiDocItem[] = [];
  const visitor = createVisitor(docItems);
  traversePackage(apiPackage, visitor);

  return docItems;
}
