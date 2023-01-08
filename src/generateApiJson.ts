import { dirname } from "path";
import tmp from "tmp";
import * as utils from "./utils";
import { logger } from "./logger";
import {
  Extractor,
  ExtractorConfig,
  IConfigFile,
} from "@microsoft/api-extractor";
import { TSDocConfigFile } from "@microsoft/tsdoc-config";

interface Options {
  entry: string;
  silent?: boolean;
}

/**
 * Generate a temp api.json file.
 * @param options
 * @returns
 * @see https://api-extractor.com/pages/configs/api-extractor_json/
 */
export async function generateApiJson(options: Options): Promise<{
  apiJsonFilePath: string;
  clean: () => void;
}> {
  const { entry, silent } = options;
  utils.checkDtsFiles([entry]);

  logger.silent(silent);

  const { name: apiJsonFilePath, removeCallback } = tmp.fileSync({
    postfix: ".json",
  });

  const [packageJsonPath, tsconfigJsonPath, tsdocJsonPath] =
    await utils.findUpFiles(["package.json", "tsconfig.json", "tsdoc.json"], {
      cwd: dirname(entry),
    });

  logger.usingFile(packageJsonPath, "package.json");
  logger.usingFile(tsconfigJsonPath, "tscofig.json");
  logger.usingFile(tsdocJsonPath, "tsdoc.json", false);

  const extractorConfig = ExtractorConfig.prepare({
    configObject: await resolveExtractorConfig({
      dtsEntry: entry,
      apiJsonFilePath,
      tsconfigJsonPath: tsconfigJsonPath!,
      packageJsonPath: packageJsonPath!,
    }),
    configObjectFullPath: undefined,
    packageJsonFullPath: packageJsonPath,
    tsdocConfigFile: tsdocJsonPath
      ? TSDocConfigFile.loadFile(tsdocJsonPath)
      : undefined,
  });

  Extractor.invoke(extractorConfig, {
    showDiagnostics: false,
    messageCallback() {},
  });

  return { apiJsonFilePath, clean: removeCallback };
}

async function resolveExtractorConfig({
  dtsEntry,
  apiJsonFilePath,
  tsconfigJsonPath,
  packageJsonPath,
}: {
  dtsEntry: string;
  apiJsonFilePath: string;
  tsconfigJsonPath: string;
  packageJsonPath: string;
}): Promise<IConfigFile> {
  return {
    mainEntryPointFilePath: dtsEntry,
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
    projectFolder: dirname(packageJsonPath),
    compiler: {
      tsconfigFilePath: tsconfigJsonPath,
    },
  };
}
