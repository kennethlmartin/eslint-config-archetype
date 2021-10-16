/**
 * Import Plugin Rules - Static Analysis
 * @see https://github.com/benmosher/eslint-plugin-import
 */

module.exports = {
  rules: {
    /**
     * Ensure a default export is present, given a default import.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
     */
    'import/default': 'off',

    /**
     * Ensure named imports correspond to a named export in the remote file.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
     */
    'import/named': 'error',

    /**
     * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
     */
    'import/namespace': 'off',

    /**
     * Forbid import of modules using absolute paths
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
     */
    'import/no-absolute-path': 'off',

    /**
     * Forbid a module from importing a module with a dependency path back to itself
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
     */
    'import/no-cycle': 'off',

    /**
     * Forbid `require()` calls with expressions
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
     */
    'import/no-dynamic-require': 'error',

    /**
     * Prevent importing the submodules of other modules
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
     */
    'import/no-internal-modules': 'off',

    /**
     * Prevent importing packages through relative path
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md
     */
    'import/no-relative-packages': 'off',

    /**
     * Forbid importing modules from parent directories
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
     */
    'import/no-relative-parent-imports': 'off',

    /**
     * Restrict which files can be imported in a given folder
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
     */
    'import/no-restricted-paths': 'off',

    /**
     * Forbid a module from importing itself
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
     */
    'import/no-self-import': 'off',

    /**
     * Ensure imports point to a file/module that can be resolved.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': [
      'error',
      {
        amd: true,
        commonjs: true,
      },
    ],

    /**
     * Prevent unnecessary path segments in import and require statements
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
     */
    'import/no-useless-path-segments': 'off',

    /**
     * Forbid webpack loader syntax in imports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
     */
    'import/no-webpack-loader-syntax': 'off',
  },
};
