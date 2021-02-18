import Ajv from "../dist/ajv.js"
import assert from "assert"

describe("using Ajv with native ES modules", () => {
  describe("draft-07", () => {
    it("should validate", () => test(Ajv))
    it("should be exported as .default", () => {
      assert.strictEqual(Ajv, Ajv.default)
    })
  })

  function test(_Ajv) {
    const ajv = new _Ajv()
    const validate = ajv.compile({type: "number"})
    assert.strictEqual(validate(1), true)
    assert.strictEqual(validate("1"), false)
  }
})
