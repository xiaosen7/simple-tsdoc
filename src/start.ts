import { cac } from "cac";
import { version, bin } from "../package.json";
import { dtsDoc } from "./";
import * as emitters from "./mdFilesEmitter";
import * as os from "os";
import { Renderer } from "./types";
import { resolveAbsolute } from "./utils";
import { Lang } from "./apiDocItemsRenderer";

process.addListener("uncaughtException", errorHandler);
process.addListener("unhandledRejection", errorHandler);

const cli = cac(Object.keys(bin)[0]).version(version);

cli.option("-l,--lang [lang]", "Set the language of emitting markdown files.", {
  default: "en",
});

cli
  .command("emit [...files]", "Emit files into one markdown file.")
  .option("-o, --output [output]", "Specify the output file.", {
    default: "./out.md",
  })
  .action((files: string[], options: emitters.EmitOptions & { lang: Lang }) => {
    action(files, options, emitters.emit, options.lang);
  });

cli
  .command("emitM [...files]", "Emit files into multiple markdown files.")
  .option("-o, --outDir [outDir]", "Specify the output directory.", {
    default: "./out",
  })
  .option(
    "-r, --rootDir [rootDir]",
    "Specify the root directory of these *.d.ts files. This property will impact output directories structure. If is undefined, then place every *.md files into the outDir. Else place *.md files into the folder in outDir where *.d.ts folder relate rootDir."
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
  await Promise.all(
    files.map((file) =>
      dtsDoc({ mainEntryPointFilePath: resolveAbsolute(file), emitter, lang })
    )
  );
}

function errorHandler(e: any) {
  console.error(os.EOL + (e.message || e) + os.EOL);
  cli.outputHelp();
  process.exit(1);
}
