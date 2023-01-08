

### Renderer

**kind**: Class

Render `ApiDocItem` to get `ApiToMarkdownInfoMap`.

**signature**:

```ts
declare class Renderer 
```

**@example** 
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

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| apiDocItems |  | false | ApiDocItem[] |
| RenderingContextConstructor |  | false | ConstructorType<typeof IRenderingContext> |

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



