'use strict';

module.exports = {
  'extends': [
    'archetype/configurations/node',
  ],
  'rules': {
    // Require or disallow trailing commas
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'exports': 'never',
      'functions': 'always-multiline',
      'imports': 'never',
      'objects': 'always-multiline',
    }],
  },
};
