//module.exports抛出
module.exports = {
  publicPath: './',
  devServer: {
    // open: true,
    proxy: {
      '/api': {
        // target: 'http://localhost:2020/',
        target: 'https://47.93.229.38:7664',
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}


