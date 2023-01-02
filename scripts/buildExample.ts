import { execaCommand } from "execa";
import * as fileCache from "file-entry-cache";
import fg from "fast-glob";
import { resolve } from "path";

async function main() {
  const exampleName = process.argv[2];
  if (!exampleName) {
    console.log("Please specify the example name.");
    process.exit(1);
  }

  const exampleDir = resolve(__dirname, "..", `./examples/${exampleName}`);
  let command: string;

  console.log("Building declaration files.");
  const cache = fileCache.create(`${exampleName}DtsCache`, "./temp/cache");
  const dtsFiles = await fg(["**/*.ts"], {
    cwd: resolve(exampleDir, "src"),
    absolute: true,
  });
  const changedFiles = cache.getUpdatedFiles(dtsFiles);
  if (changedFiles.length > 0) {
    command = `tsc ./examples/${exampleName}/src/index.ts --emitDeclarationOnly -d --outDir ./examples/${exampleName}/dist`;
    await execaCommand(command, {
      stdout: "inherit",
    });
    cache.reconcile();
  } else {
    console.log(`Cache matched, skip build declaration files.`);
  }

  command = `simple-tsdoc emit ./examples/${exampleName}/dist/index.d.ts -o ./examples/${exampleName}/out.en.md  --report -l en`;
  await execaCommand(command, {
    stdout: "inherit",
  });

  command = `simple-tsdoc emit ./examples/${exampleName}/dist/index.d.ts -o ./examples/${exampleName}/out.ch.md  --report -l ch`;
  await execaCommand(command, {
    stdout: "inherit",
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
