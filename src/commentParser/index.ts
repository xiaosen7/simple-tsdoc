import * as types from "../types";
import * as helpers from "./helpers";
import * as shared from "../shared";

export function parse(content: string): types.Annotation {
  const parserContext = helpers.tsDocParser.parseString(content);
  const docComment = parserContext.docComment;

  const description = shared.formatDocNode(docComment.summarySection).trim();

  let deprecated: types.Annotation["deprecated"] = false;
  if (docComment.deprecatedBlock) {
    deprecated = shared
      .formatDocNode(docComment.deprecatedBlock.content)
      .trim();
  }

  const params: types.Annotation["params"] = [];
  for (const paramBlock of docComment.params.blocks) {
    params.push({
      name: paramBlock.parameterName,
      description: shared.formatDocNode(paramBlock.content).trim(),
    });
  }

  const annotationTags: types.Annotation["tags"] = [];
  [
    ...docComment.customBlocks,
    docComment.remarksBlock!,
    ...docComment.seeBlocks,
  ]
    .filter((x) => Boolean(x))
    .forEach((block) => {
      const found = helpers.allBlockTagNamesWithTest.find(({ test }) =>
        test.test(block.blockTag.tagName)
      );
      if (!found) {
        return;
      }

      const description = shared.formatDocNode(block.content).trim();
      annotationTags.push({
        name: found.name,
        description: description,
      });
    });

  const modifierTags = docComment.modifierTagSet.nodes.map((x) => x.tagName);

  let returns;
  if (docComment.returnsBlock) {
    returns = shared.formatDocNode(docComment.returnsBlock.content).trim();
  }

  return {
    description,
    params,
    tags: annotationTags,
    modifierTags,
    returns,
    deprecated,
  };
}
