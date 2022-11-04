const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/alextmn-learn-spanish-with-ai/'
  : '/',
  transpileDependencies: true
})
