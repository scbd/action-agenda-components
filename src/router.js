import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/AAForm/index.vue'
import data from '../tests/stubs/actions.js'



 Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/aaform/person',
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
      path: '/aaform/:type',
      name: 'individual',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "AAForm" */ './components/AAForm/index.vue'),
      props:{
        actorType:'person'
      }
    },
    {
      path: '/aaform/:type',
      name: 'Organization/Business',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "AAForm" */ './components/AAForm/index.vue'),
      props:{
        actorType:'organization'
      }
    },
    {
      path: '/aaform/:type',
      name: 'Public',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "AAForm" */ './components/AAForm/index.vue'),
      force: true,
      props:{
        actorType:'public'
      }
    },
    {
      path: '/aaform/:type',
      name: 'Party',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "AAForm" */ './components/AAForm/index.vue'),
      props:{
        actorType:'party'
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