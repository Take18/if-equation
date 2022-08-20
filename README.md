# USAGE

e.g.
```
const result = ifeq( condition1 ).then( () => result1 )
              .else( condition2 ).then( () => result2 )
              .else( condition3 ).then( () => result3 )
              .else().then( () => resultDefault )
              .data
```

Now if condition1 is true, result is result1. Otherwise if condition2 is true, result is result2. Otherwise if condition3 is true, result is result3. Otherwise, result is resultDefault.  
This is the basic usage.  

e.g.
```
const result = ifeq( condition1 ).then( () => result1 )
              .data
```

Now if condition1 is true, result is result1. But else, result is undefined.  


e.g.
```
const result = ifeq( condition1 ).then( () => result1 )
              .else( condition2 ).then( () => result2 )
              .data
```

As you expect, result is result1 when condition1 is true, is result2 when otherwise condition2 is true, is unndefined when otherwise.
