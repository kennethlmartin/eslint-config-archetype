module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    './rules/eslint/layout-formatting',
    './rules/eslint/possible-problems',
    './rules/eslint/suggestions',
  ],
};
