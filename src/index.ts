import {
  Extractor,
  ExtractorConfig,
  IConfigFile,
} from "@microsoft/api-extractor";
import { TSDocConfigFile } from "@microsoft/tsdoc-config";
import { copyFile, rm, writeFile } from "fs/promises";
import { dirname, resolve } from "path";
import { parse } from "./apiJsonParser";
import { Lang, render } from "./apiDocItemsRenderer";
import * as emitters from "./mdFilesEmitter";
import { Renderer } from "./types";
import { existsSync } from "fs";
import { getId, resolveAbsolute } from "./utils";
import { ensureDir } from "./mdFilesEmitter/helpers";
import { findUp } from "find-up";

async function resolveExtractorConfig(
  mainEntryPointFilePath: string,
  tempDir: string,
  tsconfigFile: string,
  packageJsonFile: string
): Promise<IConfigFile> {
  const apiJsonFilePath = resolve(tempDir, "api.json");

  return {
    mainEntryPointFilePath,
    apiReport: {
      enabled: false,
      reportFileName: "report.api.md",
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
    projectFolder: dirname(packageJsonFile),
    compiler: {
      tsconfigFilePath: tsconfigFile,
    },
  };
}

function resolveCongFile() {}

async function generateApiJson(mainEntryPointFilePath: string) {
  const id = getId();
  const tempDir = resolve(`temp${id}`);
  await ensureDir(tempDir);

  const apiJsonFilePath = resolve(tempDir, "api.json");

  const tsdocConfigFile = await findUp(["tsdoc.json"], {
    cwd: mainEntryPointFilePath,
  });
  if (tsdocConfigFile) {
    console.log(`Using tsdoc.json file: ${tsdocConfigFile}.`);
  }

  const tsconfigFile = await findUp(["tsconfig.json"], {
    cwd: mainEntryPointFilePath,
  });
  if (!tsconfigFile) {
    throw new Error(`Can't find tsconfig.json file.`);
  }

  const packageJsonFile = await findUp(["package.json"], {
    cwd: dirname(mainEntryPointFilePath),
  });
  if (!packageJsonFile) {
    throw new Error(`Can't find package.json file.`);
  }

  const extractorConfig = ExtractorConfig.prepare({
    configObject: await resolveExtractorConfig(
      mainEntryPointFilePath,
      tempDir,
      tsconfigFile,
      packageJsonFile
    ),
    configObjectFullPath: undefined,
    packageJsonFullPath: packageJsonFile,
    tsdocConfigFile: tsdocConfigFile
      ? TSDocConfigFile.loadFile(tsdocConfigFile)
      : undefined,
  });

  Extractor.invoke(extractorConfig, {
    showDiagnostics: false,
  });

  return [apiJsonFilePath, tempDir];
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
    if (!existsSync(resolveAbsolute(file))) {
      throw new Error(`The input file ${file} is not exists.`);
    }

    if (!/\.d\.[mc]?ts$/.test(file)) {
      throw new Error(
        `The only supported extensions are '.d.ts'、'.d.cts'、'.d.mts'.`
      );
    }
  });

  // Build renderers.
  const renderers: Renderer[] = [];
  const tasks = files
    .map((x) => resolveAbsolute(x))
    .map(async (file) => {
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
