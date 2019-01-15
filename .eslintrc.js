module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:prettier/recommended', 'react-app'],
  rules: {
    'prettier/prettier': 'error',
    'react/prefer-es6-class': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': [2, 2],
    'react/prop-types': [1],
    'react/no-array-index-key': [1]
  }
};
