module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    'max-len': ['error', {'code': 100}],
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx']}],
    'react/prop-types': 0,
    'require-jsdoc': 0,
  },
};
