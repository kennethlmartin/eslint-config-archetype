'use strict';

/**
 * Eslint Rules - Stylistic Issues
 * http://eslint.org/docs/rules/#stylistic-issues
 */

module.exports = {
  'rules': {
    // Enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': 'off',

    // Enforce consistent spacing inside array brackets
    // http://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': 'error',

    // Enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': 'off',

    // Enforce consistent spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': 'error',

    // Enforce consistent brace style for blocks
    // http://eslint.org/docs/rules/brace-style
    'brace-style': 'off',

    // Enforce camelcase naming convention
    // http://eslint.org/docs/rules/camelcase
    'camelcase': 'off',

    // Enforce or disallow capitalization of the first letter of a comment
    // http://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': 'off',

    // Require or disallow trailing commas
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
      'imports': 'always-multiline',
      'objects': 'always-multiline',
    }],

    // Enforce consistent spacing before and after commas
    // http://eslint.org/docs/rules/comma-spacing
    'comma-spacing': ['error', {
      'after': true,
      'before': false,
    }],

    // Enforce consistent comma style
    // http://eslint.org/docs/rules/comma-style
    'comma-style': 'off',

    // Enforce consistent spacing inside computed property brackets
    // http://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': 'off',

    // Enforce consistent naming when capturing the current execution context
    // http://eslint.org/docs/rules/consistent-this
    'consistent-this': 'off',

    // Require or disallow newline at the end of files
    // http://eslint.org/docs/rules/eol-last
    'eol-last': 'error',

    // Require or disallow spacing between function identifiers and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': 'off',

    // Require function names to match the name of the variable or property to which they are assigned
    // http://eslint.org/docs/rules/func-name-matching
    'func-name-matching': 'off',

    // Require or disallow named function expressions
    // http://eslint.org/docs/rules/func-names
    'func-names': 'off',

    // Enforce the consistent use of either function declarations or expressions
    // http://eslint.org/docs/rules/func-style
    'func-style': 'off',

    // Enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': 'off',

    // Disallow specified identifiers
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // Enforce minimum and maximum identifier lengths
    // http://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // Require identifiers to match a specified regular expression
    // http://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // Enforce the location of arrow function bodies
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': 'off',

    // Enforce consistent indentation
    // http://eslint.org/docs/rules/indent
    'indent': ['error', 2, {
      'SwitchCase': 1,
    }],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // Enforce consistent spacing between keys and values in object literal properties
    // http://eslint.org/docs/rules/key-spacing
    'key-spacing': 'error',

    // Enforce consistent spacing before and after keywords
    // http://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': ['error', {
      'after': true,
      'before': true,
    }],

    // Enforce position of line comments
    // http://eslint.org/docs/rules/line-comment-position
    'line-comment-position': 'off',

    // Enforce consistent linebreak style
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 'off',

    // Require empty lines around comments
    // http://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': 'off',

    // Require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': 'off',

    // Enforce a maximum depth that blocks can be nested
    // http://eslint.org/docs/rules/max-depth
    'max-depth': 'off',

    // Enforce a maximum line length
    // http://eslint.org/docs/rules/max-len
    'max-len': ['error', {
      'code': 100,
      'ignoreComments': true,
      'ignoreRegExpLiterals': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreUrls': true,
    }],

    // Enforce a maximum number of lines per file
    // http://eslint.org/docs/rules/max-lines
    'max-lines': 'off',

    // Enforce a maximum number of line of code in a function
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': 'off',

    // Enforce a maximum depth that callbacks can be nested
    // http://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': 'off',

    // Enforce a maximum number of parameters in function definitions
    // http://eslint.org/docs/rules/max-params
    'max-params': 'off',

    // Enforce a maximum number of statements allowed in function blocks
    // http://eslint.org/docs/rules/max-statements
    'max-statements': 'off',

    // Enforce a maximum number of statements allowed per line
    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': 'off',

    // Enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': 'off',

    // Enforce newlines between operands of ternary expressions
    // http://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': 'off',

    // Require constructor names to begin with a capital letter
    // http://eslint.org/docs/rules/new-cap
    'new-cap': 'off',

    // Require parentheses when invoking a constructor with no arguments
    // http://eslint.org/docs/rules/new-parens
    'new-parens': 'off',

    // Require a newline after each call in a method chain
    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': 'off',

    // Disallow Array constructors
    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'off',

    // Disallow bitwise operators
    // http://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'off',

    // Disallow continue statements
    // http://eslint.org/docs/rules/no-continue
    'no-continue': 'off',

    // Disallow inline comments after code
    // http://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // Disallow if statements as the only statement in else blocks
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // Disallow mixed binary operators
    // http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': 'off',

    // Disallow mixed spaces and tabs for indentation
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow use of chained assignment expressions
    // http://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'off',

    // Disallow multiple empty lines
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': 'off',

    // Disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // Disallow nested ternary expressions
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // Disallow Object constructors
    // http://eslint.org/docs/rules/no-new-object
    'no-new-object': 'off',

    // Disallow the unary operators ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // Disallow specified syntax
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': 'off',

    // Disallow all tabs
    // http://eslint.org/docs/rules/no-tabs
    'no-tabs': 'off',

    // Disallow ternary operators
    // http://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // Disallow trailing whitespace at the end of lines
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'off',

    // Disallow dangling underscores in identifiers
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',

    // Disallow ternary operators when simpler alternatives exist
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': 'error',

    // Disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // Enforce the location of single-line statements
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': 'off',

    // Enforce consistent line breaks inside braces
    // http://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': 'off',

    // Enforce consistent spacing inside braces
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'always'],

    // Enforce placing object properties on separate lines
    // http://eslint.org/docs/rules/object-property-newline
    'object-property-newline': 'off',

    // Enforce variables to be declared either together or separately in functions
    // http://eslint.org/docs/rules/one-var
    'one-var': 'off',

    // Require or disallow newlines around variable declarations
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': 'off',

    // Require or disallow assignment operator shorthand where possible
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': 'off',

    // Enforce consistent linebreak style for operators
    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': 'off',

    // Require or disallow padding within blocks
    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks': 'off',

    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'off',

    // Require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props
    'quote-props': 'off',

    // Enforce the consistent use of either backticks, double, or single quotes
    // http://eslint.org/docs/rules/quotes
    'quotes': ['error', 'single', {
      'allowTemplateLiterals': false,
      'avoidEscape': true,
    }],

    // Require JSDoc comments
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',

    // Require or disallow semicolons instead of ASI
    // http://eslint.org/docs/rules/semi
    'semi': 'error',

    // Enforce consistent spacing before and after semicolons
    // http://eslint.org/docs/rules/semi-spacing
    'semi-spacing': 'off',

    // Enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    'semi-style': 'off',

    // Require object keys to be sorted
    // http://eslint.org/docs/rules/sort-keys
    'sort-keys': ['warn', 'asc', {
      'caseSensitive': false,
      'natural': true,
    }],

    // Require variables within the same declaration block to be sorted
    // http://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',

    // Enforce consistent spacing before blocks
    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'off',

    // Enforce consistent spacing before function definition opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': 'off',

    // Enforce consistent spacing inside parentheses
    // http://eslint.org/docs/rules/space-in-parens
    'space-in-parens': 'error',

    // Require spacing around infix operators
    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',

    // Enforce consistent spacing before or after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': 'off',

    // Enforce consistent spacing after the // or /* in a comment
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': 'off',

    // Enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': 'off',

    // Require or disallow spacing between template tags and their literals
    // http://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': 'off',

    // Require or disallow Unicode byte order mark (BOM)
    // http://eslint.org/docs/rules/unicode-bom
    'unicode-bom': 'off',

    // Require parenthesis around regex literals
    // http://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'off',
  },
};
