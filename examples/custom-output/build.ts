import { ensureDir } from "fs-extra";
import { writeFile } from "fs/promises";
import { dirname, relative, resolve } from "path";
import { getMarkdownInfoMap } from "../../";

async function main() {
  const entry = resolve(__dirname, "src", "index.d.ts");
  const outDir = resolve(__dirname, "out");
  const info = await getMarkdownInfoMap({ entry });

  const tasks = Array.from(info.entries()).map(
    async ([name, { md, apiDocItem }]) => {
      if (!apiDocItem.apiItem.fileUrlPath) {
        return;
      }

      // let the output files structure be like source files structure.
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

main().catch((e) => {
  console.error(e);
});
