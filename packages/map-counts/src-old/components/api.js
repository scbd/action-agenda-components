import sa from 'superagent'
import { getData, lookUp, initializeApiStore } from '@action-agenda/cached-apis'

initializeApiStore()
getData('all')

const regionMap = new Map()
export async function getRegionsMap(){
  if(regionMap.size) return regionMap
  const { narrowerTerms } = (await sa.get('https://api.cbd.int/api/v2013/thesaurus/terms')
                            .query({ termCode: '5D13EC43-F3E0-415E-AF67-62CCC85899AF' })).body

  const regionPromises = []

  narrowerTerms.push(...getAdditionalRegions())

  for (const aTerm of narrowerTerms) {
    const promise = sa.get('https://api.cbd.int/api/v2013/thesaurus/terms')
                      .query({ termCode: aTerm })
                      .then(({ body }) => body.narrowerTerms) 

    regionPromises.push(promise)
  }

  const resolvedPromises = await Promise.all(regionPromises)
  const all              = []

  for (const index of narrowerTerms.keys()) {
    regionMap.set(narrowerTerms[index], resolvedPromises[index])
    all.push(...resolvedPromises[index])
  }

  // regionMap.set('5D13EC43-F3E0-415E-AF67-62CCC85899AF', Array.from(new Set(all)))

  return  regionMap 
}

export async function getCodesFromAction(areas, code){
  const rMap = await getRegionsMap()
  
  const returnCodes = code? [ code ] : []

  if(!areas) return Array.from(new Set(returnCodes))

  for (const [ term, countries ] of rMap.entries()){
    if(term.length == 2 ) 
      returnCodes.push(term)
    else if(areas.includes(term))
      returnCodes.push(...countries)
  }

  return Array.from(new Set(returnCodes)).map((code)=> code.toUpperCase())
}

export async function getRegionTermsFromCode(code){
  const rMap        = await getRegionsMap()
  const returnCodes = [ code ]

  for (const [ term, countries ] of rMap.entries()){
    if(countries.includes(code))
      returnCodes.push(term)
  }

  return Array.from(new Set(returnCodes))//.map((code)=> code.toUpperCase())
}
export async function getCounts(){

  const countMap = new Map()

  const { body } = await sa.get('https://www.cbd.int/api/v2019/actions')
                            .query({ q: JSON.stringify({ $or: [ { 'actionDetails.operationalAreas.0': { $exists: true } } ] }), f: JSON.stringify({ 'actionDetails.operationalAreas': 1, 'actor.country.identifier': 1})})

  for (const { actor, actionDetails } of body)
    await countAction(countMap, { actor, actionDetails })

  return countMap
}

export async function getActorTypesByCountry(code){
  const actorTypeCountMap = new Map()
  const terms             = await getRegionTermsFromCode(code.toLowerCase())

  const { body } = await sa.get('https://www.cbd.int/api/v2019/actions')
                          .query({ q: JSON.stringify({ 'actionDetails.operationalAreas.identifier': { $in: terms }} ), f: JSON.stringify({ 'actor.actorType': 1, 'actor.types': 1, 'actor.name': 1  })})

  const numberOfActors  = Array.from(new Set(body.map(({ actor }) => actor?.name?.en))).length
  const orgTypes        = body.map(({ actor }) => (actor.types || []).map(({ identifier })=> identifier)).flat()
  const actorBaseTypes  = body.map(({ actor }) => actor.actorType)
  const types           = new Set([ ...orgTypes, ...actorBaseTypes ].filter((t)=> !['organization', 'public'].includes(t)).flat())

  for (const anAction of body)
    countActionTypes(actorTypeCountMap, anAction)

  const countsData = []
  for (const [term, count] of actorTypeCountMap.entries()) {
    const nameLookUp = (await lookUp('all', term) || [])[0]
    const name       = nameLookUp? nameLookUp.name : term

    countsData.push({ name, count})
  }


  return { countsData, numberOfCommitments: body.length, numberOfActors  }
}

function countActionTypes(typeCountMap, { actor }){
  const { actorType, types } = actor
  const   actorOrgTypes       = Array.from(new Set((types || []).map(({ identifier })=> identifier).flat()))

  if(Array.isArray(actorType) && actorType[0] === 'person') return countType(typeCountMap, actorType[0] )
  if(actorType === 'person') return countType(typeCountMap, actorType )

  if(!types || !types.length) return undefined

  for (const t of actorOrgTypes)
    countType(typeCountMap, t)

}

function countType(countMap, type){
  if(!countMap.has(type)) return countMap.set(type, 1)

  const count = countMap.get(type) + 1

  return countMap.set(type, count)
}

async function countAction(countsMap, { actor, actionDetails }){
  const { operationalAreas } = actionDetails || {}
  const { identifier       } = actor.country || {}
  const   areas              = operationalAreas?  operationalAreas.map(({ identifier }) => identifier) : undefined
  const   codes              = await getCodesFromAction(areas, identifier)

  for (const code of codes) 
    countCountry(countsMap, code)
}

function countCountry(countMap, code){
  if(!countMap.has(code.toUpperCase())) return countMap.set(code.toUpperCase(), 1)

  const count = countMap.get(code.toUpperCase()) + 1

  return countMap.set(code.toUpperCase(), count)
}


function getAdditionalRegions(){
  return [
    "C9A535FB-8B15-4BD5-9AC7-9A9783871A5A",
    "99724A74-6CCD-4731-B111-9EEDF2612303",
    "90DBC1E4-AFD0-4FB4-B9EE-4CA2CB5D2C36",
    "9EED1DD1-BA36-41F1-BEF9-63021AB24EBF",
    "39AF4BA6-E769-4013-B5F2-91B2E5BACB27",
    "3B22777F-BD43-4DED-8379-EB3829BB53A5",
    "DB6CE7B5-EE86-41B1-A3A8-726E5A76C4F9",
    "5E884201-FBF6-4204-923C-AAC2BF11F2E3",
    "A23DD6C0-44C5-418D-83B5-461D79D2721A",
    "CCA4B662-8EF4-418D-B327-0D6F418AA703",
    "B6C14B25-FDF6-4FA1-97A2-561D6B43FA80",
    "14E81A9D-73EA-4667-A699-CD78C61B3655",
    "3BED3C61-C8C5-49D8-9AFA-0B4D03FC427F",
    "AB9EBE76-796B-45B3-879B-3BA009E983CC",
    "884FADBA-3BF3-4D76-AC7B-83E076852CD4",
    "1C1B2D57-0F0F-423D-99C8-A048051B508C",
    "948125C2-F580-4357-AA0A-B6C636279E96",
    "8920655D-3986-465B-837A-CE055B428A74",
    "38126DBD-8B41-4355-B0E5-643655CBC06E",
    "284697B9-D1C2-426B-890A-1ADBAC8EC477",
    "293E5CA9-15DB-4D83-9CAC-F406F759727A",
    "942E40CA-4C23-4D3A-A0B4-736CD0EFCD54",
    "bd12d7fb-91f7-4b2d-996c-e70f18a51f0e",
    "0938DB0F-E4BB-464F-ABBB-ADD615BE5371",
    "11D3515A-2C70-4766-B07C-E538AA16554B",
    "BA8BAEF5-821C-43A6-8700-5CC215D4B5B0",
    "8317D3CB-6CAB-4C05-BC2C-2DB93A8FEC6A",
    "E9BAA797-CDAE-497E-A860-87AE784F4C53",
    "B462BE9E-38A6-4DE0-997D-2CC07853379F",
    "0EC2E5AE-25F3-4D3A-B71F-8019BB62ED4B",
    "40CE7EB5-2A58-4F89-A0AF-F485BBC32F81",
    "6F901F3F-630D-4C4C-A3CC-BDE5C7876C68",
    "345F2B78-DE28-475B-BA7D-81C3DA020ADF",
    "6F65B204-500B-4C56-B57D-25CC3DC809F8",
    "AEF6F814-52C0-4F1A-9838-5799B021BA26"
]
}