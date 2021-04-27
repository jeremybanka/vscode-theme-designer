export default {
  "window-bg": [
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
  "window-fg": [
    // scopeB-777
    `tab.activeForeground`,
    `tab.inactiveForeground`,
    `activityBar.foreground`,
    `statusBar.foreground`,
    `statusBar.noFolderForeground`,
    `sideBarTitle.foreground`,
    `sideBar.foreground`,
    `list.activeSelectionForeground`,
  ],
  "main-bg": [
    // scopeC-fff
    `editor.background`,
    `tab.activeBackground`,
    `list.activeSelectionBackground`,
    `minimap.background`,
  ],
  "main-fg": [`editor.foreground`],
  "badge-bg": [
    // scopeD-000
    `editorIndentGuide.activeBackground`,
    `activityBarBadge.background`,
  ],
  "hover-bg": [
    // scopeE-e2e2e2
    `tab.hoverBackground`,
    `list.focusBackground`,
    `list.inactiveSelectionBackground`,
    `list.inactiveFocusBackground`,
    `list.hoverBackground`,
  ],
  "info-fg": [
    // 00b4f0
    `progressBar.background`,
    `gitDecoration.addedResourceForeground`,
    `gitDecoration.untrackedResourceForeground`,
  ],
  "linenumber-fg": [`editorLineNumber.foreground`], // ccc
  "indent-bg": [`editorIndentGuide.background`], // aaa
  "highlight-bg": [
    // 00b4f011
    `editor.selectionBackground`,
    `editor.selectionHighlightBackground`,
    `editor.wordHighlightBackground`,
  ],
  "drop-bg": [
    // 00000011
    `editorGroup.dropBackground`,
  ],
  "scrollbar": [
    // aaaaaa99-aaaaaa66-aaaaaa77
    `scrollbarSlider.activeBackground`,
    `scrollbarSlider.background`,
    `scrollbarSlider.hoverBackground`,
  ],
  "windowwarn-fg": [
    // scopeF-f506
    `list.invalidItemForeground`,
    `list.warningForeground`,
  ],
  "windowerror-fg": [
    // scopeF-f056 ff005566
    `list.errorForeground`,
  ],
  "mainerror-fg": [
    // f05
    `editorError.foreground`,
    {
      name: `Invalid`,
      scope: [`invalid`, `invalid.illegal`, `token.error-token`],
    },
  ],
  "mainwarn-fg": [
    // f50
    `editorWarning.foreground`,
  ],
  "modified-fg": [
    // d2aa5a
    `gitDecoration.modifiedResourceForeground`,
  ],
  "deleted-fg": [
    // 960032
    `gitDecoration.deletedResourceForeground`,
  ],
  "ignored-fg": [
    // 9896a288
    `gitDecoration.ignoredResourceForeground`,
  ],
  "conflicting-fg": [
    // 000
    `gitDecoration.conflictingResourceForeground`,
  ],
  "comment-fg": [
    // 999
    {
      name: `Comment`,
      scope: [`comment`, `punctuation.definition.comment`],
    },
  ],
  "general-fg": [
    // 555
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
  ],
  "tag-fg": [
    // 000
    {
      name: `Tag`,
      scope: ["entity.name.tag", "meta.tag.sgml", "markup.deleted.git_gutter"],
    },
  ],
  //ff8269
  "variable-fg": [
    {
    "name": "Block Level Variables",
    "scope": ["meta.block variable.other"],
    }
  ],
  "function-fg": [
    // ff6496
    {
      name: "Function, Special Method",
      scope: [
        "entity.name.function",
        "meta.function-call",
        "variable.function",
        "support.function",
        "keyword.other.special-method",
      ],
    },
  ],
  "other-variable-fg": [
    // 956
    {
      name: "Other Variable, String Link",
      scope: ["support.other.variable", "string.other.link"],
    },
  ],
  //00a0f0
  "declaration-fg": [
    {
    "name": "Number, Constant, Function Argument, Tag Attribute, Embedded",
    "scope": [
      "constant.numeric",
      "constant.language",
      "support.constant",
      "constant.character",
      "constant.escape",
      "variable.parameter",
      "keyword.other.unit",
      "keyword.other"
    ],
  }
  ],
  "string-fg": [
    // 555
    {
      name: "String, Symbols, Inherited Class, Markup Heading",
      scope: [
        "string",
        "constant.other.symbol",
        "constant.other.key",
        "entity.other.inherited-class",
        "markup.heading",
        "markup.inserted.git_gutter",
        "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
      ],
    },
  ],

  //ff6496
  "support-fg": [
    {
    "name": "Class, Support",
    "scope": [
      "entity.name",
      "support.type",
      "support.class",
      "support.orther.namespace.use.php",
      "meta.use.php",
      "support.other.namespace.php",
      "markup.changed.git_gutter",
      "support.type.sys-types"
    ],
  }
  ],
  "enitity-fg": [
    // ff8269
    {
      name: "Entity Types",
      scope: ["support.type"],
    },
  ],
  //777
  "support-fg": [
    {
    "name": "CSS Class and Support",
    "scope": [
      "source.css support.type.property-name",
      "source.sass support.type.property-name",
      "source.scss support.type.property-name",
      "source.less support.type.property-name",
      "source.stylus support.type.property-name",
      "source.postcss support.type.property-name"
    ],
  }
  ],
  "sub-methods-fg": [
    // 00a0f0
    {
      name: "Sub-methods",
      scope: [
        "entity.name.module.js",
        "variable.import.parameter.js",
        "variable.other.class.js",
      ],
    },
    {
      name: "Language methods",
      scope: ["variable.language"],
    },
    {
      name: "entity.name.method.js",
      scope: ["entity.name.method.js"],
    },
  ],
  //00d2af
  "method-fg": [
    {
    "name": "meta.method.js",
    "scope": [
      "meta.class-method.js entity.name.function.js",
      "variable.function.constructor"
    ],
    }
  ],
  "attributes-fg": [
    // ff8269
    {
      name: "Attributes",
      scope: ["entity.other.attribute-name"],
    },
  ],
  //ffb92d
  "html-fg": [
    {
    "name": "HTML Attributes",
    "scope": [
      "text.html.basic entity.other.attribute-name.html",
      "text.html.basic entity.other.attribute-name"
    }
  ],
  ],
  "css-classes-fg": [
    // ff8269
    {
      name: "CSS Classes",
      scope: ["entity.other.attribute-name.class"],
    },
  ],
  "inserted-fg": [
    // 28a08c
    {
      name: "Inserted",
      scope: ["markup.inserted"],
    },
    {
      name: "CSS ID's",
      scope: ["source.sass keyword.control"],
    },
  ],
  "deleted-fg": [
    // 960032
    {
      name: "Deleted",
      scope: ["markup.deleted"],
    },
  ],
  //9678f0
  "changed-expression-fg": [
    {
      name: "Changed",
      scope: ["markup.changed"],
    },
    {
      name: "Regular Expressions",
      scope: ["string.regexp"],
    },
  ],
  "escape-characters-fg": [
    // 6450c8
    {
      name: "Escape Characters",
      scope: ["constant.character.escape"],
    },
  ],
  "url-fs": [
    // underline
    {
      name: "URL",
      scope: ["*url*", "*link*", "*uri*"],
    },
  ],
  "decorators-fg": [
    // b6b4c0
    {
      "name": "Decorators",
      "scope": [
        "tag.decorator.js entity.name.tag.js",
        "tag.decorator.js punctuation.definition.tag.js"
      ],
    },
  ],
  "bind-operator-fg": [
    // 5000f0
    {
      "name": "ES7 Bind Operator",
      "scope": [
        "source.js constant.other.object.key.js string.unquoted.label.js"
      ],
    },
  ],
  "es7-bind-operator-fg": [
    // 5000f0
    {
      "name": "ES7 Bind Operator",
      "scope": [
        "source.js constant.other.object.key.js string.unquoted.label.js"
      ],
    },
  ],
  "json-key-fg": [
    // 00a0f0
    {
      "name": "JSON Key - Level 0",
      "scope": [
        "source.json meta.structure.dictionary.json support.type.property-name.json"
      ],
    },
    {
      "name": "JSON Key - Level 1",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
    },
    {
      "name": "JSON Key - Level 2",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
    },
    {
      "name": "JSON Key - Level 3",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
    },
    {
      "name": "JSON Key - Level 4",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
    },
    {
      "name": "JSON Key - Level 5",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
    },
    {
      "name": "JSON Key - Level 6",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
    },
    {
      "name": "JSON Key - Level 7",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
    },
    {
      "name": "JSON Key - Level 8",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
    },
  ],
  
}
