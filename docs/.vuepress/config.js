const themeConfig =  require('./configs/themeConfig')
const path        = require('path')

const packages    = ['cached-apis', 'icons', 'legacy-notice', 'search', 'view', 'api', 'schema', 'partners-schemas', 'pie-chart']
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
  additionalPages: packages.map(addtionalPageTemplateObject ),
  markdown: {
    lineNumbers: true
  }
}

function addtionalPageTemplateObject (pkgName){
  return      {
    path: `/components/${pkgName}/`,
    filePath: path.resolve(__dirname, `../../packages/${pkgName}/README.md`)
  }
}