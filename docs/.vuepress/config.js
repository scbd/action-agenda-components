const themeConfig =  require('./configs/themeConfig')

module.exports = {
  base: '/action-agenda-components/',
  title: 'Action Components System',
  description: 'Is a modular system of independent software components which together form an Action platform. The Action platform can be used to acquire, filter and showcase Actions for your initiative, programme or organization\'s environmental cause.',
  themeConfig,
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en', // this will be set as the lang attribute on <html>
      title: 'Action Components System',
      description: 'Is a modular system of independent software components which together form an Action platform. The Action platform can be used to acquire, filter and showcase Actions for your initiative, programme or organization\'s environmental cause.'
    }
  
  }
}
