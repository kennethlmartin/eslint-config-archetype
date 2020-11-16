module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    './rules/eslint/best-practices',
    './rules/eslint/errors',
    './rules/eslint/style',
    './rules/eslint/variables',
  ],
};
