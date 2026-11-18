const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfe1',

  exposes: {
    './appRoute': './src/app/app.routes.ts',
    './remoteComponent': './src/app/components/remote-component/remote-component.ts',
    './catalogue': './src/app/pages/catalogue/catalogue.ts',
    './cart': './src/app/pages/cart/cart.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
