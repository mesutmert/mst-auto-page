module.exports = {
  root: true,
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  extends: ['standard', 'plugin:vue/vue3-essential', '@vue/prettier'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['warn', { code: 128, ignoreComments: true }],
    'spaced-comment': ['warn', 'never', { markers: ['#'] }]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'max-len': 'off'
      }
    }
  ]
}
