
const en = require('./en')
const zh = require('./zh')

const themeConfig = {
  repo       : 'scbd/action-agenda-components',
  // repoLabel: 'Contribute!',
  docsDir    : 'docs',
  editLinks  : true,
  lastUpdated: true, // string | boolean
  smoothScroll: true,
  
  // lastUpdated: 'Last Updated', // string | boolean
  smoothScroll: true,
  locales: {
    '/': en,
    '/zh/': zh,
  }
}

module.exports = themeConfig
