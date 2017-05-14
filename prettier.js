module.export = {
  extends: [
    require.resolve('./base'),
    require.resolve('eslint-config-xo/esnext'),
    require.resolve('eslint-config-rem/prettier')
  ]
}
