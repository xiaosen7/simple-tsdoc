import { resolve } from "path";
import { tsdoc, RenderingContext } from "../../src/";

tsdoc({
  input: [resolve(__dirname, "index.d.ts")],
  output: resolve(__dirname, "out.md"),
  banner: "simple-tsdoc",
  RenderingContextConstructor: RenderingContext,
  silent: true,
}).catch((e) => {
  console.error(e);
});
