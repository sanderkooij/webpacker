const eslintconfig = {
  "env": {
      "browser": true,
      "jest": true
  },
  "extends": ["airbnb-base"],
  "parser": "babel-eslint",
  "rules": {
    "semi": ["error", "never"],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
}

module.exports = eslintconfig
