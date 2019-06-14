const config = (api) => {
  api.cache(true)

  return {
    presets: [
      '@babel/preset-env',
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
    ],
  }
}

module.exports = config
