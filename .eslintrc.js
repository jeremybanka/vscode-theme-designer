module.exports = {
  extends: [`airbnb-base`, `prettier`],
  plugins: [`prettier`],
  parserOptions: {
    ecmaVersion: 12,
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  rules: {
    "arrow-parens": [`error`, `as-needed`],
    "comma-dangle": [
      `error`,
      {
        arrays: `always-multiline`,
        objects: `always-multiline`,
        imports: `always-multiline`,
        exports: `always-multiline`,
        functions: `only-multiline`,
      },
    ],
    "consistent-return": `off`,
    "curly": [`error`, `multi-line`, `consistent`],
    "function-paren-newline": `off`,
    "implicit-arrow-linebreak": `off`,
    "jsx-quotes": [`error`, `prefer-single`],
    "keyword-spacing": [
      `error`,
      {
        overrides: {
          if: { after: true },
          while: { after: true },
          for: { after: true },
          switch: { after: true },
          catch: { after: true },
        },
      },
    ],
    "max-classes-per-file": `off`,
    "max-len": [
      `error`,
      {
        code: 80,
        ignoreRegExpLiterals: true,
      },
    ],
    "no-confusing-arrow": `off`,
    "no-console": `off`,
    "no-continue": `off`,
    "no-else-return": [
      `error`,
      {
        allowElseIf: true,
      },
    ],
    "no-mixed-operators": `off`,
    "no-multi-spaces": [
      `error`,
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
          VariableDeclarator: true,
          ImportDeclaration: true,
        },
      },
    ],
    "no-nested-ternary": `off`,
    "no-param-reassign": `off`,
    "no-plusplus": `off`,
    "no-return-assign": `off`,
    "no-shadow": `off`,
    "no-undef-init": `off`,
    "no-underscore-dangle": `off`,
    "no-unused-expressions": [
      `error`,
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "no-use-before-define": `off`,
    "nonblock-statement-body-position": `off`,
    "object-curly-newline": [
      `error`,
      {
        consistent: true,
      },
    ],
    "operator-linebreak": [`error`, `after`],
    "prefer-destructuring": [
      `error`,
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "prettier/prettier": [`error`],
    "quotes": [`error`, `backtick`],
    "quote-props": [`error`, `consistent`, { unnecessary: false }],
    "semi": [`error`, `never`],
    "semi-style": [`error`, `first`],
  },
}
