import * as types from "../types";
import * as renderActions from "./renderApiDomItem";
import i18n from "i18n";
import { resolve } from "path";

export const locales = ["en", "ch"];
i18n.configure({
  locales,
  directory: resolve(__dirname, "..", "locales"),
});

export type Lang = typeof locales[number];

export interface RenderOptions {
  /**
   * The title level of per function.
   *
   * If set to 3, then a function title will be prefixed by '###' in generated markdown content.
   *
   * @default 3
   */
  functionTitleLevel?: number;

  /**
   * Set the language of rendering.
   * @default 'en'
   */
  lang: Lang;
}

export function render(
  apiDocItems: types.ApiDocItem[],
  options: RenderOptions = {
    lang: "en",
  }
) {
  const fullOptions: Required<RenderOptions> = Object.assign(
    {
      functionTitleLevel: 3,
      lang: "en",
    },
    options
  );

  i18n.setLocale(fullOptions.lang);

  const renderers: types.Renderer[] = [];

  apiDocItems.forEach((apiDocItem) =>
    renderActions.renderApiDomItem(
      apiDocItem,
      renderers,
      fullOptions.functionTitleLevel,
      i18n
    )
  );

  return renderers;
}
