
### add


描述：
Adds two numbers together.


类型：Function


示例：
Here's a simple example:
```ts
// Prints "2":
console.log(add(1,1));
```


示例：
Here's an example with negative numbers:
```ts
// Prints "0":
console.log(add(1,-1));
```

@include ./demo.ts


参数列表：

- a(number, 必须) 


- b(number, 必须) 


### parseFile


描述：
Parses a JSON file.


类型：Function


示例：
Parsing a basic JSON file

Contents of `file.json`
```json
{
  "exampleItem": "text"
}
```

Usage
```ts
const result = parseFile("file.json");
```

Result
```ts
{
  exampleItem: 'text',
}
```


参数列表：

- path(string, 必须) Full path to the file.





返回：An object containing the JSON data.
