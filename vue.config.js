const path = require('path')

module.exports = {
  transpileDependencies:['humanparser'],
    devServer: {
      allowedHosts: [
        'http://localhost.cbd.int',
        'http://localhost'
      ],
      port: 8080,
      disableHostCheck: true
    },
    chainWebpack: config => {
      config.module
        .rule("i18n")
        .resourceQuery(/blockType=i18n/)
        .type('javascript/auto')
        .use("i18n")
          .loader("@kazupon/vue-i18n-loader")
          .end();

      config.resolve.alias
          .set('@modules', path.resolve(__dirname, 'src/modules'))

      config.resolve.alias
          .set('@components', path.resolve(__dirname, 'src/components'))

      config.resolve.alias
          .set('@controls', path.resolve(__dirname, 'src/components/AAForm/controls'))
   }
  }