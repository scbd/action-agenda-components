const themeConfig =  require('./configs/themeConfig')
const path        = require('path')
const { t  }        = require('./tranlate/index.js')
const { v1 }                         = require('./configs/config')

const additionalPages = [ ...v1.map(addtionalPageTemplateObject())]

const title       = 'Action Agenda Components'
const description = 'Is a modular system of independent software components which together form an Action Agenda platform. The Action platform can be used to acquire, filter and showcase Actions for your initiative, programme or organization\'s environmental cause.'

module.exports = {
  base: '/action-agenda-components/',
  title, description,
  themeConfig,
  locales:{
    '/':{
      lang: 'en',
      title, description
    },
    '/zh/':{
      lang: 'zh',
      title: t(title, 'zh'),
      description: t(description, 'zh'),
    }
  },
  additionalPages,
  markdown: {
    lineNumbers: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': 'src/images/'
      }
    }
  }
}

function addtionalPageTemplateObject (){
  return (pkgName) => ({
      path: `/components/${pkgName}/`,
      filePath: path.resolve(__dirname, `../../packages/${pkgName}/README.md`)
    })
}