module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config'],
  rules: {
    // Global
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    // Vue
    'vue/multi-word-component-names': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 5,
        },
      },
    ],
    'vue/no-v-html': 0,
    'vue/no-multiple-template-root': 0,
    'vue/html-indent': ['error', 2],
    'vue/script-indent': ['error', 2, { baseIndent: 0 }],
    // Typescript
    '@typescript-eslint/indent': ['error', 2],
  },
}
