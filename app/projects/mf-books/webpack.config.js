const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfBooks',

  exposes: {
    './BooksModule': './projects/mf-books/src/app/books/books.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  //sharedMappings: ["@commons-lib"],
});
