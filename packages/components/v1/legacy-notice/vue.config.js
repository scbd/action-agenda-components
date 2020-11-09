
module.exports = {
  css                  : { extract: false },
  transpileDependencies: [ 'check-ie', '@houlagins/self-embedding-component' ],
  devServer            : {
    port   : 8892,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  lintOnSave      : true,
  chainWebpack: config => {
    config.resolve.symlinks(true),
    config.devtool('source-map')
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
