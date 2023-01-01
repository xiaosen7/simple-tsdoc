import * as mdFilesEmitter from "../mdFilesEmitter";
import * as testUtils from "./testUtils";
import * as apiDocItemsRenderer from "../apiDocItemsRenderer";
import * as apiJsonParser from "../apiJsonParser";

test("mdFilesEmitter", async () => {
  const inputFilePath = testUtils.resolveAssetPath(
    "api-extractor-demo.api.json"
  );
  const docItems = apiJsonParser.parse(inputFilePath);
  const namespaceToRenderers = apiDocItemsRenderer.render(docItems);

  await mdFilesEmitter.emit(
    namespaceToRenderers,
    testUtils.resolveTempPath("out.md")
  );

  await mdFilesEmitter.emitFilesWithNamespace(
    namespaceToRenderers,
    testUtils.resolveTempPath("emitFilesWithNamespace")
  );

  await mdFilesEmitter.emitFiles(
    namespaceToRenderers,
    testUtils.resolveTempPath("emitFiles")
  );
});
