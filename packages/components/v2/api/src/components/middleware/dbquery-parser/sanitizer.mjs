import isPlainObject from 'lodash.isplainobject';
import isEmpty       from 'lodash.isempty';
import escapeRegExp  from 'lodash.escaperegexp';
import bson          from 'bson';
import diacritics    from 'diacritics';
import JSON5         from 'json5';
import {consola} from '../../logger.mjs'

export const loadMongoQuery    = loadQuery
export const sanitizeQuery     = query
export const sanitizeCount     = count
export const sanitizeFields    = fields
export const sanitizeFindOne   = findOne
export const sanitizeSort      = sort
export const sanitizeSkip      = skip
export const sanitizeLimit     = limit
export const sanitizeAggregate = aggregate

const validFieldName          = /^[0-9a-z\._@]+$/i;
const validLookupProperties   = [ 'from', 'localField', 'foreignField', 'as' ];
const validAggregateOperators = [ '$lookup', '$match', '$project', '$skip', '$limit', '$limit', '$count', '$sort' ];

function loadQuery (rawQuery, options={}) {

  validateAgQuery(rawQuery)

  const dbQuery   = sanitizeDbQuery(jsonParseQuery(rawQuery), options)
  const agDbQuery = generateAgFromLegacy(dbQuery, options)

  delete dbQuery.f
  return {dbQuery, agDbQuery};
}

function generateAgFromLegacy(dbQuery, options){

  const agQuery    = [];
  const mongoAgMap = makeMongoAgQueryMap();



  for (const [ key, value ] of Object.entries(dbQuery)) {
    if(isNullOrUndefinedOrEmpty(value)) continue
    if(!mongoAgMap.get(key)) continue

    if(key === '$count') agQuery.push({ [mongoAgMap.get(key)]: 'count'})
    else if(key === 'f') continue
    else agQuery.push({ [mongoAgMap.get(key)]: value})
  }

  return sanitizeAggregate(agQuery, options)
}

// ag not pure 
function sanitizeDbQuery(dbQuery, options){
  const mongoQuerySanitizerMap  = makeMongoSanitizerMap()
  const queryMap = makeMongoQueryMap()

  if(dbQuery.fo) dbQuery.l = 1;



  for (const [ key, value ] of Object.entries(dbQuery))
    if(key==='f') dbQuery[queryMap.get('p')] = mongoQuerySanitizerMap.get('p')(value, options)
    else dbQuery[queryMap.get(key)] = mongoQuerySanitizerMap.get(key)(value, options)
  

  return dbQuery
}

function validateAgQuery(dbQuery){
  const queryKeys                = Object.keys(dbQuery)
  const prohibitedWithAg         = ['q', 'f','p', 's', 'sk', 'l', 'c', 'fo']

  const hasAgParam               = !!dbQuery['ag']
  const containsProhibitedParams = !!(queryKeys.filter(value => prohibitedWithAg.includes(value))).length

  if(hasAgParam && containsProhibitedParams) throw new Error(`When using 'ag' other params are not allowed ['q', 'f', 's', 'sk', 'l', 'c', 'fo']: ${queryKeys.join(', ')}`)
}

function jsonParseQuery(rawQuery){
  const parsableKeys = [ 'q', 'f', , 'p', 's', 'ag']
  const dbQuery      = { ...rawQuery }

  for (const [key, value] of Object.entries(rawQuery)) {
    if(!parsableKeys.includes(key)) continue

    try{
      if(typeof key !== 'string') continue
consola.error('value', value)
      dbQuery[key] = JSON5.parse(value)
    }
    catch(e){
      throw new Error(`Cannot JSON5.parse param: ${key}: ${value}`)
    }
  }
  return dbQuery
}

function aggregate(value, options) {

  const countFieldNameRegex = /^[0-9a-z_]+$/i;

  if(!Array.isArray(value)) throw new Error(`Invalid query (ag) value. must be a array: ${typeof value}`)

  for (const q of value) {
    if(!isPlainObject(q)) throw new Error(`Invalid aggregate pipeline (ag), must be a plain object: ${typeof q}`)

    const agKeyArray = Object.keys(q)


    if(agKeyArray.length === 0) throw new Error(`Invalid aggregate query (ag), no operator provided.`)
    if(agKeyArray.length > 1)   throw new Error(`Invalid aggregate query (ag), more than one operator not allowed: ${agKeyArray.join(', ')}`)

    const invalidOperators = agKeyArray.filter(x => !validAggregateOperators.includes(x));

    if(invalidOperators.length) throw new Error(`Invalid aggregate query (ag) invalid operator provided ${invalidOperators.join(', ')}, allowed operators ${validAggregateOperators.join(', ')}.`)

    const key = agKeyArray[0]

    if(key === '$count' && (typeof key !== 'string' || !countFieldNameRegex.test(q.$count)) ) throw new Error(`Invalid aggregate (ag) pipeline operator value for ${key}`)

    if(isNullOrUndefinedOrEmpty(q[key])) throw new Error(`Invalid aggregate (ag) pipeline operator value for ${key}`)

    if(key === '$project') fields(q.$project)
    if(key === '$sort')    sort(q.$sort)
    if(key === '$skip')    skip(q.$skip)
    if(key === '$limit')   limit(q.$limit)
    if(key === '$lookup')  validateLookup(q.$lookup, options)
    if(key === '$match')   {
      validateQuery (q.$match)
      buildQueryRegex (q.$match)
    }
  }

  return value;
}

function validateLookup(q, options)
{
    if(!q) return;
    if(!isPlainObject(q)) throw new Error(`Invalid $lookup object, must be a plain object: ${q}`)
    if(!(options||{}).lookupTables) throw new Error(`lookup not allowed on this collection`)
    if(!~options.lookupTables.findIndex(o=>o==q.from)) throw new Error(`lookup not allowed with ${q.from} collection`); 

    const keys = Object.keys(q);

    if(keys.length != 4) throw new Error(`Invalid lookup operator, required operators [${validLookupProperties.join(', ')}].`); 

    for (const [k,v] of Object.entries(q)) {
      const isValid = validFieldName.test(k) ||
                      validLookupProperties.includes(k)

      if(!isValid) throw new Error(`Invalid $lookup property ${k}, property not allowed. allowed properties [${validLookupProperties.join(', ')}]`)

      if(typeof v === 'string') return 

      throw new Error(`Invalid lookup ($lookup) field/operator-value not allowed. ${k} ${v}`);
    }
}

function isNullOrUndefinedOrEmpty(v){
  return v === undefined || v === null || (isPlainObject(v) && isEmpty(v));
} 

function limit(value){
  if(value === undefined) return undefined

  value = [ undefined, null, '' ].includes(value)? 0 : parseInt(value)

  if(isNaN(value)) throw new Error(`Invalid limit (l) value: ${value}`)
  if(value < 0)    throw new Error(`Invalid limit (l) value out of range (l<0): ${value}`)

  return value;
}

function skip (value) {

  if(value === undefined) return undefined

  value = [ undefined, null, '' ].includes(value)? 0 : parseInt(value)

  if(isNaN(value)) throw new Error(`Invalid skip (sk) value ${value}`)

  if(value < 0) throw new Error(`Invalid skip (sk) value out of range (sk<0) ${value}`)

  return value;
}

function sort(value) {

  if(value===undefined) return undefined

  if(!isPlainObject(value)) throw new Error(`Invalid sort (s) value. must be a plain object: ${value}`)

    for (const [k,v] of Object.entries(value)) {
      if(!validFieldName.test(k)) throw new Error(`Invalid sort (s) key name: ${k}`)
      if(![-1, 1].includes(v))    throw new Error(`Invalid sort (s) key-value: out of range ${v}`)
    }

  return value;
}

function findOne(value) {

  value = [undefined, null, ''].includes(value)? 0 : parseInt(value)

  if(isNaN(value)) throw new Error(`Invalid findOne (fo): not a number ${value}`)

  if(![0, 1].includes(value)) throw new Error(`Invalid findOne (fo): out of range ${value}`)

  return value;
}

function fields(value) {

  if(value===undefined) return undefined

  if(!isPlainObject(value)) throw new Error(`Invalid field (f) value. must be a plain object: ${value}`)

  for (const [k,v] of Object.entries(value)) {
    if(!validFieldName.test(k)) throw new Error(`Invalid field (f) key name: ${k}`)
    if(![0, 1].includes(v))     throw new Error(`Invalid field (f) key-value: out of range ${v}`)
  }

  return value;
}
function count (value){

  value = [undefined, null, ''].includes(value)? 0 : parseInt(value)

  if(isNaN(value)) throw new Error(`Invalid count (c): not a number ${value}`)

  if(![0, 1].includes(value)) throw new Error(`Invalid count (c): out of range ${value}`)

  return value;
}

function query(value){

  if(value===undefined) return undefined

  if(!isPlainObject(value)) throw new Error(`Invalid query (q) value. must be a plain object: ${value}`)

  validateQuery(value)

  return value;
}

function validateQuery(q){
  if(!q) return true;

  const validOperators = ['$search','$eq', '$gt', '$gte','$lt', '$lte', '$ne', '$in', '$nin', '$or', '$and', '$not', '$nor', '$exists', '$type', '$mod',  '$text', '$all', '$elemMatch', '$size' ];
  const validRegexQueryOperators   = [ '$$contains', '$$startsWith', '$$endsWith', '$$exact'];

  for (const [k,v] of Object.entries(q)) {
    const isValid = validFieldName.test(k) ||
                    validOperators.includes(k) ||
                    validRegexQueryOperators.includes(k)

    if(!isValid) throw new Error(`Invalid query (q) fields/operator not allowed : ${k} : ${v}`)

    const value = Array.isArray(v)? v : [v]

    for (const elementOfV of value) 
      if(isBaseType(elementOfV)) return true
      else return validateQuery(v)
  }
}

function isBaseType(v){
  const isNull     = v === null 
  const isSting    = typeof v === 'string'
  const isNumber   = typeof v === 'number'
  const isBoolean  = typeof v === 'boolean'
  const isDate     = v instanceof Date
  const isObjectId = v instanceof bson.ObjectID

  if(isNull || isSting || isNumber || isBoolean || isDate || isObjectId ) return true

  if(!isPlainObject(v)) throw new Error(`Invalid query (q) field/operator-value not allowed: ${v}`)

  return false
}


function buildQueryRegex (obj) {
  const validRegexQueryOperators = [ '$$contains', '$$startsWith', '$$endsWith', '$$exact'];

  for (const prop in obj) {

      if(!obj[prop]) continue

      if (typeof obj[prop] === 'object') {
        if(!isPlainObject(obj[prop])) obj[prop] = buildQueryRegex(obj[prop]);

        const keys = Object.keys(obj[prop]);

        if(!keys.length ) throw new Error(`Invalid query (q), no operator provided.`); 

        const isRegexField = keys.filter(value => validRegexQueryOperators.includes(value)).length

        if(!isRegexField) {
          obj[prop] = buildQueryRegex(obj[prop]);
          continue;
        } 
        
        if(keys.length > 1) throw new Error(`Invalid regex query (q), only one regex operator allowed per field.`); 

        const searchType = keys[0]

        if(obj[prop][searchType] && typeof obj[prop][searchType] !== 'string') throw new Error(`Invalid regex query (q) value, only string type allowed,  ${searchType}.`); 

        obj[prop] = getSearchTextRegEx(searchType, obj[prop][searchType])
      }
  }

  return obj;
}

function getSearchText(text){
  return escapeRegExp(diacritics.remove(text))
}

function getSearchTextRegEx(searchType, text){
  const exact      = searchType === '$$exact'
  const startsWith = searchType === '$$startsWith'
  const endsWith   = searchType === '$$endsWith'
  const hat        = (exact || startsWith)? '^' : ''
  const dollar     = (exact || endsWith)  ? '$' : ''
  const searchText = getSearchText(text)

  return new RegExp(`${hat}${searchText}${dollar}`, 'ig')
}

function makeMongoSanitizerMap(){
  const aMap = new Map()

  aMap.set('q',  sanitizeQuery)
  aMap.set('f',  sanitizeFields)
  aMap.set('p',  sanitizeFields)
  aMap.set('s',  sanitizeSort)
  aMap.set('sk', sanitizeSkip)
  aMap.set('l',  sanitizeLimit)
  aMap.set('c',  sanitizeCount)
  aMap.set('fo', sanitizeFindOne)
  aMap.set('ag', sanitizeAggregate)

  return aMap
}
function makeMongoQueryMap(){
  const aMap = new Map()

  // aMap.set('q', '$match')
  // aMap.set('f', '$project')
  aMap.set('p', 'projection')
  aMap.set('s', 'sort')
  aMap.set('sk','skip')
  aMap.set('l', 'limit')
  aMap.set('c', 'count')

  return aMap
}

function makeMongoAgQueryMap(){
  const aMap = new Map()

  aMap.set('q', '$match')
  aMap.set('f', '$project')
  aMap.set('p', '$project')
  aMap.set('s', '$sort')
  aMap.set('sk','$skip')
  aMap.set('l', '$limit')
  aMap.set('c', '$count')

  return aMap
}