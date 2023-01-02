import * as tsdoc from "@microsoft/tsdoc";
import * as types from "../types";

const customTagsMap: Map<string, types.CustomTag> = new Map();

// customTagsMap.set("@category", {
//   property: {
//     tagName: "@category",
//     syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
//   },
//   renderAction: () => null,
// });

// customTagsMap.set("@author", {
//   property: {
//     tagName: "@author",
//     syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
//   },
//   renderAction: (api) => {
//     if (isObject(api.payload)) {
//       api.appendMd(`\n${api.i18n.__("author")}：${api.payload.description}\n`);
//     }
//   },
// });

// customTagsMap.set("@constructor", {
//   property: {
//     tagName: "@constructor",
//     syntaxKind: tsdoc.TSDocTagSyntaxKind.ModifierTag,
//   },
//   renderAction: () => null,
// });

// customTagsMap.set("@function", {
//   property: {
//     tagName: "@function",
//     syntaxKind: tsdoc.TSDocTagSyntaxKind.ModifierTag,
//   },
//   renderAction: () => null,
// });

const customTags: tsdoc.ITSDocTagDefinitionParameters[] = Array.from(
  customTagsMap.values()
).map((x) => x.property);

export { customTagsMap, customTags };
