import { generateApiJson } from "./generateApiJson";
import { getApiDocItems } from "./getApiDocItems";
import { DocNodeFormatter } from "./models/DocNodeFormatter";
import { Renderer } from "./models/Renderer";
import { RenderingContext } from "./models/RenderingContext";
import { ConstructorType } from "./types";

interface Options {
  RenderingContextConstructor?: ConstructorType<typeof RenderingContext>;
  DocNodeFormatterConstructor?: ConstructorType<typeof DocNodeFormatter>;
}
/**
 * Get the `ApiToMarkdownInfoMap` by the entry d.ts file.
 * @param entry
 * @param options
 * @returns
 */
export async function getMarkdownInfoMap(entry: string, options: Options = {}) {
  const {
    RenderingContextConstructor = RenderingContext,
    DocNodeFormatterConstructor = DocNodeFormatter,
  } = options;

  const { clean, apiJsonFilePath } = await generateApiJson({
    entry,
    silent: true,
  });

  const apiDocItems = getApiDocItems(apiJsonFilePath, {
    docNodeFormatter: new DocNodeFormatterConstructor(),
  });

  clean();

  const renderer = new Renderer(apiDocItems, RenderingContextConstructor);

  return renderer.render();
}
