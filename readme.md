# Webpacker
A webpack boilerplate for building javascript applications.

## Includes
* Babel
* Flow - 
* Jest
* Cypress
* ESlint
* Husky
* Commitlint

## Prerequisites

Make sure you have the latest version of [node](https://nodejs.org/en/) installed. This will include NPM. Alternatively install [yarn](https://yarnpkg.com/lang/en/) if you like to use it as package manager.

## Installing

### 1. Fork the repository
Simply fork the repository and your good to go.

### 2. Run `npm install` or `yarn` when using yarn
This will install both run-time project dependencies and developer tools listed
in [package.json](package.json) file.

### 3. Run `npm start`
Builds the app from the source files (`/src`) and fires up a local Webpack devServer listening on port 8080. http://localhost:8080/

### 4. Run `npm test`
Starts the JEST testrunner and runs all your specified tests.

### 5. Run `npm run cypress:interactive` or `npm run cypress:ci`
Start cypress in either interactive or ci mode and runs your specified tests from the cypress/integration folder.

### 5. Run `npm run build`
Creates a development build without production optimizations. Good for checking whether or not webpack markes certain modules as unused exports etc.

### 5. Run `npm run dist`
Creates a production build with the production optimizations.
