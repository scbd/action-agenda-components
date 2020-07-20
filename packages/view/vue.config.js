module.exports = {
  css      : { extract: true },
  devServer: {
    allowedHosts: [
      'http://localhost.cbd.int',
      'http://localhost'
    ],
    port            : 8080,
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end();
  }
}