/**
 * Import Plugin Rules
 * @see https://github.com/benmosher/eslint-plugin-import
 */

module.exports = {
  extends: [
    'archetype/rules/plugin-import/helpful-warnings',
    'archetype/rules/plugin-import/module-systems',
    'archetype/rules/plugin-import/static-analysis',
    'archetype/rules/plugin-import/style',
  ],
  plugins: ['import'],
};
