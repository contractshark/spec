// @file: contract shark eslint 
// @summary: generic eslint
// @version: 1.0.0
// @license ISC
module.exports = {
  'env': {
    'es6': false,
    'node': true,
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 8,
  },
  'rules': {
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
  },
};
