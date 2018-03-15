'use strict';

module.exports = {
  'extends': 'archetype/configurations/es2015',
  'parserOptions': {
    'ecmaVersion': '2017',
  },
  'rules': {
    // Require or disallow trailing commas
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
      'imports': 'always-multiline',
      'objects': 'always-multiline',
    }],
  },
};
