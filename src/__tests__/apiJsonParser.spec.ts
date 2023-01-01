import * as apiJsonParser from "../apiJsonParser";
import * as testUtils from "./testUtils";

test("apiJsonParser", () => {
  const inputFilePath = testUtils.resolveAssetPath(
    "api-extractor-demo.api.json"
  );
  const docItems = apiJsonParser.parse(inputFilePath);
  expect(docItems.map(({ apiItem, ...rest }) => rest)).toMatchSnapshot();
});
