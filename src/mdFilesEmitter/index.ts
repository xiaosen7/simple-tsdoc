import { writeFile } from "fs/promises";
import { dirname, resolve } from "path";
import { Renderer } from "../types";
import * as helpers from "./helpers";

export interface EmitOptions {
  output: string;
}

export async function emit(renderers: Renderer[], { output }: EmitOptions) {
  const md = helpers.getRendered(renderers);
  await helpers.ensureDir(dirname(output));
  await writeFile(output, md);
}

export async function emitMultiply(
  renderers: Renderer[],
  options: helpers.RenderMultiplyOptions
) {
  const rendered = helpers.getRenderedMultiply(renderers, options);
  const tasks = rendered.map(({ file, data }) =>
    helpers.ensureDir(dirname(file)).then(() => writeFile(file, data))
  );
  await Promise.all(tasks);
}

export type { RenderMultiplyOptions } from "./helpers";
