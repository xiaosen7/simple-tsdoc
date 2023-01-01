import * as testUtils from "./testUtils";
import * as apiDocItemsRenderer from "../apiDocItemsRenderer";
import * as apiJsonParser from "../apiJsonParser";

test("apiDocItemsRenderer", () => {
  const inputFilePath = testUtils.resolveAssetPath(
    "api-extractor-demo.api.json"
  );
  const docItems = apiJsonParser.parse(inputFilePath);
  const renderers = apiDocItemsRenderer.render(docItems);
  expect(renderers.map(({ render }) => render())).toMatchSnapshot();
});
