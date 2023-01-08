simple-tsdoc

## generateApiJson

**kind**: Function

> Generate a temp api.json file.

**params**:

- *param* options: `Options`

**see**: 

https://api-extractor.com/pages/configs/api-extractor_json/



## getApiDocItems

**kind**: Function

> Analyze the api.json file to get `types.ApiDocItem`.

**params**:

- *param* apiJsonPath: `string` 

- *param* options: `GetApiDocItemsOptions`



## Renderer

**kind**: Class

> Render `ApiDocItem` to get `ApiToMarkdownInfoMap`.

**example**: 
```ts
const result = await generateApiJson({
      entry: resolve(__dirname, "assets", "index.d.ts"),
    });
  const apiDocItems = getApiDocItems(result.apiJsonFilePath, {
      docNodeFormatter: new DocNodeFormatter(),
  });
  result.clean();
const renderer = new Renderer(apiDocItems, RenderingContext);
  console.log(renderer.render())
```

### (constructor)

**kind**: Constructor

> Constructs a new instance of the `Renderer` class

### render

**kind**: Method



## RenderingContext_2

**kind**: Class

> Render `ApiDocItem` to get markdown content.

### (constructor)

**kind**: Constructor

> Constructs a new instance of the `RenderingContext` class

**params**:

- *param* apiName: `undefined` The name of api.

- *param* apiDocItem: `undefined` 

- *param* titleLevel: `undefined` The title level of the api in markdown, default 2, max value is 6.

### appendApiName

**kind**: Method

**params**:

- *param* name: `string`

### appendDescription

**kind**: Method

**params**:

- *param* description: `string | undefined`

### appendKind

**kind**: Method

**params**:

- *param* kind: `ApiItem["kind"]`

### appendMd

**kind**: Method

**params**:

- *param* content: `string`

### appendParams

**kind**: Method

**params**:

- *param* params: `Annotation["params"]`

### appendReturns

**kind**: Method

**params**:

- *param* returns: `string | undefined`

### appendTag

**kind**: Method

**params**:

- *param* tagName: `StandardTagName` 

- *param* value: `string | undefined`

### draw

**kind**: Method

### prependMd

**kind**: Method

**params**:

- *param* content: `string`

### titleLevel

**kind**: Property



## tsdoc

**kind**: Function

> Emit markdown file by input d.ts files.

**params**:

- *param* options: `TsDocOptions`



