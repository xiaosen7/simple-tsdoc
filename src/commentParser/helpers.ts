import * as tsdoc from "@microsoft/tsdoc";
import { customTags } from "../customTags";

const allBlockTagNames = customTags
  .filter(({ syntaxKind }) => syntaxKind === tsdoc.TSDocTagSyntaxKind.BlockTag)
  .map(({ tagName }) => tagName)
  .concat(
    tsdoc.StandardTags.allDefinitions
      .filter(
        ({ syntaxKind }) => syntaxKind === tsdoc.TSDocTagSyntaxKind.BlockTag
      )
      .map(({ tagName }) => tagName)
  );

export const allBlockTagNamesWithTest = allBlockTagNames.map((name) => ({
  name,
  test: createRegByTagName(name),
}));

export const tsDocParser = createTSDocParser();

function createTSDocParser() {
  const customConfiguration: tsdoc.TSDocConfiguration =
    new tsdoc.TSDocConfiguration();

  // add  customTagDefinition
  customConfiguration.addTagDefinitions(
    customTags.map((x) => new tsdoc.TSDocTagDefinition(x))
  );

  return new tsdoc.TSDocParser(customConfiguration);
}

function createRegByTagName(tagName: string) {
  return new RegExp(tagName.slice(1), "i");
}
