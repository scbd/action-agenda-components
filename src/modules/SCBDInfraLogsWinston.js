const Transport = require('winston-transport')
const axios     = require('axios')
const isEmpty   = require('lodash.isempty')
const ENV       = process.env.NODE_ENV || 'production'
const { stringify } = require('./util')

module.exports = class SCBDInfraLogsWinston extends Transport {

  constructor(opts) {
    super(opts)
    this.setInstanceVars(opts)
  }

  log(info, callback) {
    if(!['error'].includes(info.level)) return callback()

    setImmediate(() => { this.emit('logged', info) })

    // Perform the writing to the remote service
    let payload = this.getPayLoad(info)
    this.sendLog(payload)
    
    callback()
  }

  setInstanceVars(opts){
    this.name         = opts.name       || 'SCBDInfraLogs'
    this.level        = opts.level      || 'warn'
    this.formatter    = opts.formatter  || false
    this.realmBase    = opts.realm      || 'CHM'
    this.appVersion   = opts.appVersion || getAppVersion()
    this.type         = opts.type       || 'client-app-errors'
    this.logServerUrl = opts.logServerUrl 
  }

  getPayLoad(info){
    let {realm, appVersion} = this
    let {level, message, stack, meta, response } = info

    if(response) response = stringify(response)

    if(isServer()) return removeEmpty({ level, realm, appVersion, message, stack, response })

    return removeEmpty(Object.assign({ level, realm, appVersion, message, meta, stack, response }, getPayLoadClient()))
  }


  sendLog(payload){
    try{
      return axios.post(this.apiEndpoint,payload)
    }catch(e){
      console.error('Error posting SCBD logs',e)
    }
  }

  get user (){
    return SCBDInfraLogsWinston.user || 1
  }

  get realm (){
    if(['dev','stg'].includes(ENV))
      return `${this.realmBase}-${ENV}`.toLocaleUpperCase()
    return this.realmBase
  }

  get apiEndpoint () {
    let endpoints = {
      dev:`https://api.cbddev.xyz`,
      stg:`https://api.staging.cbd.int`,
      production: `https://api.cbd.int`
    }
    let targetUrl = this.logServerUrl ? this.logServerUrl : endpoints[ENV]
    return `${targetUrl}/api/v2016/error-logs?type=${this.type}`
  }
}

function getPayLoadClient(){

  let { userAgent, vendor, vendorSub, product, productSub, platform, language, appVersion, appName, appCodeName } = window.navigator

  return {
    location : window.location,
    navigator: { userAgent, vendor, vendorSub, product, productSub, platform, language, appVersion, appName, appCodeName }
  }
}

function isServer() { return !(typeof window != 'undefined' && window.document) }

function getAppVersion(){
  let { APP_VERSION, VUE_APP_VERSION } = process.env
  let appVersion 

  if(window) appVersion = window.appVersion

  let version =  appVersion || APP_VERSION || VUE_APP_VERSION

  if(['dev','stg'].includes(ENV)) return `${ENV}-${version}`

  return version
}

function removeEmpty (obj) {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([k, v]) => v && !isEmpty(v))
      .map(([k, v]) => (typeof v === 'object' ? [k, removeEmpty(v)] : [k, v]))
  )
}