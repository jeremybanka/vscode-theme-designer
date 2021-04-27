import tokenScopes from "./token-scopes"

export default class Theme {
  constructor(name, type) {
    this.name = name
    this.type = type
    this.colors = {}
    this.tokenColors = []
  }

  setColors(spec) {
    const entries = Object.entries(spec)
    entries.forEach(entry => {
      console.log(entry)
      const [target, color] = entry
      const displayLocations = tokenScopes[target]
      console.log(displayLocations)
      displayLocations.forEach(displayLocation => {
        switch (typeof displayLocation) {
          case `string`:
            this.colors[displayLocation] = color
            break
          case `object`:
            displayLocation.settings = {}
            displayLocation.settings.foreground = color
            this.tokenColors.push(displayLocation)
            break
          default:
            throw new Error(`strange displayLocation type`)
        }
      })
    })
  }
}
// TURN THIS
// {
//   name: `Invalid`,
//   scope: [`invalid`, `invalid.illegal`, `token.error-token`],
// },
// INTO THIS
// {
//   "name": "Invalid",
//   "scope": ["invalid", "invalid.illegal", "token.error-token"],
//   "settings": {
//     "foreground": PUT COLOR HERE
//   }
// },
