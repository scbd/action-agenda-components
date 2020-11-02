const nav               = require('./nav')
const ui                = ['search', 'view', 'icons','legacy-notice']
const dataVisuals       = [ 'pie-chart' ]
const services          = [ 'cached-apis']
const data              = [ 'schema', 'partners-schemas']
const underDevelopement = ['']

const themeConfig = {
  nav,
  repo       : 'scbd/action-agenda-components',
  repoLabel: 'Contribute!',
  docsDir: 'docs',
  editLinks  : true,
  // lastUpdated: 'Last Updated', // string | boolean
  smoothScroll: true,
  locales: {
    '/': {
      label:        'English',
      selectText:   'Languages',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated:  'Last Updated',
      title:        'Components',
      description:  'action agenda components',
      sidebar: {
        '/components/': getComponentsSidebar()
      }
    },
    '/guide': {
      label:        'English',
      selectText:   'Languages',
      editLinkText: 'Edit this page on GitHub',
      // lastUpdated:  'Last Updated',
      title:        'Action Components System',
      description:  'Is a modular system of independent software components which together form an Action platform. The Action platform can be used to acquire, filter and showcase Actions for your initiative, programme or organization\'s environmental cause',
    }
  }
}

function getComponentsSidebar(){
  return [
    {
      title: 'Components V1',
      collapsable: false
    },
    {
      title: 'UI V1',
      collapsable: false,
      children: ui.map(sideBarChildTemplate)
    },
    {
      title: 'Services V1',
      collapsable: false,
      children: services.map(sideBarChildTemplate)
    }
  ]
}

function sideBarChildTemplate(pkgName){
  return `/components/${pkgName}/`
}
module.exports = themeConfig
