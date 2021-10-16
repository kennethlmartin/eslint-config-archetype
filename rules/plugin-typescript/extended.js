/**
 * Typescript Plugin Rules - Extended
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
 */

module.exports = {
  /* eslint-disable sort-keys */
  rules: {
    /**
     * Enforce consistent brace style for blocks
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
     */
    '@typescript-eslint/brace-style': 'off',
    // 'brace-style': 'off',

    /**
     * Require or disallow trailing comma
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
     */
    '@typescript-eslint/comma-dangle': 'off',
    // 'comma-dangle': 'off',

    /**
     * Enforces consistent spacing before and after commas
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
     */
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'comma-spacing': 'off',

    /**
     * Enforce default parameters to be last
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
     */
    '@typescript-eslint/default-param-last': 'off',
    // 'default-param-last': 'off',

    /**
     * enforce dot notation whenever possible
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
     */
    '@typescript-eslint/dot-notation': 'off',
    // 'dot-notation': 'off',

    /**
     * Require or disallow spacing between function identifiers and their invocations
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
     */
    '@typescript-eslint/func-call-spacing': 'off',
    // 'func-call-spacing': 'off',

    /**
     * Enforce consistent indentation
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
     */
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'indent': 'off',

    /**
     * require or disallow initialization in variable declarations
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
     */
    '@typescript-eslint/init-declarations': 'off',
    // 'init-declarations': 'off',

    /**
     * Enforce consistent spacing before and after keywords
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
     */
    '@typescript-eslint/keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],
    'keyword-spacing': 'off',

    /**
     * Require or disallow an empty line between class members
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
     */
    '@typescript-eslint/lines-between-class-members': 'off',
    // 'lines-between-class-members': 'off',

    /**
     * Disallow generic Array constructors
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
     */
    '@typescript-eslint/no-array-constructor': 'error', // recommended
    'no-array-constructor': 'off',

    /**
     * Disallow duplicate class members
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
     */
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-dupe-class-members': 'off',

    /**
     * Disallow duplicate imports
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
     */
    '@typescript-eslint/no-duplicate-imports': 'off',
    // 'no-duplicate-imports': 'off',

    /**
     * Disallow empty functions
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
     */
    '@typescript-eslint/no-empty-function': 'off', // recommended
    // 'no-empty-function': 'off',

    /**
     * Disallow unnecessary parentheses
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
     */
    '@typescript-eslint/no-extra-parens': 'off',
    // 'no-extra-parens': 'off',

    /**
     * Disallow unnecessary semicolons
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
     */
    '@typescript-eslint/no-extra-semi': 'off', // recommended
    // 'no-extra-semi': 'off',

    /**
     * Disallow the use of eval()-like methods
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
     */
    '@typescript-eslint/no-implied-eval': 'off', // recommended
    // 'no-implied-eval': 'off',

    /**
     * Disallow this keywords outside of classes or class-like objects
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
     */
    '@typescript-eslint/no-invalid-this': 'off',
    // 'no-invalid-this': 'off',

    /**
     * Disallow function declarations that contain unsafe references inside loop statements
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
     */
    '@typescript-eslint/no-loop-func': 'off',
    // 'no-loop-func': 'off',

    /**
     * Disallow literal numbers that lose precision
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
     */
    '@typescript-eslint/no-loss-of-precision': 'off', // recommended
    // 'no-loss-of-precision': 'off',

    /**
     * Disallow magic numbers
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
     */
    '@typescript-eslint/no-magic-numbers': 'off',
    // 'no-magic-numbers': 'off',

    /**
     * Disallow variable redeclaration
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
     */
    '@typescript-eslint/no-redeclare': 'error',
    'no-redeclare': 'off',

    /**
     * Disallow specified modules when loaded by import
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-restricted-imports.md
     */
    '@typescript-eslint/no-restricted-imports': 'off',
    // 'no-restricted-imports': 'off',

    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
     */
    '@typescript-eslint/no-shadow': 'off',
    // 'no-shadow': 'off',

    /**
     * Disallow throwing literals as exceptions
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
     */
    '@typescript-eslint/no-throw-literal': 'off',
    // 'no-throw-literal': 'off',

    /**
     * Disallow unused expressions
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
     */
    '@typescript-eslint/no-unused-expressions': 'off',
    // 'no-unused-expressions': 'off',

    /**
     * Disallow unused variables
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
     */
    '@typescript-eslint/no-unused-vars': 'error', // recommended
    'no-unused-vars': 'off',

    /**
     * Disallow the use of variables before they are defined
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
     */
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        classes: true,
        functions: true,
      },
    ],
    'no-use-before-define': 'off',

    /**
     * Disallow unnecessary constructors
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
     */
    '@typescript-eslint/no-useless-constructor': 'off',
    // 'no-useless-constructor': 'off',

    /**
     * Enforce consistent spacing inside braces
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/object-curly-spacing.md
     */
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'object-curly-spacing': 'off',

    /**
     * require or disallow padding lines between statements
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/padding-line-between-statements.md
     */
    '@typescript-eslint/padding-line-between-statements': 'off',
    // 'padding-line-between-statements': 'off',

    /**
     * Enforce the consistent use of either backticks, double, or single quotes
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
     */
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true,
      },
    ],
    'quotes': 'off',

    /**
     * Disallow async functions which have no await expression
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
     */
    '@typescript-eslint/require-await': 'off', // recommended
    // 'require-await': 'off',

    /**
     * Enforces consistent returning of awaited values
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
     */
    '@typescript-eslint/return-await': 'off',
    // 'return-await': 'off',

    /**
     * Require or disallow semicolons instead of ASI
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
     */
    '@typescript-eslint/semi': 'error',
    'semi': 'off',

    /**
     * Enforces consistent spacing before function parenthesis
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
     */
    '@typescript-eslint/space-before-function-paren': 'off',
    // 'space-before-function-paren': 'off',

    /**
     * This rule is aimed at ensuring there are spaces around infix operators
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md
     */
    '@typescript-eslint/space-infix-ops': 'error',
    // 'space-infix-ops': 'off',
  },
};
