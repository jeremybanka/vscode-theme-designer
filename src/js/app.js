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
    window.localStorage.setItem(`theme-spec`, JSON.stringify(packageSpec))
  }

  const theme = new Theme(`Cool Name`, `dark`)
  const userPackage = new Package()

  const $formControls = $(`.form-control`)

  $formControls.each(function () {
    const $formControl = $(this)
    const formControlId = $formControl.attr(`id`)
    const $label = $(`label[for='${formControlId}']`)
    const key = $label.text()
    const value = themeSpec[key]
    $formControl.val(value)
  })

  $(`.userInfo`).on(`change`, event => {
    event.preventDefault()
    const userName = $(`#userName`).val()
    const themeName = $(`#themeName`).val()
    userPackage.setUserName(userName)
    userPackage.setThemeName(themeName)
  })

  $(`.form-control`).on(`change`, event => {
    const $label = $(`label[for='${event.target.id}']`)
    const key = $label.text()
    themeSpec[key] = event.target.value
    if (event.target.id.slice(-2) === `bg`) {
      $(`.${event.target.id}`).css(`background`, event.target.value)
    } else {
      $(`.${event.target.id}`).css(`color`, event.target.value)
    }
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
