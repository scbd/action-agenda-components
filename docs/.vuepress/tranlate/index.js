const translations = require('./locales/index.js')

const t = (targetString, locale) => {
  if(!translations[locale] || !translations[locale][targetString]) return targetString

  return translations[locale][targetString]
}

const locales = [ 'en', 'zh' ]
module.exports = { t, locales}