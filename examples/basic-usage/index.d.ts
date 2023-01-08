import * as model from "@microsoft/api-extractor-model";
import { ApiItem } from "@microsoft/api-extractor-model";
import {
  StandardTags,
  DocNode,
  DocExcerpt,
  DocLinkTag,
} from "@microsoft/tsdoc";

declare type ConstructorType<T extends new (...args: any[]) => any> = new (
  ...args: ConstructorParameters<T>
) => InstanceType<T>;
interface ApiDocItem {
  name: string;
  annotation: Annotation;
  kind: model.ApiItemKind;
  /**
   * properties of this ApiDocItem
   *
   * when this is a class kind ApiDocItem then it will have value
   */
  properties?: ApiDocItem[];
  apiItem: model.ApiDeclaredItem;
}
interface Annotation {
  description: string;
  params: Array<{
    name: string;
    description: string;
    type?: string;
    isOptional?: boolean;
  }>;
  returns?: string;
  tagNameToDescMap: Map<StandardTagName, undefined | string>;
  signature: string;
}
declare type ApiToMarkdownInfoMap = Map<
  string,
  {
    md: string;
    apiDocItem: ApiDocItem;
  }
>;
declare type StandardTagName = `@${keyof typeof StandardTags}`;
declare type CustomTagName = `@${string}`;

interface EmitOptions {
  /**
   * Add banner for output markdown file.
   * @defaultValue ''
   */
  banner?: string;
  /**
   * Add footer for output markdown file.
   * @defaultValue ''
   */
  footer?: string;
  /**
   * Emit a markdown file for per API.
   * @defaultValue false
   */
  multiple?: boolean;
}

/**
 * Render {@link ApiDocItem} to get markdown content.
 */
declare class IRenderingContext {
  private readonly apiDocItem;
  readonly titleLevel: number;
  private _md;
  constructor(apiDocItem: ApiDocItem, titleLevel: number);
  draw(): string;
  /**
   * Prepend markdown content.
   * @param content The content to prepend to markdown.
   * @param lfCount The `LF` count after prepend, default 2.
   */
  protected prepend(content: string, lfCount?: number): void;
  protected appendLf(count: number): void;
  /**
   * Append markdown content.
   * @param content The content to append to markdown.
   * @param lfCount The `LF` count after appended, default 2.
   */
  protected append(content: string, lfCount?: number): void;
  protected appendApiName(name: string): void;
  protected appendKind(kind: ApiItem["kind"]): void;
  protected appendTag(
    tagName: StandardTagName,
    value: string | undefined
  ): void;
  protected appendReturns(returns: string | undefined): void;
  protected appendDescription(description: string | undefined): void;
  protected appendParams(params: Annotation["params"]): void;
  protected appendSignature(signature: Annotation["signature"]): void;
}

interface Options$1 {
  entry: string;
  silent?: boolean;
}
/**
 * Generate a temp api.json file.
 * @param options
 * @returns
 * @see https://api-extractor.com/pages/configs/api-extractor_json/
 */
declare function generateApiJson(options: Options$1): Promise<{
  apiJsonFilePath: string;
  clean: () => void;
}>;

declare class DocNodeFormatter {
  format(docNode: DocNode): string;
  formatExcerpt(docExcerpt: DocExcerpt): string;
  formatLinkTag(docLinkTag: DocLinkTag): string;
}

/**
 * Analyze the api.json file to get {@link types.ApiDocItem}.
 * @param apiJsonPath
 * @param options
 * @returns
 */
declare function getApiDocItems(
  apiJsonPath: string,
  options: GetApiDocItemsOptions
): ApiDocItem[];
interface GetApiDocItemsOptions {
  docNodeFormatter: DocNodeFormatter;
}

/**
 * Render {@link ApiDocItem} to get {@link ApiToMarkdownInfoMap}.
 *
 * @example
 *
 * ```ts
 * const result = await generateApiJson({
      entry: resolve(__dirname, "assets", "index.d.ts"),
    });
  const apiDocItems = getApiDocItems(result.apiJsonFilePath, {
      docNodeFormatter: new DocNodeFormatter(),
  });
  result.clean();
 * const renderer = new Renderer(apiDocItems, IRenderingContext);
  console.log(renderer.render())
 * ```
 */
declare class Renderer {
  private readonly _apiDocItems;
  private readonly _RenderingContextConstructor;
  constructor(
    apiDocItems: ApiDocItem[],
    RenderingContextConstructor: ConstructorType<typeof IRenderingContext>
  );
  render(): ApiToMarkdownInfoMap;
  private _renderApiDocItem;
}

interface Options {
  RenderingContextConstructor?: ConstructorType<typeof IRenderingContext>;
  DocNodeFormatterConstructor?: ConstructorType<typeof DocNodeFormatter>;
}
/**
 * Get the `ApiToMarkdownInfoMap` by the entry d.ts file.
 * @param entry
 * @param options
 * @returns
 */
declare function getMarkdownInfoMap(
  entry: string,
  options?: Options
): Promise<ApiToMarkdownInfoMap>;

interface TsDocOptions extends EmitOptions {
  input: string[];
  silent?: boolean;
  output: string;
  /**
   * The context to draw markdown content.
   *
   * @defaultValue `IRenderingContext`
   */
  RenderingContextConstructor?: ConstructorType<typeof IRenderingContext>;
}
/**
 * Emit markdown file by input d.ts files.
 * @param options
 */
declare function tsdoc(options: TsDocOptions): Promise<void>;

export {
  Annotation,
  ApiDocItem,
  ApiToMarkdownInfoMap,
  ConstructorType,
  CustomTagName,
  DocNodeFormatter,
  Renderer,
  IRenderingContext,
  StandardTagName,
  TsDocOptions,
  generateApiJson,
  getApiDocItems,
  getMarkdownInfoMap,
  tsdoc,
};
