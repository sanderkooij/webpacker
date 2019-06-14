const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
  // https://webpack.js.org/configuration/mode/
  mode: 'production',
  devtool: 'source-map',
  stats: 'verbose',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
}

module.exports = merge(baseConfig, config)
