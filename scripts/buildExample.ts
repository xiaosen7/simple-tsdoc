import { execaCommand } from "execa";
import * as fileCache from "file-entry-cache";
import fg from "fast-glob";
import { dirname, resolve } from "path";
import { existsSync } from "fs";

const cacheDir = resolve(__dirname, "..", "temp/cache");

function getCacheFile(name: string) {
  return resolve(cacheDir, name);
}

async function getDistCache() {
  // return fileCache.create("distCache");
  if (existsSync(getCacheFile("distCache"))) {
    return fileCache.createFromFile(getCacheFile("distCache"));
  } else {
    return fileCache.create("distCache", cacheDir);
  }
}

function getExampleDir(exampleName: string) {
  return resolve(__dirname, "..", `./examples/${exampleName}`);
}

function getExampleFiles(exampleName: string) {
  return fg(["**/*"], {
    cwd: getExampleDir(exampleName),
    absolute: true,
  });
}

async function getExampleCache(exampleName: string) {
  // return fileCache.create(exampleName);
  if (existsSync(getCacheFile(exampleName))) {
    return fileCache.createFromFile(getCacheFile(exampleName));
  } else {
    return fileCache.create(exampleName, cacheDir);
  }
}

async function main() {
  const exampleName = process.argv[2];
  if (!exampleName) {
    console.log("Please specify the example name.");
    process.exit(1);
  }

  const distCache = await getDistCache();
  const exampleCache = await getExampleCache(exampleName);

  const exampleFiles = await getExampleFiles(exampleName);

  const distChanged =
    distCache.getUpdatedFiles(["./dist/start.mjs", __filename]).length > 0;
  const exampleChanged = exampleCache.getUpdatedFiles(exampleFiles).length > 0;

  if (!distChanged && !exampleChanged) {
    console.log(`Example ${exampleName} Cache matched, skip emit files.`);
    process.exit(0);
  }

  // Get dts entry.
  let dtsEntry = `./examples/${exampleName}/src/index.d.ts`;
  if (!existsSync(dtsEntry)) {
    const tsEntry = `./examples/${exampleName}/src/index.ts`;

    console.log(`Building declaration files for ${tsEntry}.`);
    const command = `tsc ${tsEntry} --emitDeclarationOnly -d --outDir ./examples/${exampleName}/dts`;
    await execaCommand(command, {
      stdout: "inherit",
      reject: false,
    });

    dtsEntry = `./examples/${exampleName}/dts/index.d.ts`;
  }

  // Emit
  const outDir = `./examples/${exampleName}/out`;
  const commands = [
    `rimraf ${outDir}`,
    `node ./dist/start.mjs emit ${dtsEntry} -o ${outDir}/emit.en.md  --report -l en`,
    `node ./dist/start.mjs emit ${dtsEntry} -o ${outDir}/emit.ch.md  --report -l ch`,
    `node ./dist/start.mjs emitM ${dtsEntry} -o ${outDir}/emitM`,
    `node ./dist/start.mjs emitM ${dtsEntry} -o ${outDir}/emitM-withRootDir -r ${dirname(
      dtsEntry
    )}`,
    `node ./dist/start.mjs emitM ${dtsEntry} -o ${outDir}/emitM-withRootDir-withAdditionalDir -r ${dirname(
      dtsEntry
    )} -a __docs__`,
  ];
  const tasks = commands.map((x) =>
    execaCommand(x, {
      stdout: "inherit",
    })
  );

  await Promise.all(tasks);

  distCache.reconcile();
  exampleCache.reconcile();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
