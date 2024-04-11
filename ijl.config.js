const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${'main' || pkg.version}/`
    }
  },
  /* use https://kc.admin.inno-js.ru/ to create config, navigations and features */
  navigations: {
    'cruellas-de-vil.main': '/cruellas-de-vil'
  },
  features: {
    'cruellas-de-vil': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    key: 'value'
  }
}
