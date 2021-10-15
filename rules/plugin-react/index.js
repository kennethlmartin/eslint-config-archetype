/**
 * React Plugin Rules
 * @see https://github.com/yannickcr/eslint-plugin-react
 */

module.exports = {
  extends: [
    'archetype/rules/plugin-react/jsx',
    'archetype/rules/plugin-react/react',
  ],
  globals: {
    React: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
