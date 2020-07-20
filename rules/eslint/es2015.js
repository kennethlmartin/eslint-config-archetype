'use strict';

/**
 * Eslint Rules - ECMAScript 2015
 * https://eslint.org/docs/rules/#ecmascript-6
 */

module.exports = {
  'rules': {
    // Require braces around arrow function bodies
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 'off',

    // Require parentheses around arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': 'off',

    // Enforce consistent spacing before and after the arrow in arrow functions
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': 'off',

    // Require super() calls in constructors
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',

    // Enforce consistent spacing around * operators in generator functions
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': 'off',

    // Disallow reassigning class members
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // Disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': 'off',

    // Disallow reassigning const variables
    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',

    // Disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // Disallow duplicate module imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'off',

    // Disallow new operators with the Symbol object
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // Disallow specified modules when loaded by import
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 'off',

    // Disallow this/super before calling super() in constructors
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // Disallow unnecessary computed property keys in object literals
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'off',

    // Disallow unnecessary constructors
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'off',

    // Disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': 'off',

    // Require let or const instead of var
    // https://eslint.org/docs/rules/no-var
    'no-var': 'off',

    // Require or disallow method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': 'off',

    // Require arrow functions as callbacks
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': 'off',

    // Require const declarations for variables that are never reassigned after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 'off',

    // Require destructuring from arrays and/or objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': 'off',

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'off',

    // Require rest parameters instead of arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'off',

    // Require spread operators instead of .apply()
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'off',

    // Require template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'off',

    // Require generator functions to contain yield
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // Enforce spacing between rest and spread operators and their expressions
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': 'off',

    // Enforce sorted import declarations within modules
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': 'off',

    // Require symbol descriptions
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'off',

    // Require or disallow spacing around embedded expressions of template strings
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'off',

    // Require or disallow spacing around the * in yield* expressions
    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': 'off',
  },
};
