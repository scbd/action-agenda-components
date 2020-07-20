module.exports = {
  css                  : { extract: true },
  transpileDependencies: [ 'change-case' ],
  devServer            : {
    port   : 8891,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  lintOnSave  : false,
  chainWebpack: config => {
    config.resolve.symlinks(true)
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end();
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
