import double from "../src/js/core"

describe(`double`, () => {
  it(`doubles a number`, () => {
    const input = 1
    const expected = 2
    expect(double(input)).toEqual(expected)
  })
})
