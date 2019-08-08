import Vue        from 'vue'
import axios      from 'axios'
import winston    from '@modules/config' 
import AuthIFrame from './components/AuthIFrame'

//reactive holder for me
const vm = new Vue({
                      data: {
                        me   : {},
                        token: '',
                        env  : process.env.NODE_ENV,
                        loaded: false
                      },
                      methods:{ getUser, loadUser }
                    })

export default { install }

//install vue plugin
function install (Vue, options={}) {

  vm.env = process.env.NODE_ENV || options.env || 'dev'

  // mixins added to every component instance
  Vue.mixin ({
              computed:{
                '$me'             : ()=>vm.me,
                '$accountsBaseUrl': accountsBaseUrl,
                '$baseReqOpts'    : baseReqOpts,
                '$isAdmin'        : isAdmin
              },
              methods:{
                $isAuthLoaded: loaded,
                $isUserLoaded: ()=> new Promise(returnUser),
                $setLoaded: setLoaded
              },
              mounted
            })
}

function mounted () {
  // add iframe to first available component
  if(!Vue.$AuthIFrame && this.$options.name!=='AuthIFrame' && this.$options.name){
    const AuthIFrameClass    = Vue.extend(AuthIFrame)
    const AuthIFrameInstance = new AuthIFrameClass({methods:{receivePostMessage}})

    AuthIFrameInstance.$mount()

    this.$el.appendChild(AuthIFrameInstance.$el)
    Vue.$AuthIFrame = AuthIFrameInstance.$el

    loaded()
      .then( loadUser )
      .then(  ()=> this.$forceUpdate())
      .catch( ()=> { vm.me = anonymous() })
  }
}

function setLoaded (val){
  vm.loaded = val
}
function loaded () { return new Promise(loadingInterval) }

function isProd () { return ( vm.env==='prod' || vm.env==='production' )  }

function isStg  () { return vm.env==='stg' }

function loadingInterval(resolve, reject){
  let timeout = null
  let timer   = null
  timeout = setTimeout(()=>{
                              clearInterval(timer)
                              console.log('vm.loaded',vm.loaded)
                              if(vm.loaded) resolve(true)
                              else{
                                let e = new Error('Error loading SCBD auth vue plugin')
                                winston.error('VueAuth.loadingInterval: ', e)
                                reject(e)
                              }
                            },3000)
  timer = setInterval(()=>{

                            if(vm.token) {
                              clearInterval(timer)
                              clearTimeout(timeout)
                              return resolve(vm.token)
                            }
                          }, 100)
}

function receivePostMessage(event)
{
  let { origin, data } = event

  if(origin != accountsBaseUrl()) return null

  let { type, authenticationToken } = JSON.parse(data)

  if(type!=='authenticationToken'){
    let e = new Error('Unsupported authentication message type')
    winston.error('VueAuth.receivePostMessage:', e)
    throw e
  }

  vm.token = authenticationToken
  return vm.token
}

function returnUser(resolve, reject) {
  let timeout = null
  let timer   = null

  timeout = setTimeout (()=>{
                              clearInterval(timer)
                              if(!vm.token) resolve(anonymous())
                              else{
                                let e = new Error('Error loading user')
                                winston.error('VueAuth.returnUser: ', e)
                                reject(e)
                              }
                            },3000)
  timer = setInterval (()=>{
                            if(vm.token && vm.me.userID) {
                              clearInterval(timer)
                              clearTimeout(timeout)
                              return resolve(vm.me)
                            }
                          }, 100)
}

async function loadUser(){
  let me      = await getUser()
  let profile = await getProfile(me.userID)

  me.firstName = profile.FirstName
  me.lastName  = profile.LastName
  me.country   = profile.Country 

  Vue.nextTick(()=> { vm.me = me })
  Vue.nextTick(()=> { 
                      me.isAdmin = isAdmin()
                      me.isStaff = isStaff() 
                      me.isGov   = isGov()
                      me.hasRole = hasRole 
                      vm.me      = me 
                    })

  return vm.token
}

function hasRole (role){
  let { roles } = vm.me

  if(!roles) return false

  return roles.includes(role)
}

function isAdmin (){

  let { roles } = vm.me

  if(!roles) return false

  return roles.includes('Administrator') || roles.includes('ActionAdmin')
}

function isStaff () {
  let { userGroups } = vm.me

  if(!userGroups) return false

  return userGroups.includes('SCBD')
}

function isGov (){
  let { roles, government } = vm.me

  if(!government || !roles) return false

  return roles.includes('NFP-CBD') || roles.includes('ChmNrNationalFocalPoint') || roles.includes('ChmNrNationalAuthorizedUser')
}

function anonymous() {
  return {  userID: 1,
            name: 'anonymous',
            email: 'anonymous@domain',
            government: null,
            userGroups: null,
            isAuthenticated: false,
            isOffline: true,
            roles: []
          }
}

function getUser() {
  let { me, token }       = vm
  let { isAuthenticated } = me

  if(!token)            return anonymous()
  if(isAuthenticated)   return me

  return axios.get(`${accountsBaseUrl()}/api/v2013/authentication/user`, baseReqOpts() )
         .then(  (r) => r.data)
         .catch( (e) => winston.error('VueAuth.getUser: ',e))         
}

function getProfile(id) {

  return axios.get(`${accountsBaseUrl()}/api/v2013/users/${id}`, baseReqOpts() )
         .then(  (r) => {return r.data})
         .catch( (e) => winston.error('VueAuth.getProfile: ',e))
}

function accountsBaseUrl() {
 
  if(process.env.VUE_APP_ACCOUNTS_URL) return process.env.VUE_APP_ACCOUNTS_URL

  if( isStg() )  return 'https://accounts.staging.cbd.int'

  if( isProd() ) return 'https://accounts.cbd.int'

  return 'https://accounts.cbddev.xyz'
}

function baseReqOpts() {
  let { token } = vm

  if(!token) return {}
  
  return { headers : { 'Authorization' : `Ticket ${token}` } }
}


