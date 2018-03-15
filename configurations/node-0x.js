'use strict';

module.exports = {
  'env': {
    'node': true,
  },
  'extends': [
    'archetype/rules/eslint/best-practices',
    'archetype/rules/eslint/errors',
    'archetype/rules/eslint/node',
    'archetype/rules/eslint/style',
    'archetype/rules/eslint/variables',
  ],
  'plugins': [
    'import',
  ],
  'rules': {
    // Forbid require() calls with expressions
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error',

    // Ensure imports point to a file/module that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', {
      'amd': true,
      'commonjs': true,
    }],

    // Enforce the consistent use of either backticks, double, or single quotes
    // http://eslint.org/docs/rules/quotes
    'quotes': ['error', 'single', {
      'allowTemplateLiterals': false,
      'avoidEscape': true,
    }],
  },
};
