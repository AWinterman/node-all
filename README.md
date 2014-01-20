Check if all values in an array are truthy:

npm install array-all

```
var all = require('array-all')

all([1, 2, 3, 4]) // -> true 
all([0, 1, 2, 3]) // -> false
all(['', 'hello', 'woah']) // -> false
all(['what a wonderful life')
```


