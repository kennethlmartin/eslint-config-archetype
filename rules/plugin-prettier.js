/**
 * Prettier Plugin Rules
 * @see https://www.npmjs.com/package/eslint-plugin-prettier
 */

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    /**
     * Ensure styled is imported from @emotion/styled
     * @see https://github.com/prettier/eslint-plugin-prettier#options
     */
    'prettier/prettier': 'error',
  },
};
