/**
 * Eslint Rules - Possbile Problems
 * @see https://eslint.org/docs/rules/#possible-problems
 */

module.exports = {
  rules: {
    /**
     * Enforce `return` statements in callbacks of array Methods
     * @see https://eslint.org/docs/rules/array-callback-return
     */
    'array-callback-return': 'off',

    /**
     * Require `super()` calls in Constructors
     * @see https://eslint.org/docs/rules/constructor-super
     */
    'constructor-super': 'error',

    /**
     * Enforce "for" loop update clause moving the counter in the right direction.
     * @see https://eslint.org/docs/rules/for-direction
     */
    'for-direction': 'off',

    /**
     * Enforce `return` statements in Getters
     * @see https://eslint.org/docs/rules/getter-return
     */
    'getter-return': 'off',

    /**
     * Disallow using an async function as a Promise Executor
     * @see https://eslint.org/docs/rules/no-async-promise-executor
     */
    'no-async-promise-executor': 'off',

    /**
     * Disallow `await` inside of Loops
     * @see https://eslint.org/docs/rules/no-await-in-loop
     */
    'no-await-in-loop': 'off',

    /**
     * Disallow reassigning class Members
     * @see https://eslint.org/docs/rules/no-class-assign
     */
    'no-class-assign': 'error',

    /**
     * Disallow comparing against -0
     * @see https://eslint.org/docs/rules/no-compare-neg-zero
     */
    'no-compare-neg-zero': 'off',

    /**
     * Disallow assignment operators in conditional Expressions
     * @see https://eslint.org/docs/rules/no-cond-assign
     */
    'no-cond-assign': ['error', 'always'],

    /**
     * Disallow reassigning `const` Variables
     * @see https://eslint.org/docs/rules/no-const-assign
     */
    'no-const-assign': 'error',

    /**
     * Disallow constant expressions in Conditions
     * @see https://eslint.org/docs/rules/no-constant-condition
     */
    'no-constant-condition': 'error',

    /**
     * Disallow returning value from Constructor
     * @see https://eslint.org/docs/rules/no-constructor-return
     */
    'no-constructor-return': 'error',

    /**
     * Disallow control characters in regular Expressions
     * @see https://eslint.org/docs/rules/no-control-regex
     */
    'no-control-regex': 'error',

    /**
     * Disallow the use of `debugger`
     * @see https://eslint.org/docs/rules/no-debugger
     */
    'no-debugger': 'error',

    /**
     * Disallow duplicate arguments in `function` Definitions
     * @see https://eslint.org/docs/rules/no-dupe-args
     */
    'no-dupe-args': 'error',

    /**
     * Disallow duplicate class Members
     * @see https://eslint.org/docs/rules/no-dupe-class-members
     */
    'no-dupe-class-members': 'error',

    /**
     * Disallow duplicate conditions in if-else-if Chains
     * @see https://eslint.org/docs/rules/no-dupe-else-if
     */
    'no-dupe-else-if': 'error',

    /**
     * Disallow duplicate keys in object Literals
     * @see https://eslint.org/docs/rules/no-dupe-keys
     */
    'no-dupe-keys': 'error',

    /**
     * Disallow duplicate case Labels
     * @see https://eslint.org/docs/rules/no-duplicate-case
     */
    'no-duplicate-case': 'error',

    /**
     * Disallow duplicate module Imports
     * @see https://eslint.org/docs/rules/no-duplicate-imports
     */
    'no-duplicate-imports': 'off',

    /**
     * Disallow empty character classes in regular Expressions
     * @see https://eslint.org/docs/rules/no-empty-character-class
     */
    'no-empty-character-class': 'error',

    /**
     * Disallow empty destructuring Patterns
     * @see https://eslint.org/docs/rules/no-empty-pattern
     */
    'no-empty-pattern': 'error',

    /**
     * Disallow reassigning exceptions in `catch` Clauses
     * @see https://eslint.org/docs/rules/no-ex-assign
     */
    'no-ex-assign': 'error',

    /**
     * Disallow fallthrough of `case` Statements
     * @see https://eslint.org/docs/rules/no-fallthrough
     */
    'no-fallthrough': 'error',

    /**
     * Disallow reassigning `function` Declarations
     * @see https://eslint.org/docs/rules/no-func-assign
     */
    'no-func-assign': 'off',

    /**
     * Disallow assigning to imported Bindings
     * @see https://eslint.org/docs/rules/no-import-assign
     */
    'no-import-assign': 'off',

    /**
     * Disallow variable or `function` declarations in nested Blocks
     * @see https://eslint.org/docs/rules/no-inner-declarations
     */
    'no-inner-declarations': 'off',

    /**
     * Disallow invalid regular expression strings in `RegExp` Constructors
     * @see https://eslint.org/docs/rules/no-invalid-regexp
     */
    'no-invalid-regexp': 'off',

    /**
     * Disallow irregular Whitespace
     * @see https://eslint.org/docs/rules/no-irregular-whitespace
     */
    'no-irregular-whitespace': 'off',

    /**
     * Disallow literal numbers that lose Precision
     * @see https://eslint.org/docs/rules/no-loss-of-precision
     */
    'no-loss-of-precision': 'off',

    /**
     * Disallow characters which are made with multiple code points in character class Syntax
     * @see https://eslint.org/docs/rules/no-misleading-character-class
     */
    'no-misleading-character-class': 'off',

    /**
     * Disallow `new` operators with the `Symbol` Object
     * @see https://eslint.org/docs/rules/no-new-symbol
     */
    'no-new-symbol': 'error',

    /**
     * Disallow calling global object properties as Functions
     * @see https://eslint.org/docs/rules/no-obj-calls
     */
    'no-obj-calls': 'off',

    /**
     * Disallow returning values from Promise executor Functions
     * @see https://eslint.org/docs/rules/no-promise-executor-return
     */
    'no-promise-executor-return': 'off',

    /**
     * Disallow calling some `Object.prototype` methods directly on Objects
     * @see https://eslint.org/docs/rules/no-prototype-builtins
     */
    'no-prototype-builtins': 'off',

    /**
     * Disallow assignments where both sides are exactly the Same
     * @see https://eslint.org/docs/rules/no-self-assign
     */
    'no-self-assign': 'error',

    /**
     * Disallow comparisons where both sides are exactly the Same
     * @see https://eslint.org/docs/rules/no-self-compare
     */
    'no-self-compare': 'off',

    /**
     * Disallow returning values from Setters
     * @see https://eslint.org/docs/rules/no-setter-return
     */
    'no-setter-return': 'off',

    /**
     * Disallow sparse Arrays
     * @see https://eslint.org/docs/rules/no-sparse-arrays
     */
    'no-sparse-arrays': 'off',

    /**
     * Disallow template literal placeholder syntax in regular Strings
     * @see https://eslint.org/docs/rules/no-template-curly-in-string
     */
    'no-template-curly-in-string': 'off',

    /**
     * Disallow `this`/`super` before calling `super()` in Constructors
     * @see https://eslint.org/docs/rules/no-this-before-super
     */
    'no-this-before-super': 'error',

    /**
     * Disallow the use of undeclared variables unless mentioned in `global` Comments
     * @see https://eslint.org/docs/rules/no-undef
     */
    'no-undef': 'error',

    /**
     * Disallow confusing multiline Expressions
     * @see https://eslint.org/docs/rules/no-unexpected-multiline
     */
    'no-unexpected-multiline': 'off',

    /**
     * Disallow unmodified loop Conditions
     * @see https://eslint.org/docs/rules/no-unmodified-loop-condition
     */
    'no-unmodified-loop-condition': 'off',

    /**
     * Disallow unreachable code after `return`, `throw`, `continue`, and `break` Statements
     * @see https://eslint.org/docs/rules/no-unreachable
     */
    'no-unreachable': 'off',

    /**
     * Disallow loops with a body that allows only one Iteration
     * @see https://eslint.org/docs/rules/no-unreachable-loop
     */
    'no-unreachable-loop': 'off',

    /**
     * Disallow control flow statements in `finally` Blocks
     * @see https://eslint.org/docs/rules/no-unsafe-finally
     */
    'no-unsafe-finally': 'off',

    /**
     * Disallow negating the left operand of relational Operators
     * @see https://eslint.org/docs/rules/no-unsafe-negation
     */
    'no-unsafe-negation': 'off',

    /**
     * Disallow use of optional chaining in contexts where the `undefined` value is not Allowed
     * @see https://eslint.org/docs/rules/no-unsafe-optional-chaining
     */
    'no-unsafe-optional-chaining': 'off',

    /**
     * Disallow unused private class Members
     * @see https://eslint.org/docs/rules/no-unused-private-class-members
     */
    'no-unused-private-class-members': 'off',

    /**
     * Disallow unused Variables
     * @see https://eslint.org/docs/rules/no-unused-vars
     */
    'no-unused-vars': 'error',

    /**
     * Disallow the use of variables before they are Defined
     * @see https://eslint.org/docs/rules/no-use-before-define
     */
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: true,
      },
    ],

    /**
     * Disallow useless backreferences in regular Expressions
     * @see https://eslint.org/docs/rules/no-useless-backreference
     */
    'no-useless-backreference': 'off',

    /**
     * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
     * @see https://eslint.org/docs/rules/require-atomic-updates
     */
    'require-atomic-updates': 'off',

    /**
     * require calls to `isNaN()` when checking for `NaN`
     * @see https://eslint.org/docs/rules/use-isnan
     */
    'use-isnan': 'off',

    /**
     * Enforce comparing `typeof` expressions against valid Strings
     * @see https://eslint.org/docs/rules/valid-typeof
     */
    'valid-typeof': 'off',
  },
};
