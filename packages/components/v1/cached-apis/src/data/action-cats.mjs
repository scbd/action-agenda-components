const scbdSubjectsTermBaseUrl = 'https://api.cbd.int/api/v2013/thesaurus/terms?termCode='
const iconBaseSrcUrl          = 'https://attachments.cbd.int/action-agenda-categories'


export const isSameAsActionCat = (id) => getSameAsFromActionCat(id) || getActionCatIdentifierBySameAs(id)

export const actionCategories = new Set([ {
  identifier: 'FOOD-AND-HEALTH',
  image     : `${iconBaseSrcUrl}/FOOD-AND-HEALTH.svg`,
  sameAs    : [ `${scbdSubjectsTermBaseUrl}CBD-SUBJECT-HH` ],
  url       : 'https://www.cbd.int/action-agenda/contributions/food-and-health',
  name      : {
    en: 'Food systems and health'
  },
  alternateName: {
    en: 'Food and health'
  }
}, {
  identifier: 'FRESHWATER-COASTAL-AND-OCEAN-ECOSYSTEMS',
  image     : `${iconBaseSrcUrl}/FRESHWATER-COSTAL-AND-OCEAN-ECOSYSTEMS.svg`,
  sameAs    : [ `${scbdSubjectsTermBaseUrl}CBD-SUBJECT-WTR`, `${scbdSubjectsTermBaseUrl}CBD-SUBJECT-MAR` ],
  url       : 'https://www.cbd.int/action-agenda/contributions/freshwater-coastal-and-ocean',
  name      : {
    en: 'Freshwater, coastal and ocean ecosystems'
  },
  alternateName: {
    en: ' Freshwater, coastal and ocean'
  }
}, {
  identifier: 'LAND-ECOSYSTEMS',
  image     : `${iconBaseSrcUrl}/LAND-ECOSYSTEMS.svg`,
  sameAs    : [ `${scbdSubjectsTermBaseUrl}CBD-SUBJECT-ECOA`, `${scbdSubjectsTermBaseUrl}CBD-SUBJECT-ECORES` ],
  url       : 'https://www.cbd.int/action-agenda/contributions/land-ecosystems',
  name      : {
    en: 'Conservation and restoration of land ecosystems'
  },
  alternateName: {
    en: 'Land ecosystems'
  }
}, {
  identifier: 'CLIMATE-MITIGATION-AND-ADAPTATION',
  image     : `${iconBaseSrcUrl}/CLIMATE-MITIGATION-AND-ADAPTATION.svg`,
  sameAs    : [ `${scbdSubjectsTermBaseUrl}CBD-SUBJECT-CC` ],
  url       : 'https://www.cbd.int/action-agenda/contributions/climate-mitigation-and-adaptation',
  name      : {
    en: 'Climate change mitigation and adaptation '
  },
  alternateName: {
    en: 'Climate mitigation and adaptation'
  }
}, {
  identifier: 'SPECIES',
  image     : `${iconBaseSrcUrl}/SPECIES.svg`,
  sameAs    : [ `${scbdSubjectsTermBaseUrl}CBD-SUBJECT-IAS`, `${scbdSubjectsTermBaseUrl}CBD-SUBJECT-ENDS` ],
  url       : 'https://www.cbd.int/action-agenda/contributions/species',
  name      : {
    en: 'Conservation and sustainable use of species'
  },
  alternateName: {
    en: 'Species'
  }
}, {
  identifier: 'SUSTAINABLE-CONSUMPTION-AND-PRODUCTION',
  image     : `${iconBaseSrcUrl}/SUSTAINABLE-CONSUMPTION-AND-PRODUCTION.svg`,
  sameAs    : [ `${scbdSubjectsTermBaseUrl}CBD-SUBJECT-SUSE`, `${scbdSubjectsTermBaseUrl}CBD-SUBJECT-SDEV` ],
  url       : 'https://www.cbd.int/action-agenda/contributions/sustainable-consumption-and-production',
  name      : {
    en: 'Sustainable consumption and production'
  }
}, {
  identifier: 'STEWARDSHIP',
  image     : `${iconBaseSrcUrl}/STEWARDSHIP.svg`,
  url       : 'https://www.cbd.int/action-agenda/contributions/stewardship',
  name      : {
    en: 'Stewardship'
  }
}, {
  identifier: 'URBAN-SUSTAINABILITY',
  image     : `${iconBaseSrcUrl}/URBAN-SUSTAINABILITY.svg`,
  url       : 'https://www.cbd.int/action-agenda/contributions/urban-sustainability',
  name      : {
    en: 'Urban sustainability'
  }
}, {
  identifier: 'GREEN-FINANCE',
  image     : `${iconBaseSrcUrl}/GREEN-FINANCE.svg`,
  sameAs    : [ `${scbdSubjectsTermBaseUrl}CBD-SUBJECT-FIN` ],
  url       : 'https://www.cbd.int/action-agenda/contributions/green-finance',
  name      : {
    en: 'Green finance'
  }
}, {
  identifier: 'ACCESS-TO-BENEFIT-SHARING',
  image     : `${iconBaseSrcUrl}/ACCESS-TO-BENEFIT-SHARING.svg`,
  sameAs    : [ `${scbdSubjectsTermBaseUrl}CBD-SUBJECT-ABS` ],
  url       : 'https://www.cbd.int/action-agenda/contributions/access-to-benefit-sharing',
  name      : {
    en: 'Access to Benefit Sharing'
  },
  alternateName: {
    en: 'Access to benefit-sharing'
  }
}, {
  identifier: 'BIOSAFETY',
  image     : `${iconBaseSrcUrl}/BIOSAFETY.svg`,
  sameAs    : [ `${scbdSubjectsTermBaseUrl}CBD-SUBJECT-CPB`, `${scbdSubjectsTermBaseUrl}CBD-SUBJECT-BTB` ],
  url       : 'https://www.cbd.int/action-agenda/contributions/biosafety',
  name      : {
    en: 'Biosafety'
  }
} ])


export const getActionCatIdentifierBySameAs = (id) => {
  const matches = []

  for (const { sameAs, identifier } of actionCategories){
    if(!sameAs || (Array.isArray(sameAs)  && !sameAs.length)) continue

    if(!Array.isArray(sameAs) && sameAs.includes(id)) matches.push(identifier)

    for (const url of sameAs)
      if(url.includes(id)) matches.push(identifier)
  }

  const { length } = matches

  if(!length) return undefined
  
  return matches
}

export const getSameAsFromActionCat = (id) => {
  if(!isActionCat(id)) return undefined

  const sameAs = getActionCat(id).sameAs

  if(!sameAs) return undefined

  return sameAs.map((url) => url.replace(scbdSubjectsTermBaseUrl, ''))
}

export const actionCatIds = () => {
  const ids = new Set()

  for (const cat of actionCategories)
    ids.add(cat.identifier[0])

  return ids
}

export const isActionCat = getActionCat

function getActionCat (id){
  for (const cat of actionCategories)
    if(cat.identifier.includes(id) || (cat.sameAs || []).includes(id))
      return cat
}