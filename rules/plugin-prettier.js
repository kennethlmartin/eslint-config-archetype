/**
 * Prettier Plugin Rules
 *
 * @see https://www.npmjs.com/package/eslint-plugin-prettier
 */

 module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    /**
     * Runs Prettier as an ESLint rule and reports differences as individual ESLint issues
     *
     * @see https://github.com/prettier/eslint-plugin-prettier#options
     */
    'prettier/prettier': 'error',
  },
};
