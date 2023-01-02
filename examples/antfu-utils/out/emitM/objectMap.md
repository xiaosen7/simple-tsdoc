
### objectMap


Map key/value pairs for an object, and construct a new one

@category Object

Transform:


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

