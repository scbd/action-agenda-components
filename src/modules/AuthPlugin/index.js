import Vue        from 'vue'
import axios      from 'axios'
import AuthIFrame from './components/AuthIFrame'

//reactive holder for me
const vm = new Vue({
  data: {
    me: {},
    token:'',
    env: 'dev'
  },
  methods:{
    getUser,
    loadUser
  }
})

export default {

    install(Vue, options={}){

      vm.env = options.env || 'dev'

      // add iframe to first available component
      Vue.mixin({
        computed:{
          '$me':()=>vm.me,
          '$apiBaseUrl':apiBaseUrl,
          '$accountsBaseUrl':accountsBaseUrl,
          '$baseReqOpts':baseReqOpts,
          '$isAdmin':isAdmin
        },
        methods:{
          $isAuthLoaded:loaded
        },
        mounted: function () {


          if(!Vue.$AuthIFrame && this.$options.name!=='AuthIFrame' && this.$options.name){
            const AuthIFrameClass    = Vue.extend(AuthIFrame)
            const AuthIFrameInstance = new AuthIFrameClass({methods:{receivePostMessage}})

            AuthIFrameInstance.$mount()

            // let appEl = this.$root.$children[0].$el
            // console.log(appEl)
            // let firstEl = this.$root.$children[0].$children[0].$el
            // console.log(appEl)         
            // appEl.insertBefore(AuthIFrameInstance.$el,firstEl)
            this.$el.appendChild(AuthIFrameInstance.$el)
            Vue.$AuthIFrame = AuthIFrameInstance.$el

            loaded()
              .then(loadUser)
              .then(()=>this.$forceUpdate())
              .catch(()=>{ vm.me =anonymous() })
          }
        }
      })

    }
}

function loaded(){
  return new Promise(loadingInterval)
}

function loadingInterval(resolve, reject){
  let timeout,timer =null
  timeout = setTimeout(()=>{
                              clearInterval(timer)
                              if(vm.me.userID)
                                resolve(true)
                              else
                                reject('Error loading SCBD auth vue plugin')
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

  if(event.origin!=accountsBaseUrl())
    return null

  let message = JSON.parse(event.data)

  if(message.type!=='authenticationToken') 
    throw new Error ('unsupported authentication message type')

  vm.token = message.authenticationToken
  return vm.token
}

async function loadUser(){
  let me = await getUser()
  Vue.nextTick(()=>{
    vm.me = me
  })
  Vue.nextTick(()=>{

    me.isAdmin = isAdmin()
    me.isStaff = isStaff() 
    me.hasRole = hasRole()
    vm.me = me 

  })
  return vm.token
}

function hasRole (role){
  if(!vm.me || !vm.me.roles) return false

  return vm.me.roles.includes(role)
}
function isAdmin (){
  if(!vm.me || !vm.me.roles) return false

  return vm.me.roles.includes('Administrator') || vm.me.roles.includes('ActionAdmin')
}
function isStaff (){
  if(!vm.me || !vm.me.userGroups) return false

  return vm.me.userGroups.includes('SCBD')
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
  if(vm.me && vm.me.name)
    return vm.me

  if(!vm.token)
    return anonymous()

  return axios.get(`${accountsBaseUrl()}/api/v2013/authentication/user`, baseReqOpts() )
         .then((r) => {return r.data})
}

function accountsBaseUrl(){

  if(vm.env==='dev')
    return 'https://accounts.cbddev.xyz'

  if(vm.env==='stg')
    return 'https://accounts.staging.cbd.int'

  if(vm.env==='production' || vm.env==='prod')
    return 'https://accounts.cbd.int'

  return 'https://accounts.cbddev.xyz'
}

function apiBaseUrl (){

  if(vm.env==='dev')
    return 'https://api.cbddev.xyz/api'

  if(vm.env==='stg')
    return 'https://api.staging.cbd.int/api'

  if(vm.env==='prod' ||vm.env==='production')
    return 'https://api.cbd.int/api'           
}


function baseReqOpts(){

  if(vm.token) return { headers : { 'Authorization' : `Ticket ${vm.token}` } }
  
  return {}
}
