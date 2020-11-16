module.exports = {
  env: {
    'react-native-globals/all': true,
  },
  extends: [
    'archetype/configurations/react',
    'archetype/rules/plugin-react-native',
  ],
  plugins: ['react-native-globals'],
};
