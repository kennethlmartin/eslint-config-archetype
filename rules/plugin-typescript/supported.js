/**
 * Typescript Plugin Rules - Supported
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
 */

module.exports = {
  rules: {
    /**
     * Require that member overloads be consecutive
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error', // recommended

    /**
     * Requires using either T[] or Array<T> for arrays
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
     */
    '@typescript-eslint/array-type': 'off',

    /**
     * Disallows awaiting a value that is not a Thenable
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
     */
    '@typescript-eslint/await-thenable': 'error', // recommended

    /**
     * Bans @ts-<directive> comments from being used or requires descriptions after directive
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
     */
    '@typescript-eslint/ban-ts-comment': 'error', // recommended

    /**
     * Bans // tslint:<rule-flag> comments from being used
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
     */
    '@typescript-eslint/ban-tslint-comment': 'off',

    /**
     * Bans specific types from being used
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
     */
    '@typescript-eslint/ban-types': 'error', // recommended

    /**
     * Ensures that literals on classes are exposed in a consistent style
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
     */
    '@typescript-eslint/class-literal-property-style': 'off',

    /**
     * Enforce or disallow the use of the record type
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
     */
    '@typescript-eslint/consistent-indexed-object-style': 'off',

    /**
     * Enforces consistent usage of type assertions
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
     */
    '@typescript-eslint/consistent-type-assertions': 'off',

    /**
     * Consistent with type definition either interface or type
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
     */
    '@typescript-eslint/consistent-type-definitions': 'off',

    /**
     * Enforces consistent usage of type imports
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
     */
    '@typescript-eslint/consistent-type-imports': 'off',

    /**
     * Require explicit return types on functions and class methods
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
     */
    '@typescript-eslint/explicit-function-return-type': 'off',

    /**
     * Require explicit accessibility modifiers on class properties and methods
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
     */
    '@typescript-eslint/explicit-member-accessibility': 'off',

    /**
     * Require explicit return and argument types on exported functions' and classes' public class methods
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    /**
     * Require a specific member delimiter style for interfaces and type literals
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
     */
    '@typescript-eslint/member-delimiter-style': 'off',

    /**
     * Require a consistent member declaration order
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
     */
    '@typescript-eslint/member-ordering': 'off',

    /**
     * Enforces using a particular method signature syntax.
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
     */
    '@typescript-eslint/method-signature-style': 'off',

    /**
     * Enforces naming conventions for everything across a codebase
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
     */
    '@typescript-eslint/naming-convention': 'off',

    /**
     * Requires that .toString() is only called on objects which provide useful information when stringified
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
     */
    '@typescript-eslint/no-base-to-string': 'off',

    /**
     * Disallow non-null assertion in locations that may be confusing
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
     */
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',

    /**
     * Requires expressions of type void to appear in statement position
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
     */
    '@typescript-eslint/no-confusing-void-expression': 'off',

    /**
     * Disallow the delete operator with computed key expressions
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
     */
    '@typescript-eslint/no-dynamic-delete': 'off',

    /**
     * Disallow the declaration of empty interfaces
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
     */
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: false,
      },
    ], // recommended

    /**
     * Disallow usage of the any type
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
     */
    '@typescript-eslint/no-explicit-any': 'error', // recommended

    /**
     * Disallow extra non-null assertion
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
     */
    '@typescript-eslint/no-extra-non-null-assertion': 'error', // recommended

    /**
     * Forbids the use of classes as namespaces
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
     */
    '@typescript-eslint/no-extraneous-class': 'off',

    /**
     * Requires Promise-like values to be handled appropriately
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
     */
    '@typescript-eslint/no-floating-promises': 'off',

    /**
     * Disallow iterating over an array with a for-in loop
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
     */
    '@typescript-eslint/no-for-in-array': 'error', // recommended

    /**
     * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
     */
    '@typescript-eslint/no-inferrable-types': 'error', // recommended

    /**
     * Disallows usage of void type outside of generic or return types
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
     */
    '@typescript-eslint/no-invalid-void-type': 'off',

    /**
     * Disallow the void operator except when used to discard a value
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md
     */
    '@typescript-eslint/no-meaningless-void-operator': 'off',

    /**
     * Enforce valid definition of new and constructor
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
     */
    '@typescript-eslint/no-misused-new': 'error', // recommended

    /**
     * Avoid using promises in places not designed to handle them
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
     */
    '@typescript-eslint/no-misused-promises': 'error', // recommended

    /**
     * Disallow the use of custom TypeScript modules and namespaces
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
     */
    '@typescript-eslint/no-namespace': 'error', // recommended

    /**
     * Disallows using a non-null assertion in the left operand of the nullish coalescing operator
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',

    /**
     * Disallows using a non-null assertion after an optional chain expression
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error', // recommended

    /**
     * Disallows non-null assertions using the ! postfix operator
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
     */
    '@typescript-eslint/no-non-null-assertion': 'error', // recommended

    /**
     * Disallow the use of parameter properties in class constructors
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
     */
    '@typescript-eslint/no-parameter-properties': 'off',

    /**
     * Disallows invocation of require()
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
     */
    '@typescript-eslint/no-require-imports': 'off',

    /**
     * Disallow aliasing this
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
     */
    '@typescript-eslint/no-this-alias': 'error', // recommended

    /**
     * Disallow the use of type aliases
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
     */
    '@typescript-eslint/no-type-alias': 'off',

    /**
     * Flags unnecessary equality comparisons against boolean literals
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

    /**
     * Prevents conditionals where the type is always truthy or always falsy
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
     */
    '@typescript-eslint/no-unnecessary-condition': 'off',

    /**
     * Warns when a namespace qualifier is unnecessary
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'off',

    /**
     * Enforces that type arguments will not be used if not required
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',

    /**
     * Warns if a type assertion does not change the type of an expression
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
     */
    '@typescript-eslint/no-unnecessary-type-assertion': 'error', // recommended

    /**
     * Disallows unnecessary constraints on generic types
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
     */
    '@typescript-eslint/no-unnecessary-type-constraint': 'error', // recommended

    /**
     * Disallows calling a function with an any type value
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-argument.md
     */
    '@typescript-eslint/no-unsafe-argument': 'error', // recommended

    /**
     * Disallows assigning any to variables and properties
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
     */
    '@typescript-eslint/no-unsafe-assignment': 'error', // recommended

    /**
     * Disallows calling an any type value
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
     */
    '@typescript-eslint/no-unsafe-call': 'error', // recommended

    /**
     * Disallows member access on any typed variables
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
     */
    '@typescript-eslint/no-unsafe-member-access': 'error', // recommended

    /**
     * Disallows returning any from a function
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
     */
    '@typescript-eslint/no-unsafe-return': 'error', // recommended

    /**
     * Disallows the use of require statements except in import statements
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
     */
    '@typescript-eslint/no-var-requires': 'error', // recommended

    /**
     * Prefers a non-null assertion over explicit type cast when possible
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
     */
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',

    /**
     * Prefer usage of as const over literal type
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
     */
    '@typescript-eslint/prefer-as-const': 'error', // recommended

    /**
     * Prefer initializing each enums member value
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
     */
    '@typescript-eslint/prefer-enum-initializers': 'off',

    /**
     * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
     */
    '@typescript-eslint/prefer-for-of': 'off',

    /**
     * Use function types instead of interfaces with call signatures
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
     */
    '@typescript-eslint/prefer-function-type': 'off',

    /**
     * Enforce includes method over indexOf method
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
     */
    '@typescript-eslint/prefer-includes': 'off',

    /**
     * Require that all enum members be literal values to prevent unintended enum member name shadow issues
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
     */
    '@typescript-eslint/prefer-literal-enum-member': 'off',

    /**
     * Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
     */
    '@typescript-eslint/prefer-namespace-keyword': 'error', // recommended

    /**
     * Enforce the usage of the nullish coalescing operator instead of logical chaining
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
     */
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    /**
     * Prefer using concise optional chain expressions instead of chained logical ands
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
     */
    '@typescript-eslint/prefer-optional-chain': 'off',

    /**
     * Requires that private members are marked as readonly if they're never modified outside of the constructor
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
     */
    '@typescript-eslint/prefer-readonly': 'off',

    /**
     * Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
     */
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    /**
     * Prefer using type parameter when calling Array#reduce instead of casting
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
     */
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',

    /**
     * Enforce that RegExp#exec is used instead of String#match if no global flag is provided
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
     */
    '@typescript-eslint/prefer-regexp-exec': 'off',

    /**
     * Enforce that this is used when only this type is returned
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-return-this-type.md
     */
    '@typescript-eslint/prefer-return-this-type': 'off',

    /**
     * Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',

    /**
     * Recommends using @ts-expect-error over @ts-ignore
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
     */
    '@typescript-eslint/prefer-ts-expect-error': 'off',

    /**
     * Requires any function or method that returns a Promise to be marked async
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
     */
    '@typescript-eslint/promise-function-async': 'off',

    /**
     * Requires Array#sort calls to always provide a compareFunction
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
     */
    '@typescript-eslint/require-array-sort-compare': 'off',

    /**
     * When adding two variables, operands must both be of type number or of type string
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
     */
    '@typescript-eslint/restrict-plus-operands': 'error', // recommended

    /**
     * Enforce template literal expressions to be of string type
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
     */
    '@typescript-eslint/restrict-template-expressions': 'error', // recommended

    /**
     * Enforces that members of a type union/intersection are sorted alphabetically
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
     */
    '@typescript-eslint/sort-type-union-intersection-members': 'off',

    /**
     * Restricts the types allowed in boolean expressions
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
     */
    '@typescript-eslint/strict-boolean-expressions': 'off',

    /**
     * Exhaustiveness checking in switch with union type
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
     */
    '@typescript-eslint/switch-exhaustiveness-check': 'off',

    /**
     * Sets preference level for triple slash directives versus ES6-style import declarations
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
     */
    '@typescript-eslint/triple-slash-reference': 'error', // recommended

    /**
     * Require consistent spacing around type annotations
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
     */
    '@typescript-eslint/type-annotation-spacing': 'off',

    /**
     * Requires type annotations to exist
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
     */
    '@typescript-eslint/typedef': 'off',

    /**
     * Enforces unbound methods are called with their expected scope
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
     */
    '@typescript-eslint/unbound-method': 'error', // recommended

    /**
     * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
     */
    '@typescript-eslint/unified-signatures': 'off',
  },
};
