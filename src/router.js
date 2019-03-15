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
      name: 'home',
      component: Home,
      props:{
        env:process.env.NODE_ENV
      }
    },
    {
      path: '/aaform',
      name: 'aaform',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "AAForm" */ './components/AAForm/index.vue'),
      props:{
        env:process.env.NODE_ENV
      }
    },
    {
      path: '/aalistview',
      name: 'aalistview',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "AAList" */ './components/AAList/index.vue'),
      props:{
        env:process.env.NODE_ENV,
        dataFn:queryActions
      }
    },
    {
      path: '/aaview',
      name: 'aaview',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "AAList" */ './components/AAView/index.vue'),
      props:{
        env:process.env.NODE_ENV,
      }
    },
    {
      path: '/component/scbdselect',
      name: 'scbdselect',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "SCBDSelect" */ '../tests/stubs/SCBDSelect.vue')
    },
    {
      path: '/component/entityselect',
      name: 'entityselect',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "SCBDSelect" */ '../tests/stubs/ESDemo.vue')
    },
    {
      path: '/component/links',
      name: 'links',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "SCBDSelect" */ './components/AAForm/controls/Links.vue'),
      props:{
        value:[],
        type:['files','links'],
        multi:true,
        name:'attachments',
        label:'Attachments'
      }
    },     
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