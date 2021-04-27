import Theme from "../src/js/theme"

describe(`new Theme()`, () => {
  it(`should create an object containing 4 keys`, () => {
    const output = new Theme()
    const expected = {
      name: undefined,
      type: undefined,
      colors: {},
      tokenColors: [],
    }
    expect(output).toEqual(expected)
  })
})

describe(`Theme.prototype.setColors`, () => {
  it(`fills the colors object in our theme`, () => {
    const spec = {
      "window-bg": `#f2f2f2`,
      "main-bg": `#fff`,
    }
    const theme = new Theme()
    theme.setColors(spec)
    const expected = {
      "editorGroupHeader.noTabsBackground": `#f2f2f2`,
      "input.background": `#f2f2f2`,
      "sideBar.background": `#f2f2f2`,
      "titleBar.inactiveBackground": `#f2f2f2`,
      "titleBar.activeBackground": `#f2f2f2`,
      "statusBar.background": `#f2f2f2`,
      "statusBar.noFolderBackground": `#f2f2f2`,
      "activityBar.background": `#f2f2f2`,
      "editorGroup.border": `#f2f2f2`,
      "tab.inactiveBackground": `#f2f2f2`,
      "tab.border": `#f2f2f2`,
      "editorGroupHeader.tabsBackground": `#f2f2f2`,
      "editor.background": `#fff`,
      "tab.activeBackground": `#fff`,
      "list.activeSelectionBackground": `#fff`,
      "minimap.background": `#fff`,
    }
    expect(theme.colors).toEqual(expected)
  })
  it(`adds to both colors and tokenColors`, () => {
    const spec = {
      "mainerror-fg": `#f05`,
    }
    const theme = new Theme()
    theme.setColors(spec)
    const expectedColors = {
      "editorError.foreground": `#f05`,
    }
    const expectedTokenColors = [
      {
        name: `Invalid`,
        scope: [`invalid`, `invalid.illegal`, `token.error-token`],
        settings: {
          foreground: `#f05`,
        },
      },
    ]
    expect(theme.colors).toEqual(expectedColors)
    expect(theme.tokenColors).toEqual(expectedTokenColors)
  })
})
