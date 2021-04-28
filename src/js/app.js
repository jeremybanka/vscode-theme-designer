// STYLE
import "../styles/vs-code.scss"
import "../styles/controls.scss"
import "../styles/syntax.scss"
import "../styles/font-face.scss"
// UI
import $ from "jquery"
// BIZ
import Theme from "./theme"

$(() => {
  const themeSpec = {}
  const $formControls = $(`.form-control`)

  // console.log($formControls)

  $formControls.each(function () {
    const $formControl = $(this)
    const formControlId = $formControl.attr(`id`)
    const $label = $(`label[for='${formControlId}']`)
    const key = $label.text()
    const value = $formControl.val()
    themeSpec[key] = value
  })

  console.log(themeSpec)

  const theme = new Theme(`Cool Name`, `dark`)
  theme.setColors(themeSpec)
  console.log(theme)

  // arrayColors.forEach(element => {
  //   // element=[k1,v1] => k1, v1
  //   const string = arrayColors.join(` `)
  //   let kn

  //   Object.assign(themeSpec, element)
  //   console.log(themeSpec)
  // })
})
