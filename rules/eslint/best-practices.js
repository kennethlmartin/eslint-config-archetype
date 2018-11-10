'use strict';

/**
 * Eslint Rules - Best Practices
 * http://eslint.org/docs/rules/#best-practices
 */

module.exports = {
  'rules': {
    // Enforce getter and setter pairs in objects
    // http://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',

    // Enforce return statements in callbacks of array methods
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'off',

    // Enforce the use of variables within the scope they are defined
    // http://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'off',

    // Enforce that class methods utilize this
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'off',

    // Enforce a maximum cyclomatic complexity allowed in a program
    // http://eslint.org/docs/rules/complexity
    'complexity': 'off',

    // Require return statements to either always or never specify values
    // http://eslint.org/docs/rules/consistent-return
    'consistent-return': 'off',

    // Enforce consistent brace style for all control statements
    // http://eslint.org/docs/rules/curly
    'curly': 'off',

    // Require default cases in switch statements
    // http://eslint.org/docs/rules/default-case
    'default-case': 'off',

    // Enforce consistent newlines before and after dots
    // http://eslint.org/docs/rules/dot-location
    'dot-location': 'off',

    // Enforce dot notation whenever possible
    // http://eslint.org/docs/rules/dot-notation
    'dot-notation': 'off',

    // Enforces the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    'eqeqeq': ['error', 'always'],

    // Require for-in loops to include an if statement
    // http://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'off',

    // Disallow the use of alert, confirm, and prompt
    // http://eslint.org/docs/rules/no-alert
    'no-alert': 'error',

    // Disallow the use of arguments.caller or arguments.callee
    // http://eslint.org/docs/rules/no-caller
    'no-caller': 'off',

    // Disallow lexical declarations in case clauses
    // http://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // Disallow division operators explicitly at the beginning of regular expressions
    // http://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // Disallow else blocks after return statements in if statements
    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 'error',

    // Disallow empty functions
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': 'off',

    // Disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // Disallow null comparisons without type-checking operators
    // http://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'off',

    // Disallow the use of eval()
    // http://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // Disallow extending native types
    // http://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'off',

    // Disallow unnecessary calls to .bind()
    // http://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'off',

    // Disallow unnecessary labels
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'off',

    // Disallow fallthrough of case statements
    // http://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // Disallow leading or trailing decimal points in numeric literals
    // http://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'off',

    // Disallow assignments to native objects or read-only global variables
    // http://eslint.org/docs/rules/no-global-assign
    'no-global-assign': 'error',

    // Disallow shorthand type conversions
    // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': 'off',

    // Disallow variable and function declarations in the global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // Disallow the use of eval()-like methods
    // http://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'off',

    // Disallow this keywords outside of classes or class-like objects
    // http://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // Disallow the use of the __iterator__ property
    // http://eslint.org/docs/rules/no-iterator
    'no-iterator': 'off',

    // Disallow labeled statements
    // http://eslint.org/docs/rules/no-labels
    'no-labels': 'off',

    // Disallow unnecessary nested blocks
    // http://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'off',

    // Disallow function declarations and expressions inside loop statement
    // http://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'off',

    // Disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': 'off',

    // Disallow multiple spaces
    // http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',

    // Disallow multiline strings
    // http://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'off',

    // Disallow new operators outside of assignments or comparisons
    // http://eslint.org/docs/rules/no-new
    'no-new': 'off',

    // Disallow new operators with the Function object
    // http://eslint.org/docs/rules/no-new-func
    'no-new-func': 'off',

    // Disallow new operators with the String, Number, and Boolean objects
    // http://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'off',

    // Disallow octal literals
    // http://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // Disallow octal escape sequences in string literals
    // http://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'off',

    // Disallow reassigning function parameters
    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'off',

    // Disallow the use of the __proto__ property
    // http://eslint.org/docs/rules/no-proto
    'no-proto': 'off',

    // Disallow variable redeclaration
    // http://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // Disallow certain properties on certain objects
    // http://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': 'off',

    // Disallow assignment operators in return statements
    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'off',

    // Disallow unnecessary return await
    // http://eslint.org/docs/rules/no-return-await
    'no-return-await': 'off',

    // Disallow javascript: urls
    // http://eslint.org/docs/rules/no-script-url
    'no-script-url': 'off',

    // Disallow assignments where both sides are exactly the same
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',

    // Disallow comparisons where both sides are exactly the same
    // http://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'off',

    // Disallow comma operators
    // http://eslint.org/docs/rules/no-sequences
    'no-sequences': 'off',

    // Disallow throwing literals as exceptions
    // http://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'off',

    // Disallow unmodified loop conditions
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // Disallow unused expressions
    // http://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': 'off',

    // Disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // Disallow unnecessary calls to .call() and .apply()
    // http://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'off',

    // Disallow unnecessary concatenation of literals or template literals
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // Disallow unnecessary escape characters
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'off',

    // Disallow redundant return statements
    // http://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // Disallow void operators
    // http://eslint.org/docs/rules/no-void
    'no-void': 'off',

    // Disallow specified warning terms in comments
    // http://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': 'off',

    // Disallow with statements
    // http://eslint.org/docs/rules/no-with
    'no-with': 'off',

    // Require using Error objects as Promise rejection reasons
    // http://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'off',

    // Enforce the consistent use of the radix argument when using parseInt()
    // http://eslint.org/docs/rules/radix
    'radix': 'off',

    // Disallow async functions which have no await expression
    // http://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // Enforce the use of u flag on RegExp
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',

    // Require var declarations be placed at the top of their containing scope
    // http://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'off',

    // Require parentheses around immediate function invocations
    // http://eslint.org/docs/rules/wrap-iife
    'wrap-iife': 'off',

    // Require or disallow “Yoda” conditions
    // http://eslint.org/docs/rules/yoda
    'yoda': 'error',
  },
};
