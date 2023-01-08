# Simple-tsdoc

[API](./API.md) | [Cli usage](#cli-usage) | [API usage](#api-usage)

## Introduction

A simple tool to generate markdown documentations from \*.d.ts files, support api and cli usage.

## Features

- **Support custom markdown style**.
- **Support custom output files**.
- **Easy to use**: It takes only 5 lines of code to generate the markdown file.

## Install

## Cli usage

install: `npm i simple-tsdoc -g`

Your project folder should have `tsconfig.json` and `package.json` file, when you use some custom tag,the [tsdoc.json](https://api-extractor.com/pages/configs/tsdoc_json/) file is required.

```shell
Usage:
  $ tsdoc [...input]

Commands:
  [...input]  Specify The d.ts file entries.

For more info, run any command with the `--help` flag:
  $ tsdoc --help

Options:
  -v, --version          Display version number
  -o, --output [output]  Specify The output path. (default: out.md)
  -s, --silent           Silent mode. (default: false)
  -m, --multiple         Emit a markdown file for per API. (default: false)
  -b, --banner [banner]  Add banner for output markdown file. (default: )
  -f, --footer [footer]  Add footer for output markdown file. (default: )
  -h, --help             Display this message

Examples:
tsdoc ./dist/index.d.ts -o ./docs/api.md -b "# simple-tsdoc"
tsdoc ./dist/index.d.ts -s -m -o ./docs
```

## API usage

For more info, see [examples folder](<(https://github.com/xiaosen7/simple-tsdoc/tree/master/examples)>).

### basic

```ts
import { resolve } from "path";
import { tsdoc, IRenderingContext } from "../../";

tsdoc({
  input: [resolve(__dirname, "index.d.ts")],
  output: resolve(__dirname, "out", "index.md"),
  banner: "# simple-tsdoc",
  RenderingContextConstructor: IRenderingContext,
  silent: true,
}).catch((e) => {
  console.error(e);
});
```

### Custom output

```ts
import { ensureDir } from "fs-extra";
import { writeFile } from "fs/promises";
import { dirname, relative, resolve } from "path";
import { getMarkdownInfoMap } from "../../";

async function main() {
  const entry = resolve(__dirname, "src", "index.d.ts");
  const outDir = resolve(__dirname, "out");
  const info = await getMarkdownInfoMap(entry);

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
```

### custom style

```ts
import { resolve } from "path";
import {
  IRenderingContext,
  StandardTagName,
  Annotation,
  emit,
  getMarkdownInfoMap,
} from "../../";

class CustomRenderingContext extends IRenderingContext {
  protected appendTag(
    tagName: StandardTagName,
    value: string | undefined
  ): void {
    if (tagName === "@see") {
      this.append(`👁️[${value?.trim()}](${value?.trim()})`);
      return;
    }

    this.append(`**${tagName}** ${value ?? ""}`);
  }

  protected appendApiName(name: string): void {
    if (this.titleLevel > 2) {
      // means this is a property api
      this.append(`${"#".repeat(this.titleLevel)} ${name}`);
      return;
    }

    this.append(`${"#".repeat(this.titleLevel)} ${name}`);
    this.append("---------------	");
  }

  protected appendParams(params: Annotation["params"]): void {
    if (params.length === 0) {
      return;
    }

    this.append("| param | description | isOptional | type |", 1);
    this.append("| ----- | ----------- | ---------- | ---- |", 1);

    params.forEach(({ name, description, isOptional, type }) => {
      this.append(`| ${name} | ${description} | ${isOptional} | ${type} |`, 1);
    });

    this.appendLf(1);
  }
}

getMarkdownInfoMap(resolve(__dirname, "index.d.ts"), {
  RenderingContextConstructor: CustomRenderingContext,
})
  .then((infoMap) =>
    emit(resolve(__dirname, "out"), infoMap, {
      multiple: true,
    })
  )
  .catch((e) => {
    console.error(e);
  });
```

### custom tag

A `tsdoc.json` file in your project folder is required, add the custom tag in `tsdoc.json` file.

`tsdoc.json`

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/tsdoc/v0/tsdoc.schema.json",

  "extends": ["@microsoft/api-extractor/extends/tsdoc-base.json"],

  "tagDefinitions": [
    {
      "tagName": "@author",
      "syntaxKind": "block",
      "allowMultiple": true
    }
  ],

  "supportForTags": {
    "@author": true
  }
}
```

`build.ts`

```ts
import { resolve } from "path";
import { tsdoc, IRenderingContext } from "../../";

tsdoc({
  input: [resolve(__dirname, "index.d.ts")],
  output: resolve(__dirname, "out", "index.md"),
  banner: "# simple-tsdoc",
  RenderingContextConstructor: IRenderingContext,
  silent: true,
}).catch((e) => {
  console.error(e);
});
```
