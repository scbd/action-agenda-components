import axios      from 'axios'
import consola    from 'consola' 
import changeCase from 'change-case'

export default {
    methods: { getOptions, list, count, addError } 
}

function defaultQuery () {
  let def = {}

  def.q = {}
  def.sk= 0
  def.l = 500
  def.s = { 'meta.modifiedOn':-1}
  def.f = {'meta':1,'action.name':1,'action.description':1,'action.image':1,'actor':1,}//'actor':1,,'partners':1
  return def
} 

function defaultCountQuery () {
  let def = {}
  
  def.q = {}
  def.c = 1
  def.f = {'_id':1}
  return def
} 

function query (params={}){
  params = Object.assign(defaultQuery(), params)
  return params
}

async function list(params={}) {
  try{

    let options = this.getOptions()
    options.params = query (params)

    let data = await Promise.all([await axios.get(`${process.env.VUE_APP_API}/v2019/actions`,options),await this.count(params)])

    this.data = data[0].data
    this.search.total = (data[1]||{}).count || 0

  }catch(e){

    let msg = ''
    if(e.response) msg = e.response.status

    consola.error(msg,e)
    this.addError(e)
  }
}
function count(params={}) {
  try{

    let options = this.getOptions()
    options.params = Object.assign(defaultCountQuery(),params)

    return axios.get(`${process.env.VUE_APP_API}/v2019/actions`,options).then((res)=>res.data)

  }catch(e){
    let msg = ''
    if(e.response) msg = e.response.status

    consola.error(msg,e)
    this.addError(e)
  }
}

function addError(e){
  e.key = changeCase.camelCase(e.message)
  if(!this.error[e.key])
    this.$set(this.error,[e.key], e)
}

function getOptions() { return this.$baseReqOpts || {} }