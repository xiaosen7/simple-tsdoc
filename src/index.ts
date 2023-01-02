import { Extractor, ExtractorConfig } from "@microsoft/api-extractor";
import { rm, rmdir, writeFile } from "fs/promises";
import { resolve } from "path";
import { parse } from "./apiJsonParser";
import { Lang, render } from "./apiDocItemsRenderer";
import * as emitters from "./mdFilesEmitter";
import { Renderer } from "./types";
import { existsSync } from "fs";
import { ensureDir } from "./mdFilesEmitter/helpers";
import { getId, resolveAbsolute } from "./utils";

function createTempExtractorConfig(
  mainEntryPointFilePath: string,
  apiJsonFilePath: string
) {
  return {
    mainEntryPointFilePath,
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
  const id = getId();
  const tempDir = resolve(`temp${id}`);
  await ensureDir(tempDir);

  const apiJsonPath = resolve(tempDir, "api.json");
  const apiExtractorJsonPath = resolve(tempDir, "api-extractor.json");

  const config = createTempExtractorConfig(mainEntryPointFilePath, apiJsonPath);
  await writeFile(apiExtractorJsonPath, JSON.stringify(config, null, 2));

  const extractorConfig =
    ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);

  Extractor.invoke(extractorConfig);

  return [apiJsonPath, tempDir];
}

const defaultEmitter = (renderers: Renderer[]) =>
  emitters.emit(renderers, {
    output: resolve("./out.md"),
  });

export async function dtsDoc({
  files,
  lang = "en",
  emitter = defaultEmitter,
}: {
  files: string[];
  lang?: Lang;
  emitter?: (renderers: Renderer[]) => Promise<void>;
}) {
  // Check files.
  files.forEach((file) => {
    if (!existsSync(file)) {
      throw new Error(`The input file ${files} is not exists.`);
    }

    if (!/\.d\.[mc]?ts$/.test(file)) {
      throw new Error(
        `The only supported extensions are '.d.ts', '.d.cts' '.d.mts'`
      );
    }
  });

  // Build renderers.
  const renderers: Renderer[] = [];
  const tasks = files.map(async (file) => {
    const [apiJsonPath, apiJsonTempDir] = await generateApiJson(
      resolveAbsolute(file)
    );
    const apiDocItems = parse(apiJsonPath);
    await rm(apiJsonTempDir, { recursive: true });
    renderers.push(
      ...render(apiDocItems, {
        lang,
      })
    );
  });
  await Promise.all(tasks);

  await emitter(renderers);
}
