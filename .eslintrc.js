module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  ignorePatterns: ['public/*', 'src/assets/js/**'],
  rules: {
    'react/prop-types': 'off',
    'no-debugger': 'off'
  }
};
