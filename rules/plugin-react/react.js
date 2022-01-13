/**
 * React Plugin Rules - React
 *
 * @see https://github.com/yannickcr/eslint-plugin-react
 */

 module.exports = {
  rules: {
    /**
     * Enforces consistent naming for boolean props
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
     */
    'react/boolean-prop-naming': 'off',

    /**
     * Forbid "button" element without an explicit "type" attribute
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
     */
    'react/button-has-type': 'off',

    /**
     * Enforce all defaultProps are defined and not "required" in propTypes
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
     */
    'react/default-props-match-prop-types': 'off',

    /**
     * Enforce consistent usage of destructuring assignment of props, state, and context
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
     */
    'react/destructuring-assignment': 'off',

    /**
     * Prevent missing displayName in a React component definition
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
     */
    'react/display-name': 'off',

    /**
     * Forbid certain props on components
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
     */
    'react/forbid-component-props': 'off',

    /**
     * Forbid certain props on DOM Nodes
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
     */
    'react/forbid-dom-props': 'off',

    /**
     * Forbid certain elements
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
     */
    'react/forbid-elements': 'off',

    /**
     * Forbid using another component's propTypes
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
     */
    'react/forbid-foreign-prop-types': 'off',

    /**
     * Forbid certain propTypes
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
     */
    'react/forbid-prop-types': 'off',

    /**
     * Standardize the way function component get defined
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
     */
    'react/function-component-definition': 'off',

    /**
     * Reports when this.state is accessed within setState
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
     */
    'react/no-access-state-in-setstate': 'off',

    /**
     * Prevent adjacent inline elements not separated by whitespace
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
     */
    'react/no-adjacent-inline-elements': 'off',

    /**
     * Prevent usage of Array index in keys
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     */
    'react/no-array-index-key': 'off',

    /**
     * Lifecycle methods should be methods on the prototype, not class fields
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
     */
    'react/no-arrow-function-lifecycle': 'off',

    /**
     * Prevent passing of children as props
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
     */
    'react/no-children-prop': 'error',

    /**
     * Prevent usage of dangerous JSX props
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
     */
    'react/no-danger': 'error',

    /**
     * Report when a DOM element is using both children and dangerouslySetInnerHTML
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
     */
    'react/no-danger-with-children': 'off',

    /**
     * Prevent usage of deprecated methods
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
     */
    'react/no-deprecated': 'error',

    /**
     * Prevent usage of setState in componentDidMount
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
     */
    'react/no-did-mount-set-state': 'error',

    /**
     * Prevent usage of setState in componentDidUpdate
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
     */
    'react/no-did-update-set-state': 'error',

    /**
     * Prevent direct mutation of this.state
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
     */
    'react/no-direct-mutation-state': 'error',

    /**
     * Prevent usage of findDOMNode
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
     */
    'react/no-find-dom-node': 'error',

    /**
     * Prevent usage of invalid attributes
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
     */
    'react/no-invalid-html-attribute': 'off',

    /**
     * Prevent usage of isMounted
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
     */
    'react/no-is-mounted': 'error',

    /**
     * Prevent multiple component definition per file
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
     */
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true,
      },
    ],

    /**
     * Enforce that namespaces are not used in React elements
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
     */
    'react/no-namespace': 'off',

    /**
     * Flag shouldComponentUpdate when extending PureComponent
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
     */
    'react/no-redundant-should-component-update': 'off',

    /**
     * Prevent usage of the return value of React.render
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
     */
    'react/no-render-return-value': 'off',

    /**
     * Prevent usage of setState
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
     */
    'react/no-set-state': 'off',

    /**
     * Prevent string definitions for references and prevent referencing this.refs
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
     */
    'react/no-string-refs': 'error',

    /**
     * Report "this" being used in stateless components
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
     */
    'react/no-this-in-sfc': 'off',

    /**
     * Prevent common typos
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
     */
    'react/no-typos': 'off',

    /**
     * Detect unescaped HTML entities, which might represent malformed tags
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
     */
    'react/no-unescaped-entities': 'off',

    /**
     * Prevent usage of unknown DOM property
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
     */
    'react/no-unknown-property': 'error',

    /**
     * Prevent usage of unsafe lifecycle methods
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
     */
    'react/no-unsafe': 'off',

    /**
     * Prevent creating unstable components inside components
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
     */
    'react/no-unstable-nested-components': 'off',

    /**
     * Prevent declaring unused methods of component class
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
     */
    'react/no-unused-class-component-methods': 'off',

    /**
     * Prevent definitions of unused prop types
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
     */
    'react/no-unused-prop-types': 'off',

    /**
     * Prevent definition of unused state fields
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
     */
    'react/no-unused-state': 'off',

    /**
     * Prevent usage of setState in componentWillUpdate
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
     */
    'react/no-will-update-set-state': 'off',

    /**
     * Enforce ES5 or ES6 class for React Components
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
     */
    'react/prefer-es6-class': ['error', 'always'],

    /**
     * Prefer exact proptype definitions
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
     */
    'react/prefer-exact-props': 'off',

    /**
     * Require read-only props.
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
     */
    'react/prefer-read-only-props': 'off',

    /**
     * Enforce stateless components to be written as a pure function
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     */
    'react/prefer-stateless-function': 'error',

    /**
     * Prevent missing props validation in a React component definition
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */
    'react/prop-types': 'error',

    /**
     * Prevent missing React when using JSX
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     */
    'react/react-in-jsx-scope': 'error',

    /**
     * Enforce a defaultProps definition for every prop that is not a required prop
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
     */
    'react/require-default-props': 'off',

    /**
     * Enforce React components to have a shouldComponentUpdate method
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
     */
    'react/require-optimization': 'off',

    /**
     * Enforce ES5 or ES6 class for returning value in render function
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
     */
    'react/require-render-return': 'error',

    /**
     * Prevent extra closing tags for components without children
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     */
    'react/self-closing-comp': 'error',

    /**
     * Enforce component methods order
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
     */
    'react/sort-comp': [
      'error',
      {
        groups: {
          lifecycle: [
            'propTypes',
            'defaultProps',
            'contextTypes',
            'childContextTypes',
            'getChildContext',
            'getDefaultProps',
            'getInitialState',
            'constructor',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          other: ['everything-else', '/^handle.+$/'],
          rendering: ['/^render.+$/', 'render'],
        },
        order: ['lifecycle', 'other', 'rendering'],
      },
    ],

    /**
     * Enforce propTypes declarations alphabetical sorting
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
     */
    'react/sort-prop-types': 'error',

    /**
     * State initialization in an ES6 class component should be in a constructor
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
     */
    'react/state-in-constructor': 'off',

    /**
     * Defines where React component static properties should be positioned
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
     */
    'react/static-property-placement': 'off',

    /**
     * Enforce style prop value is an object
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
     */
    'react/style-prop-object': 'off',

    /**
     * Prevent passing of children to void DOM elements (e.g. <br />)
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
     */
    'react/void-dom-elements-no-children': 'off',
  },
};
