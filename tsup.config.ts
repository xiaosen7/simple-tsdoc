import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/start.ts"],
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  platform: "node",
  publicDir: "./src/apiDocItemsRenderer/locales",
  shims: true,
  sourcemap: true,
});
