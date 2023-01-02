
### at


Get nth item of Array. Negative for backward


Kind：Function


Parameters：

- array(`readonly []`, `necessary`) 


- index(`number`, `necessary`) 


### at


Kind：Function


Parameters：

- array(`readonly T[]`, `necessary`) 


- index(`number`, `necessary`) 


### batchInvoke


Call every function in an array


Kind：Function


Parameters：

- functions(`Nullable<Fn>[]`, `necessary`) 


### clamp


Kind：Function


Parameters：

- n(`number`, `necessary`) 


- min(`number`, `necessary`) 


- max(`number`, `necessary`) 


### clampArrayRange


Clamp a number to the index ranage of an array


Kind：Function


Parameters：

- n(`number`, `necessary`) 


- arr(`readonly unknown[]`, `necessary`) 


### clearUndefined


Clear undefined fields from an object. It mutates the object


Kind：Function


Parameters：

- obj(`T`, `necessary`) 


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


### deepMerge


Deep merge :P


Kind：Function


Parameters：

- target(`T`, `necessary`) 


- sources(`S[]`, `necessary`) 


### ensurePrefix


Ensure prefix of a string


Kind：Function


Parameters：

- prefix(`string`, `necessary`) 


- str(`string`, `necessary`) 


### flattenArrayable


Convert `Arrayable<T>` to `Array<T>` and flatten it


Kind：Function


Parameters：

- array(`Nullable<Arrayable<T | Array<T>>>`, `optional`) 


### hasOwnProperty


Determines whether an object has a property with the specified name


Kind：Function


See：
https://eslint.org/docs/rules/no-prototype-builtins


Parameters：

- obj(`T`, `necessary`) 


- v(`PropertyKey`, `necessary`) 


### invoke


Call the function


Kind：Function


Parameters：

- fn(`Fn`, `necessary`) 


### isKeyOf


Type guard for any key, `k`. Marks `k` as a key of `T` if `k` is in `obj`.


Kind：Function


Parameters：

- obj(`T`, `necessary`) object to query for key `k`




- k(`keyof any`, `necessary`) key to check existence in `obj`



### isTruthy


Type guard to filter out falsy values


Kind：Function


Example：
array.filter(isTruthy)


Parameters：

- v(`T`, `necessary`) 


### last


Get last item


Kind：Function


Parameters：

- array(`readonly []`, `necessary`) 


### last


Kind：Function


Parameters：

- array(`readonly T[]`, `necessary`) 


### mergeArrayable


Use rest arguments to merge arrays


Kind：Function


Parameters：

- args(`Nullable<Arrayable<T>>[]`, `necessary`) 


### move


Move element in an Array


Kind：Function


Parameters：

- arr(`T[]`, `necessary`) 


- from(`number`, `necessary`) 


- to(`number`, `necessary`) 


### noNull


Type guard to filter out null values


Kind：Function


Example：
array.filter(noNull)


Parameters：

- v(`T | null`, `necessary`) 


### notNullish


Type guard to filter out null-ish values


Kind：Function


Example：
array.filter(notNullish)


Parameters：

- v(`T | null | undefined`, `necessary`) 


### notUndefined


Type guard to filter out null-ish values


Kind：Function


Example：
array.filter(notUndefined)


Parameters：

- v(`T`, `necessary`) 


### objectEntries


Strict typed `Object.entries`


Kind：Function


Parameters：

- obj(`T`, `necessary`) 


### objectKeys


Strict typed `Object.keys`


Kind：Function


Parameters：

- obj(`T`, `necessary`) 


### objectMap


Map key/value pairs for an object, and construct a new one


Kind：Function


Example：
```
objectMap({ a: 1, b: 2 }, (k, v) => [k.toString().toUpperCase(), v.toString()])
// { A: '1', B: '2' }
```

Swap key/value:


Example：
```
objectMap({ a: 1, b: 2 }, (k, v) => [v, k])
// { 1: 'a', 2: 'b' }
```

Filter keys:


Example：
```
objectMap({ a: 1, b: 2 }, (k, v) => k === 'a' ? undefined : [k, v])
// { b: 2 }
```


Parameters：

- obj(`Record<K, V>`, `necessary`) 


- fn(`(key: K, value: V) => [NK, NV] | undefined`, `necessary`) 


### objectPick


Create a new subset object by giving keys


Kind：Function


Parameters：

- obj(`O`, `necessary`) 


- keys(`T[]`, `necessary`) 


- omitUndefined(`boolean`, `optional`) 


### partition


Divide an array into two parts by a filter function


Kind：Function


Example：
const [odd, even] = partition([1, 2, 3, 4], i => i % 2 != 0)


Parameters：

- array(`readonly T[]`, `necessary`) 


- f1(`PartitionFilter<T>`, `necessary`) 


### partition


Kind：Function


Parameters：

- array(`readonly T[]`, `necessary`) 


- f1(`PartitionFilter<T>`, `necessary`) 


- f2(`PartitionFilter<T>`, `necessary`) 


### partition


Kind：Function


Parameters：

- array(`readonly T[]`, `necessary`) 


- f1(`PartitionFilter<T>`, `necessary`) 


- f2(`PartitionFilter<T>`, `necessary`) 


- f3(`PartitionFilter<T>`, `necessary`) 


### partition


Kind：Function


Parameters：

- array(`readonly T[]`, `necessary`) 


- f1(`PartitionFilter<T>`, `necessary`) 


- f2(`PartitionFilter<T>`, `necessary`) 


- f3(`PartitionFilter<T>`, `necessary`) 


- f4(`PartitionFilter<T>`, `necessary`) 


### partition


Kind：Function


Parameters：

- array(`readonly T[]`, `necessary`) 


- f1(`PartitionFilter<T>`, `necessary`) 


- f2(`PartitionFilter<T>`, `necessary`) 


- f3(`PartitionFilter<T>`, `necessary`) 


- f4(`PartitionFilter<T>`, `necessary`) 


- f5(`PartitionFilter<T>`, `necessary`) 


### partition


Kind：Function


Parameters：

- array(`readonly T[]`, `necessary`) 


- f1(`PartitionFilter<T>`, `necessary`) 


- f2(`PartitionFilter<T>`, `necessary`) 


- f3(`PartitionFilter<T>`, `necessary`) 


- f4(`PartitionFilter<T>`, `necessary`) 


- f5(`PartitionFilter<T>`, `necessary`) 


- f6(`PartitionFilter<T>`, `necessary`) 


### range


Genrate a range array of numbers. The `stop` is exclusive.


Kind：Function


Parameters：

- stop(`number`, `necessary`) 


### range


Kind：Function


Parameters：

- start(`number`, `necessary`) 


- stop(`number`, `necessary`) 


- step(`number`, `optional`) 


### remove


Remove an item from Array


Kind：Function


Parameters：

- array(`T[]`, `necessary`) 


- value(`T`, `necessary`) 


### slash


Replace backslash to slash


Kind：Function


Parameters：

- str(`string`, `necessary`) 


### sleep


Promised `setTimeout`


Kind：Function


Parameters：

- ms(`number`, `necessary`) 


- callback(`Fn<any>`, `optional`) 


### sum


Kind：Function


Parameters：

- args(`number[] | number[][]`, `necessary`) 


### tap


Pass the value through the callback, and return the value


Kind：Function


Example：
```
function createUser(name: string): User {
  return tap(new User, user => {
    user.name = name
  })
}
```


Parameters：

- value(`T`, `necessary`) 


- callback(`(value: T) => void`, `necessary`) 


### template


Dead simple template engine, just like Python's `.format()`


Kind：Function


Example：
```
const result = template(
  'Hello {0}! My name is {1}.',
  'Inès',
  'Anthony'
) // Hello Inès! My name is Anthony.
```


Parameters：

- str(`string`, `necessary`) 


- args(`any[]`, `necessary`) 


### toArray


Convert `Arrayable<T>` to `Array<T>`


Kind：Function


Parameters：

- array(`Nullable<Arrayable<T>>`, `optional`) 


### uniq


Unique an Array


Kind：Function


Parameters：

- array(`readonly T[]`, `necessary`) 

