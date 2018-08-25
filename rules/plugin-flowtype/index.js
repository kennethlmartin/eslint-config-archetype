'use strict';

/**
 * No Only Tests Plugin Rules
 * https://github.com/levibuzolic/eslint-plugin-no-only-tests
 */

module.exports = {
  'plugins': [
    'flowtype',
  ],
  'rules': {
    // Enforces a particular style for boolean type annotations
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-boolean-style
    'flowtype/boolean-style': [2, 'boolean'],
  },
};
