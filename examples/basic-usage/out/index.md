# simple-tsdoc

## Function

---

### emit

**kind**: Function

**params**:

- *param* options: `EmitOptions`

**signature**:

```ts
declare function emit(options: EmitOptions): Promise<void>;
```



### generateApiJson

**kind**: Function

Generate a temp api.json file.

**params**:

- *param* options: `GenerateApiJsonOptions`

**signature**:

```ts
declare function generateApiJson(options: GenerateApiJsonOptions): Promise<{
    apiJsonFilePath: string;
    clean: () => void;
}>;
```

**see**: 

https://api-extractor.com/pages/configs/api-extractor_json/



### getApiDocItems

**kind**: Function

Analyze the api.json file to get `ApiDocItem`.

**params**:

- *param* options: `GetApiDocItemsOptions`

**signature**:

```ts
declare function getApiDocItems(options: GetApiDocItemsOptions): ApiDocItem[];
```



### getMarkdownInfoMap

**kind**: Function

Get the `ApiToMarkdownInfoMap` by the entry d.ts file.

**params**:

- *param* options: `GetMarkdownInfoMapOptions`

**signature**:

```ts
declare function getMarkdownInfoMap(options: GetMarkdownInfoMapOptions): Promise<ApiToMarkdownInfoMap>;
```



### tsdoc

**kind**: Function

Emit markdown file by input d.ts files.

**params**:

- *param* options: `TsdocOptions`

**signature**:

```ts
declare function tsdoc(options: TsdocOptions): Promise<void>;
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
protected appendTag(tagName: StandardTagName, value: string | undefined): void;
```

#### draw

**kind**: Method

Get the api final rendered markdown content.

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
const renderer = new Renderer({ apiDocItems, IRenderingContext });
  console.log(renderer.render())
```

#### (constructor)

**kind**: Constructor

Constructs a new instance of the `Renderer` class

**params**:

- *param* options: `RendererOptions`

**signature**:

```ts
constructor(options: RendererOptions);
```

#### render

**kind**: Method

**signature**:

```ts
render(): ApiToMarkdownInfoMap;
```



