/**
 * Import Plugin Rules - Module Systems
 * @see https://github.com/benmosher/eslint-plugin-import
 */

module.exports = {
  plugins: ['import'],
  rules: {
    /**
     * Report AMD `require` and `define` calls
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
     */
    'import/no-amd': 'off',

    /**
     * Report CommonJS `require` calls and `module.exports` or `exports.*`
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
     */
    'import/no-commonjs': 'off',

    /**
     * Forbid imports with CommonJS exports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md
     */
    'import/no-import-module-exports': 'off',

    /**
     * No Node.js builtin modules
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
     */
    'import/no-nodejs-modules': 'off',

    /**
     * Report potentially ambiguous parse goal (`script` vs. `module`)
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
     */
    'import/unambiguous': 'off',
  },
};
