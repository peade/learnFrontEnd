module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    }
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    useLocalIp: true,
    disableHostCheck: true,
    port: 3800
    // 由于本项目数据通过easy-mock和mockjs模拟，不存在跨域问题，无需配置代理;
    // proxy: {
    //   '/v2': {
    //       target: target,
    //       changeOrigin: true
    //   }
    // }
  }
}
