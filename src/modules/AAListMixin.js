import axios          from 'axios'

export default {
    methods:{getOptions, list, count, getBaseApi}
}

function defaultQuery () {
  let def = {}

  def.q = {}
  def.sk= 0
  def.l = 500
  def.s ={ 'meta.modifiedOn':1}
  def.f = {'meta':1,'organizer':1,'name':1,'description':1}
  return def
} 

function defaultCountQuery () {
  let def = {}
  
  def.q={}
  def.c=1
  def.f={'_id':1}
  return def
} 

function query (params={}){
  params=Object.assign(defaultQuery(), params)
  return params
}

async function list(params={}) {
  try{

    let options = this.getOptions()
    options.params = query (params)

    let data =  await Promise.all([await axios.get(`${this.getBaseApi()}/v2019/actions`,options),await this.count(params)])

    this.data = data[0].data
    this.search.total = (data[1]||{}).count || 0

  }catch(e){
    console.log(e)
  }
}
async function count(params={}) {
  try{

    let options = this.getOptions()
    options.params = Object.assign(defaultCountQuery(),params)
 console.log(options) 
    let data =  (await axios.get(`${this.getBaseApi()}/v2019/actions`,options)).data

    
    return data
  }catch(e){
    console.log(e)
  }
}

function getBaseApi() {

  if(this.env==='dev')
    return 'https://api.cbddev.xyz/api'

  if(this.env==='stg')
    return 'https://api.staging.cbd.int/api'

  if(this.env==='prod' || this.env==='production')
    return 'https://api.cbd.int/api'           
  
}
function getOptions() {

    return this.$baseReqOpts || {}
}

