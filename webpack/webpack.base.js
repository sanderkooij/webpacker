const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  // https://webpack.js.org/concepts#entry
  entry: path.resolve(__dirname, '../src/index.js'),
  // https://webpack.js.org/concepts#output
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash].js',
  },
  // https://webpack.js.org/concepts/#loaders
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /jest/,
        /cypress/,
        /coverage/,
      ],
      loader: 'babel-loader',
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
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
