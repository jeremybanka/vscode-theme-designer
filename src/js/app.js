// STYLE
import "../styles/core.scss"
import "../styles/font-face.scss"
// BIZ
import $ from "jquery"

function getThemeKeyAndValue($formControl) {}

$(() => {
  const themeSpec = {}
  const $formControls = $(`.form-control`)
  const arrayColors = getThemeKeyAndValue($formControls)

  console.log($formControls)

  $formControls.each(function () {
    console.log(this)
    const formControlId = this.attr(`id`)
    const $label = $(`label[for='${formControlId}']`)
    const key = $label.text()
    const value = this.val()
    themeSpec[key] = value
  })

  console.log(themeSpec)

  // arrayColors.forEach(element => {
  //   // element=[k1,v1] => k1, v1
  //   const string = arrayColors.join(` `)
  //   let kn

  //   Object.assign(themeSpec, element)
  //   console.log(themeSpec)
  // })
})
