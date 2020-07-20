'use strict';

/**
 * Flowtype Plugin Rules
 * https://github.com/gajus/eslint-plugin-flowtype
 */

module.exports = {
  'plugins': [
    'flowtype',
  ],
  'rules': {
    // Enforces a particular annotation style of complex types.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-array-style-complex-type
    'flowtype/array-style-complex-type': 'off',

    // Enforces a particular array type annotation style of simple types.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-array-style-simple-type
    'flowtype/array-style-simple-type': 'off',

    // Enforces the consistent use of parentheses in arrow functions.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-arrow-parens
    'flowtype/arrow-parens': 'off',

    // Enforces a particular style for boolean type annotations
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-boolean-style
    'flowtype/boolean-style': ['error', 'boolean'],

    // Marks Flow type identifiers as defined.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-define-flow-type
    'flowtype/define-flow-type': 'off',

    // Enforces consistent use of trailing commas in Object and Tuple annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-delimiter-dangle
    'flowtype/delimiter-dangle': 'off',

    // Enforces consistent spacing within generic type annotation parameters.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-generic-spacing
    'flowtype/generic-spacing': 'off',

    // This rule requires an empty line after the Flow annotation.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-newline-after-flow-annotation
    'flowtype/newline-after-flow-annotation': 'off',

    // Checks for duplicate properties in Object annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-dupe-keys
    'flowtype/no-dupe-keys': 'off',

    // Disallows use of the existential type (*)
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-existential-type
    'flowtype/no-existential-type': 'off',

    // Disallows $FlowFixMe comment suppressions.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-flow-fix-me-comments
    'flowtype/no-flow-fix-me-comments': 'off',

    // Warns against "mixed" type annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-mixed
    'flowtype/no-mixed': 'off',

    // Requires use of $ReadOnlyArray instead of just Array or array shorthand notation.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-mutable-array
    'flowtype/no-mutable-array': 'off',

    // Disallows use of primitive constructors as types, such as Boolean, Number and String.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-primitive-constructor-types
    'flowtype/no-primitive-constructor-types': 'off',

    // Disallows Flow type imports, aliases, and annotations in files missing a valid Flow file declaration
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-types-missing-file-annotation
    'flowtype/no-types-missing-file-annotation': 'off',

    // This rule ignores type cast expressions.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-unused-expressions
    'flowtype/no-unused-expressions': 'off',

    // Warns against weak type annotations any, Object and Function.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-weak-types
    'flowtype/no-weak-types': 'off',

    // Enforces consistent separators between properties in Flow object types.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-object-type-delimiter
    'flowtype/object-type-delimiter': 'off',

    // Requires to make a type alias for all union and intersection types.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-compound-type-alias
    'flowtype/require-compound-type-alias': 'off',

    // This rule enforces exact object types.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-exact-type
    'flowtype/require-exact-type': 'off',

    // Validates Flow object indexer name.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-indexer-name
    'flowtype/require-indexer-name': 'off',

    // Enforces explicit inexact object types.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-inexact-type
    'flowtype/require-inexact-type': 'off',

    // Requires that all function parameters have type annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-parameter-type
    'flowtype/require-parameter-type': 'off',

    // Validates that React props are marked as $ReadOnly.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-readonly-react-props
    'flowtype/require-readonly-react-props': 'off',


    // Requires that functions have return type annotation.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-return-type
    'flowtype/require-return-type': 'off',

    // Requires all type declarations to be at the top of the file, after any import declarations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-types-at-top
    'flowtype/require-types-at-top': 'off',

    // This rule validates Flow file annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-valid-file-annotation
    'flowtype/require-valid-file-annotation': 'off',

    // Requires that all variable declarators have type annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-variable-type
    'flowtype/require-variable-type': 'off',

    // Enforces consistent use of semicolons after type aliases.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-semi
    'flowtype/semi': 'off',

    // Enforces sorting of Object annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-sort-keys
    'flowtype/sort-keys': 'off',

    // Enforces consistent spacing after the type annotation colon.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-after-type-colon
    'flowtype/space-after-type-colon': 'off',

    // Enforces consistent spacing before the opening < of generic type annotation parameters.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-generic-bracket
    'flowtype/space-before-generic-bracket': 'off',

    // Enforces consistent spacing after the type annotation colon.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-after-type-colon
    'flowtype/space-before-type-colon': 'off',

    // Enforce object types, that are spread to be exact type explicitly.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-spread-exact-type
    'flowtype/spread-exact-type': 'off',

    // Enforces a consistent naming pattern for type aliases.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-type-id-match
    'flowtype/type-id-match': 'off',

    // Enforces a particular style for type imports.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-type-import-style
    'flowtype/type-import-style': 'off',

    // Enforces consistent spacing around union and intersection type separators (| and &).
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-union-intersection-spacing
    'flowtype/union-intersection-spacing': 'off',

    // Marks Flow type alias declarations as used.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-use-flow-type
    'flowtype/use-flow-type': 'off',
  },
};
