
### createPromiseLock


Create a promise lock


Kind：Function


Example：
```
const lock = createPromiseLock()

lock.run(async () => {
  await doSomething()
})

// in anther context:
await lock.wait() // it will wait all tasking finished
```
