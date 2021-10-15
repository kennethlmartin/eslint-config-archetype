/**
 * Import Plugin Rules - Helpful Warnings
 * @see https://github.com/benmosher/eslint-plugin-import
 */

module.exports = {
  plugins: ['import'],
  rules: {
    /**
     * Report any invalid exports, i.e. re-export of the same name
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
     */
    'import/export': 'error',

    /**
     * Report imported names marked with `@deprecated` documentation tag
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
     */
    'import/no-deprecated': 'off',

    /**
     * Forbid the use of extraneous packages
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
     */
    'import/no-extraneous-dependencies': 'off',

    /**
     * Forbid the use of mutable exports with `var` or `let`
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
     */
    'import/no-mutable-exports': 'error',

    /**
     * Report use of exported name as identifier of default export
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
     */
    'import/no-named-as-default': 'off',

    /**
     * Report use of exported name as property of default export
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
     */
    'import/no-named-as-default-member': 'off',

    /**
     * Report modules without exports, or exports without matching import in another module
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
     */
    'import/no-unused-modules': 'off',
  },
};
