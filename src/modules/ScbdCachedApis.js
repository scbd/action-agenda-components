import localForage from 'localforage'
import axios from 'axios'

const apis = {
    regions     : 'https://api.cbd.int/api/v2013/thesaurus/domains/regions/terms',
    countries   : 'https://api.cbd.int/api/v2013/thesaurus/domains/countries/terms',
    orgTypes    : 'https://api.cbd.int/api/v2013/thesaurus/domains/Organization%20Types/terms',
    aichi       : 'https://api.cbd.int/api/v2013/thesaurus/domains/AICHI-TARGETS/terms',
    subjects    : 'https://api.cbd.int/api/v2013/thesaurus/domains/CBD-SUBJECTS/terms',
    jurisdiction: 'https://api.cbd.int/api/v2013/thesaurus/domains/50AC1489-92B8-4D99-965A-AAE97A80F38E/terms',
    sdgs        : 'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false',
    //https://github.com/Esri/sdg-api
}

localForage.config({
    name        : 'ActionAgenda',
    version     : 1.0,
    size        : 4980736, 
    storeName   : 'actionAgendaKeyValuePairs' // Should be alphanumeric, with underscores.
})

export default class ScbdCachedApis {

    static async getJurisdiction(){
     
        let local = await getFromLocal('jurisdiction')
        if(local) return local
        return getFromApi('jurisdiction')
    } 

    static async getAichis(){
     
        let local = await getFromLocal('aichi')
        if(local) return local
        return getAichi()
    } 
    static getAichi = ScbdCachedApis.getAichis
    
    static async getSubjects(){
     
        let local = await getFromLocal('subjects')
        if(local) return local
        return getFromApi('subjects')
    } 
    static getSubject = ScbdCachedApis.getSubjects

    static async getCountries(){
     
        let local = await getFromLocal('countries')
        if(local) return local
        return getFromApi('countries')
    } 
    static getCountry = ScbdCachedApis.getCountries

    static async getOrgTypes(){
        let local = await getFromLocal('orgTypes')
        if(local) return local
        return getFromApi('orgTypes')
    }    
    static getOrganizationType =  ScbdCachedApis.getOrgTypes

    static async getGovTypes(){
        let local = await getFromLocal('govTypes')
        if(local) return local
        return getGovTypes()
    }    
    static getGovernmentType =  ScbdCachedApis.getGovTypes

    static async getRegions(){
        let local = await getFromLocal('regions')
        if(local) return local
        return getFromApi('regions')
    }  
    static getRegion = ScbdCachedApis.getRegions

    static async getGeoLocations(){

        let local = await getFromLocal('geoLocations')
        if(local) return local
        return getGeoLocations()
    }  
    static getGeoLocation = ScbdCachedApis.getGeoLocations

    static async getSDGs(){

        let local = await getFromLocal('sdgs') 
        if(local) return local
        return getSDGs('sdgs')
    }  
    static getSDG = ScbdCachedApis.getSDG
}

async function getGeoLocations(){
    try {
        let dataArray = await Promise.all([ScbdCachedApis.getRegions(),ScbdCachedApis.getCountries()])
        let data = (dataArray[0].concat(dataArray[1]))
                                
        localForage.setItem('geoLocations',data)
        return data
    } catch (error) {
        console.error(error);
    }
}

async function getAichi(){
    try {
        let data = (await axios.get(apis['aichi'])).data
        .map(sanitizeAichi)

        localForage.setItem('aichi',data)
        return data
    } catch (error) {
        console.error(error);
    }
}

async function getSDGs(){
    try {
        let data = ((await axios.get(apis['sdgs'])).data
                    .map(sanitizeSdg))
        localForage.setItem('sdgs',data)
        return data
    } catch (error) {
        console.error(error);
    }
}
// 5D13EC43-F3E0-415E-AF67-62CCC85899AF"
async function getGovTypes(){
    try {
        let data = ((await axios.get(apis['orgTypes'])).data
                    .map(sanitize))
                    .sort((a, b) => a['name'].localeCompare(b['name']))
                    .filter((type)=> ['1C3A4FF4-9AB7-4A34-BE06-E07F575B7A32','8830904C-8AF4-4C2F-AADB-363D98D854DA'].includes(type.identifier))
        localForage.setItem('govTypes',data)
        return data
    } catch (error) {
        console.error(error);
    }
}

async function getFromApi(apiName, orderBy='name'){
    try {
        let data = ((await axios.get(apis[apiName])).data
                    .map(sanitize))
                    .sort((a, b) => a[orderBy].localeCompare(b[orderBy]))
        if(apiName==='orgTypes')
            data = data.filter((type)=> !(['1C3A4FF4-9AB7-4A34-BE06-E07F575B7A32','8830904C-8AF4-4C2F-AADB-363D98D854DA','B3699A74-EF2E-467A-A82F-EF2149A2EFC5'].includes(type.identifier)))
       
        localForage.setItem(apiName,data)
        return data
    } catch (error) {
        console.error(error);
    }
}

async function getFromLocal(apiName){
    if(!(await isExpired(apiName)))
        return localForage.getItem(apiName)
    return false
}

async function isExpired(){
    let today = new Date()

    let expiry = await localForage.getItem('expiry')

    if(!expiry) {
        today.setDate(today.getDate() + 7)
        localForage.setItem('expiry',today.toISOString())
        return false
    }

    if(new Date(expiry)<today){
        console.error('is expired')
        await localForage.clear()
        return true
    }
    
    return false
}

function sanitizeSdg(option) {
    //TODO read local from cookie, return localversion
    let code
    if(option.code.length===1)
        code = `0${option.code}`
    else
        code = option.code
    return {identifier:option.uri,name:sdgShort[Number(option.code)-1],  img:`https://attachments.cbd.int/sdg-${code}.svg`}
}
function sanitizeAichi(option) {
    //TODO read local from cookie, return localversion
    let code = option.identifier.substring(13)

    return {identifier:option.identifier,name:option.name, img:`https://attachments.cbd.int/${code}.svg`}
}
function sanitize(option) {
    //TODO read local from cookie, return localversion
    return {identifier:option.identifier,name:option.name}
  }
  const sdgShort = [
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