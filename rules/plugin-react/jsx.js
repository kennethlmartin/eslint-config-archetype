/**
 * React Plugin Rules - JSX
 * @see https://github.com/yannickcr/eslint-plugin-react
 */

module.exports = {
  rules: {
    /**
     * Enforce boolean attributes notation in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     */
    'react/jsx-boolean-value': 'error',

    /**
     * Ensures inline tags are not rendered without spaces between them
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
     */
    'react/jsx-child-element-spacing': 'off',

    /**
     * Validate closing bracket location in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
     */
    'react/jsx-closing-bracket-location': 'error',

    /**
     * Validate closing tag location for multiline JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
     */
    'react/jsx-closing-tag-location': 'off',

    /**
     * Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX expressions on literals in JSX children or attributes
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
     */
    'react/jsx-curly-brace-presence': 'off',

    /**
     * Enforce consistent line breaks inside jsx curly
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
     */
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],

    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
     */
    'react/jsx-curly-spacing': 'error',

    /**
     * Disallow or enforce spaces around equal signs in JSX attributes
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
     */
    'react/jsx-equals-spacing': ['error', 'never'],

    /**
     * Restrict file extensions that may contain JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     */
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],

    /**
     * Ensure proper position of the first property in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
     */
    'react/jsx-first-prop-new-line': ['error', 'multiline'],

    /**
     * Enforce shorthand or standard form for React fragments
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
     */
    'react/jsx-fragments': ['error', 'syntax'],

    /**
     * Enforce event handler naming conventions in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
     */
    'react/jsx-handler-names': 'off',

    /**
     * Validate JSX indentation
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
     */
    'react/jsx-indent': ['error', 2],

    /**
     * Validate props indentation in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
     */
    'react/jsx-indent-props': ['error', 2],

    /**
     * Report missing key props in iterators/collection literals
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
     */
    'react/jsx-key': 'error',

    /**
     * Validate JSX maximum depth
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
     */
    'react/jsx-max-depth': 'off',

    /**
     * Limit maximum of props on a single line in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
     */
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 3,
      },
    ],

    /**
     * Require or prevent a new line after jsx elements and expressions.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
     */
    'react/jsx-newline': 'off',

    /**
     * Prevents usage of Function.prototype.bind and arrow functions in React component props
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
     */
    'react/jsx-no-bind': 'off',

    /**
     * Comments inside children section of tag should be placed inside braces
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
     */
    'react/jsx-no-comment-textnodes': 'off',

    /**
     * Prevents JSX context provider values from taking values that will cause needless rerenders.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
     */
    'react/jsx-no-constructed-context-values': 'off',

    /**
     * Enforce no duplicate props
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
     */
    'react/jsx-no-duplicate-props': 'error',

    /**
     * Prevent using string literals in React component definition
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
     */
    'react/jsx-no-literals': 'off',

    /**
     * Forbid javascript: URLs
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
     */
    'react/jsx-no-script-url': 'error',

    /**
     * Forbid target="_blank" attribute without rel="noreferrer"
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
     */
    'react/jsx-no-target-blank': 'error',

    /**
     * Disallow undeclared variables in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
     */
    'react/jsx-no-undef': 'error',

    /**
     * Disallow unnecessary fragments
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
     */
    'react/jsx-no-useless-fragment': 'error',

    /**
     * Limit to one expression per line in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
     */
    'react/jsx-one-expression-per-line': 'off',

    /**
     * Enforce PascalCase for user-defined JSX components
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
     */
    'react/jsx-pascal-case': 'error',

    /**
     * Disallow multiple spaces between inline JSX props
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
     */
    'react/jsx-props-no-multi-spaces': 'off',

    /**
     * Prevent JSX prop spreading
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
     */
    'react/jsx-props-no-spreading': 'error',

    /**
     * Enforce default props alphabetical sorting
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
     */
    'react/jsx-sort-default-props': 'off',

    /**
     * Enforce props alphabetical sorting
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     */
    'react/jsx-sort-props': 'error',

    /**
     * Validate spacing before closing bracket in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
     */
    'react/jsx-space-before-closing': 'off',

    /**
     * Validate whitespace in and around the JSX opening and closing brackets
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
     */
    'react/jsx-tag-spacing': [
      'error',
      {
        afterOpening: 'never',
        beforeClosing: 'never',
        beforeSelfClosing: 'always',
      },
    ],

    /**
     * Prevent React to be marked as unused
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
     */
    'react/jsx-uses-react': 'error',

    /**
     * Prevent variables used in JSX to be marked as unused
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
     */
    'react/jsx-uses-vars': 'error',

    /**
     * Prevent missing parentheses around multilines JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
     */
    'react/jsx-wrap-multilines': 'error',
  },
};
