

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

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| apiDocItem |  | false | ApiDocItem |
| titleLevel |  | false | number |

**signature**:

```ts
constructor(apiDocItem: ApiDocItem, titleLevel: number);
```

#### append

**kind**: Method

Append markdown content.

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| content | The content to append to markdown. | false | string |
| lfCount | The `LF` count after appended, default 2. | true | number |

**signature**:

```ts
protected append(content: string, lfCount?: number): void;
```

#### appendApiName

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| name |  | false | string |

**signature**:

```ts
protected appendApiName(name: string): void;
```

#### appendDescription

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| description |  | false | string | undefined |

**signature**:

```ts
protected appendDescription(description: string | undefined): void;
```

#### appendKind

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| kind |  | false | ApiItem["kind"] |

**signature**:

```ts
protected appendKind(kind: ApiItem["kind"]): void;
```

#### appendLf

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| count |  | false | number |

**signature**:

```ts
protected appendLf(count: number): void;
```

#### appendParams

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| params |  | false | Annotation["params"] |

**signature**:

```ts
protected appendParams(params: Annotation["params"]): void;
```

#### appendReturns

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| returns |  | false | string | undefined |

**signature**:

```ts
protected appendReturns(returns: string | undefined): void;
```

#### appendSignature

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| signature |  | false | Annotation["signature"] |

**signature**:

```ts
protected appendSignature(signature: Annotation["signature"]): void;
```

#### appendTag

**kind**: Method

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| tagName |  | false | StandardTagName |
| value |  | false | string | undefined |

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

| param | description | isOptional | type |
| ----- | ----------- | ---------- | ---- |
| content | The content to prepend to markdown. | false | string |
| lfCount | The `LF` count after prepend, default 2. | true | number |

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



