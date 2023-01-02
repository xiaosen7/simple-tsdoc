import { DocExcerpt, DocLinkTag, DocNode } from "@microsoft/tsdoc";

export function formatDocNode(docNode: DocNode): string {
  let result = "";
  if (docNode) {
    if (docNode instanceof DocExcerpt) {
      result += docNode.content.toString();
    }

    if (docNode instanceof DocLinkTag) {
      if (docNode.codeDestination) {
        result += `\`${docNode.codeDestination.emitAsTsdoc()}\``;
      } else if (docNode.urlDestination) {
        result += docNode.urlDestination;
      }
      // docNode.urlDestination
    } else {
      for (const childNode of docNode.getChildNodes()) {
        result += formatDocNode(childNode);
      }
    }
  }

  return result;
}
