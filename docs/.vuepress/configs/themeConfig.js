const nav                   = require('./nav')
const { v1  }  = require('./config')


const themeConfig = {
  nav,
  repo       : 'scbd/action-agenda-components',
  docsBranch: 'v1',
  // repoLabel: 'Contribute!',
  docsDir    : 'docs',
  editLinks  : true,
  lastUpdated: true, // string | boolean
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
        '/components/': getV1SidebarV1(),
        '/widgets/': getWidgetSidebarV1()
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

function getV1SidebarV1(){
  return [
    {
      title: 'Components V1',
      collapsable: false,
      children: v1.map(sideBarChildTemplateV1)
    },
  ]
}

function sideBarChildTemplateV1(pkgName){
  return `/components/${pkgName}/`
}

function getWidgetSidebarV1(){
  return [
    {
      title: 'Widgets V1',
      collapsable: false,
      children: [ 'view', 'search', 'form' ].map(widgetsTemplateV1)
    },
  ]
}

function widgetsTemplateV1(pkgName){
  return `/widgets/${pkgName}.md`
}

module.exports = themeConfig
