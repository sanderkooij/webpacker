# Webpacker
---
A webpack boilerplate for building javascript applications.

Tired of constantly installing dependencies and setting up your development workflow whenever you start a project? Now you can just fork this boilerplate and be up and running in no time. From development on your local machine to running a production build, we got you covered using some of the best tools out there helping you write awesome code!

Interested in what is being used and what the motivations are? Skip to [tooling](#tooling)

## Getting started
---
Make sure you have the latest version of [Node](https://nodejs.org/en/) installed. This will include [npm](https://www.npmjs.com/), the node package manager. Alternatively install [Yarn](https://yarnpkg.com/lang/en/) if you like to use it as package manager.

Fork the repository and using your command line run `npm install` or `yarn`.
This will install both run-time project dependencies and developer tools listed in [package.json](package.json) file.

**Development**
Running `npm start` or `yarn start` builds the app and fires up a local Webpack devServer listening on port 8080. http://localhost:8080/. Hot Module Replacement (HMR) is not enabled by default in this boilerplate.

**Testing**
Both [Jest](https://jestjs.io/) and [Cypress](https://www.cypress.io/) are installed in this boilerplate. Jest is used for unit testing and Cypress for end to end testing.

* Running `npm test` or `yarn test` will start the Jest testrunner and runs all your defined unit tests. 
* Running `npm run cypress:interactive` or `yarn cypress:interactive` will start the cypress test runner in the interactive mode.
* Running `npm run cypress:ci` or `yarn cypress:ci` will start the cypress test runner in ci mode.

**Production**
Webpack is configured with some additional optimizations for production. The reasoning behind them can be read [here](#webpack).

* Running `npm run dist` or `yarn dist` builds the app for production and generates a build folder containing your production assets.
* Running `npm run build` or `yarn build` builds the app without the optimizations enabled. This could be usefull for debugging purposes.

**Quality Assurance**
Some QA tasks have been added to allow you to easily check your codebase.

* Running `npm run lint` or `yarn lint` runs ESLint to check your codebase. Note that a webpack eslint-loader is also used to check your codebase when running webpack.
* Running `npm run typecheck` or `yarn typecheck` spawns a flow server that typechecks your codebase. Note that flow only checks files that have the // @flow annotation. This allows you to easily opt in.

There is no eslint:fix command. Although eslint can fix certain things we believe you have to fix them yourselfs! Otherwise you never learn.

Additionally we use [Husky](https://github.com/typicode/husky) and [Commitlint](https://commitlint.js.org/#/guides-local-setup) to run certain tasks on git hooks and check commit messages. More on the reasoning behind these tools can be found [here](#husky-and-commit-lint).

## Contributing
---
Feel free to contribute! :)

## License
---
MIT

## Tooling
---

##### Webpack
[Webpack](https://webpack.js.org/) is used as our asset bundler. Webpack does alot for us out of the box and can be set up with zero configuration. This boilerplate however has additional configurations.

###### Configuration per enviroment
The webpack configuration can be found in the [webpack](webpack) folder. The configuration is split over 3 files, 1 base configuration and additional development and production configurations that extend the base configuration. This setup allows us to control what webpack does on a per enviroment basis. Seperating the configuration instead of using 1 big file (which works also) makes it easier to reason about.

**Webpack base configuration**
Contains configuration needed for both development and production.

**Webpack development configuration**
Contains configuration needed for development.

**Webpack production configuration
Contains configuration needed for production.

### Babel
[Babel](https://babeljs.io/) allows you to write modern javascript that gets transpiled into code that works for browsers defined in the [.browserslistrc](.browserslistrc) file. The motivation on why we use a .browserslilstrc file over defining it in our [babel.config.js](babel.config.js) file can be found [here](https://github.com/browserslist/browserslist) and [here](https://babeljs.io/docs/en/babel-preset-env#browserslist-integration)

Babel is configured in the [babel.config.js](babel.config.js) file and it looks like:

```javascript
const config = (api) => {
  api.cache(true)

  return {
    presets: [
      ['@babel/preset-env', {
        modules: false,
      }],
      '@babel/preset-flow',
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
```

Note that there are some additional configurations, these all have a reason.

`@babel/preset-env and the modules flag`
We are using [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) for the obvious reasons but we are passing it additional options that set the modules flag to false. This tells babel to not transform the ES6 module syntax. This enables webpack to use it's [tree shaking](https://webpack.js.org/guides/tree-shaking/) features.

`@babel/preset-flow`
Since we are using [Flow]() in our code for type annotations we need babel to handle these annotations before it compiles. This preset contains additional plugins. A full read can be found [here](https://babeljs.io/docs/en/babel-preset-flow)

`@babel/plugin-transform-runtime`
We are using [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime) for simply saving on codesize. A full read as to why can be found [here](https://babeljs.io/docs/en/babel-plugin-transform-runtime#why)

`env and @babel/plugin-transform-modules-commonjs`
Remember that we explicitly told babel to not transform the ES6 module syntax for the purpose of tree shaking? Our testrunner [JEST]() is run in a node enviroment, node uses the CommonJS module specification for working with modules. In our test files we want to write:

```javascript
import someThing from 'some-module'
```

instead of

```javascript
const someThing = require('some-module')
```

If we use the ES6 module syntax then JEST will fail. We need to make sure that the imports we are using get transpiled down to the CommonJS module specification. This is where the [@babel/plugin-transform-modules-commonjs](https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs) comes to the rescue. JEST before it runs sets the node enviroment variable to **test** and Babel allows us to handle this in it's configuration.

#### Using the Babel CLI
This boilerplate comes with the [Babel CLI](https://babeljs.io/docs/en/babel-cli) and allows you to easily transpile code via the command line. This can be particulary helpfull when you want to quickly see what babel outputs. Lets dive into a example.

We have babel set up with a .browserslistrc file that defines that we are transpiling for the 'last 2 Chrome versions'. We write some code in example.js that contains:

```javascript
const obj1 = { a: 1 }
const obj2 = { b: 2 }

const spreaded = { ...obj1, ...obj2 }
```

Running `npx babel example.js` outputs the following code:

```javascript
const obj1 = {
  a: 1
};

const obj2 = {
  b: 2
};

const spreaded = { ...obj1,
  ...obj2
};
```

No changes as we are transpiling for the latest chrome browsers and chrome natively supports the spread operator. Now change your .browserslistrc file to 'defaults' this setting contains the latest versions of all major browsers.

Running `npx babel example.js` outputs the following code:

```javascript
import _objectSpread from "@babel/runtime/helpers/objectSpread";

var obj1 = {
  a: 1
};

var obj2 = {
  b: 2
};

var spreaded = _objectSpread({}, obj1, obj2);
```

As you can see babel now transpiled the code so that it works for all the browsers that are defined in the .browserslistrc. It now uses a babel helper instead of the spread syntax to merge the objects toghether. You can use the CLI to get quick feedback when debugging certain code etc.

#### Webpack Babel Loader
Webpack is used to bundle assets but it does not know we are using babel to transpile our code. We need a way to tell webpack that we want to transpile our code before bundling. In comes [webpack loaders](https://webpack.js.org/loaders/) and the [Babel Loader](https://github.com/babel/babel-loader).

The configuration for the Babel Loader can be found in [webpack.base.js](webpack/webpack.base.js). Additional options extend the configuration in [babel.config.js](babel.config.js).