const eslintconfig = {
  "env": {
      "browser": true,
      "jest": true,
      "cypress/globals": true
  },
  "extends": [
    "airbnb-base",
    "plugin:cypress/recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react-hooks",
    "cypress"
  ],
  "parser": "babel-eslint",
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "semi": ["error", "never"],
    "import/no-extraneous-dependencies": ["error", {"packageDir": "./"}],
    "react/prop-types": [0],
    "react/require-default-props": [0],
    "react/button-has-type": [0],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}

module.exports = eslintconfig
