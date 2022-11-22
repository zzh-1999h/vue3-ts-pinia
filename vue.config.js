const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    plugins: [
      require('unplugin-element-plus/webpack')({
        // options
      })
    ]
  }
})
