import { generateApiJson, GenerateApiJsonOptions } from "./generateApiJson";
import { getApiDocItems, GetApiDocItemsOptions } from "./getApiDocItems";
import { Renderer, RendererOptions } from "./models/Renderer";

export type GetMarkdownInfoMapOptions = Omit<
  GenerateApiJsonOptions & GetApiDocItemsOptions & RendererOptions,
  "apiJsonFilePath" | "apiDocItems"
>;

/**
 * Get the `ApiToMarkdownInfoMap` by the entry d.ts file.
 * @param entry
 * @param options
 * @returns
 */
export async function getMarkdownInfoMap(options: GetMarkdownInfoMapOptions) {
  const { clean, apiJsonFilePath } = await generateApiJson(options);

  const apiDocItems = getApiDocItems({
    ...options,
    apiJsonFilePath,
  });

  clean();

  const renderer = new Renderer({ apiDocItems, ...options });

  return renderer.render();
}
