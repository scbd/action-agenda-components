import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/AAForm/index.vue'
import data from '../tests/stubs/actions.js'

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
      // name: 'home',
      // component: Home,
      // component: () => import(/* webpackChunkName: "AAForm" */ './components/AAForm/index.vue'),
      // props:{
      //   actorType:'person'
      // }
    },
    // {
    //   path: '/p2020',
    //   name: 'p2020',

    //   component: () => import(/* webpackChunkName: "Post2020Graph" */ './components/Post2020Graph/index.vue'),

    // },
    {
      path: '/aaform/person/:type',
      name: 'individual',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "AAForm" */ './components/AAForm/index.vue'),
      props:{
        formType:'person',
        options:configMap.person
      }
    },
    {
      path: '/aaform/organization/:type',
      name: 'Organization/Business',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "AAForm" */ './components/AAForm/index.vue'),
      props:{
        formType:'organization',
        options:configMap.organization
      }
    },
    {
      path: '/aaform/public/:type',
      name: 'Public',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "AAForm" */ './components/AAForm/index.vue'),
      props:{
        formType:'party',
        options:configMap.party
      }
    },
    // {
    //   path: '/list',
    //   name: 'aalistview',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "AAList" */ './components/AAList/index.vue'),
    //   props:{
    //     env:process.env.NODE_ENV,
    //     dataFn:queryActions
    //   }
    // },
    // {
    //   path: '/aaview',
    //   name: 'aaview',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "AAList" */ './components/AAView/index.vue'),
    //   props:{
    //     env:process.env.NODE_ENV,
    //   }
    // },
    // {
    //   path: '/component/scbdselect',
    //   name: 'scbdselect',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "SCBDSelect" */ '../tests/stubs/SCBDSelect.vue')
    // },
    // {
    //   path: '/component/entityselect',
    //   name: 'entityselect',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "SCBDSelect" */ '../tests/stubs/ESDemo.vue')
    // },
    // {
    //   path: '/component/links',
    //   name: 'links',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "SCBDSelect" */ './components/AAForm/controls/Links.vue'),
    //   props:{
    //     value:[],
    //     type:['files','links'],
    //     multi:true,
    //     name:'attachments',
    //     label:'Attachments'
    //   }
    // },     
    // {
    //   path: '/component/AAContactForm',
    //   name: 'AAContact',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "SCBDSelect" */ './components/AAForm/AAContactForm.vue')
    // },
    // {
    //   path: '/component/AAOrganizationForm',
    //   name: 'AAOrganization',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "SCBDSelect" */ './components/AAForm/AAOrganizationForm.vue')
    // }
  ]
})
function queryActions(){
  return data
}