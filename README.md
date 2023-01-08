# Simple-tsdoc

## Introduction

A simple tool to generate markdown documentations from \*.d.ts files, support api and cli usage.

## Features

- **Support custom markdown style**.
- **Support custom output files**.
- **Easy to use**: It takes only 5 lines of code to generate the markdown file.

## Install

## Cli Usage

install: `npm i simple-tsdoc -g`

Your project folder should have `tsconfig.json` and `package.json` file, it's better to have a `tsdoc.json` file, about [tsdoc.json](https://api-extractor.com/pages/configs/tsdoc_json/).

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

See [examples folder](<(https://github.com/xiaosen7/simple-tsdoc/tree/master/examples)>).

### Clone and build example

```shell
git clone https://github.com/xiaosen7/simple-tsdoc
cd simple-tsdoc
pnpm install
pnpm build
npm link

# Build example
pnpm build:example [exampleName]

# Build all examples
pnpm build:allExamples
```
