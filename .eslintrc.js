module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    './rules/eslint/layout-formatting',
    './rules/eslint/possible-problems',
    './rules/eslint/suggestions',
  ],
};
