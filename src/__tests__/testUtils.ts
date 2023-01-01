import { readFileSync } from "fs";
import { resolve } from "path";

export function readAssetSync(filename: string) {
  return readFileSync(resolveAssetPath(filename), "utf8");
}

export function resolveAssetPath(filename: string) {
  return resolve(__dirname, "assets", filename);
}

export function resolveTempPath(filename: string) {
  return resolve(__dirname, "temp", filename);
}
