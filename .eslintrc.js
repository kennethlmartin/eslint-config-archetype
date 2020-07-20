module.exports = {
  'env': {
    'es2020': true,
    'node': true,
  },
  'extends': [
    './rules/eslint/best-practices.js',
    './rules/eslint/errors.js',
    './rules/eslint/style.js',
    './rules/eslint/variables.js',
  ],
  'rules': {
    // Require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props
    'quote-props': ['error', 'always'],
  },
};
