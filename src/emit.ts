import { ApiItemKind } from "@microsoft/api-extractor-model";
import { ensureDir } from "fs-extra";
import { writeFile } from "fs/promises";
import { dirname, join } from "path";
import { ApiToMarkdownInfoMap } from "./types";

export interface EmitOptions {
  apiInfoMap: ApiToMarkdownInfoMap;
  /**
   * Add banner for output markdown file.
   * @default ''
   */
  banner?: string;
  /**
   * Add footer for output markdown file.
   * @default ''
   */
  footer?: string;
  /**
   * Emit a markdown file for per API.
   * @default false
   */
  multiple?: boolean;
  /**
   * Specify the output path.
   */
  output: string;
}

export async function emit(options: EmitOptions) {
  const {
    output,
    apiInfoMap,
    banner = "",
    footer = "",
    multiple = false,
  } = options;

  if (multiple) {
    await ensureDir(output);
    const tasks = Array.from(apiInfoMap.entries()).map(
      async ([apiName, { md }]) => {
        await writeFile(
          join(output, `${apiName}.md`),
          `${banner}\n\n${md}\n\n${footer}`
        );
      }
    );

    await Promise.all(tasks);
  } else {
    const kindToMdArray = new Map<ApiItemKind, string[]>();
    Array.from(apiInfoMap.values()).forEach(({ md, apiDocItem }) => {
      let array = kindToMdArray.get(apiDocItem.kind);
      if (!array) {
        kindToMdArray.set(apiDocItem.kind, (array = []));
      }

      array.push(md);
    });

    let pageContent = "";

    const order = [
      ApiItemKind.Function,
      ApiItemKind.Class,
      ApiItemKind.Namespace,
      ApiItemKind.Interface,
      ApiItemKind.TypeAlias,
    ];
    order.forEach((kind) => {
      if (kindToMdArray.has(kind)) {
        pageContent += `## ${kind}\n\n---\n\n${kindToMdArray
          .get(kind)!
          .join("\n\n")}`;

        kindToMdArray.delete(kind);
      }
    });

    Array.from(kindToMdArray.entries()).forEach(([kind, array]) => {
      pageContent += `## ${kind}\n\n---\n\n${array.join("\n\n")}`;
    });

    await ensureDir(dirname(output));
    await writeFile(output, `${banner}\n\n${pageContent}\n\n${footer}`);
  }
}
