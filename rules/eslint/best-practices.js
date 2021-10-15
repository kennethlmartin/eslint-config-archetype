/**
 * Eslint Rules - Best Practices
 * @see https://eslint.org/docs/rules/#best-practices
 */

module.exports = {
  rules: {
    /**
     * Enforce getter and setter pairs in objects and classes
     * @see https://eslint.org/docs/rules/accessor-pairs
     */
    'accessor-pairs': 'off',

    /**
     * Enforce `return` statements in callbacks of array methods
     * @see https://eslint.org/docs/rules/array-callback-return
     */
    'array-callback-return': 'off',

    /**
     * Enforce the use of variables within the scope they are defined
     * @see https://eslint.org/docs/rules/block-scoped-var
     */
    'block-scoped-var': 'off',

    /**
     * Enforce that class methods utilize `this`
     * @see https://eslint.org/docs/rules/class-methods-use-this
     */
    'class-methods-use-this': 'off',

    /**
     * Enforce a maximum cyclomatic complexity allowed in a program
     * @see https://eslint.org/docs/rules/complexity
     */
    'complexity': 'off',

    /**
     * Require `return` statements to either always or never specify values
     * @see https://eslint.org/docs/rules/consistent-return
     */
    'consistent-return': 'off',

    /**
     * Enforce consistent brace style for all control statements
     * @see https://eslint.org/docs/rules/curly
     */
    'curly': 'off',

    /**
     * Require `default` cases in `switch` statements
     * @see https://eslint.org/docs/rules/default-case
     */
    'default-case': 'off',

    /**
     * Enforce default clauses in switch statements to be last
     * @see https://eslint.org/docs/rules/default-case-last
     */
    'default-case-last': 'off',

    /**
     * Enforce default parameters to be last
     * @see https://eslint.org/docs/rules/default-param-last
     */
    'default-param-last': 'off',

    /**
     * Enforce consistent newlines before and after dots
     * @see https://eslint.org/docs/rules/dot-location
     */
    'dot-location': 'off',

    /**
     * Enforce dot notation whenever possible
     * @see https://eslint.org/docs/rules/dot-notation
     */
    'dot-notation': 'off',

    /**
     * Require the use of `===` and `!==`
     * @see https://eslint.org/docs/rules/eqeqeq
     */
    'eqeqeq': ['error', 'always'],

    /**
     * Require grouped accessor pairs in object literals and classes
     * @see https://eslint.org/docs/rules/grouped-accessor-pairs
     */
    'grouped-accessor-pairs': 'off',

    /**
     * Require `for-in` loops to include an `if` statement
     * @see https://eslint.org/docs/rules/guard-for-in
     */
    'guard-for-in': 'off',

    /**
     * Enforce a maximum number of classes per file
     * @see https://eslint.org/docs/rules/max-classes-per-file
     */
    'max-classes-per-file': ['error', 1],

    /**
     * Disallow the use of `alert`, `confirm`, and `prompt`
     * @see https://eslint.org/docs/rules/no-alert
     */
    'no-alert': 'error',

    /**
     * Disallow the use of `arguments.caller` or `arguments.callee`
     * @see https://eslint.org/docs/rules/no-caller
     */
    'no-caller': 'off',

    /**
     * Disallow lexical declarations in case clauses
     * @see https://eslint.org/docs/rules/no-case-declarations
     */
    'no-case-declarations': 'error',

    /**
     * Disallow returning value from constructor
     * @see https://eslint.org/docs/rules/no-constructor-return
     */
    'no-constructor-return': 'error',

    /**
     * Disallow division operators explicitly at the beginning of regular expressions
     * @see https://eslint.org/docs/rules/no-div-regex
     */
    'no-div-regex': 'off',

    /**
     * Disallow `else` blocks after `return` statements in `if` statements
     * @see https://eslint.org/docs/rules/no-else-return
     */
    'no-else-return': 'error',

    /**
     * Disallow empty functions
     * @see https://eslint.org/docs/rules/no-empty-function
     */
    'no-empty-function': 'off',

    /**
     * Disallow empty destructuring patterns
     * @see https://eslint.org/docs/rules/no-empty-pattern
     */
    'no-empty-pattern': 'error',

    /**
     * Disallow `null` comparisons without type-checking operators
     * @see https://eslint.org/docs/rules/no-eq-null
     */
    'no-eq-null': 'off',

    /**
     * Disallow the use of `eval()`
     * @see https://eslint.org/docs/rules/no-eval
     */
    'no-eval': 'error',

    /**
     * Disallow extending native types
     * @see https://eslint.org/docs/rules/no-extend-native
     */
    'no-extend-native': 'off',

    /**
     * Disallow unnecessary calls to `.bind()`
     * @see https://eslint.org/docs/rules/no-extra-bind
     */
    'no-extra-bind': 'off',

    /**
     * Disallow unnecessary labels
     * @see https://eslint.org/docs/rules/no-extra-label
     */
    'no-extra-label': 'off',

    /**
     * Disallow fallthrough of `case` statements
     * @see https://eslint.org/docs/rules/no-fallthrough
     */
    'no-fallthrough': 'error',

    /**
     * Disallow leading or trailing decimal points in numeric literals
     * @see https://eslint.org/docs/rules/no-floating-decimal
     */
    'no-floating-decimal': 'off',

    /**
     * Disallow assignments to native objects or read-only global variables
     * @see https://eslint.org/docs/rules/no-global-assign
     */
    'no-global-assign': 'error',

    /**
     * Disallow shorthand type conversions
     * @see https://eslint.org/docs/rules/no-implicit-coercion
     */
    'no-implicit-coercion': 'off',

    /**
     * Disallow declarations in the global scope
     * @see https://eslint.org/docs/rules/no-implicit-globals
     */
    'no-implicit-globals': 'off',

    /**
     * Disallow the use of `eval()`-like methods
     * @see https://eslint.org/docs/rules/no-implied-eval
     */
    'no-implied-eval': 'off',

    /**
     * Disallow `this` keywords outside of classes or class-like objects
     * @see https://eslint.org/docs/rules/no-invalid-this
     */
    'no-invalid-this': 'off',

    /**
     * Disallow the use of the `__iterator__` property
     * @see https://eslint.org/docs/rules/no-iterator
     */
    'no-iterator': 'off',

    /**
     * Disallow labeled statements
     * @see https://eslint.org/docs/rules/no-labels
     */
    'no-labels': 'off',

    /**
     * Disallow unnecessary nested blocks
     * @see https://eslint.org/docs/rules/no-lone-blocks
     */
    'no-lone-blocks': 'off',

    /**
     * Disallow function declarations that contain unsafe references inside loop statements
     * @see https://eslint.org/docs/rules/no-loop-func
     */
    'no-loop-func': 'off',

    /**
     * Disallow magic numbers
     * @see https://eslint.org/docs/rules/no-magic-numbers
     */
    'no-magic-numbers': 'off',

    /**
     * Disallow multiple spaces
     * @see https://eslint.org/docs/rules/no-multi-spaces
     */
    'no-multi-spaces': 'error',

    /**
     * Disallow multiline strings
     * @see https://eslint.org/docs/rules/no-multi-str
     */
    'no-multi-str': 'off',

    /**
     * Disallow `new` operators outside of assignments or comparisons
     * @see https://eslint.org/docs/rules/no-new
     */
    'no-new': 'off',

    /**
     * Disallow `new` operators with the `Function` object
     * @see https://eslint.org/docs/rules/no-new-func
     */
    'no-new-func': 'off',

    /**
     * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
     * @see https://eslint.org/docs/rules/no-new-wrappers
     */
    'no-new-wrappers': 'off',

    /**
     * Disallow `\8` and `\9` escape sequences in string literals
     * @see https://eslint.org/docs/rules/no-nonoctal-decimal-escape
     */
    'no-nonoctal-decimal-escape': 'off',

    /**
     * Disallow octal literals
     * @see https://eslint.org/docs/rules/no-octal
     */
    'no-octal': 'error',

    /**
     * Disallow octal escape sequences in string literals
     * @see https://eslint.org/docs/rules/no-octal-escape
     */
    'no-octal-escape': 'off',

    /**
     * Disallow reassigning `function` parameters
     * @see https://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': 'off',

    /**
     * Disallow the use of the `__proto__` property
     * @see https://eslint.org/docs/rules/no-proto
     */
    'no-proto': 'off',

    /**
     * Disallow variable redeclaration
     * @see https://eslint.org/docs/rules/no-redeclare
     */
    'no-redeclare': 'error',

    /**
     * Disallow certain properties on certain objects
     * @see https://eslint.org/docs/rules/no-restricted-properties
     */
    'no-restricted-properties': 'off',

    /**
     * Disallow assignment operators in `return` statements
     * @see https://eslint.org/docs/rules/no-return-assign
     */
    'no-return-assign': 'off',

    /**
     * Disallow unnecessary `return await`
     * @see https://eslint.org/docs/rules/no-return-await
     */
    'no-return-await': 'off',

    /**
     * Disallow `javascript:` urls
     * @see https://eslint.org/docs/rules/no-script-url
     */
    'no-script-url': 'off',

    /**
     * Disallow assignments where both sides are exactly the same
     * @see https://eslint.org/docs/rules/no-self-assign
     */
    'no-self-assign': 'error',

    /**
     * Disallow comparisons where both sides are exactly the same
     * @see https://eslint.org/docs/rules/no-self-compare
     */
    'no-self-compare': 'off',

    /**
     * Disallow comma operators
     * @see https://eslint.org/docs/rules/no-sequences
     */
    'no-sequences': 'off',

    /**
     * Disallow throwing literals as exceptions
     * @see https://eslint.org/docs/rules/no-throw-literal
     */
    'no-throw-literal': 'off',

    /**
     * Disallow unmodified loop conditions
     * @see https://eslint.org/docs/rules/no-unmodified-loop-condition
     */
    'no-unmodified-loop-condition': 'off',

    /**
     * Disallow unused expressions
     * @see https://eslint.org/docs/rules/no-unused-expressions
     */
    'no-unused-expressions': 'off',

    /**
     * Disallow unused labels
     * @see https://eslint.org/docs/rules/no-unused-labels
     */
    'no-unused-labels': 'error',

    /**
     * Disallow unnecessary calls to `.call()` and `.apply()`
     * @see https://eslint.org/docs/rules/no-useless-call
     */
    'no-useless-call': 'off',

    /**
     * Disallow unnecessary `catch` clauses
     * @see https://eslint.org/docs/rules/no-useless-catch
     */
    'no-useless-catch': 'error',

    /**
     * Disallow unnecessary concatenation of literals or template literals
     * @see https://eslint.org/docs/rules/no-useless-concat
     */
    'no-useless-concat': 'error',

    /**
     * Disallow unnecessary escape characters
     * @see https://eslint.org/docs/rules/no-useless-escape
     */
    'no-useless-escape': 'off',

    /**
     * Disallow redundant return statements
     * @see https://eslint.org/docs/rules/no-useless-return
     */
    'no-useless-return': 'error',

    /**
     * Disallow `void` operators
     * @see https://eslint.org/docs/rules/no-void
     */
    'no-void': 'off',

    /**
     * Disallow specified warning terms in comments
     * @see https://eslint.org/docs/rules/no-warning-comments
     */
    'no-warning-comments': 'off',

    /**
     * Disallow `with` statements
     * @see https://eslint.org/docs/rules/no-with
     */
    'no-with': 'off',

    /**
     * Enforce using named capture group in regular expression
     * @see https://eslint.org/docs/rules/prefer-named-capture-group
     */
    'prefer-named-capture-group': 'off',

    /**
     * Require using Error objects as Promise rejection reasons
     * @see https://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': 'off',

    /**
     * Disallow use of the `RegExp` constructor in favor of regular expression literals
     * @see https://eslint.org/docs/rules/prefer-regex-literals
     */
    'prefer-regex-literals': 'off',

    /**
     * Enforce the consistent use of the radix argument when using `parseInt()`
     * @see https://eslint.org/docs/rules/radix
     */
    'radix': 'off',

    /**
     * Disallow async functions which have no `await` expression
     * @see https://eslint.org/docs/rules/require-await
     */
    'require-await': 'off',

    /**
     * Enforce the use of `u` flag on RegExp
     * @see https://eslint.org/docs/rules/require-unicode-regexp
     */
    'require-unicode-regexp': 'off',

    /**
     * Require `var` declarations be placed at the top of their containing scope
     * @see https://eslint.org/docs/rules/vars-on-top
     */
    'vars-on-top': 'off',

    /**
     * Require parentheses around immediate `function` invocations
     * @see https://eslint.org/docs/rules/wrap-iife
     */
    'wrap-iife': 'off',

    /**
     * Require or disallow "Yoda" conditions
     * @see https://eslint.org/docs/rules/yoda
     */
    'yoda': 'error',
  },
};
