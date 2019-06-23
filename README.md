# tfjs-diag
Create a diagonal matrix (rank 2 Tensor) from a rank 1 Tensor

```js
const diag = require("tfjs-diag")
const input = tfc.tensor1d([1, 2, 3])
const result = diag(input)
// [
//   [1, 0, 0],
//   [0, 2, 0],
//   [0, 0, 3]
// ]
```