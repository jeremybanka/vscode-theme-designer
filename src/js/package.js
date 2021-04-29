export default class Package {
  constructor() {
    this.name = ``
    this.displayName = ``
    this.description = ``
    this.publisher = ``
    this.version = `0.0.1`
    this.engines = {
      vscode: `^1.28.0`,
    }
    this.categories = [``]
    this.contributes = {
      themes: [
        {
          label: ``,
          uiTheme: `vs`,
          path: ``,
        },
      ],
    }
  }

  setUserName(name) {
    this.publisher = name
  }

  setThemeName(name) {
    const slugName = name.toLowerCase().replace(/ /g, `-`)
    this.name = slugName
    this.displayName = name
    this.contributes.themes[0].label = name
    this.contributes.themes[0].path = `./${slugName}-color-theme.json`
  }
}
