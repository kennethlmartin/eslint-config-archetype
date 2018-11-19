***
**eslint-config-archetype** - Javascript has standards.
***

## Installation

```
npm i --save-dev eslint-config-archetype
```

## Usage

> Extend base configurations, rule declarations, or a combination of both.

```js
module.exports = {
  extends: [
    'archetype/configurations/browser',
    'archetype/rules/plugin-react',
  ],
};
```

### Configurations:
This package includes the following complete and ready-to-use configurations:

- `archetype/configurations/browser`
- `archetype/configurations/node`
- `archetype/configurations/react-native`
- `archetype/configurations/test`

### Rules:
The following rule-based configurations define every rule supported by eslint and the available plugins. These rule configurations make up the base set of rules for the above complete configurations:

**[eslint](https://eslint.org/docs/rules/):**
- `archetype/rules/eslint/best-practices`
- `archetype/rules/eslint/errors`
- `archetype/rules/eslint/es2015`
- `archetype/rules/eslint/node`
- `archetype/rules/eslint/strict`
- `archetype/rules/eslint/style`
- `archetype/rules/eslint/variables`

**[plugin-flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype):**
- `archetype/rules/plugin-flowtype`

**[plugin-import](https://www.npmjs.com/package/eslint-plugin-import):**
- `archetype/rules/plugin-import`

**[plugin-react-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc):**
- `archetype/rules/plugin-jsdoc`

**[plugin-no-only-tests](https://www.npmjs.com/package/eslint-plugin-no-only-tests):**
- `archetype/rules/plugin-no-only-tests`

**[plugin-react](https://github.com/yannickcr/eslint-plugin-react):**
- `archetype/rules/plugin-react`
- `archetype/rules/plugin-react/jsx`
- `archetype/rules/plugin-react/react`

**[plugin-react-native](https://www.npmjs.com/package/eslint-plugin-react-native):**
- `archetype/rules/plugin-react-native`

***

[Changelog](https://github.com/kennethlmartin/eslint-config-archetype/blob/master/CHANGELOG.md)
