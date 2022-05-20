module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'consistent-return': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'import/no-mutable-exports': 'off',
    'no-param-reassign': 'off',
  },
}
