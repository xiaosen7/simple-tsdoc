import { DocExcerpt, DocNode } from "@microsoft/tsdoc";

export function formatDocNode(docNode: DocNode): string {
  let result = "";
  if (docNode) {
    if (docNode instanceof DocExcerpt) {
      result += docNode.content.toString();
    }

    for (const childNode of docNode.getChildNodes()) {
      result += formatDocNode(childNode);
    }
  }

  return result;
}
