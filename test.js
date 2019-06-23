"use strict"

const test = require("tape")
const tfc = require("@tensorflow/tfjs-core")
const diag = require(".")

test("construct diag", (t) => {
  const input = tfc.tensor1d([1, 2, 3])
  const expectedOutput = tfc.tensor2d(
    [
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3],
    ]
  )

  const arrayEqual = (a, b) => {
    for(let i = 0; i < a.length; i++) {
      t.equal(a[i], b[i])
    }
  }

  const result = diag(input)
  arrayEqual(result.flatten().arraySync(), expectedOutput.flatten().arraySync())
  t.end()
})