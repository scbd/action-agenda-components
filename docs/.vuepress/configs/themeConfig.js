const nav                   = require('./nav')
const { v1, v2, partners }  = require('./config')
const { dataVisualizations, main, data, services } = v2
// const ui                = ['search', 'view', 'icons','legacy-notice']
// const dataVisuals       = [ 'pie-chart' ]
// const services          = [ 'cached-apis']
// const data              = [ 'schema', 'partners-schemas']
// const underDevelopement = ['']

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
        '/components/v1/': getV1SidebarV1(),
        '/components/v2/': getV1SidebarV2()
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
  return `/components/v1/${pkgName}/`
}

function getV1SidebarV2(){
  return [
    {
      title: 'Components V2',
      collapsable: false
    },
    {
      title: 'Data Visualizations',
      collapsable: false,
      children: dataVisualizations.map(sideBarChildTemplateV2)
    },
    {
      title: 'Main',
      collapsable: false,
      children: main.map(sideBarChildTemplateV2)
    },
    {
      title: 'Data',
      collapsable: false,
      children: data.map(sideBarChildTemplateV2)
    },
    {
      title: 'Services',
      collapsable: false,
      children: services.map(sideBarChildTemplateV2)
    },
  ]
}

function sideBarChildTemplateV2(pkgName){
  return `/components/v2/${pkgName}/`
}
module.exports = themeConfig
