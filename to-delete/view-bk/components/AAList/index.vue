<template>
  <div>
    <Icons/>
    <SearchNav :params="search" @filter="filter"/>
    <Feedback :error="error" :has-slot="data.length" @deleteFeedback="deleteFeedback">
      <List :data="data"/>
    </Feedback>
  </div>
</template>

<script>
  import Vue         from 'vue'
  import Auth        from '@modules/AuthPlugin'
  import Icons       from '@components/Icons'
  import Feedback    from '@components/FeedbackList' 
  import ListMixin   from './ListMixin'
  import List        from './List'
  import SearchNav   from './SearchNav'  

  Vue.use(Auth)

  // catch all uncaught errors


  export default {
    name      : 'AAList',
    mixins    : [ ListMixin ],
    components: { List, SearchNav, Icons, Feedback },
    methods   : { filter, deleteFeedback },
    data,
    mounted
  }
  
  function deleteFeedback({ index, type }){
    delete(this[type][index])
    this.$forceUpdate()
  }

  function data(){
    return {
      data:[],
      error:{},
      search : { page: 1, numPerPage:500, total:500 },
      q:{q:{}}
    }
  }

  async function mounted(){
    this.list(this.q)

    if(this.$isAuthLoaded && (await this.$isAuthLoaded()))
      this.list(this.q)
  }

  function filter({filters, text}){
    let q = {q:{}}

    if(text) q.q.$text={$search:text}

    if(filters.length) q.q.$or=filters

    this.q= q

    this.list(q)
  }
</script>