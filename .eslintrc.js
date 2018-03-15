module.exports = {
  'env': {
    'node': true,
  },
  'extends': [
    './rules/eslint/best-practices.js',
    './rules/eslint/errors.js',
    './rules/eslint/style.js',
    './rules/eslint/variables.js',
  ],
  'rules': {
    // Enforce or disallow capitalization of the first letter of a comment
    // http://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': ['error', 'always', {
      'ignoreConsecutiveComments': true,
      'ignoreInlineComments': true,
    }],

    // Require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props
    'quote-props': ['error', 'always'],
  }
};
