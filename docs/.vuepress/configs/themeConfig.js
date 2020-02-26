const nav = require('./nav')

const themeConfig = {
  nav,
  repo       : 'scbd/action-agenda-components',
  editLinks  : true,
  lastUpdated: 'Last Updated', // string | boolean
  
  locales: {
    '/guide': {
      label:        'English',
      selectText:   'Languages',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated:  'Last Updated',
      title:        'Action Components System',
      description:  'Is a modular system of independent software components which together form an Action platform. The Action platform can be used to acquire, filter and showcase Actions for your initiative, programme or organization\'s environmental cause',
    }



  }
}

module.exports = themeConfig
