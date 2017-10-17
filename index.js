module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    exmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
      },
    ],
    'comma-dangle': [2, 'always-multiline'],
    'no-console': 0,
    'react/prop-types': 1,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'import/no-named-as-default': 0,
    'prefer-template': 0,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-wrap-multilines': 0,
    'no-void': 0,
    'react/no-unescaped-entities': 0,
    'arrow-parens': 0,
    'no-plusplus': 0,
    'import/first': 0,
    'global-require': 0,
    'react/jsx-curly-spacing': 0,
    'react/jsx-indent-props': 0
    'react/jsx-closing-bracket-location': 0,
    'import/no-mutable-exports': 0,
    'import/prefer-default-export': 0,
    'no-prototype-builtins': 0,
    'react/jsx-no-target-blank': 0,
    'no-underscore': 0,
    'no-underscore-dangle': 0,
    'no-useless-escape': 0,
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
