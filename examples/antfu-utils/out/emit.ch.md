
### at


Get nth item of Array. Negative for backward

@category Array


类型：Function


参数列表：

- array(`readonly []`, `必须`) 


- index(`number`, `必须`) 


### at


类型：Function


参数列表：

- array(`readonly T[]`, `必须`) 


- index(`number`, `必须`) 


### batchInvoke


Call every function in an array


类型：Function


参数列表：

- functions(`Nullable<Fn>[]`, `必须`) 


### clamp


类型：Function


参数列表：

- n(`number`, `必须`) 


- min(`number`, `必须`) 


- max(`number`, `必须`) 


### clampArrayRange


Clamp a number to the index ranage of an array

@category Array


类型：Function


参数列表：

- n(`number`, `必须`) 


- arr(`readonly unknown[]`, `必须`) 


### clearUndefined


Clear undefined fields from an object. It mutates the object

@category Object


类型：Function


参数列表：

- obj(`T`, `必须`) 


### createPromiseLock


Create a promise lock


类型：Function


示例：
```
const lock = createPromiseLock()

lock.run(async () => {
  await doSomething()
})

// in anther context:
await lock.wait() // it will wait all tasking finished
```

### createSingletonPromise


Create singleton promise function


类型：Function


示例：
```
const promise = createSingletonPromise(async () => { ... })

await promise()
await promise() // all of them will be bind to a single promise instance
await promise() // and be resolved together
```


参数列表：

- fn(`() => Promise<T>`, `必须`) 


### deepMerge


Deep merge :P

@category Object


类型：Function


参数列表：

- target(`T`, `必须`) 


- sources(`S[]`, `必须`) 


### ensurePrefix


Ensure prefix of a string

@category String


类型：Function


参数列表：

- prefix(`string`, `必须`) 


- str(`string`, `必须`) 


### flattenArrayable


Convert `Arrayable<T>` to `Array<T>` and flatten it

@category Array


类型：Function


参数列表：

- array(`Nullable<Arrayable<T | Array<T>>>`, `可选`) 


### hasOwnProperty


Determines whether an object has a property with the specified name


类型：Function


参见：
https://eslint.org/docs/rules/no-prototype-builtins  @category Object


参数列表：

- obj(`T`, `必须`) 


- v(`PropertyKey`, `必须`) 


### invoke


Call the function


类型：Function


参数列表：

- fn(`Fn`, `必须`) 


### isKeyOf


Type guard for any key, `k`. Marks `k` as a key of `T` if `k` is in `obj`.

@category Object


类型：Function


参数列表：

- obj(`T`, `必须`) object to query for key `k`




- k(`keyof any`, `必须`) key to check existence in `obj`



### isTruthy


Type guard to filter out falsy values

@category Guards


类型：Function


示例：
array.filter(isTruthy)


参数列表：

- v(`T`, `必须`) 


### last


Get last item

@category Array


类型：Function


参数列表：

- array(`readonly []`, `必须`) 


### last


类型：Function


参数列表：

- array(`readonly T[]`, `必须`) 


### mergeArrayable


Use rest arguments to merge arrays

@category Array


类型：Function


参数列表：

- args(`Nullable<Arrayable<T>>[]`, `必须`) 


### move


Move element in an Array

@category Array


类型：Function


参数列表：

- arr(`T[]`, `必须`) 


- from(`number`, `必须`) 


- to(`number`, `必须`) 


### noNull


Type guard to filter out null values

@category Guards


类型：Function


示例：
array.filter(noNull)


参数列表：

- v(`T | null`, `必须`) 


### notNullish


Type guard to filter out null-ish values

@category Guards


类型：Function


示例：
array.filter(notNullish)


参数列表：

- v(`T | null | undefined`, `必须`) 


### notUndefined


Type guard to filter out null-ish values

@category Guards


类型：Function


示例：
array.filter(notUndefined)


参数列表：

- v(`T`, `必须`) 


### objectEntries


Strict typed `Object.entries`

@category Object


类型：Function


参数列表：

- obj(`T`, `必须`) 


### objectKeys


Strict typed `Object.keys`

@category Object


类型：Function


参数列表：

- obj(`T`, `必须`) 


### objectMap


Map key/value pairs for an object, and construct a new one

@category Object

Transform:


类型：Function


示例：
```
objectMap({ a: 1, b: 2 }, (k, v) => [k.toString().toUpperCase(), v.toString()])
// { A: '1', B: '2' }
```

Swap key/value:


示例：
```
objectMap({ a: 1, b: 2 }, (k, v) => [v, k])
// { 1: 'a', 2: 'b' }
```

Filter keys:


示例：
```
objectMap({ a: 1, b: 2 }, (k, v) => k === 'a' ? undefined : [k, v])
// { b: 2 }
```


参数列表：

- obj(`Record<K, V>`, `必须`) 


- fn(`(key: K, value: V) => [NK, NV] | undefined`, `必须`) 


### objectPick


Create a new subset object by giving keys

@category Object


类型：Function


参数列表：

- obj(`O`, `必须`) 


- keys(`T[]`, `必须`) 


- omitUndefined(`boolean`, `可选`) 


### partition


Divide an array into two parts by a filter function

@category Array


类型：Function


示例：
const [odd, even] = partition([1, 2, 3, 4], i => i % 2 != 0)


参数列表：

- array(`readonly T[]`, `必须`) 


- f1(`PartitionFilter<T>`, `必须`) 


### partition


类型：Function


参数列表：

- array(`readonly T[]`, `必须`) 


- f1(`PartitionFilter<T>`, `必须`) 


- f2(`PartitionFilter<T>`, `必须`) 


### partition


类型：Function


参数列表：

- array(`readonly T[]`, `必须`) 


- f1(`PartitionFilter<T>`, `必须`) 


- f2(`PartitionFilter<T>`, `必须`) 


- f3(`PartitionFilter<T>`, `必须`) 


### partition


类型：Function


参数列表：

- array(`readonly T[]`, `必须`) 


- f1(`PartitionFilter<T>`, `必须`) 


- f2(`PartitionFilter<T>`, `必须`) 


- f3(`PartitionFilter<T>`, `必须`) 


- f4(`PartitionFilter<T>`, `必须`) 


### partition


类型：Function


参数列表：

- array(`readonly T[]`, `必须`) 


- f1(`PartitionFilter<T>`, `必须`) 


- f2(`PartitionFilter<T>`, `必须`) 


- f3(`PartitionFilter<T>`, `必须`) 


- f4(`PartitionFilter<T>`, `必须`) 


- f5(`PartitionFilter<T>`, `必须`) 


### partition


类型：Function


参数列表：

- array(`readonly T[]`, `必须`) 


- f1(`PartitionFilter<T>`, `必须`) 


- f2(`PartitionFilter<T>`, `必须`) 


- f3(`PartitionFilter<T>`, `必须`) 


- f4(`PartitionFilter<T>`, `必须`) 


- f5(`PartitionFilter<T>`, `必须`) 


- f6(`PartitionFilter<T>`, `必须`) 


### range


Genrate a range array of numbers. The `stop` is exclusive.

@category Array


类型：Function


参数列表：

- stop(`number`, `必须`) 


### range


类型：Function


参数列表：

- start(`number`, `必须`) 


- stop(`number`, `必须`) 


- step(`number`, `可选`) 


### remove


Remove an item from Array

@category Array


类型：Function


参数列表：

- array(`T[]`, `必须`) 


- value(`T`, `必须`) 


### slash


Replace backslash to slash

@category String


类型：Function


参数列表：

- str(`string`, `必须`) 


### sleep


Promised `setTimeout`


类型：Function


参数列表：

- ms(`number`, `必须`) 


- callback(`Fn<any>`, `可选`) 


### sum


类型：Function


参数列表：

- args(`number[] | number[][]`, `必须`) 


### tap


Pass the value through the callback, and return the value


类型：Function


示例：
```
function createUser(name: string): User {
  return tap(new User, user => {
    user.name = name
  })
}
```


参数列表：

- value(`T`, `必须`) 


- callback(`(value: T) => void`, `必须`) 


### template


Dead simple template engine, just like Python's `.format()`


类型：Function


示例：
```
const result = template(
  'Hello {0}! My name is {1}.',
  'Inès',
  'Anthony'
) // Hello Inès! My name is Anthony.
```


参数列表：

- str(`string`, `必须`) 


- args(`any[]`, `必须`) 


### toArray


Convert `Arrayable<T>` to `Array<T>`

@category Array


类型：Function


参数列表：

- array(`Nullable<Arrayable<T>>`, `可选`) 


### uniq


Unique an Array

@category Array


类型：Function


参数列表：

- array(`readonly T[]`, `必须`) 

