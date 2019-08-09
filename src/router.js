import Vue       from 'vue'
import VueRouter from 'vue-router'

const configMap = {
  'person':{
    label:false,
    actionDetails:{      
      operationalAreas:false,
      thematicAreas:false, 
      aichiTargets:true, 
      sdgs:true,
      progressMeasured:true
    },
    contacts:false,
    partners:false,
    anonymous:true, 
    accountSignup:true, 
    mailingList:{list:'action-agenda', tags:['person'], msg:''}, 
  },
  'organization':{
    label:false,
    actionDetails:{      
      operationalAreas:true,
      thematicAreas:true, 
      aichiTargets:true, 
      sdgs:true,
      progressMeasured:true
    },
    contacts:true,
    partners:true,
    anonymous:true, 
    accountSignup:true, 
    mailingList:{list:'action-agenda', tags:['organization'], msg:'Join our mailing list and receive updates on the Action Agenda.'}, 
  },
  'public':{
    label:false,
    actionDetails:{      
      operationalAreas:true,
      thematicAreas:true, 
      aichiTargets:true, 
      sdgs:true,
      progressMeasured:true
    },
    contacts:true,
    partners:true,
    anonymous:true, 
    accountSignup:true, 
    mailingList:{list:'action-agenda', tags:['public'], msg:'Join our mailing list and receive updates on the Action Agenda.'}, 
  },
  'party':{
    label:false,
    actionDetails:{      
      operationalAreas:true,
      thematicAreas:true, 
      aichiTargets:true, 
      sdgs:true,
      progressMeasured:true
    },
    contacts:true,
    partners:true,
    anonymous:false, 
    accountSignup:true, 
    mailingList:{list:'action-agenda', tags:['party'], msg:'Join our mailing list and receive updates on the Action Agenda.'}, 
  }
}

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/aaform/person/hack',
    },
    {
      path: '/aaform/person/:type',
      name: 'individual',
      component: () => import(/* webpackChunkName: "AAForm" */ './components/AAForm/index.vue'),
      props:{
        formType:'person',
        options:configMap.person
      }
    },
    {
      path: '/aaform/organization/:type',
      name: 'Organization/Business',
      component: () => import(/* webpackChunkName: "AAForm" */ './components/AAForm/index.vue'),
      props:{
        formType:'organization',
        options:configMap.organization
      }
    },
    {
      path: '/aaform/public/:type',
      name: 'Public',
      component: () => import(/* webpackChunkName: "AAForm" */ './components/AAForm/index.vue'),
      force: true,
      props:{
        formType:'public',
        options:configMap.public
      }
    },
    {
      path: '/aaform/party/:type',
      name: 'Party',
      component: () => import(/* webpackChunkName: "AAForm" */ './components/AAForm/index.vue'),
      props:{
        formType:'party',
        options:configMap.party
      }
    },
    {
      path: '/list',
      name: 'aalistview',
      component: () => import(/* webpackChunkName: "AAList" */ './components/AAList/index.vue'),
    },
    {
      path: '/list/action',
      name: 'aaview',
      component: () => import(/* webpackChunkName: "AAList" */ './components/AAView/index.vue')
    }
  ]
})
