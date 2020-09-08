module.exports = {
  devServer: {
    open: true,
    host: '0.0.0.0',
    useLocalIp: true,
    port: 3800
    // 由于本项目数据通过easy-mock和mockjs模拟，不存在跨域问题，无需配置代理;
    // proxy: {
    //   '/v2': {
    //       target: target,
    //       changeOrigin: true
    //   }
    // }
  },
  chainWebpack(config) {
    config.module
      .rule('pdf')
      .test(/\.pdf/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        outputPath: 'file',
        name: '[name].[ext]'
      })
  }
}
