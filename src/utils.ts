import { findUp, Options } from "find-up";
import { basename } from "path";
export function findUpFiles(names: string[], options?: Options) {
  return Promise.all(names.map((name) => findUp([name], options)));
}

export function checkFiles(names: string[]) {
  return Promise.all(names.map((name) => findUp([name])));
}

export function errorOrLog(value: any, errorMsg: string, logMsg: string) {
  if (value) {
    console.log(logMsg);
  } else {
    throw new Error(errorMsg);
  }
}

export function peekArray<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}

export function checkDtsFiles(files: string[]) {
  const reg = /d\.[a-z]?ts$/;
  files.forEach((file) => {
    if (!reg.test(basename(file))) {
      throw new Error(`${file} is not a .d.ts file.`);
    }
  });
}
