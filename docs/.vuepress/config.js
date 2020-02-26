const themeConfig =  require('./configs/themeConfig')

module.exports = {
  base:'/',
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
    },
    '/es/': {
      lang: 'es',
      title: 'Ecosistema de diseño',
      description: 'Sistema de diseño para la Secretaría del Convenio sobre la Diversidad Biológica'
    }
    ,
    '/ar/': {
      lang: 'ar',
      title: 'تصميم النظام البيئي ',
      description: 'نظام التصميم لأمانة اتفاقية التنوع البيولوجي '
    }
    ,
    '/fr/': {
      lang: 'fr',
      title: 'Écosystème de conception',
      description: 'Système de conception pour le Secrétariat de la Convention sur la diversité biologique'
    }
    ,
    '/zh/': {
      lang: 'zh-CN',
      title: '设计生态系统',
      description: '生物多样性公约”秘书处设计系统'
    },
    '/ru/': {
      lang: 'ru',
      title: 'Проектная экосистема',
      description: 'Система проектирования для секретариата Конвенции о биологическом разнообразии'
    }
  }
}
