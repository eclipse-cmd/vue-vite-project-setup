/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'prettier',
    '@vue/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.vue', '*.ts'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'prettier/prettier': 'error',
        'vue/max-attributes-per-line': 'off',
        'vue/html-self-closing': 'off',
        'vue/singleline-html-element-content-newline': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'error',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
};
