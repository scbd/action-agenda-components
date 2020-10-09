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
  // chainWebpack: config => {
  //   config.module
  //     .rule('i18n')
  //     .resourceQuery(/blockType=i18n/)
  //     .type('javascript/auto')
  //     .use('i18n')
  //     .loader('@kazupon/vue-i18n-loader')
  //     .end();
  // },
  pluginOptions: {
    i18n: {
      locale        : 'en',
      fallbackLocale: 'en',
      localeDir     : 'locales',
      enableInSFC   : true
    }
  }
}