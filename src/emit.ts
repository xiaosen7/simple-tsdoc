import { ensureDir } from "fs-extra";
import { writeFile } from "fs/promises";
import { dirname, join } from "path";
import { ApiToMarkdownInfoMap } from "./types";

export interface EmitOptions {
  /**
   * Add banner for output markdown file.
   * @defaultValue ''
   */
  banner?: string;

  /**
   * Add footer for output markdown file.
   * @defaultValue ''
   */
  footer?: string;

  /**
   * Emit a markdown file for per API.
   * @defaultValue false
   */
  multiple?: boolean;
}

export async function emit(
  output: string,
  apiInfo: ApiToMarkdownInfoMap,
  options: EmitOptions = {}
) {
  const banner = options.banner ?? "";
  const footer = options.footer ?? "";
  const multiple = options.multiple ?? false;

  if (multiple) {
    await ensureDir(output);
    const tasks = Array.from(apiInfo.entries()).map(
      async ([apiName, { md }]) => {
        await writeFile(
          join(output, `${apiName}.md`),
          `${banner}\n\n${md}\n\n${footer}`
        );
      }
    );

    await Promise.all(tasks);
  } else {
    const md = Array.from(apiInfo.values())
      .map((x) => x.md)
      .join("\n\n");

    await ensureDir(dirname(output));
    await writeFile(output, `${banner}\n\n${md}\n\n${footer}`);
  }
}
