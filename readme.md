# Webpacker
Tired of constantly setting up your development workflow whenever you start a new project? Now you can just fork this boilerplate and be up and running in no time. We got you covered using some of the best tools out there helping you write awesome code!

## Getting started
Make sure you have the latest version of [Node](https://nodejs.org/en/) installed. This will include [npm](https://www.npmjs.com/), the node package manager. Alternatively install [Yarn](https://yarnpkg.com/lang/en/) if you like to use it as package manager.

Fork the repository and using your command line run `npm install` or `yarn`.
This will install both run-time project dependencies and developer tools listed in [package.json](package.json) file.

### Development
Running `npm start` or `yarn start` builds the app and fires up a local Webpack devServer listening on port 8080. http://localhost:8080/. Hot Module Replacement (HMR) is not enabled by default in this boilerplate.

### Testing
Both [Jest](https://jestjs.io/) and [Cypress](https://www.cypress.io/) are installed in this boilerplate. Jest is used for unit testing and Cypress for end to end testing.

* Running `npm test` or `yarn test` will start the Jest testrunner and runs all your defined unit tests. 
* Running `npm run cypress:interactive` or `yarn cypress:interactive` will start the cypress test runner in the interactive mode.
* Running `npm run cypress:ci` or `yarn cypress:ci` will start the cypress test runner in ci mode.

### Production
Webpack is configured with some additional optimizations for production. The reasoning behind them can be read [here](#webpack).

* Running `npm run dist` or `yarn dist` builds the app for production and generates a build folder containing your production assets.
* Running `npm run build` or `yarn build` builds the app without the optimizations enabled. This could be usefull for debugging purposes.

### Quality Assurance
Some QA tasks have been added to allow you to easily check your codebase.

* Running `npm run lint` or `yarn lint` runs ESLint to check your codebase. Note that a webpack eslint-loader is also used to check your codebase when running webpack.
* Running `npm run typecheck` or `yarn typecheck` spawns a flow server that typechecks your codebase. Note that flow only checks files that have the // @flow annotation. This allows you to easily opt in.

Additionally this boilerplate uses [Husky](https://github.com/typicode/husky) and [Commitlint](https://commitlint.js.org/#/guides-local-setup) to run QA tasks on git commit and push hooks. Commit messages are tested against [conventional commit](https://www.conventionalcommits.org) guidelines.

## Notes
This boilerplate deliberately contains no webpack loaders for serving CSS or SASS. This allows you to to choose between using traditional CSS/SASS or CSS in Javascript for styling purposes. Below you can find a list to these specific loaders and libraries.

* [CSS-Loader](https://github.com/webpack-contrib/css-loader)
* [SASS-Loader](https://github.com/webpack-contrib/sass-loader)
* [CSS extraction plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
* [Emotion](https://emotion.sh/docs/introduction)
* [Styled Components](https://www.styled-components.com/)

## Contributing
Feel free to contribute and make this boilerplate even better.

## License
MIT
