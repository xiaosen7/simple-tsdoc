import { isAbsolute, resolve } from "path";

export function isValidArray(value: any) {
  return Array.isArray(value) && value.length > 0;
}

export function isValidString(value: any) {
  return typeof value === "string" && value.trim().length > 0;
}

export function isObject(value: any): value is object {
  return value && typeof value === "object";
}

export function peek<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

export function getId() {
  return Math.random().toString().slice(2);
}

export function resolveAbsolute(filePath: string) {
  return isAbsolute(filePath) ? filePath : resolve(filePath);
}
