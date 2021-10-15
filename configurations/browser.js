module.exports = {
  env: {
    browser: true,
    commonjs: true,
  },
  extends: ['archetype/configurations/base', 'archetype/rules/plugin-import'],
  parser: '@babel/eslint-parser',
};
