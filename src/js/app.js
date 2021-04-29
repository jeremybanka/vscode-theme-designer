/* eslint-disable func-names */

// STYLE
import "../styles/vs-code.scss"
import "../styles/controls.scss"
import "../styles/syntax.scss"
import "../styles/export.scss"
import "../styles/font-face.scss"
// UI
import $ from "jquery"
// BIZ
import startingSpec from "./starting-spec"
import Theme from "./theme"

function $paintVsCode(target, value) {
  if (target === `hover-bg`) {
    $(`#vscode`).css(`--hover-bg`, value)
  } else if (target.slice(-2) === `bg`) {
    $(`.${target}`).css(`background`, value)
  } else {
    $(`.${target}`).css(`color`, value)
  }
}

$(() => {
  let themeSpec = startingSpec
  const foundSave = window.localStorage.getItem(`theme-spec`)
  if (foundSave) {
    themeSpec = JSON.parse(foundSave)
  } else {
    window.localStorage.setItem(`theme-spec`, JSON.stringify(themeSpec))
  }

  const theme = new Theme(`Cool Name`, `dark`)

  const $colorInputs = $(`input[type=color]`)

  $colorInputs.each(function () {
    const $colorInput = $(this)
    const colorInputId = $colorInput.attr(`id`)
    const $label = $(`label[for='${colorInputId}']`)
    const key = $label.text()
    const value = themeSpec[key]
    $colorInput.val(value)
    const target = colorInputId
    $paintVsCode(target, value)
  })

  // console.log(themeSpec)

  $(`input[type=color]`).on(`change`, event => {
    const colorInput = event.target
    const { value, id } = colorInput
    const $label = $(`label[for='${id}']`)
    const target = id
    $paintVsCode(target, value)

    const key = $label.text()
    themeSpec[key] = value
    console.log(key, themeSpec[key])
    window.localStorage.setItem(`theme-spec`, JSON.stringify(themeSpec))
  })
  $(`button#export`).on(`click`, event => {
    theme.setColors(themeSpec)
    window.localStorage.setItem(`theme`, JSON.stringify(theme))
    const url = `./export.html`
    window.open(url, `_blank`)
  })
})

if ($(`body#export`)) {
  const savedTheme = window.localStorage.getItem(`theme`)
  if (savedTheme) {
    $(`#theme`).append(savedTheme)
  }
}
