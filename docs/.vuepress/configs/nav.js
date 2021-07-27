const { t, locales } = require('../tranlate/index.js')

const nav = [
  {
    text: 'Components',
    ariaLabel: 'Components',
    items: [
            { text: 'Version 1', link: '/components/'  },
          ]
  },  {
    text: 'Widgets',
    ariaLabel: 'Widgets',
    items: [
            { text: 'V1 Widgets', link: '/widgets/'  },
          ]
  }
]

module.exports = getNav

function getNav(onlyLocale){

  if(onlyLocale) return createNav(onlyLocale)

  const allNav = {}

  for (const locale of locales)
    allNav[locale] = createNav(locale)

  return allNav
}

function createNav(locale){
  const langPath = locale === 'en'? '/' : `/${locale}/`

  return [
    {
      text: t('Components',locale),
      ariaLabel: t('Components',locale),
      items: [
              { text: t('Version 1',locale), link: `${langPath}components/` },
            ]
    },  {
      text: t('Widgets',locale),
      ariaLabel: t('Widgets',locale),
      items: [
              { text: t('Version 1',locale), link: `${langPath}widgets/` },
            ]
    }
  ]
}