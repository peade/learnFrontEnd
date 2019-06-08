const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

function getEntries (globPath) {
  let files = glob.sync(globPath)
  let entries = {}
  files.forEach(function (filePath) {
    let split = filePath.split(/\/|\./)
    let name = split.slice(2, split.length - 1).join('/')
    entries[name] = './' + filePath
  })
  return entries
}

function getHtmlWebpackPluginList (entries) {
  let arr = []
  Object.keys(entries).forEach(function (name) {
    let item = new HtmlWebpackPlugin({
      filename: 'pages/' + name + '.html',
      template: './src/pages/' + name + '.html',
      chunks: [name, 'commons', 'vendors']
    })
    arr.push(item)
  })
  return arr
}

let entries = getEntries('src/js/**/*.js')
let htmlWebPluginList = getHtmlWebpackPluginList(entries)

module.exports = {
  mode: 'development',
  entry: entries,
  output: {
    filename: 'js/[name]-[contentHash:8].js',
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',

            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',

            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 100, // 10000 2k以下
          name: 'images/[name]-[hash:10].[ext]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 50000, // 10000 2k以下
          name: 'font/[name]-[hash:10].[ext]'
        }

      },
      {
        test: /\.(m4a|mp3|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'music/[name]-[hash:10].[ext]'
            }
          }
        ]
      },
      {
        test: /\.htm$|\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
              attrs: ['img:src', 'audio:src']
            }
          },
          {
            loader: 'common-html-include-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    ...htmlWebPluginList
  ],
  devServer: {
    contentBase: path.join(__dirname, '../', 'dist'),
    compress: true,
    port: 3019,
    inline: true,
    open: true,
    host: '0.0.0.0',
    useLocalIp: true,
    disableHostCheck: true,
    openPage: '/pages/index.html',
    proxy: {
      '/services': 'http://localhost:8080'
    }
  }
}
