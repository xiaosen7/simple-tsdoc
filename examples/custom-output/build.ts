import { ensureDir } from "fs-extra";
import { writeFile } from "fs/promises";
import { dirname, relative, resolve } from "path";
import {
  Renderer,
  RenderingContext,
  generateApiJson,
  getApiDocItems,
  DocNodeFormatter,
} from "../../";

async function main() {
  const entry = resolve(__dirname, "src", "index.d.ts");
  const outDir = resolve(__dirname, "out");
  const info = await getRendered(entry);

  const tasks = Array.from(info.entries()).map(
    async ([name, { md, apiDocItem }]) => {
      if (!apiDocItem.apiItem.fileUrlPath) {
        return;
      }

      const absolutePath = resolve(apiDocItem.apiItem.fileUrlPath);
      const rootDir = resolve(__dirname, "src");
      const relateRootDir = relative(rootDir, absolutePath);

      const outFile = resolve(outDir, relateRootDir);

      await ensureDir(dirname(outFile));
      await writeFile(resolve(dirname(outFile), `${name}.md`), md);
    }
  );

  await Promise.all(tasks);
}

async function getRendered(entry: string) {
  const { clean, apiJsonFilePath } = await generateApiJson({
    entry,
    silent: true,
  });

  const apiDocItems = getApiDocItems(apiJsonFilePath, {
    docNodeFormatter: new DocNodeFormatter(),
  });

  clean();

  const renderer = new Renderer(apiDocItems, RenderingContext);

  return renderer.render();
}

main().catch((e) => {
  console.error(e);
});
