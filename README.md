#### VS Code Theme Designer

_by Jeremy Banka, Adrian Camacho, Sammai Gutierrez, Rami Ahmed, and Maxwell Meyer_

## Technologies Used

- 📄 HTML5
- 💅 SASS ➡️ CSS3
- ▶️ ES6 🛠 Airbnb ESLint (thanks to VS Code ext. ESLint by Dirk Baeumer)
- ❓ jest 26.6.3
- 📦 Webpack 5 for bundling my js modules.
- 👨🏻‍🎨 Adobe Illustrator (comps/planning)
- 🅰️ Fonts and Icons by me using Georg Seifert's _superb_ 💚[Glyphs.app](https://glyphsapp.com)💚

## Description

_..._

## Setup/Installation Requirements

#### Resources

- [Packaging an extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Example Themes](https://github.com/jeremybanka/vscode_themes)
- [Token Reference](https://code.visualstudio.com/api/references/theme-color)
- [How to Inspect VS Code](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#scope-inspector)

#### First Things First

- Clone this repo: `$ git clone https://github.com/jeremybanka/vscode-theme-designer`
- Get things installed: `$ npm i`
- Get things built: `$ npm run start`
- This should prompt your browser to open the project on 8080. It's actually pointed at the dist folder, and will update live.

#### ESLint/Prettier Tooling

- Use VS Code.
- Install VS Code extension "ESLint" by Dirk Baeumer.
- Install VS Code extension "Prettier"
- Ensure that your VS Code settings.json has the following properties set:
  ```
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
  ```
- Now, my meticulously selected formatting preferences will be applied to files in this repo any time you hit save!

## Known Bugs

- none identified

## License

This software is licensed under GPL 3.0.

## Contact Information

adriancamacho18 at gmail dot com
hello at jeremybanka dot com
maxreadswell at gmail dot com
ramiahmedportland at gmail dot com
sammaigutierrez at gmail dot com
