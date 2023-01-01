import * as commentParser from "../commentParser";
import * as testUtils from "./testUtils";

test("commentParser parse @constructor", () => {
  const content = testUtils.readAssetSync("comment.constructor.ts");
  const annotation = commentParser.parse(content);
  expect(annotation).toMatchSnapshot();
});

test("commentParser parse @returns", () => {
  const content = testUtils.readAssetSync("comment.returns.ts");
  const annotation = commentParser.parse(content);
  expect(annotation).toMatchSnapshot();
});

test("commentParser parse @example", () => {
  const content = testUtils.readAssetSync("comment.example.ts");
  const annotation = commentParser.parse(content);
  expect(annotation).toMatchSnapshot();
});

test("commentParser parse", () => {
  const content = testUtils.readAssetSync("comment.ts");
  const annotation = commentParser.parse(content);
  expect(annotation).toMatchSnapshot();
});
