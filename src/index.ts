import { Extractor, ExtractorConfig } from "@microsoft/api-extractor";
import { writeFile } from "fs/promises";
import { resolve } from "path";
import { parse } from "./apiJsonParser";
import { Lang, render, RenderOptions } from "./apiDocItemsRenderer";
import * as emitters from "./mdFilesEmitter";
import { Renderer } from "./types";
import { existsSync } from "fs";

function createTempExtractorConfig(
  mainEntryPointFilePath: string,
  apiJsonFilePath: string
) {
  return {
    mainEntryPointFilePath,

    bundledPackages: [],

    compiler: {},

    apiReport: {
      enabled: false,
    },

    docModel: {
      enabled: true,
      apiJsonFilePath,
    },

    dtsRollup: {
      enabled: false,
    },

    tsdocMetadata: {
      enabled: false,
    },

    messages: {
      compilerMessageReporting: {
        default: {
          logLevel: "none",
        },
      },

      extractorMessageReporting: {
        default: {
          logLevel: "none",
        },
      },
      tsdocMessageReporting: {
        default: {
          logLevel: "none",
        },
      },
    },
  };
}

async function generateApiJson(mainEntryPointFilePath: string) {
  const tempDir = resolve(__dirname, "..", "temp");
  const apiJsonPath = resolve(tempDir, "api.json");
  const apiExtractorJsonPath = resolve(tempDir, "api-extractor.json");

  const config = createTempExtractorConfig(mainEntryPointFilePath, apiJsonPath);
  await writeFile(apiExtractorJsonPath, JSON.stringify(config, null, 2));

  const extractorConfig =
    ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);

  Extractor.invoke(extractorConfig);

  return apiJsonPath;
}

const defaultEmitter = (renderers: Renderer[]) =>
  emitters.emit(renderers, {
    output: resolve("./out.md"),
  });

export async function dtsDoc({
  mainEntryPointFilePath,
  lang = "en",
  emitter = defaultEmitter,
}: {
  mainEntryPointFilePath: string;
  lang?: Lang;
  emitter?: (renderers: Renderer[]) => Promise<void>;
}) {
  if (!existsSync(mainEntryPointFilePath)) {
    throw new Error(`The input file ${mainEntryPointFilePath} is not exists.`);
  }

  if (!/\.d\.[mc]?ts$/.test(mainEntryPointFilePath)) {
    throw new Error(
      `The only supported extensions are '.d.ts', '.d.cts' '.d.mts'`
    );
  }

  const apiJsonPath = await generateApiJson(mainEntryPointFilePath);

  const apiDocItems = parse(apiJsonPath);

  const renderers = render(apiDocItems, {
    lang,
  });

  await emitter(renderers);
}
