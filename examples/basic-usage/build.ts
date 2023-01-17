import { ApiItemKind } from "@microsoft/api-extractor-model";
import { resolve } from "path";
import { tsdoc, IRenderingContext } from "../../";

tsdoc({
  input: [resolve(__dirname, "index.d.ts")],
  output: resolve(__dirname, "out", "index.md"),
  banner: "# simple-tsdoc",
  RenderingContextConstructor: IRenderingContext,
  silent: true,
  excludeKinds: [ApiItemKind.Interface, ApiItemKind.TypeAlias],
}).catch((e) => {
  console.error(e);
});
