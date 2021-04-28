/* eslint-disable func-names */

// STYLE
import "../styles/vs-code.scss"
import "../styles/controls.scss"
import "../styles/syntax.scss"
import "../styles/font-face.scss"
// UI
import $ from "jquery"
// BIZ
import startingSpec from "./starting-spec"
import Theme from "./theme"

$(() => {
  const themeSpec = startingSpec
  const $formControls = $(`.form-control`)

  $formControls.each(function () {
    const $formControl = $(this)
    const formControlId = $formControl.attr(`id`)
    const $label = $(`label[for='${formControlId}']`)
    const key = $label.text()
    const value = themeSpec[key]
    $formControl.val(value)
  })

  // console.log(themeSpec)

  const theme = new Theme(`Cool Name`, `dark`)
  theme.setColors(themeSpec)
  console.log(theme)

  $(`.form-control`).on(`change`, event => {
    console.log(`form control changed`)
    console.log(event.target.value)
    const $label = $(`label[for='${event.target.id}']`)
    const key = $label.text()
    themeSpec[key] = event.target.value
    console.log(key, themeSpec[key])
    if (event.target.id.slice(-2) === `bg`) {
      $(`.${event.target.id}`).css(`background`, event.target.value)
    } else {
      $(`.${event.target.id}`).css(`color`, event.target.value)
    }
  })
})
