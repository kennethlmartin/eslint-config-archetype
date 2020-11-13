module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    './rules/eslint/best-practices.js',
    './rules/eslint/errors.js',
    './rules/eslint/style.js',
    './rules/eslint/variables.js',
  ],
};
