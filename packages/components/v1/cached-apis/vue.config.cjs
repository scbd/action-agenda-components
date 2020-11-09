
module.exports = {
  css                  : { extract: false },
  transpileDependencies: [ 'localforage', '@houlagins/locale', '@houlagins/default-options', '@houlagins/load-http', 'ky', 'ky-universal', 'check-ie', 'change-case' ],
  devServer            : {
    port   : 8893,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  lintOnSave  : false,
  chainWebpack: config => {
    config.resolve.symlinks(true)
  }
}
