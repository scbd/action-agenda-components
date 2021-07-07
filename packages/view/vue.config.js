const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  css                  : { extract: true },
  transpileDependencies: [ '@houlagins/self-embedding-component', '@scbd/sso-vue-plugin-scbd', '@action-agenda/icons', '@action-agenda/cached-apis', '@houlagins/locale', '@houlagins/default-options', '@scbd/load-http', 'vue-multiselect', 'ky', 'ky-universal', 'check-ie', 'change-case', 'localforage' ],
  devServer            : {
    allowedHosts: [
      'http://localhost.cbd.int',
      'http://localhost'
    ],
    port            : 8080,
    disableHostCheck: true
  },
  pluginOptions: {
    i18n: {
      locale        : 'en',
      fallbackLocale: 'en',
      localeDir     : 'locales',
      enableInSFC   : true
    }
  }
}