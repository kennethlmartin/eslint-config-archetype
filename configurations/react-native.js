'use strict';

module.exports = {
  'env': {
    'react-native-globals/all': true,
  },
  'extends': [
    'archetype/rules/eslint/best-practices',
    'archetype/rules/eslint/es2015',
    'archetype/rules/eslint/errors',
    'archetype/rules/eslint/strict',
    'archetype/rules/eslint/style',
    'archetype/rules/eslint/variables',
    'archetype/rules/plugin-import',
    'archetype/rules/plugin-react',
    'archetype/rules/plugin-react-native',
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2020,
  },
  'plugins': [
    'react-native-globals',
  ],
};
