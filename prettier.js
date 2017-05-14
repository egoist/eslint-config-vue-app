const base = require('./base')

module.export = Object.assign({}, base, {
  extends: [
    require.resolve('eslint-config-xo/esnext'),
    require.resolve('eslint-config-rem/prettier')
  ]
})
