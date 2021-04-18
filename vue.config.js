//module.exports抛出
module.exports = {
  publicPath: './',
  devServer: {
    // open: true,
    proxy: {
      '/api': {
        // target: 'http://localhost:2020/',
        target: 'http://songidea.free.idcfengye.com',
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}


