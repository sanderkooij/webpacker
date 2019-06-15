const eslintconfig = {
  "env": {
      "browser": true,
      "jest": true
  },
  "extends": ["airbnb-base", "plugin:flowtype/recommended"],
  "plugins": ["flowtype"],
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
