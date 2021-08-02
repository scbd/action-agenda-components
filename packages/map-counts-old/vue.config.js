
module.exports = {
  css                  : { extract: true },
  transpileDependencies: [ '@houlagins/self-embedding-component', '@scbd/sso-vue-plugin-scbd', '@action-agenda/icons', '@action-agenda/cached-apis', '@houlagins/locale', '@houlagins/default-options', '@houlagins/load-http', 'vue-multiselect', 'ky', 'ky-universal', 'check-ie', 'change-case', 'localforage' ],
  devServer            : {
    port   : 8891,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  lintOnSave  : false,
  chainWebpack: config => {
    config.resolve.symlinks(true)
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
