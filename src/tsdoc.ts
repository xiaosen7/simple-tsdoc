import { emit, EmitOptions } from "./emit";
import { generateApiJson, GenerateApiJsonOptions } from "./generateApiJson";
import { logger } from "./logger";
import { Renderer, RendererOptions } from "./models/Renderer";
import { getApiDocItems, GetApiDocItemsOptions } from "./getApiDocItems";
import { ApiDocItem } from "./types";
import { checkDtsFiles } from "./utils";

export interface TsdocOptions
  extends Omit<
    GenerateApiJsonOptions &
      GetApiDocItemsOptions &
      RendererOptions &
      EmitOptions,
    "entry" | "apiInfoMap" | "apiDocItems" | "apiJsonFilePath"
  > {
  input: string[];
}

// export interface TsDocOptions extends EmitOptions {
//   input: string[];
//   silent?: boolean;
//   output: string;

//   /**
//    * The context to draw markdown content.
//    *
//    * @default `IRenderingContext`
//    */
//   RenderingContextConstructor?: ConstructorType<typeof IRenderingContext>;
// }

/**
 * Emit markdown file by input d.ts files.
 * @param options
 */
export async function tsdoc(options: TsdocOptions) {
  const { input, silent, output } = options;

  if (input.length === 0) {
    throw new Error("At least specify one input file.");
  }

  checkDtsFiles(input);

  logger.silent(silent);

  const allApiDocItems: ApiDocItem[] = [];
  const tasks = input.map(async (entry) => {
    const { apiJsonFilePath, clean } = await generateApiJson({
      entry,
      ...options,
    });

    const apiDocItems = getApiDocItems({ apiJsonFilePath, ...options });

    clean();

    allApiDocItems.push(...apiDocItems);
  });
  await Promise.allSettled(tasks);

  const renderer = new Renderer({
    apiDocItems: allApiDocItems,
    ...options,
  });

  await emit({
    apiInfoMap: renderer.render(),
    ...options,
  });
  logger.success(`Generate ${output} successfully.`);
}
