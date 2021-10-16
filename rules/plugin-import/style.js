/**
 * Import Plugin Rules - Style Guide
 * @see https://github.com/benmosher/eslint-plugin-import
 */

module.exports = {
  rules: {
    /**
     * Enforce a leading comment with the webpackChunkName for dynamic imports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
     */
    'import/dynamic-import-chunkname': 'off',

    /**
     * Ensure all exports appear after other statements
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
     */
    'import/exports-last': 'off',

    /**
     * Ensure consistent use of file extension within the import path
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
     */
    'import/extensions': 'error',

    /**
     * Ensure all imports appear before other statements
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
     */
    'import/first': 'off',

    /**
     * Prefer named exports to be grouped together in a single export declaration
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
     */
    'import/group-exports': 'off',

    /**
     * Limit the maximum number of dependencies a module can have
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
     */
    'import/max-dependencies': 'off',

    /**
     * Enforce a newline after import statements
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
     */
    'import/newline-after-import': 'error',

    /**
     * Forbid anonymous values as default exports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
     */
    'import/no-anonymous-default-export': 'off',

    /**
     * Forbid default exports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
     */
    'import/no-default-export': 'off',

    /**
     * Report repeated import of the same module in multiple places
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
     */
    'import/no-duplicates': 'error',

    /**
     * Forbid named default exports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
     */
    'import/no-named-default': 'off',

    /**
     * Forbid named exports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
     */
    'import/no-named-export': 'off',

    /**
     * Forbid namespace (a.k.a. "wildcard" `*`) imports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
     */
    'import/no-namespace': 'off',

    /**
     * Forbid unassigned imports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
     */
    'import/no-unassigned-import': 'off',

    /**
     * Enforce a convention in module import order
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
     */
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external'],
      },
    ],

    /**
     * Prefer a default export if module exports a single name
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
     */
    'import/prefer-default-export': 'off',
  },
};
