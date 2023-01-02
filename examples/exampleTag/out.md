
### add


Description：

Adds two numbers together.


Kind：Function


Example：
Here's a simple example:
```ts
// Prints "2":
console.log(add(1,1));
```


Example：
Here's an example with negative numbers:
```ts
// Prints "0":
console.log(add(1,-1));
```

@include ./demo.ts


Parameters：

- a(number, necessary) 


- b(number, necessary) 


### parseFile


Description：

Parses a JSON file.


Kind：Function


Example：
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


Parameters：

- path(string, necessary) Full path to the file.





Returns：An object containing the JSON data.
