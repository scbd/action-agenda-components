const nav =  [
  {
    text: '指南',
    link: '/zh/guide/',
  },
  {
    text: '伙伴',
    link: '/zh/partners/'
  },
  {
    text: '组件',
    ariaLabel: '组件',
    items: [
            { text: '版本1', link: 'https://scbd.github.io/action-agenda-components/components/v1/'  },
            {
              text: '正在开发中',
              ariaLabel: '正在开发中',
              items: [
                      { text: '版本2', link: '/zh/components/v2/' }
                    ]
            }
          ]
  },

  {
    text: 'GitHub',
    link: 'https://github.com/scbd/action-agenda-components'
  }
]


module.exports = nav