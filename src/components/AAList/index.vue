<template>
  <div>
    <Icons/>
   
    <AASearchNav :params="search" @filter="filter"/>
    <AAHorzList :data="data"  />
  </div>
</template>

<script>
  import Vue from 'vue'
  import Auth from '../../modules/AuthPlugin'
  Vue.use(Auth,{env:process.env.NODE_ENV})

  import AAHorzList     from './AAHorzList'
  import AASearchNav    from './AASearchNav'  
  import Icons          from '../Icons'
  import AAListMixin    from '../../modules/AAListMixin'

  export default {
    name: 'AAList',
    mixins: [AAListMixin],
    props:['env'],
    components:{
      AAHorzList,
      AASearchNav,
      Icons
    },
    data(){
      return {
        data:[],
        search : {
          page: 1,
          numPerPage:10,
          total:0
        },
        q:{q:{}}
      }
    },
    async mounted(){

      this.list(this.q)

      if(this.$isAuthLoaded && (await this.$isAuthLoaded())){
        this.list(this.q)
      }
    },
    methods:{filter}
  }
  
  function filter({filters, text}){
    let q = {q:{}}

    if(text)
      q.q.$text={$search:text}

    if(filters.length)
      q.q.$or=filters
    this.q= q
    this.list(q)
  }


</script>

