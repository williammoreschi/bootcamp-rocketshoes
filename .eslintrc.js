module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension':[
      'warn',
      { extensions:['.jsx','.js'] }
    ],
    "no-param-reassign": 'off',
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': [2, 'never'],
    'no-console':['error',{ allow: ['tron'] } ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
