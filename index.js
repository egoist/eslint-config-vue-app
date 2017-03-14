module.exports = {
  extends: [
    require.resolve('eslint-config-xo/esnext'),
    require.resolve('eslint-config-rem')
  ],
  parser: 'babel-eslint',
  plugins: ['vue'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    'no-new': 0,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-unused-vars': [2, {vars: 'all', args: 'none'}],
    // jsx rules
    'vue/jsx-uses-vars': 2
  }
}
