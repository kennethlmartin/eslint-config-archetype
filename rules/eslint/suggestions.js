/**
 * Eslint Rules - Suggestions
 *
 * @see https://eslint.org/docs/rules/#suggestions
 */

 module.exports = {
  rules: {
    /**
     * Enforce getter and setter pairs in objects and classes
     *
     * @see https://eslint.org/docs/rules/accessor-pairs
     */
    'accessor-pairs': 'off',

    /**
     * Require braces around arrow function bodies
     *
     * @see https://eslint.org/docs/rules/arrow-body-style
     */
    'arrow-body-style': 'off',

    /**
     * Enforce the use of variables within the scope they are defined
     *
     * @see https://eslint.org/docs/rules/block-scoped-var
     */
    'block-scoped-var': 'off',

    /**
     * Enforce camelcase naming convention
     *
     * @see https://eslint.org/docs/rules/camelcase
     */
    'camelcase': 'off',

    /**
     * Enforce or disallow capitalization of the first letter of a comment
     *
     * @see https://eslint.org/docs/rules/capitalized-comments
     */
    'capitalized-comments': 'off',

    /**
     * Enforce that class methods utilize `this`
     *
     * @see https://eslint.org/docs/rules/class-methods-use-this
     */
    'class-methods-use-this': 'off',

    /**
     * Enforce a maximum cyclomatic complexity allowed in a program
     *
     * @see https://eslint.org/docs/rules/complexity
     */
    'complexity': 'off',

    /**
     * Require `return` statements to either always or never specify values
     *
     * @see https://eslint.org/docs/rules/consistent-return
     */
    'consistent-return': 'off',

    /**
     * Enforce consistent naming when capturing the current execution context
     *
     * @see https://eslint.org/docs/rules/consistent-this
     */
    'consistent-this': 'off',

    /**
     * Enforce consistent brace style for all control statements
     *
     * @see https://eslint.org/docs/rules/curly
     */
    'curly': 'off',

    /**
     * Require `default` cases in `switch` statements
     *
     * @see https://eslint.org/docs/rules/default-case
     */
    'default-case': 'off',

    /**
     * Enforce default clauses in switch statements to be last
     *
     * @see https://eslint.org/docs/rules/default-case-last
     */
    'default-case-last': 'off',

    /**
     * Enforce default parameters to be last
     *
     * @see https://eslint.org/docs/rules/default-param-last
     */
    'default-param-last': 'off',

    /**
     * Enforce dot notation whenever possible
     *
     * @see https://eslint.org/docs/rules/dot-notation
     */
    'dot-notation': 'off',

    /**
     * Require the use of `===` and `!==`
     *
     * @see https://eslint.org/docs/rules/eqeqeq
     */
    'eqeqeq': ['error', 'always'],

    /**
     * Require function names to match the name of the variable or property to which they are assigned
     *
     * @see https://eslint.org/docs/rules/func-name-matching
     */
    'func-name-matching': 'off',

    /**
     * Require or disallow named `function` expressions
     *
     * @see https://eslint.org/docs/rules/func-names
     */
    'func-names': 'off',

    /**
     * Enforce the consistent use of either `function` declarations or expressions
     *
     * @see https://eslint.org/docs/rules/func-style
     */
    'func-style': 'off',

    /**
     * Require grouped accessor pairs in object literals and classes
     *
     * @see https://eslint.org/docs/rules/grouped-accessor-pairs
     */
    'grouped-accessor-pairs': 'off',

    /**
     * Require `for-in` loops to include an `if` statement
     *
     * @see https://eslint.org/docs/rules/guard-for-in
     */
    'guard-for-in': 'off',

    /**
     * Disallow specified identifiers
     *
     * @see https://eslint.org/docs/rules/id-denylist
     */
    'id-denylist': 'off',

    /**
     * Enforce minimum and maximum identifier lengths
     *
     * @see https://eslint.org/docs/rules/id-length
     */
    'id-length': 'off',

    /**
     * Require identifiers to match a specified regular expression
     *
     * @see https://eslint.org/docs/rules/id-match
     */
    'id-match': 'off',

    /**
     * Require or disallow initialization in variable declarations
     *
     * @see https://eslint.org/docs/rules/init-declarations
     */
    'init-declarations': 'off',

    /**
     * Enforce a maximum number of classes per file
     *
     * @see https://eslint.org/docs/rules/max-classes-per-file
     */
    'max-classes-per-file': ['error', 1],

    /**
     * Enforce a maximum depth that blocks can be nested
     *
     * @see https://eslint.org/docs/rules/max-depth
     */
    'max-depth': 'off',

    /**
     * Enforce a maximum number of lines per file
     *
     * @see https://eslint.org/docs/rules/max-lines
     */
    'max-lines': 'off',

    /**
     * Enforce a maximum number of lines of code in a function
     *
     * @see https://eslint.org/docs/rules/max-lines-per-function
     */
    'max-lines-per-function': 'off',

    /**
     * Enforce a maximum depth that callbacks can be nested
     *
     * @see https://eslint.org/docs/rules/max-nested-callbacks
     */
    'max-nested-callbacks': 'off',

    /**
     * Enforce a maximum number of parameters in function definitions
     *
     * @see https://eslint.org/docs/rules/max-params
     */
    'max-params': 'off',

    /**
     * Enforce a maximum number of statements allowed in function blocks
     *
     * @see https://eslint.org/docs/rules/max-statements
     */
    'max-statements': 'off',

    /**
     * Enforce a particular style for multiline comments
     *
     * @see https://eslint.org/docs/rules/multiline-comment-style
     */
    'multiline-comment-style': 'off',

    /**
     * Require constructor names to begin with a capital letter
     *
     * @see https://eslint.org/docs/rules/new-cap
     */
    'new-cap': 'off',

    /**
     * Disallow the use of `alert`, `confirm`, and `prompt`
     *
     * @see https://eslint.org/docs/rules/no-alert
     */
    'no-alert': 'error',

    /**
     * Disallow `Array` constructors
     *
     * @see https://eslint.org/docs/rules/no-array-constructor
     */
    'no-array-constructor': 'off',

    /**
     * Disallow bitwise operators
     *
     * @see https://eslint.org/docs/rules/no-bitwise
     */
    'no-bitwise': 'off',

    /**
     * Disallow the use of `arguments.caller` or `arguments.callee`
     *
     * @see https://eslint.org/docs/rules/no-caller
     */
    'no-caller': 'off',

    /**
     * Disallow lexical declarations in case clauses
     *
     * @see https://eslint.org/docs/rules/no-case-declarations
     */
    'no-case-declarations': 'error',

    /**
     * Disallow arrow functions where they could be confused with comparisons
     *
     * @see https://eslint.org/docs/rules/no-confusing-arrow
     */
    'no-confusing-arrow': 'off',

    /**
     * Disallow the use of `console`
     *
     * @see https://eslint.org/docs/rules/no-console
     */
    'no-console': ['error', { allow: ['warn', 'error'] }],

    /**
     * Disallow `continue` statements
     *
     * @see https://eslint.org/docs/rules/no-continue
     */
    'no-continue': 'off',

    /**
     * Disallow deleting variables
     *
     * @see https://eslint.org/docs/rules/no-delete-var
     */
    'no-delete-var': 'error',

    /**
     * Disallow division operators explicitly at the beginning of regular expressions
     *
     * @see https://eslint.org/docs/rules/no-div-regex
     */
    'no-div-regex': 'off',

    /**
     * Disallow `else` blocks after `return` statements in `if` statements
     *
     * @see https://eslint.org/docs/rules/no-else-return
     */
    'no-else-return': 'error',

    /**
     * Disallow empty block statements
     *
     * @see https://eslint.org/docs/rules/no-empty
     */
    'no-empty': 'error',

    /**
     * Disallow empty functions
     *
     * @see https://eslint.org/docs/rules/no-empty-function
     */
    'no-empty-function': 'off',

    /**
     * Disallow `null` comparisons without type-checking operators
     *
     * @see https://eslint.org/docs/rules/no-eq-null
     */
    'no-eq-null': 'off',

    /**
     * Disallow the use of `eval()`
     *
     * @see https://eslint.org/docs/rules/no-eval
     */
    'no-eval': 'error',

    /**
     * Disallow extending native types
     *
     * @see https://eslint.org/docs/rules/no-extend-native
     */
    'no-extend-native': 'off',

    /**
     * Disallow unnecessary calls to `.bind()`
     *
     * @see https://eslint.org/docs/rules/no-extra-bind
     */
    'no-extra-bind': 'off',

    /**
     * Disallow unnecessary boolean casts
     *
     * @see https://eslint.org/docs/rules/no-extra-boolean-cast
     */
    'no-extra-boolean-cast': 'error',

    /**
     * Disallow unnecessary labels
     *
     * @see https://eslint.org/docs/rules/no-extra-label
     */
    'no-extra-label': 'off',

    /**
     * Disallow unnecessary semicolons
     *
     * @see https://eslint.org/docs/rules/no-extra-semi
     */
    'no-extra-semi': 'off',

    /**
     * Disallow leading or trailing decimal points in numeric literals
     *
     * @see https://eslint.org/docs/rules/no-floating-decimal
     */
    'no-floating-decimal': 'off',

    /**
     * Disallow assignments to native objects or read-only global variables
     *
     * @see https://eslint.org/docs/rules/no-global-assign
     */
    'no-global-assign': 'error',

    /**
     * Disallow shorthand type conversions
     *
     * @see https://eslint.org/docs/rules/no-implicit-coercion
     */
    'no-implicit-coercion': 'off',

    /**
     * Disallow declarations in the global scope
     *
     * @see https://eslint.org/docs/rules/no-implicit-globals
     */
    'no-implicit-globals': 'off',

    /**
     * Disallow the use of `eval()`-like methods
     *
     * @see https://eslint.org/docs/rules/no-implied-eval
     */
    'no-implied-eval': 'off',

    /**
     * Disallow inline comments after code
     *
     * @see https://eslint.org/docs/rules/no-inline-comments
     */
    'no-inline-comments': 'off',

    /**
     * Disallow `this` keywords outside of classes or class-like objects
     *
     * @see https://eslint.org/docs/rules/no-invalid-this
     */
    'no-invalid-this': 'off',

    /**
     * Disallow the use of the `__iterator__` property
     *
     * @see https://eslint.org/docs/rules/no-iterator
     */
    'no-iterator': 'off',

    /**
     * Disallow labels that share a name with a variable
     *
     * @see https://eslint.org/docs/rules/no-label-var
     */
    'no-label-var': 'off',

    /**
     * Disallow labeled statements
     *
     * @see https://eslint.org/docs/rules/no-labels
     */
    'no-labels': 'off',

    /**
     * Disallow unnecessary nested blocks
     *
     * @see https://eslint.org/docs/rules/no-lone-blocks
     */
    'no-lone-blocks': 'off',

    /**
     * Disallow `if` statements as the only statement in `else` blocks
     *
     * @see https://eslint.org/docs/rules/no-lonely-if
     */
    'no-lonely-if': 'error',

    /**
     * Disallow function declarations that contain unsafe references inside loop statements
     *
     * @see https://eslint.org/docs/rules/no-loop-func
     */
    'no-loop-func': 'off',

    /**
     * Disallow magic numbers
     *
     * @see https://eslint.org/docs/rules/no-magic-numbers
     */
    'no-magic-numbers': 'off',

    /**
     * Disallow mixed binary operators
     *
     * @see https://eslint.org/docs/rules/no-mixed-operators
     */
    'no-mixed-operators': 'off',

    /**
     * Disallow use of chained assignment expressions
     *
     * @see https://eslint.org/docs/rules/no-multi-assign
     */
    'no-multi-assign': 'off',

    /**
     * Disallow multiline strings
     *
     * @see https://eslint.org/docs/rules/no-multi-str
     */
    'no-multi-str': 'off',

    /**
     * Disallow negated conditions
     *
     * @see https://eslint.org/docs/rules/no-negated-condition
     */
    'no-negated-condition': 'off',

    /**
     * Disallow nested ternary expressions
     *
     * @see https://eslint.org/docs/rules/no-nested-ternary
     */
    'no-nested-ternary': 'error',

    /**
     * Disallow `new` operators outside of assignments or comparisons
     *
     * @see https://eslint.org/docs/rules/no-new
     */
    'no-new': 'off',

    /**
     * Disallow `new` operators with the `Function` object
     *
     * @see https://eslint.org/docs/rules/no-new-func
     */
    'no-new-func': 'off',

    /**
     * Disallow `Object` constructors
     *
     * @see https://eslint.org/docs/rules/no-new-object
     */
    'no-new-object': 'off',

    /**
     * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
     *
     * @see https://eslint.org/docs/rules/no-new-wrappers
     */
    'no-new-wrappers': 'off',

    /**
     * Disallow `\8` and `\9` escape sequences in string literals
     *
     * @see https://eslint.org/docs/rules/no-nonoctal-decimal-escape
     */
    'no-nonoctal-decimal-escape': 'off',

    /**
     * Disallow octal literals
     *
     * @see https://eslint.org/docs/rules/no-octal
     */
    'no-octal': 'error',

    /**
     * Disallow octal escape sequences in string literals
     *
     * @see https://eslint.org/docs/rules/no-octal-escape
     */
    'no-octal-escape': 'off',

    /**
     * Disallow reassigning `function` parameters
     *
     * @see https://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': 'off',

    /**
     * Disallow the unary operators `++` and `--`
     *
     * @see https://eslint.org/docs/rules/no-plusplus
     */
    'no-plusplus': 'off',

    /**
     * Disallow the use of the `__proto__` property
     *
     * @see https://eslint.org/docs/rules/no-proto
     */
    'no-proto': 'off',

    /**
     * Disallow variable redeclaration
     *
     * @see https://eslint.org/docs/rules/no-redeclare
     */
    'no-redeclare': 'error',

    /**
     * Disallow multiple spaces in regular expressions
     *
     * @see https://eslint.org/docs/rules/no-regex-spaces
     */
    'no-regex-spaces': 'off',

    /**
     * Disallow specified names in exports
     *
     * @see https://eslint.org/docs/rules/no-restricted-exports
     */
    'no-restricted-exports': 'off',

    /**
     * Disallow specified global variables
     *
     * @see https://eslint.org/docs/rules/no-restricted-globals
     */
    'no-restricted-globals': 'off',

    /**
     * Disallow specified modules when loaded by `import`
     *
     * @see https://eslint.org/docs/rules/no-restricted-imports
     */
    'no-restricted-imports': 'off',

    /**
     * Disallow certain properties on certain objects
     *
     * @see https://eslint.org/docs/rules/no-restricted-properties
     */
    'no-restricted-properties': 'off',

    /**
     * Disallow specified syntax
     *
     * @see https://eslint.org/docs/rules/no-restricted-syntax
     */
    'no-restricted-syntax': 'off',

    /**
     * Disallow assignment operators in `return` statements
     *
     * @see https://eslint.org/docs/rules/no-return-assign
     */
    'no-return-assign': 'off',

    /**
     * Disallow unnecessary `return await`
     *
     * @see https://eslint.org/docs/rules/no-return-await
     */
    'no-return-await': 'off',

    /**
     * Disallow `javascript:` urls
     *
     * @see https://eslint.org/docs/rules/no-script-url
     */
    'no-script-url': 'off',

    /**
     * Disallow comma operators
     *
     * @see https://eslint.org/docs/rules/no-sequences
     */
    'no-sequences': 'off',

    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope
     *
     * @see https://eslint.org/docs/rules/no-shadow
     */
    'no-shadow': 'off',

    /**
     * Disallow identifiers from shadowing restricted names
     *
     * @see https://eslint.org/docs/rules/no-shadow-restricted-names
     */
    'no-shadow-restricted-names': 'off',

    /**
     * Disallow ternary operators
     *
     * @see https://eslint.org/docs/rules/no-ternary
     */
    'no-ternary': 'off',

    /**
     * Disallow throwing literals as exceptions
     *
     * @see https://eslint.org/docs/rules/no-throw-literal
     */
    'no-throw-literal': 'off',

    /**
     * Disallow initializing variables to `undefined`
     *
     * @see https://eslint.org/docs/rules/no-undef-init
     */
    'no-undef-init': 'error',

    /**
     * Disallow the use of `undefined` as an identifier
     *
     * @see https://eslint.org/docs/rules/no-undefined
     */
    'no-undefined': 'off',

    /**
     * Disallow dangling underscores in identifiers
     *
     * @see https://eslint.org/docs/rules/no-underscore-dangle
     */
    'no-underscore-dangle': 'off',

    /**
     * Disallow ternary operators when simpler alternatives exist
     *
     * @see https://eslint.org/docs/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': 'error',

    /**
     * Disallow unused expressions
     *
     * @see https://eslint.org/docs/rules/no-unused-expressions
     */
    'no-unused-expressions': 'off',

    /**
     * Disallow unused labels
     *
     * @see https://eslint.org/docs/rules/no-unused-labels
     */
    'no-unused-labels': 'error',

    /**
     * Disallow unnecessary calls to `.call()` and `.apply()`
     *
     * @see https://eslint.org/docs/rules/no-useless-call
     */
    'no-useless-call': 'off',

    /**
     * Disallow unnecessary `catch` clauses
     *
     * @see https://eslint.org/docs/rules/no-useless-catch
     */
    'no-useless-catch': 'error',

    /**
     * Disallow unnecessary computed property keys in objects and classes
     *
     * @see https://eslint.org/docs/rules/no-useless-computed-key
     */
    'no-useless-computed-key': 'off',

    /**
     * Disallow unnecessary concatenation of literals or template literals
     *
     * @see https://eslint.org/docs/rules/no-useless-concat
     */
    'no-useless-concat': 'error',

    /**
     * Disallow unnecessary constructors
     *
     * @see https://eslint.org/docs/rules/no-useless-constructor
     */
    'no-useless-constructor': 'off',

    /**
     * Disallow unnecessary escape characters
     *
     * @see https://eslint.org/docs/rules/no-useless-escape
     */
    'no-useless-escape': 'off',

    /**
     * Disallow renaming import, export, and destructured assignments to the same name
     *
     * @see https://eslint.org/docs/rules/no-useless-rename
     */
    'no-useless-rename': 'off',

    /**
     * Disallow redundant return statements
     *
     * @see https://eslint.org/docs/rules/no-useless-return
     */
    'no-useless-return': 'error',

    /**
     * Require `let` or `const` instead of `var`
     *
     * @see https://eslint.org/docs/rules/no-var
     */
    'no-var': 'error',

    /**
     * Disallow `void` operators
     *
     * @see https://eslint.org/docs/rules/no-void
     */
    'no-void': 'off',

    /**
     * Disallow specified warning terms in comments
     *
     * @see https://eslint.org/docs/rules/no-warning-comments
     */
    'no-warning-comments': 'off',

    /**
     * Disallow `with` statements
     *
     * @see https://eslint.org/docs/rules/no-with
     */
    'no-with': 'off',

    /**
     * Require or disallow method and property shorthand syntax for object literals
     *
     * @see https://eslint.org/docs/rules/object-shorthand
     */
    'object-shorthand': 'off',

    /**
     * Enforce variables to be declared either together or separately in functions
     *
     * @see https://eslint.org/docs/rules/one-var
     */
    'one-var': 'off',

    /**
     * Require or disallow newlines around variable declarations
     *
     * @see https://eslint.org/docs/rules/one-var-declaration-per-line
     */
    'one-var-declaration-per-line': 'off',

    /**
     * Require or disallow assignment operator shorthand where possible
     *
     * @see https://eslint.org/docs/rules/operator-assignment
     */
    'operator-assignment': 'off',

    /**
     * Require using arrow functions for callbacks
     *
     * @see https://eslint.org/docs/rules/prefer-arrow-callback
     */
    'prefer-arrow-callback': 'off',

    /**
     * Require `const` declarations for variables that are never reassigned after declared
     *
     * @see https://eslint.org/docs/rules/prefer-const
     */
    'prefer-const': 'error',

    /**
     * Require destructuring from arrays and/or objects
     *
     * @see https://eslint.org/docs/rules/prefer-destructuring
     */
    'prefer-destructuring': 'off',

    /**
     * Disallow the use of `Math.pow` in favor of the `**` operator
     *
     * @see https://eslint.org/docs/rules/prefer-exponentiation-operator
     */
    'prefer-exponentiation-operator': 'error',

    /**
     * Enforce using named capture group in regular expression
     *
     * @see https://eslint.org/docs/rules/prefer-named-capture-group
     */
    'prefer-named-capture-group': 'off',

    /**
     * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
     *
     * @see https://eslint.org/docs/rules/prefer-numeric-literals
     */
    'prefer-numeric-literals': 'off',

    /**
     * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
     *
     * @see https://eslint.org/docs/rules/prefer-object-has-own
     */
    'prefer-object-has-own': 'off',

    /**
     * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
     *
     * @see https://eslint.org/docs/rules/prefer-object-spread
     */
    'prefer-object-spread': 'off',

    /**
     * Require using Error objects as Promise rejection reasons
     *
     * @see https://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': 'off',

    /**
     * Disallow use of the `RegExp` constructor in favor of regular expression literals
     *
     * @see https://eslint.org/docs/rules/prefer-regex-literals
     */
    'prefer-regex-literals': 'off',

    /**
     * Require rest parameters instead of `arguments`
     *
     * @see https://eslint.org/docs/rules/prefer-rest-params
     */
    'prefer-rest-params': 'error',

    /**
     * Require spread operators instead of `.apply()`
     *
     * @see https://eslint.org/docs/rules/prefer-spread
     */
    'prefer-spread': 'error',

    /**
     * Require template literals instead of string concatenation
     *
     * @see https://eslint.org/docs/rules/prefer-template
     */
    'prefer-template': 'off',

    /**
     * Require quotes around object literal property names
     *
     * @see https://eslint.org/docs/rules/quote-props
     */
    'quote-props': 'off',

    /**
     * Enforce the consistent use of the radix argument when using `parseInt()`
     *
     * @see https://eslint.org/docs/rules/radix
     */
    'radix': 'off',

    /**
     * Disallow async functions which have no `await` expression
     *
     * @see https://eslint.org/docs/rules/require-await
     */
    'require-await': 'off',

    /**
     * Enforce the use of `u` flag on RegExp
     *
     * @see https://eslint.org/docs/rules/require-unicode-regexp
     */
    'require-unicode-regexp': 'off',

    /**
     * Require generator functions to contain `yield`
     *
     * @see https://eslint.org/docs/rules/require-yield
     */
    'require-yield': 'error',

    /**
     * Enforce sorted import declarations within modules
     *
     * @see https://eslint.org/docs/rules/sort-imports
     */
    'sort-imports': 'off',

    /**
     * Require object keys to be sorted
     *
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
     *
     * @see https://eslint.org/docs/rules/sort-vars
     */
    'sort-vars': 'off',

    /**
     * Enforce consistent spacing after the `//` or `/*` in a comment
     *
     * @see https://eslint.org/docs/rules/spaced-comment
     */
    'spaced-comment': 'off',

    /**
     * Require or disallow strict mode directives
     *
     * @see https://eslint.org/docs/rules/strict
     */
    'strict': ['error', 'never'],

    /**
     * Require symbol descriptions
     *
     * @see https://eslint.org/docs/rules/symbol-description
     */
    'symbol-description': 'off',

    /**
     * Require `var` declarations be placed at the top of their containing scope
     *
     * @see https://eslint.org/docs/rules/vars-on-top
     */
    'vars-on-top': 'off',

    /**
     * Require or disallow "Yoda" conditions
     *
     * @see https://eslint.org/docs/rules/yoda
     */
    'yoda': 'error',
  },
};
