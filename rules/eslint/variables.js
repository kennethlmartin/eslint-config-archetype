/**
 * Eslint Rules - Variables
 * https://eslint.org/docs/rules/#variables
 */

module.exports = {
  rules: {
    // Require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': 'off',

    // Disallow deleting variables
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // Disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'off',

    // Disallow specified global variables
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': 'off',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'off',

    // Disallow identifiers from shadowing restricted names
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'off',

    // Disallow the use of undeclared variables unless mentioned in /*global */ comments
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // Disallow initializing variables to undefined
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // Disallow the use of undefined as an identifier
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'off',

    // Disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': 'error',

    // Disallow the use of variables before they are defined
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: true,
      },
    ],
  },
};
