const themeConfig =  require('./configs/themeConfig')
const path        = require('path')

const { v1, v2, partners }                         = require('./configs/config')
const { dataVisualizations, main, data, services } = v2
const allV2 = [...dataVisualizations, ...main, ...data, ...services ]

const additionalPages = [ ...v1.map(addtionalPageTemplateObject()), ...allV2.map(addtionalPageTemplateObject('v2')), ...partners.map(addtionalPageTemplateObjectPartners)]

const title       = 'Action Agenda Components'
const description = 'Is a modular system of independent software components which together form an Action Agenda platform. The Action platform can be used to acquire, filter and showcase Actions for your initiative, programme or organization\'s environmental cause.'

module.exports = {
  base: '/action-agenda-components/',
  title, description,
  themeConfig,
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en', // this will be set as the lang attribute on <html>
      title, description,
    }
  },
  additionalPages,
  markdown: {
    lineNumbers: true
  }
}

function addtionalPageTemplateObject (version='v1'){
  return (pkgName) => ({
      path: `/components/${version}/${pkgName}/`,
      filePath: path.resolve(__dirname, `../../packages/components/${version}/${pkgName}/README.md`)
    })

}

function addtionalPageTemplateObjectPartners  (partnerName){
  return      {
    path: `/partners/${partnerName}/`,
    filePath: path.resolve(__dirname, `../../packages/partners/${partnerName}/README.md`)
  }
}