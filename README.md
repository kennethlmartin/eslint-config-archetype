<br />

<div align="center">
  <a href="https://eslint.org/">
    <img src="https://i.ibb.co/m0Cf0KJ/eslint-config-archetype.png" width="400" />
  </a>
</div>

<br />

## Installation

```
npm i --save-dev eslint-config-archetype
```

## Usage

> Extend base configurations, grouped rule definitions, or a combination of both.

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
- `archetype/configurations/react`

### Rules:
The following rule-based configurations define every rule supported by eslint and the available plugins. These rule configurations make up the base set of rules for the above complete configurations:

**[eslint](https://eslint.org/docs/rules/):**
- `archetype/rules/eslint/layout-formatting`
- `archetype/rules/eslint/possible-problems`
- `archetype/rules/eslint/suggestions`

**[plugin-import](https://www.npmjs.com/package/eslint-plugin-import):**
- `archetype/rules/plugin-import`

**[plugin-react-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc):**
- `archetype/rules/plugin-jsdoc`

**[plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier):**
- `archetype/rules/plugin-prettier`

**[plugin-react](https://github.com/yannickcr/eslint-plugin-react):**
- `archetype/rules/plugin-react`

**[plugin-typescript](https://github.com/typescript-eslint/typescript-eslint):**
- `archetype/rules/plugin-typescript`
