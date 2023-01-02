/**
 * Adds two numbers together.
 * @example
 * Here's a simple example:
 * ```ts
 * // Prints "2":
 * console.log(add(1,1));
 * ```
 * @example
 * Here's an example with negative numbers:
 * ```ts
 * // Prints "0":
 * console.log(add(1,-1));
 * ```
 * @include ./demo.ts
 */
export function add(a: number, b: number) {
  return a + b;
}

/**
 * Parses a JSON file.
 *
 * @param path - Full path to the file.
 * @returns An object containing the JSON data.
 *
 * @example Parsing a basic JSON file
 *
 * Contents of `file.json`
 * ```json
 * {
 *   "exampleItem": "text"
 * }
 * ```
 *
 * Usage
 * ```ts
 * const result = parseFile("file.json");
 * ```
 *
 * Result
 * ```ts
 * {
 *   exampleItem: 'text',
 * }
 * ```
 */
export function parseFile(path: string) {}
