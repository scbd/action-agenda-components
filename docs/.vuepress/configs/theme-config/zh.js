const nav = require('../nav')

module.exports =  {
    label:        '简体中文',
    selectText:   '选择语言',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated:  '最近更新时间',
    title:        '行动议程网络',
    description: '行动议程网络组件和合作伙伴协作的文档',
    nav:nav.zh,
    sidebar: {
      '/zh/components/v2/':[
        {
          title: '组件版本2',
          collapsable: false
        },
        {
          title: '数据可视化',
          collapsable: false,
          children: ['/components/v2/data-visualizations/pie-chart/','/components/v2/data-visualizations/counter/','/components/v2/data-visualizations/map/','/components/v2/data-visualizations/targeted-commitments/','/components/v2/data-visualizations/related-commitments/']
        },
        {
          title: '页数',
          collapsable: false,
          children: ['/components/v2/pages/view/','/components/v2/pages/search/','/components/v2/pages/tiled-list/','/components/v2/pages/form/']
        },
        {
          title: 'Data',
          collapsable: false,
          children: ['/components/v2/data/schema/','/components/v2/data/scbd/','/components/v2/data/wcmc/']
        },
        {
          title: '服务',
          collapsable: false,
          children: ['/components/v2/services/api/']
        },
      ],
      '/zh/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '',
            'contribute.md',
          ]
        }
      ],
      '/zh/partners/': [
        {
          title: '伙伴',
          collapsable: false,
          children: [
            '',
            'scbd/',
            'wcmc/',
          ]
        }
      ],
    }
  }