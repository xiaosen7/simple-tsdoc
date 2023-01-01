import { existsSync } from "fs";
import { mkdir } from "fs/promises";
import { dirname, relative, resolve } from "path";
import { Renderer } from "../types";
import { resolveAbsolute } from "../utils";

export function getRendered(renderers: Renderer[]) {
  return renderers.reduce((md, { render }) => {
    return md + render();
  }, "");
}

export interface RenderMultiplyOptions {
  /**
   * A directory to emit *.md files.
   */
  outDir: string;
  /**
   * Specify the root directory of these *.d.ts files. This property will impact output directories structure.
   *
   * If is undefined, then place every *.md files into the outDir.
   * Else place *.md files into the folder in outDir where *.d.ts folder relate rootDir.
   */
  rootDir?: string;
  /**
   * The name of an another folder to create in ourDir to place *.md files.
   */
  anotherFolder?: string;
}
export function getRenderedMultiply(
  renderers: Renderer[],
  { outDir, rootDir, anotherFolder }: RenderMultiplyOptions
) {
  const absOutDir = resolveAbsolute(outDir);
  const absRootDir = rootDir ? resolveAbsolute(rootDir) : undefined;

  const rendered: Array<{
    data: string;
    file: string;
  }> = [];

  for (const renderer of renderers) {
    const data = renderer.render();
    const apiName = renderer.apiDocItem.name;

    // resolve file
    let file: string;
    if (absRootDir) {
      if (!renderer.apiDocItem.apiItem.fileUrlPath) {
        throw new Error(`Can't get the api(${apiName})'s fileUrlPath.`);
      }
      const absDtsFileDir = dirname(
        resolveAbsolute(renderer.apiDocItem.apiItem.fileUrlPath)
      );
      const placeDir = resolve(absOutDir, relative(absRootDir, absDtsFileDir));
      file = resolve(placeDir, anotherFolder ?? "", `${apiName}.md`);
    } else {
      file = resolve(absOutDir, anotherFolder ?? "", `${apiName}.md`);
    }

    rendered.push({
      data,
      file,
    });
  }

  return rendered;
}

export async function ensureDir(dir: string) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}
