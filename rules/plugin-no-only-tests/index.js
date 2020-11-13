'use strict';

/**
 * No Only Tests Plugin Rules
 * https://github.com/levibuzolic/eslint-plugin-no-only-tests
 */

module.exports = {
  plugins: ['no-only-tests'],
  rules: {
    // For describe.only and it.only in mocha tests
    'no-only-tests/no-only-tests': 'error',
  },
};
