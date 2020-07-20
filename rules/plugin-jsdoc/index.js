'use strict';

/**
 * JsDoc Plugin Rules
 * https://www.npmjs.com/package/eslint-plugin-jsdoc
 */

module.exports = {
  'plugins': [
    'jsdoc',
  ],
  'rules': {
    // Checks that @access tags use one of the following values
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-access
    'jsdoc/check-access': 'off',

    // Reports invalid alignment of JSDoc block asterisks
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment
    'jsdoc/check-alignment': 'off',

    // Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples
    'jsdoc/check-examples': 'off',

    // Reports invalid padding inside JSDoc blocks.
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation
    'jsdoc/check-indentation': 'off',

    // Ensures that parameter names in JSDoc match those in the function declaration
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names
    'jsdoc/check-param-names': 'error',

    // Ensures that property names in JSDoc are not duplicated
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-property-names
    'jsdoc/check-property-names': 'off',

    // Reports against Google Closure Compiler syntax
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-syntax
    'jsdoc/check-syntax': 'off',

    // Reports invalid block tag names
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-tag-names
    'jsdoc/check-tag-names': 'error',

    // Reports invalid types
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types
    'jsdoc/check-types': 'error',

    // This rule checks the values for a handful of tags
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values
    'jsdoc/check-values': 'off',

    // Expects the following tags to be empty of any content
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-empty-tags
    'jsdoc/empty-tags': 'off',

    // Reports an issue with any non-constructor function using @implements
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-implements-on-classes
    'jsdoc/implements-on-classes': 'off',

    // Enforces a regular expression pattern on descriptions
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-description
    'jsdoc/match-description': 'off',

    // Enforces a consistent padding of the block description
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-newline-after-description
    'jsdoc/newline-after-description': ['error', 'always'],

    // This rule reports types being used on @param or @returns
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-types
    'jsdoc/no-types': 'off',

    // Checks that types in jsdoc comments are defined
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-undefined-types
    'jsdoc/no-undefined-types': 'error',

    // Requires that all functions have a description
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description
    'jsdoc/require-description': 'off',

    // Requires that block description and tag description are written in complete sentences
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence
    'jsdoc/require-description-complete-sentence': 'off',

    // Requires that all functions have examples
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example
    'jsdoc/require-example': 'off',

    // Check that all files have a @file, @fileoverview, or @overview tag
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-file-overview
    'jsdoc/require-file-overview': 'off',

    // Requires a hyphen before the @param description
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description
    'jsdoc/require-hyphen-before-param-description': 'error',

    // Checks for presence of jsdoc comments, on class declarations as well as functions
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-jsdoc
    'jsdoc/require-jsdoc': 'off',

    // Requires that all function parameters are documented
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param
    'jsdoc/require-param': 'error',

    // Requires that @param tag has description value
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description
    'jsdoc/require-param-description': 'error',

    // Requires that all function parameters have name
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-name
    'jsdoc/require-param-name': 'error',

    // Requires that @param tag has type value
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-type
    'jsdoc/require-param-type': 'error',

    // Requires that all @typedef and @namespace tags have @property when their type is a plain object, Object, or PlainObject
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property
    'jsdoc/require-property': 'off',

    // Requires that each @property tag has a description value
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-description
    'jsdoc/require-property-description': 'off',

    // Requires that all function @property tags have names
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-name
    'jsdoc/require-property-name': 'off',

    // Requires that each @property tag has a type value
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-type
    'jsdoc/require-property-type': 'off',

    // Requires that returns are documented
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns
    'jsdoc/require-returns': 'off',

    // Requires a return statement in function body if a @returns tag is specified in jsdoc comment
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check
    'jsdoc/require-returns-check': 'off',

    // Requires that @returns tag has description value
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-description
    'jsdoc/require-returns-description': 'error',

    // Requires that @returns tag has type value
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type
    'jsdoc/require-returns-type': 'error',

    // Requires all types to be valid JSDoc or Closure compiler types without syntax errors
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-valid-types
    'jsdoc/valid-types': 'error',
  },
};
