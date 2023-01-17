import { resolve } from "path";
import { generateApiJson } from "../generateApiJson";
import { readFileSync } from "fs";
import { getApiDocItems } from "../getApiDocItems";
import { DocNodeFormatter } from "../models/DocNodeFormatter";
import { Renderer } from "../models/Renderer";
import { emit } from "../emit";
import { IRenderingContext } from "../models/IRenderingContext";
// import { Renderer } from "../models/Renderer";

describe("base", () => {
  it("generateApiJson => parseApiJson", async () => {
    const result = await generateApiJson({
      entry: resolve(__dirname, "assets", "index.d.ts"),
      silent: true,
    });
    expect(readFileSync(result.apiJsonFilePath, "utf-8")).toMatchSnapshot();

    const apiDocItems = getApiDocItems(result.apiJsonFilePath, {
      docNodeFormatter: new DocNodeFormatter(),
    });
    expect(
      apiDocItems.map(({ annotation, kind, name }) => ({
        annotation,
        kind,
        name,
      }))
    ).toMatchSnapshot();

    result.clean();

    const renderer = new Renderer({
      apiDocItems,
      RenderingContextConstructor: IRenderingContext,
    });

    await emit(resolve("temp", "out2.md"), renderer.render());
  });
});
