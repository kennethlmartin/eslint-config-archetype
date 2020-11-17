/**
 * Prettier Plugin Rules
 * https://www.npmjs.com/package/eslint-plugin-prettier
 */

module.exports = {
  extends: [
    'prettier',
    'prettier/babel',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
