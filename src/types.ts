import * as model from "@microsoft/api-extractor-model";
import * as tsdoc from "@microsoft/tsdoc";
import { I18n } from "i18n";

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
  deprecated: string | false;
  description?: string;
  params?: Array<{ name: string; description: string }>;
  tags: Array<{
    name: string;
    description: string;
  }>;
  modifierTags?: string[];
  returns?: string;
}

export interface Renderer {
  render: () => string;
  apiDocItem: ApiDocItem;
}

export interface RenderActionApi {
  appendMd: (content: string) => void;
  payload: Annotation["tags"][number] | string | null;
  annotation: Annotation;
  apiDocItem: ApiDocItem;
  i18n: I18n;
}
export type RenderAction = (api: RenderActionApi) => any;

export interface CustomTag {
  property: tsdoc.ITSDocTagDefinitionParameters;
  renderAction?: RenderAction;
}
