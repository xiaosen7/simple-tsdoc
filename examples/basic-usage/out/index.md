# simple-tsdoc

## Function

---

### generateApiJson

**kind**: Function

Generate a temp api.json file.

**params**:

- *param* options: `Options$1`

**signature**:

```ts
declare function generateApiJson(options: Options$1): Promise<{
  apiJsonFilePath: string;
  clean: () => void;
}>;
```

**see**: 

https://api-extractor.com/pages/configs/api-extractor_json/



### getApiDocItems

**kind**: Function

Analyze the api.json file to get `types.ApiDocItem`.

**params**:

- *param* apiJsonPath: `string` 

- *param* options: `GetApiDocItemsOptions`

**signature**:

```ts
declare function getApiDocItems(
  apiJsonPath: string,
  options: GetApiDocItemsOptions
): ApiDocItem[];
```



### getMarkdownInfoMap

**kind**: Function

Get the `ApiToMarkdownInfoMap` by the entry d.ts file.

**params**:

- *param* entry: `string` 

- *param* options?: `Options`

**signature**:

```ts
declare function getMarkdownInfoMap(
  entry: string,
  options?: Options
): Promise<ApiToMarkdownInfoMap>;
```



### tsdoc

**kind**: Function

Emit markdown file by input d.ts files.

**params**:

- *param* options: `TsDocOptions`

**signature**:

```ts
declare function tsdoc(options: TsDocOptions): Promise<void>;
```

## Class

---

### DocNodeFormatter

**kind**: Class

**signature**:

```ts
declare class DocNodeFormatter 
```

#### format

**kind**: Method

**params**:

- *param* docNode: `DocNode`

**signature**:

```ts
format(docNode: DocNode): string;
```

#### formatExcerpt

**kind**: Method

**params**:

- *param* docExcerpt: `DocExcerpt`

**signature**:

```ts
formatExcerpt(docExcerpt: DocExcerpt): string;
```

#### formatLinkTag

**kind**: Method

**params**:

- *param* docLinkTag: `DocLinkTag`

**signature**:

```ts
formatLinkTag(docLinkTag: DocLinkTag): string;
```



### IRenderingContext

**kind**: Class

Render `ApiDocItem` to get markdown content.

**signature**:

```ts
declare class IRenderingContext 
```

#### (constructor)

**kind**: Constructor

Constructs a new instance of the `IRenderingContext` class

**params**:

- *param* apiDocItem: `ApiDocItem` 

- *param* titleLevel: `number`

**signature**:

```ts
constructor(apiDocItem: ApiDocItem, titleLevel: number);
```

#### append

**kind**: Method

Append markdown content.

**params**:

- *param* content: `string` The content to append to markdown.

- *param* lfCount?: `number` The `LF` count after appended, default 2.

**signature**:

```ts
protected append(content: string, lfCount?: number): void;
```

#### appendApiName

**kind**: Method

**params**:

- *param* name: `string`

**signature**:

```ts
protected appendApiName(name: string): void;
```

#### appendDescription

**kind**: Method

**params**:

- *param* description: `string | undefined`

**signature**:

```ts
protected appendDescription(description: string | undefined): void;
```

#### appendKind

**kind**: Method

**params**:

- *param* kind: `ApiItem["kind"]`

**signature**:

```ts
protected appendKind(kind: ApiItem["kind"]): void;
```

#### appendLf

**kind**: Method

**params**:

- *param* count: `number`

**signature**:

```ts
protected appendLf(count: number): void;
```

#### appendParams

**kind**: Method

**params**:

- *param* params: `Annotation["params"]`

**signature**:

```ts
protected appendParams(params: Annotation["params"]): void;
```

#### appendReturns

**kind**: Method

**params**:

- *param* returns: `string | undefined`

**signature**:

```ts
protected appendReturns(returns: string | undefined): void;
```

#### appendSignature

**kind**: Method

**params**:

- *param* signature: `Annotation["signature"]`

**signature**:

```ts
protected appendSignature(signature: Annotation["signature"]): void;
```

#### appendTag

**kind**: Method

**params**:

- *param* tagName: `StandardTagName` 

- *param* value: `string | undefined`

**signature**:

```ts
protected appendTag(
    tagName: StandardTagName,
    value: string | undefined
  ): void;
```

#### draw

**kind**: Method

**signature**:

```ts
draw(): string;
```

#### prepend

**kind**: Method

Prepend markdown content.

**params**:

- *param* content: `string` The content to prepend to markdown.

- *param* lfCount?: `number` The `LF` count after prepend, default 2.

**signature**:

```ts
protected prepend(content: string, lfCount?: number): void;
```

#### titleLevel

**kind**: Property

**signature**:

```ts
readonly titleLevel: number;
```



### Renderer

**kind**: Class

Render `ApiDocItem` to get `ApiToMarkdownInfoMap`.

**signature**:

```ts
declare class Renderer 
```

**example**: 
```ts
const result = await generateApiJson({
      entry: resolve(__dirname, "assets", "index.d.ts"),
    });
  const apiDocItems = getApiDocItems(result.apiJsonFilePath, {
      docNodeFormatter: new DocNodeFormatter(),
  });
  result.clean();
const renderer = new Renderer(apiDocItems, IRenderingContext);
  console.log(renderer.render())
```

#### (constructor)

**kind**: Constructor

Constructs a new instance of the `Renderer` class

**params**:

- *param* apiDocItems: `ApiDocItem[]` 

- *param* RenderingContextConstructor: `ConstructorType<typeof IRenderingContext>`

**signature**:

```ts
constructor(
    apiDocItems: ApiDocItem[],
    RenderingContextConstructor: ConstructorType<typeof IRenderingContext>
  );
```

#### render

**kind**: Method

**signature**:

```ts
render(): ApiToMarkdownInfoMap;
```

## Interface

---

### Annotation

**kind**: Interface

**signature**:

```ts
interface Annotation {
  description: string;
  params: Array<{
    name: string;
    description: string;
    type?: string;
    isOptional?: boolean;
  }>;
  returns?: string;
  signature: string;
  tagNameToDescMap: Map<StandardTagName, undefined | string>;
}
```



### ApiDocItem

**kind**: Interface

**signature**:

```ts
interface ApiDocItem {
  annotation: Annotation;
  apiItem: model.ApiDeclaredItem;
  kind: model.ApiItemKind;
  name: string;
  properties?: ApiDocItem[];
}
```



### TsDocOptions

**kind**: Interface

**signature**:

```ts
interface TsDocOptions extends EmitOptions {
  input: string[];
  output: string;
  RenderingContextConstructor?: ConstructorType<typeof IRenderingContext>;
  silent?: boolean;
}
```

## TypeAlias

---

### ApiToMarkdownInfoMap

**kind**: TypeAlias

**signature**:

```ts
declare type ApiToMarkdownInfoMap = Map<
  string,
  {
    md: string;
    apiDocItem: ApiDocItem;
  }
>;
```



### ConstructorType

**kind**: TypeAlias

**signature**:

```ts
declare type ConstructorType<T extends new (...args: any[]) => any> = new (
  ...args: ConstructorParameters<T>
) => InstanceType<T>;
```



### CustomTagName

**kind**: TypeAlias

**signature**:

```ts
declare type CustomTagName = `@${string}`;
```



### StandardTagName

**kind**: TypeAlias

**signature**:

```ts
declare type StandardTagName = `@${keyof typeof StandardTags}`;
```



