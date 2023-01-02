
### parseFile


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

- path(`string`, `necessary`) Full path to the file.





Returns：An object containing the JSON data.
