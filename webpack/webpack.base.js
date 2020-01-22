const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  // https://webpack.js.org/concepts#entry
  entry: path.resolve(__dirname, '../src/index.jsx'),
  // https://webpack.js.org/concepts#output
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash].js',
  },
  // https://webpack.js.org/concepts/#loaders
  module: {
    rules: [{
      test: /\.js(x)$/,
      exclude: [
        /node_modules/,
      ],
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      },
    }, {
      test: /\.js(x)$/,
      exclude: [
        /node_modules/,
        /flow-typed/,
        /coverage/,
      ],
      loader: 'eslint-loader',
      enforce: 'pre',
    }],
  },
  // https://webpack.js.org/concepts#plugins
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
  ],
}

module.exports = config
