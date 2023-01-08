import * as utils from "../utils";

describe.only("utils", () => {
  it("findUpFiles", async () => {
    const result = await utils.findUpFiles([
      "package.json",
      "aaa",
      "tsconfig.json",
      "tsdoc.json",
    ]);
    expect(result).toMatchInlineSnapshot(`
      [
        "C:\\\\Users\\\\11158\\\\Desktop\\\\huaxin\\\\dtsd\\\\package.json",
        undefined,
        "C:\\\\Users\\\\11158\\\\Desktop\\\\huaxin\\\\dtsd\\\\tsconfig.json",
        undefined,
      ]
    `);
  });
});
