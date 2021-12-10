/**
 * JSDoc Plugin Rules
 * @see https://github.com/gajus/eslint-plugin-jsdoc
 */

module.exports = {
  plugins: ['jsdoc'],
  rules: {
    /**
     * Checks the `@access` tags
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-access
     */
    'jsdoc/check-access': 'off',

    /**
     * Reports invalid alignment of JSDoc block asterisks
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment
     */
    'jsdoc/check-alignment': 'off',

    /**
     * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples
     */
    'jsdoc/check-examples': 'off',

    /**
     * Reports invalid padding inside JSDoc blocks
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation
     */
    'jsdoc/check-indentation': 'off',

    /**
     * Reports invalid alignment of JSDoc block lines.
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-line-alignment
     */
    'jsdoc/check-line-alignment': 'off',

    /**
     * Ensures that parameter names in JSDoc match those in the function declaration
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names
     */
    'jsdoc/check-param-names': 'error',

    /**
     * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-property-names
     */
    'jsdoc/check-property-names': 'off',

    /**
     * Reports against syntax not encouraged for the mode
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-syntax
     */
    'jsdoc/check-syntax': 'off',

    /**
     * Reports invalid block tag names
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-tag-names
     */
    'jsdoc/check-tag-names': 'error',

    /**
     * Reports invalid types
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types
     */
    'jsdoc/check-types': 'error',

    /**
     * This rule checks the values for a handful of tags
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values
     */
    'jsdoc/check-values': 'off',

    /**
     * Expects the specific tags to be empty of any content
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-empty-tags
     */
    'jsdoc/empty-tags': 'off',

    /**
     * Reports an issue with any non-constructor function using `@implements`
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-implements-on-classes
     */
    'jsdoc/implements-on-classes': 'off',

    /**
     * Enforces a regular expression pattern on descriptions
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-description
     */
    'jsdoc/match-description': 'off',

    /**
     * Reports the name portion of a JSDoc tag if matching or not matching a given regular expression
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-name
     */
    'jsdoc/match-name': 'off',

    /**
     * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks
     */
    'jsdoc/multiline-blocks': 'off',

    /**
     * Enforces a consistent padding of the block description
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-newline-after-description
     */
    'jsdoc/newline-after-description': ['error', 'always'],

    /**
     * This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-bad-blocks
     */
    'jsdoc/no-bad-blocks': 'error',

    /**
     * This rule reports defaults being used on the relevant portion of `@param` or `@default`
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-defaults
     */
    'jsdoc/no-defaults': 'off',

    /**
     * Lets you report if certain always expected comment structures are missing
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-missing-syntax
     */
    'jsdoc/no-missing-syntax': 'off',

    /**
     * Prevents use of multiple asterisks at the beginning of lines
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-multi-asterisks
     */
    'jsdoc/no-multi-asterisks': 'off',

    /**
     * Reports when certain comment structures are present
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-restricted-syntax
     */
    'jsdoc/no-restricted-syntax': 'off',

    /**
     * This rule reports types being used on `@param` or `@returns`
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-types
     */
    'jsdoc/no-types': 'off',

    /**
     * Checks that types in jsdoc comments are defined
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-undefined-types
     */
    'jsdoc/no-undefined-types': 'error',

    /**
     * Requires that each JSDoc line starts with an `*`
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-asterisk-prefix
     */
    'jsdoc/require-asterisk-prefix': 'off',

    /**
     * Requires that all functions have a description
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description
     */
    'jsdoc/require-description': 'off',

    /**
     * Requires that block description, explicit @description, and @param/@returns tag descriptions are written in complete sentences
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence
     */
    'jsdoc/require-description-complete-sentence': 'off',

    /**
     * Requires that all functions have examples
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example
     */
    'jsdoc/require-example': 'off',

    /**
     * Checks that all files have a `@file`, `@fileoverview`, or `@overview` tag
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-file-overview
     */
    'jsdoc/require-file-overview': 'off',

    /**
     * Requires (or disallows) a hyphen before the `@param` description
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description
     */
    'jsdoc/require-hyphen-before-param-description': 'error',

    /**
     * Checks for presence of jsdoc comments, on class declarations as well as functions
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-jsdoc
     */
    'jsdoc/require-jsdoc': 'off',

    /**
     * Requires that all function parameters are documented
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param
     */
    'jsdoc/require-param': 'error',

    /**
     * Requires that each `@param` tag has a description value
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description
     */
    'jsdoc/require-param-description': 'error',

    /**
     * Requires that all function parameters have names
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-name
     */
    'jsdoc/require-param-name': 'error',

    /**
     * Requires that each `@param` tag has a type value
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-type
     */
    'jsdoc/require-param-type': 'error',

    /**
     * Requires that all `@typedef` and `@namespace` tags have `@property`
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property
     */
    'jsdoc/require-property': 'off',

    /**
     * Requires that each `@property` tag has a description value
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-description
     */
    'jsdoc/require-property-description': 'off',

    /**
     * Requires that all function `@property` tags have names.
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-name
     */
    'jsdoc/require-property-name': 'off',

    /**
     * Requires that each `@param `tag has a `type` value.
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-type
     */
    'jsdoc/require-property-type': 'off',

    /**
     * Requires that returns are documented
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns
     */
    'jsdoc/require-returns': 'off',

    /**
     * Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check
     */
    'jsdoc/require-returns-check': 'off',
    /**
     * Requires that the `@returns` tag has a description value
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-description
     */
    'jsdoc/require-returns-description': 'error',

    /**
     * Requires that `@returns` tag has `type` value
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type
     */
    'jsdoc/require-returns-type': 'error',

    /**
     * Requires that throw statements are documented
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-throws
     */
    'jsdoc/require-throws': 'off',

    /**
     * Requires that yields are documented
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields
     */
    'jsdoc/require-yields': 'off',

    /**
     * Ensures that if a `@yields` is present that a `yield` (or `yield` with a value) is present in the
     * function body (or that if a `@next` is present that there is a `yield` with a return value present)
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields-check
     */
    'jsdoc/require-yields-check': 'error',

    /**
     * Enforces lines (or no lines) between tags
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-tag-lines
     */
    'jsdoc/tag-lines': 'off',

    /**
     * Requires all types to be valid `JSDoc`, `Closure`, or `TypeScript` compiler types without syntax errors
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-valid-types
     */
    'jsdoc/valid-types': 'error',
  },
};
