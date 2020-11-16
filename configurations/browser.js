module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'archetype/rules/eslint/best-practices',
    'archetype/rules/eslint/es2015',
    'archetype/rules/eslint/errors',
    'archetype/rules/eslint/strict',
    'archetype/rules/eslint/style',
    'archetype/rules/eslint/variables',
    'archetype/rules/plugin-import',
  ],
  parser: 'babel-eslint',
};
