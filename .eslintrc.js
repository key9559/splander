module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/recommended', '@vue/standard'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    indent: [
      'error',
      2,
    ],
    semi: [
      'error',
      'always',
    ],
    'comma-dangle': [2, 'always-multiline'],
    camelcase: 'off',
    eqeqeq: 'off',
    'keyword-spacing': 0,
    'no-unused-vars': 1,
    'no-multiple-empty-lines': 0,
    'eol-last': 0,
    'vue/prop-name-casing': 'off',
  },
};