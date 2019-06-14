const tasks = arr => arr.join(' && ')

const config = {
  'hooks': {
    'pre-commit': tasks([
      'npm run lint',
      'npm test',
    ]),
  },
}

module.exports = config
