import * as model from '@microsoft/api-extractor-model';
import { ApiItem, ApiItemKind } from '@microsoft/api-extractor-model';
import { StandardTags, DocNode, DocExcerpt, DocLinkTag } from '@microsoft/tsdoc';

interface GenerateApiJsonOptions {
    /**
     * The entry of d.ts file.
     */
    entry: string;
    silent?: boolean;
}
/**
 * Generate a temp api.json file.
 * @param options
 * @returns
 * @see https://api-extractor.com/pages/configs/api-extractor_json/
 */
declare function generateApiJson(options: GenerateApiJsonOptions): Promise<{
    apiJsonFilePath: string;
    clean: () => void;
}>;

declare type ConstructorType<T extends new (...args: any[]) => any> = new (...args: ConstructorParameters<T>) => InstanceType<T>;
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
declare type ApiToMarkdownInfoMap = Map<string, {
    md: string;
    apiDocItem: ApiDocItem;
}>;
declare type StandardTagName = `@${keyof typeof StandardTags}`;
declare type CustomTagName = `@${string}`;

interface EmitOptions {
    apiInfoMap: ApiToMarkdownInfoMap;
    /**
     * Add banner for output markdown file.
     * @default ''
     */
    banner?: string;
    /**
     * Add footer for output markdown file.
     * @default ''
     */
    footer?: string;
    /**
     * Emit a markdown file for per API.
     * @default false
     */
    multiple?: boolean;
    /**
     * Specify the output path.
     */
    output: string;
}
declare function emit(options: EmitOptions): Promise<void>;

declare class DocNodeFormatter {
    format(docNode: DocNode): string;
    formatExcerpt(docExcerpt: DocExcerpt): string;
    formatLinkTag(docLinkTag: DocLinkTag): string;
}

interface GetApiDocItemsOptions {
    /**
     * default new DocNodeFormatter()
     */
    docNodeFormatter?: DocNodeFormatter;
    apiJsonFilePath: string;
}
/**
 * Analyze the api.json file to get {@link ApiDocItem}.
 * @param apiJsonPath
 * @param options
 * @returns
 */
declare function getApiDocItems(options: GetApiDocItemsOptions): ApiDocItem[];

/**
 * Render {@link ApiDocItem} to get markdown content.
 */
declare class IRenderingContext {
    private readonly apiDocItem;
    readonly titleLevel: number;
    private _md;
    constructor(apiDocItem: ApiDocItem, titleLevel: number);
    /**
     * Get the api final rendered markdown content.
     */
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
    protected appendTag(tagName: StandardTagName, value: string | undefined): void;
    protected appendReturns(returns: string | undefined): void;
    protected appendDescription(description: string | undefined): void;
    protected appendParams(params: Annotation["params"]): void;
    protected appendSignature(signature: Annotation["signature"]): void;
}

interface RendererOptions {
    apiDocItems: ApiDocItem[];
    /**
     * Specify the RenderingContext to use to make markdown content.
     * @default IRenderingContext
     */
    RenderingContextConstructor?: ConstructorType<typeof IRenderingContext>;
    /**
     * Specify the kinds which will not be rendered.
     *
     * @default []
     */
    excludeKinds?: ApiItemKind[];
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
 * const renderer = new Renderer({ apiDocItems, IRenderingContext });
  console.log(renderer.render())
 * ```
 */
declare class Renderer {
    private readonly _apiDocItems;
    private readonly _RenderingContextConstructor;
    private readonly _excludeKinds;
    constructor(options: RendererOptions);
    render(): ApiToMarkdownInfoMap;
    private _renderApiDocItem;
}

declare type GetMarkdownInfoMapOptions = Omit<GenerateApiJsonOptions & GetApiDocItemsOptions & RendererOptions, "apiJsonFilePath" | "apiDocItems">;
/**
 * Get the `ApiToMarkdownInfoMap` by the entry d.ts file.
 * @param entry
 * @param options
 * @returns
 */
declare function getMarkdownInfoMap(options: GetMarkdownInfoMapOptions): Promise<ApiToMarkdownInfoMap>;

interface TsdocOptions extends Omit<GenerateApiJsonOptions & GetApiDocItemsOptions & RendererOptions & EmitOptions, "entry" | "apiInfoMap" | "apiDocItems" | "apiJsonFilePath"> {
    input: string[];
}
/**
 * Emit markdown file by input d.ts files.
 * @param options
 */
declare function tsdoc(options: TsdocOptions): Promise<void>;

export { Annotation, ApiDocItem, ApiToMarkdownInfoMap, ConstructorType, CustomTagName, DocNodeFormatter, EmitOptions, GenerateApiJsonOptions, GetApiDocItemsOptions, GetMarkdownInfoMapOptions, IRenderingContext, Renderer, RendererOptions, StandardTagName, TsdocOptions, emit, generateApiJson, getApiDocItems, getMarkdownInfoMap, tsdoc };
