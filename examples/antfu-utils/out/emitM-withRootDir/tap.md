
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

