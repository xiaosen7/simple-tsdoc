import { ApiItem } from "@microsoft/api-extractor-model";
import { Annotation, ApiDocItem, StandardTagName } from "../types";

/**
 * Render {@link ApiDocItem} to get markdown content.
 */
export class RenderingContext {
  private _md: string;

  constructor(
    private readonly apiDocItem: ApiDocItem,
    public readonly titleLevel: number
  ) {
    this._md = "";
  }

  draw(): string {
    this._md = "";
    this.appendApiName(this.apiDocItem.name);
    this.appendKind(this.apiDocItem.kind);
    this.appendDescription(this.apiDocItem.annotation.description);
    this.appendParams(this.apiDocItem.annotation.params);
    this.appendReturns(this.apiDocItem.annotation.returns);
    Array.from(this.apiDocItem.annotation.tagNameToDescMap.entries()).forEach(
      ([tagName, description]) => {
        this.appendTag(tagName, description);
      }
    );

    return this._md;
  }

  /**
   * Prepend markdown content.
   * @param content The content to prepend to markdown.
   * @param lfCount The `LF` count after prepend, default 2.
   */
  protected prepend(content: string, lfCount = 2) {
    if (content.length > 0) {
      this._md = `${content.trim()}${"\n".repeat(lfCount)}` + this._md;
    }
  }

  protected appendLf(count: number) {
    this._md += `${"\n".repeat(count)}`;
  }

  /**
   * Append markdown content.
   * @param content The content to append to markdown.
   * @param lfCount The `LF` count after appended, default 2.
   */
  protected append(content: string, lfCount = 2) {
    if (content.length > 0) {
      this._md += `${content.trim()}`;
      this.appendLf(lfCount);
    }
  }

  protected appendApiName(name: string) {
    this.append(`${"#".repeat(Math.min(this.titleLevel, 6))} ${name}`);
  }

  protected appendKind(kind: ApiItem["kind"]) {
    this.append(`**kind**: ${kind}`);
  }

  protected appendTag(tagName: StandardTagName, value: string | undefined) {
    if (value) {
      this.append(`**${tagName.replace("@", "")}**: ${value}`);
    }
  }

  protected appendReturns(returns: string | undefined) {
    if (returns) {
      this.append(`**returns**: ${returns}`);
    }
  }

  protected appendDescription(description: string | undefined) {
    if (description) {
      this.append(description);
    }
  }

  protected appendParams(params: Annotation["params"]) {
    if (params.length > 0) {
      this.append(
        `**params**:\n\n${params
          .map(
            ({ name, type, isOptional, description }) =>
              `- *param* ${name}${
                isOptional ? "?" : ""
              }: \`${type}\` ${description}`
          )
          .join("\n\n")}`
      );
    }
  }
}
