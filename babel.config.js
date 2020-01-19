const config = (api) => {
  api.cache(true)

  return {
    presets: [
      ['@babel/preset-env', {
        modules: false,
      }],
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
    ],
    env: {
      test: {
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      },
    },
  }
}

module.exports = config
