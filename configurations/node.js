'use strict';

module.exports = {
  'extends': [
    'archetype/configurations/node-0x',
    'archetype/rules/eslint/es2015',
  ],
  'parserOptions': {
    'ecmaVersion': '2015',
  },
  'rules': {
    // Enforce the consistent use of either backticks, double, or single quotes
    // http://eslint.org/docs/rules/quotes
    'quotes': ['error', 'single', {
      'avoidEscape': true,
    }],
  },
};
