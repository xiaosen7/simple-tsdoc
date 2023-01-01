import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["./src/start.ts"],
  clean: true,
  dts: !!options.watch,
  format: ["esm"],
  platform: "node",
  publicDir: "./src/apiDocItemsRenderer/locales",
  shims: true,
  sourcemap: !!options.watch,
  minify: !options.watch,
}));
