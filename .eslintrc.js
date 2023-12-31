module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: '@react-native',
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    'key-spacing': ['error', { 'mode': 'minimum' }],
    'react/jsx-max-props-per-line': [2, { 'maximum': 2, 'when': 'multiline' }],
    'arrow-body-style': 'warn',
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0,
    'global-require': 0,
    'react/destructuring-assignment': 0,
    'linebreak-style': 0,
    'import/no-cycle': 0,
    'import/no-dynamic-require': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'semi': [2, 'always'],
    'indent': 0,
    'complexity': ['warn', 4],
    'max-params': ['warn', 4],
    'max-lines-per-function': ['warn', {
      'max': 15,
      'skipComments': true,
      'skipBlankLines': true,
    }],
    'max-len': ['error', {
      'code': 110,
      'ignoreComments': true,
    }],
    'prettier/prettier': 'off',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'error',
    'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'curly': 0,
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': 'error',
    'react/jsx-indent-props': ['error', 2],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
