'use strict';

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    exmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    // http://eslint.org/docs/rules/
    'arrow-parens': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'global-require': 'off',
    'max-len': 'off',
    'newline-per-chained-call': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-globals': 'warn',
    'no-underscore': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-escape': 'off',
    'no-void': 'off',
    'prefer-destructuring': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'prefer-template': 'off',
    'spaced-comment': 'warn',
    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/first': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-for': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/default-props-match-prop-types': 'warn',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unused-state': 'warn',
    'react/prop-types': 'warn',
    'react/require-default-props': 'off',
    'react/sort-comp': 'warn',
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
