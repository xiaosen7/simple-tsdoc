import { cac } from "cac";
import { version, bin } from "../package.json";
import { dtsDoc } from "./";
import * as emitters from "./mdFilesEmitter";
import * as os from "os";
import { Renderer } from "./types";
import { Lang, locales } from "./apiDocItemsRenderer";

process.addListener("uncaughtException", errorHandler);
process.addListener("unhandledRejection", errorHandler);

const name = Object.keys(bin)[0];
const cli = cac(name).version(version);

cli
  .option(
    "-l,--lang [lang]",
    `Set the language of emitting markdown files, support value: ${locales.join(
      "、"
    )}.`,
    {
      default: "en",
    }
  )
  .option("--report [report]", "Emit a report json file additionally.");

cli
  .command("emit [...files]", "Emit files into one markdown file.")
  .option("-o, --output [output]", "Specify the output file.", {
    default: "./out.md",
  })
  .example(
    `${name} emit ./example/types/utils/index.d.ts  ./example/types/components/index.d.ts -o ./temp/out.md`
  )
  .action((files: string[], options: emitters.EmitOptions & { lang: Lang }) => {
    action(files, options, emitters.emit, options.lang);
  });

cli
  .command("emitM [...files]", "Emit files into multiple markdown files.")
  .option("-o, --output [output]", "Specify the output directory.", {
    default: "./out",
  })
  .example(
    `${name} emitM ./example/types/utils/index.d.ts  ./example/types/components/index.d.ts -o ./temp/out -r ./example/types/`
  )
  .option(
    "-r, --rootDir [rootDir]",
    "Specify the root directory of these *.d.ts files. This property will impact output directories structure. If is undefined, then place every *.md files into the output. Else place *.md files into the folder in output where *.d.ts folder relate rootDir."
  )
  .option(
    "-a, --anotherFolder [anotherFolder]",
    "The name of an another folder to create in ourDir to place *.md files."
  )
  .action(
    (
      files: string[],
      options: emitters.RenderMultiplyOptions & { lang: Lang }
    ) => {
      action(files, options, emitters.emitMultiply, options.lang);
    }
  );

cli.on("command:*", () => {
  throw new Error("Invalid command: " + cli.args.join(" "));
});

cli.help();
cli.parse();

async function action<T extends typeof emitters[keyof typeof emitters]>(
  files: string[],
  options: Parameters<T>[1],
  emitFn: T,
  lang: Lang
) {
  if (files.length === 0) {
    throw new Error("Please specify at least one input file.");
  }

  const emitter = (renderers: Renderer[]) => emitFn(renderers, options as any);
  await dtsDoc({ files, emitter, lang });

  console.log(`Emit ${options.output} from ${files.join(", ")} successfully.`);
}

function errorHandler(e: any) {
  console.error(os.EOL + (e.message || e) + os.EOL);
  cli.outputHelp();
  process.exit(1);
}
