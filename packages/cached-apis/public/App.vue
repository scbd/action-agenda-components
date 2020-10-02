<template>
  <div id="app">
    <span id="is-same-as">{{this.isSameAs.length}}</span><br/>
    <span id="is-same-as-rev">{{this.isSameAsReverse.length}}</span><br/>
<hr>
<hr>
    <span id="hasAltName">{{this.hasAltName}}</span><br/>
    <span id="lookupFalsey">{{!!this.lookupFalsey}}</span><br/>
    <span id="all">{{this.all.length}}</span><br/>
    <span id="document-states">{{this.documentStates.length}}</span><br/>
    <span id="jurisdictions">{{this.jurisdictions.length}}</span><br/>
    <span id="aichis">{{this.aichis.length}}</span><br/>
    <span id="subjects">{{this.subjects.length}}</span><br/>
    <span id="countries">{{this.countries.length}}</span><br/>
    <span id="org-types">{{this.orgTypes.length}}</span><br/>
    <span id="gov-types">{{this.govTypes.length}}</span><br/>
    <span id="regions">{{this.regions.length}}</span><br/>
    <span id="geo-locations">{{this.geoLocations.length}}</span><br/>
    <span id="sdgs">{{this.sdgs.length}}</span><br/>
    <span id="action-categories">{{this.actionCategories.length}}</span><br/>
<hr>
<hr>
    <span id="lu-all">{{this.lookupAll.length}}</span><br/>
    <span id="lu-document-states">{{this.lookupDocumentStates.length}}</span><br/>
    <span id="lu-jurisdictions">{{this.lookupJurisdictions.length}}</span><br/>
    <span id="lu-aichis">{{this.lookupAichis.length}}</span><br/>
    <span id="lu-subjects">{{this.lookupSubjects.length}}</span><br/>
    <span id="lu-countries">{{this.lookupCountries.length}}</span><br/>
    <span id="lu-org-types">{{this.lookupOrgTypes.length}}</span><br/>
    <span id="lu-gov-types">{{this.lookupGovTypes.length}}</span><br/>
    <span id="lu-regions">{{this.lookupRegions.length}}</span><br/>
    <span id="lu-geo-locations">{{this.lookupGeoLocations.length}}</span><br/>
    <span id="lu-sdgs">{{this.lookupSdgs.length}}</span><br/>
    <span id="lu-action-categories">{{typeof this.lookupActionCategories === 'object'}}</span><br/>
    {{this.lookupActionCategories}}
  </div>
</template>

<script>
import * as CachedApis from '../src/index.mjs'

CachedApis.initializeApiStore()
export default {
  name    : 'App',
  computed: { cachedApis: () => CachedApis },
  mounted, data
}

function data(){
  return {
    all                   : [],
    documentStates        : [],
    jurisdictions         : [],
    aichis                : [],
    subjects              : [],
    countries             : [],
    orgTypes              : [],
    govTypes              : [],
    regions               : [],
    geoLocations          : [],
    sdgs                  : [],
    actionCategories      : [],
    lookupAll             : [],
    lookupDocumentStates  : [],
    lookupJurisdictions   : [],
    lookupAichis          : [],
    lookupSubjects        : [],
    lookupCountries       : [],
    lookupOrgTypes        : [],
    lookupGovTypes        : [],
    lookupRegions         : [],
    lookupGeoLocations    : [],
    lookupSdgs            : [],
    lookupActionCategories: [],
    lookupFalsey          : undefined,
    isSameAs              : [],
    isSameAsReverse       : [],
    hasAltName            : false
  }
}

async function mounted(){ // eslint-disable-line
  this.isSameAs = await CachedApis.isSameAs('LAND-ECOSYSTEMS')
  this.isSameAsReverse = await CachedApis.isSameAs('CBD-SUBJECT-IAS')
  this.hasAltName = (await CachedApis.getActionCategoriesByKey('FOOD-AND-HEALTH', true)).alternateName
  this.all = await CachedApis.getAll()
  this.documentStates = await CachedApis.getDocumentStates()
  this.jurisdictions    = await CachedApis.getJurisdictions()
  this.aichis           = await CachedApis.getAichis()
  this.subjects         = await CachedApis.getSubjects()
  this.countries        = await CachedApis.getCountries()
  this.orgTypes         = await CachedApis.getOrgTypes()
  this.govTypes         = await CachedApis.getGovTypes()
  this.regions          = await CachedApis.getRegions()
  this.geoLocations     = await CachedApis.getGeoLocations()
  this.sdgs             = await CachedApis.getSdgs()
  this.actionCategories = await CachedApis.getActionCategories()

  console.log(this.actionCategories)
  this.lookupAll              = await CachedApis.getAllByKey([ '528B1187-F1BD-4479-9FB3-ADBD9076D361', 'ca' ])
  this.lookupDocumentStates   = await CachedApis.getDocumentStatesByKey([ 'draft' ])
  this.lookupJurisdictions    = await CachedApis.getJurisdictionsByKey([ '528B1187-F1BD-4479-9FB3-ADBD9076D361' ])
  this.lookupAichis           = await CachedApis.getAichisByKey('AICHI-TARGET-10')
  this.lookupSubjects         = await CachedApis.getSubjectsByKey([ 'CBD-SUBJECT-ABS', 'CBD-SUBJECT-AICHI', 'CBD-SUBJECT-BIOMES' ])
  this.lookupCountries        = await CachedApis.getCountriesByKey('ca')
  this.lookupOrgTypes         = await CachedApis.getOrgTypesByKey('8A265B81-3973-42ED-BB06-40ACC755E496')
  this.lookupGovTypes         = await CachedApis.getGovTypesByKey('B3699A74-EF2E-467A-A82F-EF2149A2EFC5')
  this.lookupRegions          = await CachedApis.getRegionsByKey('0938DB0F-E4BB-464F-ABBB-ADD615BE5371')
  this.lookupGeoLocations     = await CachedApis.getGeoLocationsByKey('743D2F85-8ABA-4F35-BC83-30D295343EA8')
  this.lookupSdgs             = await CachedApis.getSdgsByKey('SDG-GOAL-05')
  this.lookupActionCategories = await CachedApis.getActionCategoriesByKey('FRESHWATER-COASTAL-AND-OCEAN-ECOSYSTEMS', true)
  this.lookupFalsey = await CachedApis.lookUp('countries', 'COASTAL-AND-OCsAN')
}
</script>
