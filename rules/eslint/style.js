/**
 * Eslint Rules - Stylistic Issues
 * @see https://eslint.org/docs/rules/#stylistic-issues
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
    'array-bracket-spacing': 'error',

    /**
     * Enforce line breaks after each array element
     * @see https://eslint.org/docs/rules/array-element-newline
     */
    'array-element-newline': 'off',

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
     * Enforce camelcase naming convention
     * @see https://eslint.org/docs/rules/camelcase
     */
    'camelcase': 'off',

    /**
     * Enforce or disallow capitalization of the first letter of a comment
     * @see https://eslint.org/docs/rules/capitalized-comments
     */
    'capitalized-comments': 'off',

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
     * Enforce consistent naming when capturing the current execution context
     * @see https://eslint.org/docs/rules/consistent-this
     */
    'consistent-this': 'off',

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
     * Require function names to match the name of the variable or property to which they are assigned
     * @see https://eslint.org/docs/rules/func-name-matching
     */
    'func-name-matching': 'off',

    /**
     * Require or disallow named `function` expressions
     * @see https://eslint.org/docs/rules/func-names
     */
    'func-names': 'off',

    /**
     * Enforce the consistent use of either `function` declarations or expressions
     * @see https://eslint.org/docs/rules/func-style
     */
    'func-style': 'off',

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
     * Disallow specified identifiers
     * @see https://eslint.org/docs/rules/id-denylist
     */
    'id-denylist': 'off',

    /**
     * Enforce minimum and maximum identifier lengths
     * @see https://eslint.org/docs/rules/id-length
     */
    'id-length': 'off',

    /**
     * Require identifiers to match a specified regular expression
     * @see https://eslint.org/docs/rules/id-match
     */
    'id-match': 'off',

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
     * Enforce a maximum depth that blocks can be nested
     * @see https://eslint.org/docs/rules/max-depth
     */
    'max-depth': 'off',

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
     * Enforce a maximum number of lines per file
     * @see https://eslint.org/docs/rules/max-lines
     */
    'max-lines': 'off',

    /**
     * Enforce a maximum number of lines of code in a function
     * @see https://eslint.org/docs/rules/max-lines-per-function
     */
    'max-lines-per-function': 'off',

    /**
     * Enforce a maximum depth that callbacks can be nested
     * @see https://eslint.org/docs/rules/max-nested-callbacks
     */
    'max-nested-callbacks': 'off',

    /**
     * Enforce a maximum number of parameters in function definitions
     * @see https://eslint.org/docs/rules/max-params
     */
    'max-params': 'off',

    /**
     * Enforce a maximum number of statements allowed in function blocks
     * @see https://eslint.org/docs/rules/max-statements
     */
    'max-statements': 'off',

    /**
     * Enforce a maximum number of statements allowed per line
     * @see https://eslint.org/docs/rules/max-statements-per-line
     */
    'max-statements-per-line': 'off',

    /**
     * Enforce a particular style for multiline comments
     * @see https://eslint.org/docs/rules/multiline-comment-style
     */
    'multiline-comment-style': 'off',

    /**
     * Enforce newlines between operands of ternary expressions
     * @see https://eslint.org/docs/rules/multiline-ternary
     */
    'multiline-ternary': 'off',

    /**
     * Require constructor names to begin with a capital letter
     * @see https://eslint.org/docs/rules/new-cap
     */
    'new-cap': 'off',

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
     * Disallow `Array` constructors
     * @see https://eslint.org/docs/rules/no-array-constructor
     */
    'no-array-constructor': 'off',

    /**
     * Disallow bitwise operators
     * @see https://eslint.org/docs/rules/no-bitwise
     */
    'no-bitwise': 'off',

    /**
     * Disallow `continue` statements
     * @see https://eslint.org/docs/rules/no-continue
     */
    'no-continue': 'off',

    /**
     * Disallow inline comments after code
     * @see https://eslint.org/docs/rules/no-inline-comments
     */
    'no-inline-comments': 'off',

    /**
     * Disallow `if` statements as the only statement in `else` blocks
     * @see https://eslint.org/docs/rules/no-lonely-if
     */
    'no-lonely-if': 'error',

    /**
     * Disallow mixed binary operators
     * @see https://eslint.org/docs/rules/no-mixed-operators
     */
    'no-mixed-operators': 'off',

    /**
     * Disallow mixed spaces and tabs for indentation
     * @see https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     */
    'no-mixed-spaces-and-tabs': 'error',

    /**
     * Disallow use of chained assignment expressions
     * @see https://eslint.org/docs/rules/no-multi-assign
     */
    'no-multi-assign': 'off',

    /**
     * Disallow multiple empty lines
     * @see https://eslint.org/docs/rules/no-multiple-empty-lines
     */
    'no-multiple-empty-lines': 'off',

    /**
     * Disallow negated conditions
     * @see https://eslint.org/docs/rules/no-negated-condition
     */
    'no-negated-condition': 'off',

    /**
     * Disallow nested ternary expressions
     * @see https://eslint.org/docs/rules/no-nested-ternary
     */
    'no-nested-ternary': 'error',

    /**
     * Disallow `Object` constructors
     * @see https://eslint.org/docs/rules/no-new-object
     */
    'no-new-object': 'off',

    /**
     * Disallow the unary operators `++` and `--`
     * @see https://eslint.org/docs/rules/no-plusplus
     */
    'no-plusplus': 'off',

    /**
     * Disallow specified syntax
     * @see https://eslint.org/docs/rules/no-restricted-syntax
     */
    'no-restricted-syntax': 'off',

    /**
     * Disallow all tabs
     * @see https://eslint.org/docs/rules/no-tabs
     */
    'no-tabs': 'off',

    /**
     * Disallow ternary operators
     * @see https://eslint.org/docs/rules/no-ternary
     */
    'no-ternary': 'off',

    /**
     * Disallow trailing whitespace at the end of lines
     * @see https://eslint.org/docs/rules/no-trailing-spaces
     */
    'no-trailing-spaces': 'off',

    /**
     * Disallow dangling underscores in identifiers
     * @see https://eslint.org/docs/rules/no-underscore-dangle
     */
    'no-underscore-dangle': 'off',

    /**
     * Disallow ternary operators when simpler alternatives exist
     * @see https://eslint.org/docs/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': 'error',

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
     * Enforce variables to be declared either together or separately in functions
     * @see https://eslint.org/docs/rules/one-var
     */
    'one-var': 'off',

    /**
     * Require or disallow newlines around variable declarations
     * @see https://eslint.org/docs/rules/one-var-declaration-per-line
     */
    'one-var-declaration-per-line': 'off',

    /**
     * Require or disallow assignment operator shorthand where possible
     * @see https://eslint.org/docs/rules/operator-assignment
     */
    'operator-assignment': 'off',

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
     * Disallow the use of `Math.pow` in favor of the `**` operator
     * @see https://eslint.org/docs/rules/prefer-exponentiation-operator
     */
    'prefer-exponentiation-operator': 'error',

    /**
     * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
     * @see https://eslint.org/docs/rules/prefer-object-spread
     */
    'prefer-object-spread': 'off',

    /**
     * Require quotes around object literal property names
     * @see https://eslint.org/docs/rules/quote-props
     */
    'quote-props': 'off',

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
     * Require object keys to be sorted
     * @see https://eslint.org/docs/rules/sort-keys
     */
    'sort-keys': [
      'warn',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],

    /**
     * Require variables within the same declaration block to be sorted
     * @see https://eslint.org/docs/rules/sort-vars
     */
    'sort-vars': 'off',

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
     * Enforce consistent spacing after the `//` or `/*` in a comment
     * @see https://eslint.org/docs/rules/spaced-comment
     */
    'spaced-comment': 'off',

    /**
     * Enforce spacing around colons of switch statements
     * @see https://eslint.org/docs/rules/switch-colon-spacing
     */
    'switch-colon-spacing': 'off',

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
     * Require parenthesis around regex literals
     * @see https://eslint.org/docs/rules/wrap-regex
     */
    'wrap-regex': 'off',
  },
};
