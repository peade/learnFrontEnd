const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FileListPlugin = require('./plugins/file-list-plugin')
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },

  devServer: {
    port: 9005,
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [
          {
            loader: 'raw-loader'
          },
          {
            loader: path.resolve(__dirname, 'loader/reverse-loader.js'),
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new FileListPlugin()
  ]
}
