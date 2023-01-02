# Simple-tsdoc

A simple cli to generate markdown documentations from \*.d.ts files.

## Install

`npm i simple-tsdoc -g`

## Usage

```shell
Usage:
  $ simple-tsdoc <command> [options]

Commands:
  emit [...files]   Emit files into one markdown file.
  emitM [...files]  Emit files into multiple markdown files.

For more info, run any command with the `--help` flag:
  $ simple-tsdoc emit --help
  $ simple-tsdoc emitM --help

Options:
  -v, --version      Display version number
  -l,--lang [lang]   Set the language of emitting markdown files, support value: en、ch. (default: en)
  --report [report]  Emit a report json file additionally.
  -h, --help         Display this message
```

## Examples

See examples folder in [repository](https://github.com/xiaosen7/simple-tsdoc).

Or clone [repository](https://github.com/xiaosen7/simple-tsdoc) in local, after installation (`pnpm install`), then use `pnpm run build:example [exampleName]` to build a example or use `pnpm run build:allExamples` to build all examples.
