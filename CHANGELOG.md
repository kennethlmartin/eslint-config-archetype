# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2018-11-08
### Added
- Support for Flowtype.
- Support for React Native.
- Include new rule definitions.
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
- Updates to rule definitions.
  - `max-len`
  - `no-extra-paren`
  - `strict`
  - `valid-jsdoc`
  - `react/jsx-filename-extension`

### Removed
- Eslint 5+ has dropped support for Node.js 4.
- Remove deprecated rules.
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
- Remove deprecated rules.
  - `react/jsx-space-before-closing`

## [1.0.0] - 2018-03-14
Initial release.
