/**
 * Eslint Rules - Layout & Formatting
 * @see https://eslint.org/docs/rules/#layout-formatting
 */

module.exports = {
  rules: {
    /**
     * Enforce linebreaks after opening and before closing array brackets
     * @see https://eslint.org/docs/rules/array-bracket-newline
     */
    'array-bracket-newline': 'off',

    /**
     * Enforce consistent spacing inside array brackets
     * @see https://eslint.org/docs/rules/array-bracket-spacing
     */
    'array-bracket-spacing': 'off',

    /**
     * Enforce line breaks after each array element
     * @see https://eslint.org/docs/rules/array-element-newline
     */
    'array-element-newline': 'off',

    /**
     * Require parentheses around arrow function arguments
     * @see https://eslint.org/docs/rules/arrow-parens
     */
    'arrow-parens': 'off',

    /**
     * Enforce consistent spacing before and after the arrow in arrow functions
     * @see https://eslint.org/docs/rules/arrow-spacing
     */
    'arrow-spacing': 'off',

    /**
     * Disallow or enforce spaces inside of blocks after opening block and before closing block
     * @see https://eslint.org/docs/rules/block-spacing
     */
    'block-spacing': 'error',

    /**
     * Enforce consistent brace style for blocks
     * @see https://eslint.org/docs/rules/brace-style
     */
    'brace-style': 'off',

    /**
     * Require or disallow trailing commas
     * @see https://eslint.org/docs/rules/comma-dangle
     */
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],

    /**
     * Enforce consistent spacing before and after commas
     * @see https://eslint.org/docs/rules/comma-spacing
     */
    'comma-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],

    /**
     * Enforce consistent comma style
     * @see https://eslint.org/docs/rules/comma-style
     */
    'comma-style': 'off',

    /**
     * Enforce consistent spacing inside computed property brackets
     * @see https://eslint.org/docs/rules/computed-property-spacing
     */
    'computed-property-spacing': 'off',

    /**
     * Enforce consistent newlines before and after dots
     * @see https://eslint.org/docs/rules/dot-location
     */
    'dot-location': 'off',

    /**
     * Require or disallow newline at the end of files
     * @see https://eslint.org/docs/rules/eol-last
     */
    'eol-last': 'error',

    /**
     * Require or disallow spacing between function identifiers and their invocations
     * @see https://eslint.org/docs/rules/func-call-spacing
     */
    'func-call-spacing': 'off',

    /**
     * Enforce line breaks between arguments of a function call
     * @see https://eslint.org/docs/rules/function-call-argument-newline
     */
    'function-call-argument-newline': 'off',

    /**
     * Enforce consistent line breaks inside function parentheses
     * @see https://eslint.org/docs/rules/function-paren-newline
     */
    'function-paren-newline': 'off',

    /**
     * Enforce consistent spacing around `*` operators in generator functions
     * @see https://eslint.org/docs/rules/generator-star-spacing
     */
    'generator-star-spacing': 'off',

    /**
     * Enforce the location of arrow function bodies
     * @see https://eslint.org/docs/rules/implicit-arrow-linebreak
     */
    'implicit-arrow-linebreak': 'off',

    /**
     * Enforce consistent indentation
     * @see https://eslint.org/docs/rules/indent
     */
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],

    /**
     * Enforce the consistent use of either double or single quotes in JSX attributes
     * @see https://eslint.org/docs/rules/jsx-quotes
     */
    'jsx-quotes': ['error', 'prefer-double'],

    /**
     * Enforce consistent spacing between keys and values in object literal properties
     * @see https://eslint.org/docs/rules/key-spacing
     */
    'key-spacing': 'error',

    /**
     * Enforce consistent spacing before and after keywords
     * @see https://eslint.org/docs/rules/keyword-spacing
     */
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],

    /**
     * Enforce position of line comments
     * @see https://eslint.org/docs/rules/line-comment-position
     */
    'line-comment-position': 'off',

    /**
     * Enforce consistent linebreak style
     * @see https://eslint.org/docs/rules/linebreak-style
     */
    'linebreak-style': 'off',

    /**
     * Require empty lines around comments
     * @see https://eslint.org/docs/rules/lines-around-comment
     */
    'lines-around-comment': 'off',

    /**
     * Require or disallow an empty line between class members
     * @see https://eslint.org/docs/rules/lines-between-class-members
     */
    'lines-between-class-members': 'off',

    /**
     * Enforce a maximum line length
     * @see https://eslint.org/docs/rules/max-len
     */
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],

    /**
     * Enforce a maximum number of statements allowed per line
     * @see https://eslint.org/docs/rules/max-statements-per-line
     */
    'max-statements-per-line': 'off',

    /**
     * Enforce newlines between operands of ternary expressions
     * @see https://eslint.org/docs/rules/multiline-ternary
     */
    'multiline-ternary': 'off',

    /**
     * Enforce or disallow parentheses when invoking a constructor with no arguments
     * @see https://eslint.org/docs/rules/new-parens
     */
    'new-parens': 'off',

    /**
     * Require a newline after each call in a method chain
     * @see https://eslint.org/docs/rules/newline-per-chained-call
     */
    'newline-per-chained-call': 'off',

    /**
     * Disallow unnecessary parentheses
     * @see https://eslint.org/docs/rules/no-extra-parens
     */
    'no-extra-parens': 'off',

    /**
     * Disallow mixed spaces and tabs for indentation
     * @see https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     */
    'no-mixed-spaces-and-tabs': 'error',

    /**
     * Disallow multiple spaces
     * @see https://eslint.org/docs/rules/no-multi-spaces
     */
    'no-multi-spaces': 'error',

    /**
     * Disallow multiple empty lines
     * @see https://eslint.org/docs/rules/no-multiple-empty-lines
     */
    'no-multiple-empty-lines': 'off',

    /**
     * Disallow all tabs
     * @see https://eslint.org/docs/rules/no-tabs
     */
    'no-tabs': 'off',

    /**
     * Disallow trailing whitespace at the end of lines
     * @see https://eslint.org/docs/rules/no-trailing-spaces
     */
    'no-trailing-spaces': 'off',

    /**
     * Disallow whitespace before properties
     * @see https://eslint.org/docs/rules/no-whitespace-before-property
     */
    'no-whitespace-before-property': 'error',

    /**
     * Enforce the location of single-line statements
     * @see https://eslint.org/docs/rules/nonblock-statement-body-position
     */
    'nonblock-statement-body-position': 'off',

    /**
     * Enforce consistent line breaks after opening and before closing braces
     * @see https://eslint.org/docs/rules/object-curly-newline
     */
    'object-curly-newline': 'off',

    /**
     * Enforce consistent spacing inside braces
     * @see https://eslint.org/docs/rules/object-curly-spacing
     */
    'object-curly-spacing': ['error', 'always'],

    /**
     * Enforce placing object properties on separate lines
     * @see https://eslint.org/docs/rules/object-property-newline
     */
    'object-property-newline': 'off',

    /**
     * Enforce consistent linebreak style for operators
     * @see https://eslint.org/docs/rules/operator-linebreak
     */
    'operator-linebreak': 'off',

    /**
     * Require or disallow padding within blocks
     * @see https://eslint.org/docs/rules/padded-blocks
     */
    'padded-blocks': 'off',

    /**
     * Require or disallow padding lines between statements
     * @see https://eslint.org/docs/rules/padding-line-between-statements
     */
    'padding-line-between-statements': 'off',

    /**
     * Enforce the consistent use of either backticks, double, or single quotes
     * @see https://eslint.org/docs/rules/quotes
     */
    'quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true,
      },
    ],

    /**
     * Enforce spacing between rest and spread operators and their expressions
     * @see https://eslint.org/docs/rules/rest-spread-spacing
     */
    'rest-spread-spacing': 'off',

    /**
     * Require or disallow semicolons instead of ASI
     * @see https://eslint.org/docs/rules/semi
     */
    'semi': 'error',

    /**
     * Enforce consistent spacing before and after semicolons
     * @see https://eslint.org/docs/rules/semi-spacing
     */
    'semi-spacing': 'off',

    /**
     * Enforce location of semicolons
     * @see https://eslint.org/docs/rules/semi-style
     */
    'semi-style': 'off',

    /**
     * Enforce consistent spacing before blocks
     * @see https://eslint.org/docs/rules/space-before-blocks
     */
    'space-before-blocks': 'off',

    /**
     * Enforce consistent spacing before `function` definition opening parenthesis
     * @see https://eslint.org/docs/rules/space-before-function-paren
     */
    'space-before-function-paren': 'off',

    /**
     * Enforce consistent spacing inside parentheses
     * @see https://eslint.org/docs/rules/space-in-parens
     */
    'space-in-parens': 'error',

    /**
     * Require spacing around infix operators
     * @see https://eslint.org/docs/rules/space-infix-ops
     */
    'space-infix-ops': 'error',

    /**
     * Enforce consistent spacing before or after unary operators
     * @see https://eslint.org/docs/rules/space-unary-ops
     */
    'space-unary-ops': 'off',

    /**
     * Enforce spacing around colons of switch statements
     * @see https://eslint.org/docs/rules/switch-colon-spacing
     */
    'switch-colon-spacing': 'off',

    /**
     * Require or disallow spacing around embedded expressions of template strings
     * @see https://eslint.org/docs/rules/template-curly-spacing
     */
    'template-curly-spacing': 'off',

    /**
     * Require or disallow spacing between template tags and their literals
     * @see https://eslint.org/docs/rules/template-tag-spacing
     */
    'template-tag-spacing': 'off',

    /**
     * Require or disallow Unicode byte order mark (BOM)
     * @see https://eslint.org/docs/rules/unicode-bom
     */
    'unicode-bom': 'off',

    /**
     * Require parentheses around immediate `function` invocations
     * @see https://eslint.org/docs/rules/wrap-iife
     */
    'wrap-iife': 'off',

    /**
     * Require parenthesis around regex literals
     * @see https://eslint.org/docs/rules/wrap-regex
     */
    'wrap-regex': 'off',

    /**
     * Require or disallow spacing around the `*` in `yield*` expressions
     * @see https://eslint.org/docs/rules/yield-star-spacing
     */
    'yield-star-spacing': 'off',
  },
};
