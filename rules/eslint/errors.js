/**
 * Eslint Rules - Possible Errors
 * http://eslint.org/docs/rules/#possible-errors
 */

module.exports = {
  rules: {
    /**
     * Enforce "for" loop update clause moving the counter in the right direction
     * @see https://eslint.org/docs/rules/for-direction
     */
    'for-direction': 'off',

    /**
     * Enforce `return` statements in getters
     * @see https://eslint.org/docs/rules/getter-return
     */
    'getter-return': 'off',

    /**
     * Disallow using an async function as a Promise executor
     * @see https://eslint.org/docs/rules/no-async-promise-executor
     */
    'no-async-promise-executor': 'off',

    /**
     * Disallow `await` inside of loops
     * @see https://eslint.org/docs/rules/no-await-in-loop
     */
    'no-await-in-loop': 'off',

    /**
     * Disallow comparing against -0
     * @see https://eslint.org/docs/rules/no-compare-neg-zero
     */
    'no-compare-neg-zero': 'off',

    /**
     * Disallow assignment operators in conditional expressions
     * @see https://eslint.org/docs/rules/no-cond-assign
     */
    'no-cond-assign': ['error', 'always'],

    /**
     * Disallow the use of `console`
     * @see https://eslint.org/docs/rules/no-console
     */
    'no-console': ['error', { allow: ['warn', 'error'] }],

    /**
     * Disallow constant expressions in conditions
     * @see https://eslint.org/docs/rules/no-constant-condition
     */
    'no-constant-condition': 'error',

    /**
     * Disallow control characters in regular expressions
     * @see https://eslint.org/docs/rules/no-control-regex
     */
    'no-control-regex': 'error',

    /**
     * Disallow the use of `debugger`
     * @see https://eslint.org/docs/rules/no-debugger
     */
    'no-debugger': 'error',

    /**
     * Disallow duplicate arguments in `function` definitions
     * @see https://eslint.org/docs/rules/no-dupe-args
     */
    'no-dupe-args': 'error',

    /**
     * Disallow duplicate conditions in if-else-if chains
     * @see https://eslint.org/docs/rules/no-dupe-else-if
     */
    'no-dupe-else-if': 'error',

    /**
     * Disallow duplicate keys in object literals
     * @see https://eslint.org/docs/rules/no-dupe-keys
     */
    'no-dupe-keys': 'error',

    /**
     * Disallow duplicate case labels
     * @see https://eslint.org/docs/rules/no-duplicate-case
     */
    'no-duplicate-case': 'error',

    /**
     * Disallow empty block statements
     * @see https://eslint.org/docs/rules/no-empty
     */
    'no-empty': 'error',

    /**
     * Disallow empty character classes in regular expressions
     * @see https://eslint.org/docs/rules/no-empty-character-class
     */
    'no-empty-character-class': 'error',

    /**
     * Disallow reassigning exceptions in `catch` clauses
     * @see https://eslint.org/docs/rules/no-ex-assign
     */
    'no-ex-assign': 'error',

    /**
     * Disallow unnecessary boolean casts
     * @see https://eslint.org/docs/rules/no-extra-boolean-cast
     */
    'no-extra-boolean-cast': 'error',

    /**
     * Disallow unnecessary parentheses
     * @see https://eslint.org/docs/rules/no-extra-parens
     */
    'no-extra-parens': 'off',

    /**
     * Disallow unnecessary semicolons
     * @see https://eslint.org/docs/rules/no-extra-semi
     */
    'no-extra-semi': 'off',

    /**
     * Disallow reassigning `function` declarations
     * @see https://eslint.org/docs/rules/no-func-assign
     */
    'no-func-assign': 'off',

    /**
     * Disallow assigning to imported bindings
     * @see https://eslint.org/docs/rules/no-import-assign
     */
    'no-import-assign': 'off',

    /**
     * Disallow variable or `function` declarations in nested blocks
     * @see https://eslint.org/docs/rules/no-inner-declarations
     */
    'no-inner-declarations': 'off',

    /**
     * Disallow invalid regular expression strings in `RegExp` constructors
     * @see https://eslint.org/docs/rules/no-invalid-regexp
     */
    'no-invalid-regexp': 'off',

    /**
     * Disallow irregular whitespace
     * @see https://eslint.org/docs/rules/no-irregular-whitespace
     */
    'no-irregular-whitespace': 'off',

    /**
     * Disallow literal numbers that lose precision
     * @see https://eslint.org/docs/rules/no-loss-of-precision
     */
    'no-loss-of-precision': 'off',

    /**
     * Disallow characters which are made with multiple code points in character class syntax
     * @see https://eslint.org/docs/rules/no-misleading-character-class
     */
    'no-misleading-character-class': 'off',

    /**
     * Disallow calling global object properties as functions
     * @see https://eslint.org/docs/rules/no-obj-calls
     */
    'no-obj-calls': 'off',

    /**
     * Disallow returning values from Promise executor functions
     * @see https://eslint.org/docs/rules/no-promise-executor-return
     */
    'no-promise-executor-return': 'off',

    /**
     * Disallow calling some `Object.prototype` methods directly on objects
     * @see https://eslint.org/docs/rules/no-prototype-builtins
     */
    'no-prototype-builtins': 'off',

    /**
     * Disallow multiple spaces in regular expressions
     * @see https://eslint.org/docs/rules/no-regex-spaces
     */
    'no-regex-spaces': 'off',

    /**
     * Disallow returning values from setters
     * @see https://eslint.org/docs/rules/no-setter-return
     */
    'no-setter-return': 'off',

    /**
     * Disallow sparse arrays
     * @see https://eslint.org/docs/rules/no-sparse-arrays
     */
    'no-sparse-arrays': 'off',

    /**
     * Disallow template literal placeholder syntax in regular strings
     * @see https://eslint.org/docs/rules/no-template-curly-in-string
     */
    'no-template-curly-in-string': 'off',

    /**
     * Disallow confusing multiline expressions
     * @see https://eslint.org/docs/rules/no-unexpected-multiline
     */
    'no-unexpected-multiline': 'off',

    /**
     * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
     * @see https://eslint.org/docs/rules/no-unreachable
     */
    'no-unreachable': 'off',

    /**
     * Disallow loops with a body that allows only one iteration
     * @see https://eslint.org/docs/rules/no-unreachable-loop
     */
    'no-unreachable-loop': 'off',

    /**
     * Disallow control flow statements in `finally` blocks
     * @see https://eslint.org/docs/rules/no-unsafe-finally
     */
    'no-unsafe-finally': 'off',

    /**
     * Disallow negating the left operand of relational operators
     * @see https://eslint.org/docs/rules/no-unsafe-negation
     */
    'no-unsafe-negation': 'off',

    /**
     * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
     * @see https://eslint.org/docs/rules/no-unsafe-optional-chaining
     */
    'no-unsafe-optional-chaining': 'off',

    /**
     * Disallow useless backreferences in regular expressions
     * @see https://eslint.org/docs/rules/no-useless-backreference
     */
    'no-useless-backreference': 'off',

    /**
     * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
     * @see https://eslint.org/docs/rules/require-atomic-updates
     */
    'require-atomic-updates': 'off',

    /**
     * Require calls to `isNaN()` when checking for `NaN`
     * @see https://eslint.org/docs/rules/use-isnan
     */
    'use-isnan': 'off',

    /**
     * Enforce comparing `typeof` expressions against valid strings
     * @see https://eslint.org/docs/rules/valid-typeof
     */
    'valid-typeof': 'off',
  },
};
