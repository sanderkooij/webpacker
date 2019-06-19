const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
  // https://webpack.js.org/configuration/mode/
  mode: 'development',
  devtool: 'inline-source-map',
  stats: 'minimal',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
  },
  optimization: {
    usedExports: true,
  },
}

module.exports = merge(baseConfig, config)
