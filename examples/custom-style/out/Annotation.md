

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



