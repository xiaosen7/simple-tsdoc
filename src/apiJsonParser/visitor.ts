import * as helpers from "./helpers";
import * as model from "@microsoft/api-extractor-model";
import { ApiDocItem } from "../types";
import * as utils from "../utils";

export function createVisitor(docItems: ApiDocItem[]): helpers.Visitor {
  const classApiDocItemStack: ApiDocItem[] = [];
  const namespaceApiDocItemStack: ApiDocItem[] = [];

  return {
    [model.ApiItemKind.Function](apiDocItem) {
      if (utils.peek(namespaceApiDocItemStack)) {
        pushIntoProperties(namespaceApiDocItemStack, apiDocItem);
      } else {
        docItems.push(apiDocItem);
      }
    },
    [model.ApiItemKind.Class](apiDocItem) {
      classApiDocItemStack.push(apiDocItem);
      if (utils.peek(namespaceApiDocItemStack)) {
        pushIntoProperties(namespaceApiDocItemStack, apiDocItem);
      } else {
        docItems.push(apiDocItem);
      }
    },
    [helpers.getAfterKind(model.ApiItemKind.Class)]() {
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
    [helpers.getAfterKind(model.ApiItemKind.Namespace)]() {
      namespaceApiDocItemStack.pop();
    },
  };
}

function pushIntoProperties(parentStack: ApiDocItem[], apiDocItem: ApiDocItem) {
  const parent = utils.peek(parentStack);
  if (parent) {
    if (!parent.properties) {
      parent.properties = [];
    }

    parent.properties.push(apiDocItem);
  }
}
