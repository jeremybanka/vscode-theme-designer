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
import Package from "./package"

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
  let packageSpec = {
    userName: ``,
    themeName: ``,
  }
  const foundThemeSave = window.localStorage.getItem(`theme-spec`)
  if (foundThemeSave) {
    themeSpec = JSON.parse(foundThemeSave)
  } else {
    window.localStorage.setItem(`theme-spec`, JSON.stringify(themeSpec))
  }
  const foundPackageSave = window.localStorage.getItem(`package-spec`)
  if (foundPackageSave) {
    packageSpec = JSON.parse(foundPackageSave)
  } else {
    window.localStorage.setItem(`package-spec`, JSON.stringify(packageSpec))
  }
  const theme = new Theme(`Cool Name`, `dark`)
  const userPackage = new Package()
  console.log(packageSpec)
  $(`#user-name`).val(packageSpec.userName)
  $(`#theme-name`).val(packageSpec.themeName)

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

  $(`.userInfo`).on(`change`, () => {
    const userName = $(`#user-name`).val()
    const themeName = $(`#theme-name`).val()
    packageSpec.userName = userName
    packageSpec.themeName = themeName
    window.localStorage.setItem(`package-spec`, JSON.stringify(packageSpec))
    console.log(packageSpec)
  })
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
  $(`button#export`).on(`click`, () => {
    userPackage.setUserName(packageSpec.userName)
    userPackage.setThemeName(packageSpec.themeName)
    console.log(userPackage)
    window.localStorage.setItem(`package`, JSON.stringify(userPackage))
    theme.setColors(themeSpec)
    window.localStorage.setItem(`theme`, JSON.stringify(theme))
    const url = `./export.html`
    window.open(url, `_blank`)
  })
})

if ($(`body#export`)) {
  const savedPackage = window.localStorage.getItem(`package`)
  if (savedPackage) {
    $(`#package`).append(savedPackage)
  }
  const savedTheme = window.localStorage.getItem(`theme`)
  if (savedTheme) {
    $(`#theme`).append(savedTheme)
  }
}
