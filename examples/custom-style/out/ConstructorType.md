

### ConstructorType

**kind**: TypeAlias

**signature**:

```ts
declare type ConstructorType<T extends new (...args: any[]) => any> = new (
  ...args: ConstructorParameters<T>
) => InstanceType<T>;
```



