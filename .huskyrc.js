const tasks = arr => arr.join(' && ')

const config = {
  'hooks': {
    'pre-commit': tasks([
      'npm run lint',
      'npm run typecheck',
    ]),
    'pre-push': tasks([
      'npm test',
      'npm run cypress:ci',
    ]),
    'commit-msg': 'npx commitlint -E HUSKY_GIT_PARAMS'
  },
}

module.exports = config
