'use strict';

/**
 * React Native Plugin Rules
 * https://github.com/intellicode/eslint-plugin-react-native
 */

module.exports = {
  'plugins': [
    'react-native',
  ],
  'rules': {
    // Detect `StyleSheet` rules and inline styles containing color literals instead of variables
    // https://github.com/intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/no-color-literals.md
    'react-native/no-color-literals': 'error',

    // Detect JSX components with inline styles that contain literal values
    // https://github.com/intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/no-inline-styles.md
    'react-native/no-inline-styles': 'error',

    // Detect raw text outside of `Text` component
    // https://github.com/intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/no-raw-text.md
    'react-native/no-raw-text': 'error',

    // Detect `StyleSheet` rules which are not used in your React components
    // https://github.com/intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/no-unused-styles.md
    'react-native/no-unused-styles': 'error',

    // Enforce using platform specific filenames when necessary
    // https://github.com/intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/split-platform-components.md
    'react-native/split-platform-components': 'error',
  },
};
