/* eslint-disable max-len */

export default {
  "Window Background": [
    // f2f2f2
    `editorGroupHeader.noTabsBackground`,
    `input.background`,
    `sideBar.background`,
    `titleBar.inactiveBackground`,
    `titleBar.activeBackground`,
    `statusBar.background`,
    `statusBar.noFolderBackground`,
    `activityBar.background`,
    `editorGroup.border`,
    `tab.inactiveBackground`,
    `tab.border`,
    `editorGroupHeader.tabsBackground`,
  ],
  "Window Text": [
    // scope B-777
    `tab.activeForeground`,
    `tab.inactiveForeground`,
    `activityBar.foreground`,
    `statusBar.foreground`,
    `statusBar.noFolderForeground`,
    `sideBarTitle.foreground`,
    `sideBar.foreground`,
    `list.activeSelectionForeground`,
    {
      name: `CSS Class and Support`,
      scope: [
        `source.css support.type.property-name`,
        `source.sass support.type.property-name`,
        `source.scss support.type.property-name`,
        `source.less support.type.property-name`,
        `source.stylus support.type.property-name`,
        `source.postcss support.type.property-name`,
      ],
    },
  ],
  "Editor Background": [
    // scopeC-fff
    `editor.background`,
    `tab.activeBackground`,
    `list.activeSelectionBackground`,
    `minimap.background`,
  ],
  "Editor Text": [
    // 555
    `editor.foreground`,
    {
      name: `Variables`,
      scope: [`variable`, `string constant.other.placeholder`],
    },
    {
      name: `Colors`,
      scope: [`constant.other.color`],
    },
    {
      name: `Keyword, Storage`,
      scope: [`keyword`, `storage.type`, `storage.modifier`],
    },
    {
      name: `Operator, Misc`,
      scope: [
        `keyword.control`,
        `constant.other.color`,
        `punctuation`,
        `meta.tag`,
        `punctuation.definition.tag`,
        `punctuation.separator.inheritance.php`,
        `punctuation.definition.tag.html`,
        `punctuation.definition.tag.begin.html`,
        `punctuation.definition.tag.end.html`,
        `punctuation.section.embedded`,
        `keyword.other.template`,
        `keyword.other.substitution`,
      ],
    },
    {
      name: `Markdown - Plain`,
      scope: [`text.html.markdown`, `punctuation.definition.list_item.markdown`],
    },
  ],
  "Notification Badge": [
    // 000
    `editorIndentGuide.activeBackground`,
    `activityBarBadge.background`,
  ],
  "List/Tab Hover Background": [
    // e2e2e2
    `tab.hoverBackground`,
    `list.focusBackground`,
    `list.inactiveSelectionBackground`,
    `list.inactiveFocusBackground`,
    `list.hoverBackground`,
  ],
  "Info/New": [
    // 00b4f0
    `progressBar.background`,
    `gitDecoration.addedResourceForeground`,
    `gitDecoration.untrackedResourceForeground`,
  ],
  "Line Number": [
    // ccc
    `editorLineNumber.foreground`,
  ],
  "Indent Grooves": [
    // aaa
    `editorIndentGuide.background`,
  ],
  "Highlighted Text Background": [
    // 00b4f011
    `editor.selectionBackground`,
    `editor.selectionHighlightBackground`,
    `editor.wordHighlightBackground`,
  ],
  "Drop Background": [
    // 00000011
    `editorGroup.dropBackground`,
  ],
  "Scrollbar": [
    // aaaaaa99-aaaaaa66-aaaaaa77
    `scrollbarSlider.activeBackground`,
    `scrollbarSlider.background`,
    `scrollbarSlider.hoverBackground`,
  ],
  "List Warning": [
    // scopeF-f506
    `list.invalidItemForeground`,
    `list.warningForeground`,
  ],
  "List Error": [
    // scopeF-f056 ff005566
    `list.errorForeground`,
  ],
  "Editor Error": [
    // f05
    `editorError.foreground`,
    {
      name: `Invalid`,
      scope: [`invalid`, `invalid.illegal`, `token.error-token`],
    },
  ],
  "Editor Warning": [
    // f50
    `editorWarning.foreground`,
  ],
  "Git: Modified": [
    // d2aa5a
    `gitDecoration.modifiedResourceForeground`,
  ],
  "Git: Deleted": [
    // 960032
    `gitDecoration.deletedResourceForeground`,
    {
      name: `Deleted`,
      scope: [`markup.deleted`],
    },
  ],
  "Git: Ignored": [
    // 9896a288
    `gitDecoration.ignoredResourceForeground`,
  ],
  "Git: Conflicting": [
    // 000
    `gitDecoration.conflictingResourceForeground`,
  ],
  "Comment": [
    // 999
    {
      name: `Comment`,
      scope: [`comment`, `punctuation.definition.comment`],
    },
  ],
  "Tag": [
    // 000
    {
      name: `Tag`,
      scope: [`entity.name.tag`, `meta.tag.sgml`, `markup.deleted.git_gutter`],
    },
    {
      name: `Markdown - Markup Raw Inline`,
      scope: [`text.html.markdown markup.inline.raw.markdown`],
    },
  ],
  "Variable Name": [
    // ff8269
    {
      name: `Block Level Variables`,
      scope: [`meta.block variable.other`],
    },
    {
      name: `Entity Types`,
      scope: [`support.type`],
    },
    {
      name: `Attributes`,
      scope: [`entity.other.attribute-name`],
    },
    {
      name: `CSS Classes`,
      scope: [`entity.other.attribute-name.class`],
    },
  ],
  "Function Name": [
    // ff6496
    {
      name: `Function, Special Method`,
      scope: [
        `entity.name.function`,
        `meta.function-call`,
        `variable.function`,
        `support.function`,
        `keyword.other.special-method`,
      ],
    },
  ],
  "Other Variable": [
    // 956
    {
      name: `Other Variable, String Link`,
      scope: [`support.other.variable`, `string.other.link`],
    },
  ],
  // 00a0f0
  "Number": [
    {
      name: `Number, Constant, Function Argument, Tag Attribute, Embedded`,
      scope: [
        `constant.numeric`,
        `constant.language`,
        `support.constant`,
        `constant.character`,
        `constant.escape`,
        `variable.parameter`,
        `keyword.other.unit`,
        `keyword.other`,
      ],
    },
    {
      name: `Sub-methods`,
      scope: [
        `entity.name.module.js`,
        `variable.import.parameter.js`,
        `variable.other.class.js`,
      ],
    },
    {
      name: `Language methods`,
      scope: [`variable.language`],
    },
    {
      name: `entity.name.method.js`,
      scope: [`entity.name.method.js`],
    },
  ],
  "String": [
    // 555
    {
      name: `String, Symbols, Inherited Class, Markup Heading`,
      scope: [
        `string`,
        `constant.other.symbol`,
        `constant.other.key`,
        `entity.other.inherited-class`,
        `markup.heading`,
        `markup.inserted.git_gutter`,
        `meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js`,
      ],
    },
  ],

  // ff6496
  "Support": [
    {
      name: `Class, Support`,
      scope: [
        `entity.name`,
        `support.type`,
        `support.class`,
        `support.orther.namespace.use.php`,
        `meta.use.php`,
        `support.other.namespace.php`,
        `markup.changed.git_gutter`,
        `support.type.sys-types`,
      ],
    },
  ],
  "Meta": [
    // 00d2af
    {
      name: `meta.method.js`,
      scope: [
        `meta.class-method.js entity.name.function.js`,
        `variable.function.constructor`,
      ],
    },
  ],
  "HTML Attributes": [
    {
      // ffb92d
      name: `HTML Attributes`,
      scope: [
        `text.html.basic entity.other.attribute-name.html`,
        `text.html.basic entity.other.attribute-name`,
      ],
    },
  ],
  "Inserted": [
    // 28a08c
    {
      name: `Inserted`,
      scope: [`markup.inserted`],
    },
    {
      name: `CSS ID's`,
      scope: [`source.sass keyword.control`],
    },
  ],
  // 9678f0
  "Changed": [
    {
      name: `Changed`,
      scope: [`markup.changed`],
    },
    {
      name: `Regular Expressions`,
      scope: [`string.regexp`],
    },
  ],
  "Escape Characters": [
    // 6450c8
    {
      name: `Escape Characters`,
      scope: [`constant.character.escape`],
    },
  ],
  "Decorators": [
    // b6b4c0
    {
      name: `Decorators`,
      scope: [
        `tag.decorator.js entity.name.tag.js`,
        `tag.decorator.js punctuation.definition.tag.js`,
      ],
    },
  ],
  "JSON Key": [
    // 00a0f0
    {
      name: `JSON Key - Level 0`,
      scope: [
        `source.json meta.structure.dictionary.json support.type.property-name.json`,
      ],
    },
    {
      name: `JSON Key - Level 1`,
      scope: [
        `source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
      ],
    },
    {
      name: `JSON Key - Level 2`,
      scope: [
        `source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
      ],
    },
    {
      name: `JSON Key - Level 3`,
      scope: [
        `source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
      ],
    },
    {
      name: `JSON Key - Level 4`,
      scope: [
        `source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
      ],
    },
    {
      name: `JSON Key - Level 5`,
      scope: [
        `source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
      ],
    },
    {
      name: `JSON Key - Level 6`,
      scope: [
        `source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
      ],
    },
    {
      name: `JSON Key - Level 7`,
      scope: [
        `source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
      ],
    },
    {
      name: `JSON Key - Level 8`,
      scope: [
        `source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json`,
      ],
    },
  ],
  "Markdown Heading": [
    // 5000f0
    {
      name: `Markdown - Heading`,
      scope: [
        `entity.name.section.markdown`,
        `markdown.heading`,
        `markup.heading | markup.heading entity.name`,
        `markup.heading.markdown punctuation.definition.heading.markdown`,
      ],
    },
    {
      name: `ES7 Bind Operator`,
      scope: [`source.js constant.other.object.key.js string.unquoted.label.js`],
    },
    {
      name: `ES7 Bind Operator`,
      scope: [`source.js constant.other.object.key.js string.unquoted.label.js`],
    },
  ],
  "Markup Italic": [
    // ff8269
    { name: `Markup - Italic`, scope: [`markup.italic`] },
  ],
  "Markup Bold": [
    // 5000f0
    { name: `Markup - Bold`, scope: [`markup.bold`, `markup.bold string`] },
    { name: `Markup - Table`, scope: [`markup.table`] },
    {
      name: `Markdown - Fenced Bode Block Variable`,
      scope: [
        `markup.raw.block.fenced.markdown`,
        `variable.language.fenced.markdown`,
        `punctuation.section.class.end`,
      ],
    },
  ],
  "Markup Underline": [
    // 00a0f0
    { name: `Markup - Bold`, scope: [`markup.bold`, `markup.bold string`] },
    { name: `Markdown - Link`, scope: [`string.other.link.title.markdown`] },
  ],
  "Markdown Other": [
    // 9896a2
    {
      name: `Markdown - Blockquote`,
      scope: [`markup.quote punctuation.definition.blockquote.markdown`],
    },
    {
      name: `Markdown - Link Description`,
      scope: [`string.other.link.description.title.markdown`],
    },
    {
      name: `Markdown - Fenced Language`,
      scope: [`variable.language.fenced.markdown`],
    },
    {
      name: `Markdown - Separator`,
      scope: [`meta.separator`],
    },
  ],
  "Markup In Markdown": [
    // 555
    {
      name: `Markdown - Markup Raw Inline Punctuation`,
      scope: [
        `text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown`,
      ],
    },
  ],
  "Markdown Link Anchor": [
    // 555
    {
      name: `Markdown - Link Anchor`,
      scope: [`constant.other.reference.link.markdown`],
    },
  ],
  "Markup In Markdown Punctuation": [
    // 555
    {
      name: `Markdown - Markup Raw Inline Punctuation`,
      scope: [
        `text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown`,
      ],
    },
  ],
  "Info": [
    // #6450c8
    {
      scope: `token.info-token`,
    },
  ],
  "Warn": [
    // #ff8269
    {
      scope: `token.warn-token`,
    },
  ],
  "Debug": [
    // #5a3cf0
    {
      scope: `token.debug-token`,
    },
  ],
}
