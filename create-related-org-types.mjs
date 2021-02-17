import { find, postClass, postAction } from '../util/index.mjs'

const scbdSubjectsTermBaseUrl = 'https://api.cbd.int/api/v2013/thesaurus/terms?termCode='
const scbdSubjectsBaseUrl     = 'https://api.cbd.int/api/v2013/thesaurus/terms'
const igoParentRef            = { '_id' : '6001890ac466aa5d1a505d3f', '@type' : 'Organization' }

export const createREIG = async () => {
  if(await hasREIG()) return false

  const classData = getREIGTemplate()

  return createIGO(classData)
}

export const createUNCS = async () => {
  
  if(await hasUNCS()) return false

  const classData = getUNCSTemplate()

  return createIGO(classData)
}

async function createIGO(classData){
  const postRef   = await postClass('Organization', classData)

  await postAction('member', igoParentRef, postRef)

  return postRef
}

function hasREIG(){
  return find('Organization', 'IGO-REIG')
}

function hasUNCS(){
  return find('Organization', 'IGO-UNCS')
}






function getREIGTemplate(){
  return   { 
    '@type'   : 'Organization',
    identifier: [ 
      { propertyID: scbdSubjectsBaseUrl    , value: '692b3eb1-a00c-437d-8903-d9b7714a7514'                          , '@context': 'https://schema.org', '@type': 'PropertyValue' },
      { propertyID: scbdSubjectsTermBaseUrl, value: `${scbdSubjectsTermBaseUrl}692b3eb1-a00c-437d-8903-d9b7714a7514`, '@context': 'https://schema.org', '@type': 'PropertyValue' },
      { propertyID: 'aas'                  , value: `IGO-REIG`                                                          , '@context': 'https://schema.org', '@type': 'PropertyValue' },
      { propertyID: 'aasUrl'               , value: `https://cdn.cbd.int/@action-agenda/default-config/dist/classes/IGO-REIG.mjs`, '@context': 'https://schema.org', '@type': 'PropertyValue' },
    ],
    name:  {
      'en': 'Regional economic integration organization',
      'es': 'Organización de integración económica regional',
      'fr': 'Organisation régionale d\'intégration économique',
      'ar': 'منظمة تكامل اقتصادي إقليمي',
      'ru': 'Региональная организация экономической интеграции',
      'zh': '区域经济一体化组织'
    },
    //memberOf: [{ '_id' : '6001890ac466aa5d1a505d3f', '@type' : 'Organization' }]
  }
}

function getUNCSTemplate(){
  return   { 
    '@type'   : 'Organization',
    identifier: [ 
      { propertyID: scbdSubjectsBaseUrl    , value: '692b3eb1-a00c-437d-8903-d9b7714a7514'                          , '@context': 'https://schema.org', '@type': 'PropertyValue' },
      { propertyID: scbdSubjectsTermBaseUrl, value: `${scbdSubjectsTermBaseUrl}692b3eb1-a00c-437d-8903-d9b7714a7514`, '@context': 'https://schema.org', '@type': 'PropertyValue' },
      { propertyID: 'aas'                  , value: `IGO-UNCS`                                                          , '@context': 'https://schema.org', '@type': 'PropertyValue' },
      { propertyID: 'aasUrl'               , value: `https://cdn.cbd.int/@action-agenda/default-config/dist/classes/IGO-UNCS.mjs`, '@context': 'https://schema.org', '@type': 'PropertyValue' },
    ],
    name:  {
      'en': 'UN and other specialized agency of the UN Common System',
      'es': 'Organismo de la ONU y otros organismos especializados del Sistema Común de la ONU',
      'fr': 'Nations Unies et autres agences spécialisées du régime commun des Nations Unies',
      'ar': 'وكالة من وكالات الأمم المتحدة ووكالات متخصصة أخرى في المنظومة العامة للأمم المتحدة',
      'ru': 'ООН и другое специализированное учреждение общей системы ООН',
      'zh': '联合国和联合国共同制度的其他专门机构'
    },
    //memberOf: [{ '_id' : '6001890ac466aa5d1a505d3f', '@type' : 'Organization' }]
  }
}