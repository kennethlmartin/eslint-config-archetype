***
**eslint-config-archetype** - Javascript has standards.
***

## Installation

> Add the following to your `package.json`'s `devDependencies`:

  ```json
"eslint-config-archetype": "git+ssh://git@github.com:kennethlmartin/eslint-config-archetype.git",
  ```

## Usage

> Extend base configurations, rule declarations, or a combination of both.

```js
module.exports = {
  extends: 'archetype/configurations/browser',
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

**eslint:**
- `archetype/rules/eslint/best-practices`
- `archetype/rules/eslint/errors`
- `archetype/rules/eslint/es2015`
- `archetype/rules/eslint/node`
- `archetype/rules/eslint/strict`
- `archetype/rules/eslint/style`
- `archetype/rules/eslint/variables`

**plugin-flowtype:**
- `archetype/rules/plugin-flowtype`

**plugin-import:**
- `archetype/rules/plugin-import`

**plugin-no-only-tests:**
- `archetype/rules/plugin-no-only-tests`

**plugin-react:**
- `archetype/rules/plugin-react`
- `archetype/rules/plugin-react/jsx`
- `archetype/rules/plugin-react/react`

**plugin-react-native:**
- `archetype/rules/react-native`

***

[Changelog](https://github.com/kennethlmartin/eslint-config-archetype/blob/master/CHANGELOG.md)
