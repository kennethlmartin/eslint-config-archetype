'use strict';

module.exports = {
  'extends': [
    'archetype/configurations/base',
    'archetype/rules/eslint/es2015',
    'archetype/rules/plugin-import',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
    },
    'ecmaVersion': '2015',
    'sourceType': 'module',
  },
  'rules': {
    // Require or disallow trailing commas
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
      'imports': 'always-multiline',
      'objects': 'always-multiline',
    }],

    // Enforce the consistent use of either backticks, double, or single quotes
    // http://eslint.org/docs/rules/quotes
    'quotes': ['error', 'single', {
      'avoidEscape': true,
    }],
  },
};
