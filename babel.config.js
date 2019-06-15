const config = (api) => {
  api.cache(true)

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-flow',
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
    ],
  }
}

module.exports = config
