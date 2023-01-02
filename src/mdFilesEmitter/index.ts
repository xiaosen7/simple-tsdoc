import { writeFile } from "fs/promises";
import { dirname, resolve } from "path";
import { ApiDocItem, Renderer } from "../types";
import * as helpers from "./helpers";
import { promisify } from "util";
import isDirectory from "is-directory";

export interface EmitOptions extends helpers.BaseOptions {
  /**
   * A file to emit markdown content.
   */
  output: string;
}

export async function emit(renderers: Renderer[], options: EmitOptions) {
  const md = helpers.getRendered(renderers);
  await helpers.ensureDir(dirname(options.output));
  await writeFile(options.output, md);

  if (options.report) {
    await emitReport(renderers, options);
  }
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

  if (options.report) {
    await emitReport(renderers, options);
  }
}

export async function emitReport(
  renderers: Renderer[],
  options: helpers.BaseOptions
) {
  const outputIsDirectory = await promisify(isDirectory)(options.output);

  let file;
  if (outputIsDirectory) {
    file = resolve(options.output, "report.json");
  } else {
    file = `${options.output}.report.json`;
  }

  function getJson(apiDocItem: ApiDocItem): any {
    const { name, annotation, properties, kind } = apiDocItem;
    return {
      name,
      annotation,
      properties: properties?.map(getJson),
      kind,
    };
  }

  const content = renderers.map((x) => getJson(x.apiDocItem));

  await writeFile(file, JSON.stringify(content, null, 2));
}

export type { RenderMultiplyOptions } from "./helpers";
