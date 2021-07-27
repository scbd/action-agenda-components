import i18n from './locales.mjs'
import { getLString } from './i18n.mjs'

export { actionCategories, isSameAsActionCat } from './action-cats.mjs'
export { sourceMap } from './source-map.mjs'
export const sdgsShort = getShortSdgs()

export const orgTypeOther = { identifier: 'ORG-TYPE-OTHER', name: 'Other', title: { en: 'Other' } }

export const documentStates = [
  { identifier: 'draft',     name: getLString('Draft') },
  { identifier: 'published', name: getLString('Published') },
  { identifier: 'rejected',  name: getLString('Rejected') },
  { identifier: 'deleted',   name: getLString('Deleted') }
]


function getLocales(){
  const lString = {}

  for (const lang of [ 'ar', 'es', 'fr', 'ru', 'zh' ]){
    lString[lang] = []
    for (const textKey of getShortEnSdgs())
      lString[lang].push(i18n.messages[lang][textKey] || textKey)
  }
  return lString
}

function getShortSdgs(){
  return {
    en: getShortEnSdgs(),
    ...getLocales()
  }
}

function getShortEnSdgs(){
  return [
      '1. No Poverty',
      '2. Zero Hunger',
      '3. Good Health and Well-being',
      '4. Quality Education',
      '5. Gender Equality',
      '6. Clean Water and Sanitation',
      '7. Affordable and Clean Energy',
      '8. Decent Work and Economic Growth',
      '9. Industry, Innovation and Infrastructure',
      '10. Reduced Inequality',
      '11. Sustainable Cities and Communities',
      '12. Responsible Consumption and Production',
      '13. Climate Action',
      '14. Life Below Water',
      '15. Life on Land',
      '16. Peace and Justice Strong Institutions',
      '17. Partnerships to achieve the Goal'
    ]
}