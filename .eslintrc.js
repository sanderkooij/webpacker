const eslintconfig = {
  "env": {
      "browser": true,
      "jest": true,
      "cypress/globals": true
  },
  "extends": [
    "airbnb-base",
    "plugin:flowtype/recommended",
    "plugin:cypress/recommended"
  ],
  "plugins": [
    "flowtype",
    "cypress"
  ],
  "parser": "babel-eslint",
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  },
  "rules": {
    "semi": ["error", "never"],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
}

module.exports = eslintconfig
