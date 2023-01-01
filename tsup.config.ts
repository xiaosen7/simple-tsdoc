import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["./src/start.ts"],
  clean: true,
  format: ["esm"],
  platform: "node",
  shims: true,
  sourcemap: !!options.watch,
  minify: !options.watch,
}));
