const base = require('./base')

module.exports = Object.assign({}, base, {
  extends: [
    require.resolve('eslint-config-xo/esnext'),
    require.resolve('eslint-config-rem/prettier')
  ]
})
