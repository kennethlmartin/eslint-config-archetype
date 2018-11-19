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
    // Ensures that parameter names in JSDoc match those in the function declaration
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names
    'check-param-names': 'error',

    // Reports invalid block tag names
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-tag-names
    'check-tag-names': 'error',

    // Reports invalid types
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types
    'check-types': 'error',

    // Enforces a consistent padding of the block description
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-newline-after-description
    'newline-after-description': ['error', 'always'],

    // Checks that types in jsdoc comments are defined
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-undefined-types
    'no-undefined-types': 'error',

    // Requires that all functions have a description
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description
    'require-description': 'off',

    // Requires that block description and tag description are written in complete sentences
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence
    'require-description-complete-sentence': 'off',

    // Requires that all functions have examples
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example
    'require-example': 'off',

    // Requires a hyphen before the @param description
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description
    'require-hyphen-before-param-description': 'error',

    // Requires that all function parameters are documented
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param
    'require-param': 'error',

    // Requires that @param tag has description value
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description
    'require-param-description': 'error',

    // Requires that all function parameters have name
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-name
    'require-param-name': 'error',

    // Requires that @param tag has type value
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-type
    'require-param-type': 'error',

    // Requires that @returns tag has description value
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-description
    'require-returns-description': 'error',

    // Requires that @returns tag has type value
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type
    'require-returns-type': 'error',

    // Requires all types to be valid JSDoc or Closure compiler types without syntax errors
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-valid-types
    'valid-types': 'error',
  },
};
