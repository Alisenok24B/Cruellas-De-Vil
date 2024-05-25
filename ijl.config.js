const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  /* use https://kc.admin.inno-js.ru/ to create config, navigations and features */
  navigations: {
    "dog-sitters-finder.main": "/dog-sitters-finder",
    "dog-sitters-finder.register": "/register",
    "dog-sitters-finder.search": "/search",
    //"dog-sitters-finder.dogsitter.viewing": "/profile/:id"
    "dog-sitters-finder.dogsitter.viewing": "/dogsitter-viewing"
  },
  features: {
    'cruellas-de-vil': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "dog-sitters-finder.api": "/api"
  }
}
