import { DocExcerpt, DocLinkTag, DocNode, DocNodeKind } from "@microsoft/tsdoc";

export class DocNodeFormatter {
  format(docNode: DocNode) {
    let result = "";
    let skipChildren = false;
    switch (docNode.kind) {
      case DocNodeKind.Excerpt:
        result += this.formatExcerpt(docNode as DocExcerpt);
        break;
      case DocNodeKind.LinkTag:
        result += this.formatLinkTag(docNode as DocLinkTag);
        skipChildren = true;
        break;
    }

    if (!skipChildren) {
      for (const childNode of docNode.getChildNodes()) {
        result += this.format(childNode);
      }
    }

    return result;
  }

  formatExcerpt(docExcerpt: DocExcerpt) {
    return docExcerpt.content.toString();
  }

  formatLinkTag(docLinkTag: DocLinkTag) {
    if (docLinkTag.codeDestination) {
      return `\`${docLinkTag.codeDestination.emitAsTsdoc()}\``;
    } else if (docLinkTag.urlDestination) {
      return docLinkTag.urlDestination;
    }

    return "";
  }
}
