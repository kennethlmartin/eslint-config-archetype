'use strict';

module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
  },
  'extends': [
    'archetype/rules/eslint/best-practices',
    'archetype/rules/eslint/errors',
    'archetype/rules/eslint/strict',
    'archetype/rules/eslint/style',
    'archetype/rules/eslint/variables',
  ],
};
