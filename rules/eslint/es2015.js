/**
 * Eslint Rules - ECMAScript 2015
 * @see https://eslint.org/docs/rules/#ecmascript-6
 */

module.exports = {
  rules: {
    /**
     * Require braces around arrow function bodies
     * @see https://eslint.org/docs/rules/arrow-body-style
     */
    'arrow-body-style': 'off',

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
     * Require `super()` calls in constructors
     * @see https://eslint.org/docs/rules/constructor-super
     */
    'constructor-super': 'error',

    /**
     * Enforce consistent spacing around `*` operators in generator functions
     * @see https://eslint.org/docs/rules/generator-star-spacing
     */
    'generator-star-spacing': 'off',

    /**
     * Disallow reassigning class members
     * @see https://eslint.org/docs/rules/no-class-assign
     */
    'no-class-assign': 'error',

    /**
     * Disallow arrow functions where they could be confused with comparisons
     * @see https://eslint.org/docs/rules/no-confusing-arrow
     */
    'no-confusing-arrow': 'off',

    /**
     * Disallow reassigning `const` variables
     * @see https://eslint.org/docs/rules/no-const-assign
     */
    'no-const-assign': 'error',

    /**
     * Disallow duplicate class members
     * @see https://eslint.org/docs/rules/no-dupe-class-members
     */
    'no-dupe-class-members': 'error',

    /**
     * Disallow duplicate module imports
     * @see https://eslint.org/docs/rules/no-duplicate-imports
     */
    'no-duplicate-imports': 'off',

    /**
     * Disallow `new` operators with the `Symbol` object
     * @see https://eslint.org/docs/rules/no-new-symbol
     */
    'no-new-symbol': 'error',

    /**
     * Disallow specified names in exports
     * @see https://eslint.org/docs/rules/no-restricted-exports
     */
    'no-restricted-exports': 'off',

    /**
     * Disallow specified modules when loaded by `import`
     * @see https://eslint.org/docs/rules/no-restricted-imports
     */
    'no-restricted-imports': 'off',

    /**
     * Disallow `this`/`super` before calling `super()` in constructors
     * @see https://eslint.org/docs/rules/no-this-before-super
     */
    'no-this-before-super': 'error',

    /**
     * Disallow unnecessary computed property keys in objects and classes
     * @see https://eslint.org/docs/rules/no-useless-computed-key
     */
    'no-useless-computed-key': 'off',

    /**
     * Disallow unnecessary constructors
     * @see https://eslint.org/docs/rules/no-useless-constructor
     */
    'no-useless-constructor': 'off',

    /**
     * Disallow renaming import, export, and destructured assignments to the same name
     * @see https://eslint.org/docs/rules/no-useless-rename
     */
    'no-useless-rename': 'off',

    /**
     * Require `let` or `const` instead of `var`
     * @see https://eslint.org/docs/rules/no-var
     */
    'no-var': 'off',

    /**
     * Require or disallow method and property shorthand syntax for object literals
     * @see https://eslint.org/docs/rules/object-shorthand
     */
    'object-shorthand': 'off',

    /**
     * Require using arrow functions for callbacks
     * @see https://eslint.org/docs/rules/prefer-arrow-callback
     */
    'prefer-arrow-callback': 'off',

    /**
     * Require `const` declarations for variables that are never reassigned after declared
     * @see https://eslint.org/docs/rules/prefer-const
     */
    'prefer-const': 'off',

    /**
     * Require destructuring from arrays and/or objects
     * @see https://eslint.org/docs/rules/prefer-destructuring
     */
    'prefer-destructuring': 'off',

    /**
     * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
     * @see https://eslint.org/docs/rules/prefer-numeric-literals
     */
    'prefer-numeric-literals': 'off',

    /**
     * Require rest parameters instead of `arguments`
     * @see https://eslint.org/docs/rules/prefer-rest-params
     */
    'prefer-rest-params': 'off',

    /**
     * Require spread operators instead of `.apply()`
     * @see https://eslint.org/docs/rules/prefer-spread
     */
    'prefer-spread': 'off',

    /**
     * Require template literals instead of string concatenation
     * @see https://eslint.org/docs/rules/prefer-template
     */
    'prefer-template': 'off',

    /**
     * Require generator functions to contain `yield`
     * @see https://eslint.org/docs/rules/require-yield
     */
    'require-yield': 'error',

    /**
     * Enforce spacing between rest and spread operators and their expressions
     * @see https://eslint.org/docs/rules/rest-spread-spacing
     */
    'rest-spread-spacing': 'off',

    /**
     * Enforce sorted import declarations within modules
     * @see https://eslint.org/docs/rules/sort-imports
     */
    'sort-imports': 'off',

    /**
     * Require symbol descriptions
     * @see https://eslint.org/docs/rules/symbol-description
     */
    'symbol-description': 'off',

    /**
     * Require or disallow spacing around embedded expressions of template strings
     * @see https://eslint.org/docs/rules/template-curly-spacing
     */
    'template-curly-spacing': 'off',

    /**
     * Require or disallow spacing around the `*` in `yield*` expressions
     * @see https://eslint.org/docs/rules/yield-star-spacing
     */
    'yield-star-spacing': 'off',
  },
};
