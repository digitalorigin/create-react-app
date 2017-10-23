'use strict';

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    exmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    // http://eslint.org/docs/rules/
    'arrow-parens': 0,
    'comma-dangle': [2, 'always-multiline'],
    'global-require': 0,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'no-prototype-builtins': 0,
    'no-restricted-globals': 1,
    'no-underscore': 0,
    'no-underscore-dangle': 0,
    'no-useless-escape': 0,
    'no-void': 0,
    'prefer-destructuring': 1,
    'prefer-promise-reject-errors': 1,
    'prefer-template': 0,
    'spaced-comment': 1,
    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/first': 0,
    'import/no-mutable-exports': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': 0,
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/default-props-match-prop-types': 1,
    'react/forbid-prop-types': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-curly-brace-presence': 1,
    'react/jsx-curly-spacing': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-unescaped-entities': 0,
    'react/no-unused-state': 1,
    'react/prop-types': 1,
    'react/require-default-props': 0,
    'react/sort-comp': 1,
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    es6: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
