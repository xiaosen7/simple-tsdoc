
### createSingletonPromise


Create singleton promise function


Kind：Function


Example：
```
const promise = createSingletonPromise(async () => { ... })

await promise()
await promise() // all of them will be bind to a single promise instance
await promise() // and be resolved together
```


Parameters：

- fn(`() => Promise<T>`, `necessary`) 

