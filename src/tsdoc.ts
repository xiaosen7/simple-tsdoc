import { emit, EmitOptions } from "./emit";
import { generateApiJson } from "./generateApiJson";
import { logger } from "./logger";
import { DocNodeFormatter } from "./models/DocNodeFormatter";
import { Renderer } from "./models/Renderer";
import { IRenderingContext } from "./models/IRenderingContext";
import { getApiDocItems } from "./getApiDocItems";
import { ApiDocItem, ConstructorType } from "./types";
import { checkDtsFiles } from "./utils";

export interface TsDocOptions extends EmitOptions {
  input: string[];
  silent?: boolean;
  output: string;

  /**
   * The context to draw markdown content.
   *
   * @defaultValue `IRenderingContext`
   */
  RenderingContextConstructor?: ConstructorType<typeof IRenderingContext>;
}

/**
 * Emit markdown file by input d.ts files.
 * @param options
 */

export async function tsdoc(options: TsDocOptions) {
  const {
    input,
    silent,
    output,
    banner,
    footer,
    multiple,
    RenderingContextConstructor = IRenderingContext,
  } = options;

  if (input.length === 0) {
    throw new Error("At least specify one input file.");
  }

  checkDtsFiles(input);

  logger.silent(silent);

  const allApiDocItems: ApiDocItem[] = [];
  const tasks = input.map(async (entry) => {
    const result = await generateApiJson({
      entry,
      silent,
    });

    const apiDocItems = getApiDocItems(result.apiJsonFilePath, {
      docNodeFormatter: new DocNodeFormatter(),
    });

    result.clean();

    allApiDocItems.push(...apiDocItems);
  });
  await Promise.allSettled(tasks);

  const renderer = new Renderer(allApiDocItems, RenderingContextConstructor);

  await emit(output, renderer.render(), {
    banner,
    footer,
    multiple,
  });
  logger.success(`Generate ${output} successfully.`);
}