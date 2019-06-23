"use strict"

const tfc = require("@tensorflow/tfjs-core")

const diag = (x /* Tensor1d */) => {
  return tfc.tidy(() => {
    const n = x.shape[0]
    let rows = []
    for (let i = 0; i < n; i++) {
      const tFront = tfc.zeros([i])
      const tValue = tfc.gather(x, [i])
      const tBack = tfc.zeros([n - i - 1])
      rows.push(tFront.concat(tValue.concat(tBack)))
    }
    return tfc.stack(rows)
  })
}

module.exports = diag