'use strict';

module.exports = {
  'env': {
    'es2020': true,
    'node': true,
  },
  'extends': [
    'archetype/rules/eslint/best-practices',
    'archetype/rules/eslint/es2015',
    'archetype/rules/eslint/errors',
    'archetype/rules/eslint/strict',
    'archetype/rules/eslint/style',
    'archetype/rules/eslint/variables',
  ],
  'plugins': [
    'import',
  ],
  'rules': {
    // Ensure imports point to a file/module that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', {
      'amd': true,
      'commonjs': true,
    }],
  },
};
