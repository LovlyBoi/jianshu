const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:10000/n/',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  configureWebpack: {
    optimization: {
      // 代码分割
      splitChunks: {
        // 对所有代码（同步和异步）进行拆分
        chunks: 'all',
        // 试图组合出 200k 的一个包，利用缓存机制
        minSize: 200000,
        // 对超出 200k 的包进行拆分，利用浏览器打开多个tcp连接进行并行下载
        maxSize: 200000,
      },
    },
  },
})
