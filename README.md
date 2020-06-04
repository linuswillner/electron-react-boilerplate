# electron-react-boilerplate

My personal Electron with React boilerplate, leveraging electron-webpack.

## Scripts

### npm start

Start the development instance.

### npm run compile

Compile the JavaScript components (Main and renderer = frontend) via Webpack.

### npm run build

Create a production build and setup file into the `dist` directory. Note: The `dist` directory will be cleaned for each build.

### npm run build:nosetup

Same as above, but does not generate a setup file, does not sign the executable and only creates an unpacked copy of the application.

### npm test

Runs ESLint and Stylelint.

### npm run test:fix

Same as above, but applies autofixer options for style errors.
