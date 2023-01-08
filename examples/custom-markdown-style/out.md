simple-tsdoc

## generateApiJson

---------------

**kind**: Function

Generate a temp api.json file.

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| options |  | false | Options |

👁️[https://api-extractor.com/pages/configs/api-extractor_json/](https://api-extractor.com/pages/configs/api-extractor_json/)



## getApiDocItems

---------------

**kind**: Function

Analyze the api.json file to get `types.ApiDocItem`.

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| apiJsonPath |  | false | string |
| options |  | false | GetApiDocItemsOptions |



## Renderer

---------------

**kind**: Class

Render `ApiDocItem` to get `ApiToMarkdownInfoMap`.

@example 
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

Constructs a new instance of the `Renderer` class

### render

**kind**: Method



## RenderingContext_2

---------------

**kind**: Class

Render `ApiDocItem` to get markdown content.

### (constructor)

**kind**: Constructor

Constructs a new instance of the `RenderingContext` class

### append

**kind**: Method

Append markdown content.

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| content | The content to append to markdown. | false | string |
| lfCount | The `LF` count after appended, default 2. | true | number |

### appendApiName

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| name |  | false | string |

### appendDescription

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| description |  | false | string | undefined |

### appendKind

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| kind |  | false | ApiItem["kind"] |

### appendLf

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| count |  | false | number |

### appendParams

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| params |  | false | Annotation["params"] |

### appendReturns

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| returns |  | false | string | undefined |

### appendTag

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| tagName |  | false | StandardTagName |
| value |  | false | string | undefined |

### draw

**kind**: Method

### prepend

**kind**: Method

Prepend markdown content.

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| content | The content to prepend to markdown. | false | string |
| lfCount | The `LF` count after prepend, default 2. | true | number |

### titleLevel

**kind**: Property



## tsdoc

---------------

**kind**: Function

Emit markdown file by input d.ts files.

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| options |  | false | TsDocOptions |



