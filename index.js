module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jasmine: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    exmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'comma-dangle': [
      2,
      'always-multiline'
    ],
    indent: [
      2,
      2,
      {
        'SwitchCase': 1
      }
    ],
    'no-console': 0,
    'react/prop-types': 0,
    'max-len': 0,
    'prefer-template': 0,
    'no-use-before-define': 0,
    'newline-per-chained-call': 0,
    'arrow-body-style': [
      2,
      'as-needed'
    ]
  },
};
