const nav = require('../nav')

module.exports = {
  label:        'English',
  selectText:   'Languages',
  editLinkText: 'Edit this page',
  lastUpdated:  'Last Updated',
  title:        'Action Agenda Network',
  description:'Documents for the Action Agenda Network components and partner collaboration',
  nav:nav.en,
  sidebar: {
    '/components/v2/':[
      {
        title: 'Components V2',
        collapsable: false
      },
      {
        title: 'Data Visualizations',
        collapsable: false,
        children: ['/components/v2/data-visualizations/pie-chart/','/components/v2/data-visualizations/counter/','/components/v2/data-visualizations/map/','/components/v2/data-visualizations/targeted-commitments/','/components/v2/data-visualizations/related-commitments/']
      },
      {
        title: 'Pages',
        collapsable: false,
        children: ['/components/v2/pages/view/','/components/v2/pages/search/','/components/v2/pages/tiled-list/','/components/v2/pages/form/']
      },
      {
        title: 'Data',
        collapsable: false,
        children: ['/components/v2/data/schema/','/components/v2/data/scbd/','/components/v2/data/wcmc/']
      },
      {
        title: 'Services',
        collapsable: false,
        children: ['/components/v2/services/api/']
      },
    ],
    '/guide/': [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '',
          'contribute.md',
        ]
      }
    ],
    '/partners/': [
      {
        title: 'Partners',
        collapsable: false,
        children: [
          '',
          'scbd/',
          'wcmc/',
        ]
      }
    ],
    '/more/': [
      {
        title: 'About',
        collapsable: false,
        children: [
          '',
          'solution.md',
          'national.md',
          'data.md',
          'outreach.md',
        ]
      }
    ],
  }
}