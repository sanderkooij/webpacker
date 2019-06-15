const tasks = arr => arr.join(' && ')

const config = {
  'hooks': {
    'pre-commit': tasks([
      'npm run lint',
      'npm run typecheck',
      'npm test',
    ]),
  },
}

module.exports = config
