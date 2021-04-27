import Theme from "../src/js/theme"

describe(`new Theme()`, () => {
  it(`should create an object containing 4 keys`, () => {
    const output = new Theme()
    const expected = { name: ``, type: ``, colors: ``, tokenColors: `` }
    expect(output).toEqual(expected)
  })
})
