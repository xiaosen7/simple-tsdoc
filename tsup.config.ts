import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["./src/start.ts", "./src/index.ts"],
  dts: true,
  clean: true,
  format: ["esm"],
  platform: "node",
  shims: true,
  sourcemap: !!options.watch,
  minify: !options.watch,
  watch: options.watch ? ["src", "locales"] : false,
}));
