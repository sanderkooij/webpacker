const eslintconfig = {
  "env": {
      "browser": true,
      "jest": true,
      "cypress/globals": true
  },
  "extends": [
    "airbnb-base",
    "plugin:cypress/recommended"
  ],
  "plugins": [
    "cypress"
  ],
  "parser": "babel-eslint",
  "rules": {
    "semi": ["error", "never"],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
}

module.exports = eslintconfig
