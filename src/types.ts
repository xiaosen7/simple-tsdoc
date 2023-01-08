import * as model from "@microsoft/api-extractor-model";
import { StandardTags } from "@microsoft/tsdoc";

export type ConstructorType<T extends new (...args: any[]) => any> = new (
  ...args: ConstructorParameters<T>
) => InstanceType<T>;

export interface ApiDocItem {
  name: string;
  annotation: Annotation;
  kind: model.ApiItemKind;
  /**
   * properties of this ApiDocItem
   *
   * when this is a class kind ApiDocItem then it will have value
   */
  properties?: ApiDocItem[];
  apiItem: model.ApiDeclaredItem;
}

export interface Annotation {
  description: string;
  params: Array<{
    name: string;
    description: string;
    type?: string;
    isOptional?: boolean;
  }>;
  returns?: string;
  tagNameToDescMap: Map<StandardTagName, undefined | string>;
  signature: string;
}

export type ApiToMarkdownInfoMap = Map<
  string,
  {
    md: string;
    apiDocItem: ApiDocItem;
  }
>;

export type StandardTagName = `@${keyof typeof StandardTags}`;
export type CustomTagName = `@${string}`;
