# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2020-06-20
### Added
- Include new rule definitions.
  - `default-case-last`
  - `default-param-last`
  - `flowtype/arrow-parens`
  - `flowtype/no-mixed`
  - `flowtype/require-compound-type-alias`
  - `flowtype/require-indexer-name`
  - `flowtype/require-inexact-type`
  - `flowtype/require-readonly-react-props`
  - `flowtype/spread-exact-type`
  - `function-call-argument-newline`
  - `grouped-accessor-pairs`
  - `import/no-unused-modules`
  - `jsdoc/check-access`
  - `jsdoc/check-alignment`
  - `jsdoc/check-examples`
  - `jsdoc/check-indentation`
  - `jsdoc/check-property-names`
  - `jsdoc/check-syntax`
  - `jsdoc/check-values`
  - `jsdoc/empty-tags`
  - `jsdoc/implements-on-classes`
  - `jsdoc/match-description`
  - `jsdoc/no-types`
  - `jsdoc/require-file-overview`
  - `jsdoc/require-jsdoc`
  - `jsdoc/require-property-description`
  - `jsdoc/require-property-name`
  - `jsdoc/require-property-type`
  - `jsdoc/require-property`
  - `jsdoc/require-returns-check`
  - `jsdoc/require-returns`
  - `max-classes-per-file`
  - `no-constructor-return`
  - `no-dupe-else-if`
  - `no-dupe-else-if`
  - `no-import-assign`
  - `no-loss-of-precision`
  - `no-setter-return`
  - `no-useless-catch`
  - `prefer-exponentiation-operator`
  - `prefer-named-capture-group`
  - `prefer-regex-literals`
  - `react-native/no-single-element-style-arrays`
  - `react-native/sort-styles`
  - `react/function-component-definition`
  - `react/jsx-curly-newline`
  - `react/jsx-fragments`
  - `react/jsx-no-script-url`
  - `react/jsx-no-useless-fragment`
  - `react/jsx-props-no-spreading`
  - `react/no-adjacent-inline-elements`
  - `react/prefer-read-only-props`
  - `react/state-in-constructor`
  - `react/static-property-placement`

### Changed
- Upgrade package dependencies.
- Update `ecmaVersion` to 2020.
- Updates to rule definitions:
  - `capitalized-comments`

### Removed
- Remove deprecated rule definitions:
  - `callback-return`
  - `global-require`
  - `handle-callback-err`
  - `no-buffer-constructor`
  - `no-mixed-requires`
  - `no-new-require`
  - `no-path-concat`
  - `no-process-env`
  - `no-process-exit`
  - `no-restricted-modules`
  - `no-sync`
  - `require-jsdoc`
  - `valid-jsdoc`

## [3.0.0] - 2018-11-20
### Added
- Support forJSDoc.
- Include new rule definitions:
  - `jsdoc/check-param-names`
  - `jsdoc/check-tag-names`
  - `jsdoc/check-types`
  - `jsdoc/newline-after-description`
  - `jsdoc/no-undefined-types`
  - `jsdoc/require-description`
  - `jsdoc/require-description-complete-sentence`
  - `jsdoc/require-example`
  - `jsdoc/require-hyphen-before-param-description`
  - `jsdoc/require-param`
  - `jsdoc/require-param-description`
  - `jsdoc/require-param-name`
  - `jsdoc/require-param-type`
  - `jsdoc/require-returns-description`
  - `jsdoc/require-returns-type`
  - `jsdoc/valid-types`

### Changed
- Upgrade `eslint` dependency to `5.9.0`
- Updates to rule definitions:
  - `capitalized-comments`

### Removed
- Remove unused `eslint-plugin-require-jsdoc` dependency.

## [2.0.0] - 2018-11-08
### Added
- Support for Flowtype.
- Support for React Native.
- Include new rule definitions:
  - `array-bracket-newline`
  - `array-element-newline`
  - `for-direction`
  - `function-paren-newline`
  - `getter-return`
  - `implicit-arrow-linebreak`
  - `lines-between-class-members`
  - `max-lines-per-function`
  - `multiline-comment-style`
  - `no-async-promise-executor`
  - `no-buffer-constructor`
  - `no-compare-neg-zero`
  - `no-misleading-character-class`
  - `nonblock-statement-body-position`
  - `padding-line-between-statements`
  - `prefer-object-spread`
  - `require-atomic-updates`
  - `require-unicode-regexp`
  - `semi-style`
  - `switch-colon-spacing`
  - `import/dynamic-import-chunkname`
  - `import/exports-last`
  - `import/group-exports`
  - `import/no-anonymous-default-export`
  - `import/no-cycle`
  - `import/no-default-export`
  - `import/no-named-export`
  - `import/no-relative-parent-imports`
  - `import/no-self-import`
  - `import/no-useless-path-segments`
  - `react/boolean-prop-naming`
  - `react/button-has-type`
  - `react/default-props-match-prop-types`
  - `react/destructuring-assignment`
  - `react/forbid-dom-props`
  - `react/no-access-state-in-setstate`
  - `react/no-redundant-should-component-update`
  - `react/no-this-in-sfc`
  - `react/no-typos`
  - `react/no-unsafe`
  - `react/no-unused-state`
  - `react/no-will-update-set-state`
  - `react/jsx-child-element-spacing`
  - `react/jsx-closing-tag-location`
  - `react/jsx-curly-brace-presence`
  - `react/jsx-max-depth`
  - `react/jsx-one-expression-per-line`
  - `react/jsx-props-no-multi-spaces`
  - `react/jsx-sort-default-props`
  - `react/jsx-space-before-closing`

### Changed
- Upgrade package dependencies.
- Drop outdated configuration options and simplify available options that are up-to-date with current standards.
  - removed: `es2015` -> use `browser` or `node`
  - removed: `latest` -> use `browser` or `node`
  - removed: `node-0x` -> use `node`
  - removed: `node-8x` -> use `node`
  - removed: `react` -> use `browser` and extend react specific rules directly.
- Updates to rule definitions:
  - `max-len`
  - `no-extra-paren`
  - `strict`
  - `valid-jsdoc`
  - `react/jsx-filename-extension`

### Removed
- Eslint 5+ has dropped support for Node.js 4.
- Remove deprecated rule definitions:
  - `lines-around-directive`
  - `newline-after-var`
  - `newline-before-return`
  - `no-catch-shadow`

## [1.1.1] - 2018-05-18
### Changed
- Update no-console rule to allow "warn" and "error".

## [1.1.0] - 2018-05-15
### Changed
- Upgrade dependencies.

## [1.0.1] - 2018-05-13
### Removed
- Remove deprecated rule definitions:
  - `react/jsx-space-before-closing`

## [1.0.0] - 2018-03-14
Initial release.
