export function isValidString(value: any) {
  return typeof value === "string" && value.trim().length > 0;
}
