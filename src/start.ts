import { cac } from "cac";
import { version, bin } from "../package.json";
import * as os from "os";
import { tsdoc, TsDocOptions } from "./";

function errorHandler(e: any) {
  console.error(`${os.EOL} + ${e.message || e} + ${os.EOL}`);
  cli.outputHelp();
  process.exit(1);
}
process.addListener("uncaughtException", errorHandler);
process.addListener("unhandledRejection", errorHandler);

const name = Object.keys(bin)[0];
const cli = cac(name).version(version);

cli
  //   .option("-i, --input", "Specify The d.ts file entry.")
  .option("-o, --output [output]", "Specify The output path.", {
    default: "out.md",
  })
  .option("-s, --silent", "Silent mode.", {
    default: false,
  })
  .option("-m, --multiple", "Emit a markdown file for per API.", {
    default: false,
  })
  .option("-b, --banner [banner]", "Add banner for output markdown file.", {
    default: "",
  })
  .option("-f, --footer [footer]", "Add footer for output markdown file.", {
    default: "",
  })
  .command("[...input]", "Specify The d.ts file entries.")
  .example(`${name} ./dist/index.d.ts -o ./docs/api.md -b '# simple-tsdoc'`)
  .example(`${name} ./dist/index.d.ts -s -m -o ./docs`)
  .action(async (input: string[], options: TsDocOptions) => {
    await tsdoc({
      ...options,
      input,
    });
  });

cli.on("command:*", () => {
  throw new Error("Invalid command: " + cli.args.join(" "));
});

cli.help();
cli.parse();
