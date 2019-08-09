import ScbdCachedApis from './ScbdCachedApis'

export default class ScbdCachedApisLookUp {

    static async getJurisdiction(key, single=false){
        let data = await ScbdCachedApis.getJurisdiction()
        return lookUp(data,key,single)
    } 

    static async getAichis(key, single=false){
        let data = await ScbdCachedApis.getAichis()
        return lookUp(data,key,single)
    } 

    static async getSubjects(key, single=false){
        let data = await ScbdCachedApis.getSubjects()
        return lookUp(data,key,single)
    } 

    static async getCountries(key, single=false){
        let data = await ScbdCachedApis.getCountries()
        return lookUp(data,key,single)
    } 

    static async getOrgTypes(key, single=false){
        let data = await ScbdCachedApis.getOrgTypes()
        return lookUp(data,key,single)
    }    

    static async getRegions(key, single=false){
        let data = await ScbdCachedApis.getOrgTypes()
        return lookUp(data,key,single)
    }  

    static async getGeoLocations(key, single=false){
        let data = await ScbdCachedApis.getGeoLocations()
        return lookUp(data,key,single)
    }  

    static getGeoLocation = ScbdCachedApis.getGeoLocations

    static async getSDGs(key, single=false){
        let data = await ScbdCachedApis.getSDGs()
        return lookUp(data,key,single)
    }  
}//class

// pricate functions
function lookUp (data, keys, single=false) {
    let flatKeys   = flattenKeys(keys) || []
    let returnData = data.filter((d) => flatKeys.includes(d.identifier))

    if(returnData && returnData.length ===1 && single) return returnData[0]

    return returnData
}

function flattenKeys(keys){
    if(typeof keys === 'string') return [ keys ]

    if(Array.isArray(keys) && isStrings(keys))
        return keys

    if(Array.isArray(keys) && isObjects(keys))
        return keys.map((k) => k.identifier)   
    
    if(typeof keys === 'object')
        return [ keys.identifier ]
}

function isStrings(keys){ return isTypes(keys, 'string') }

function isObjects(keys){ return isTypes(keys, 'object') }

function isType(key, type){ return (typeof key === type) }

function isTypes(keys, type){
    let is = false
    keys.forEach(key => { is = isType(key, type) })
    return is
}