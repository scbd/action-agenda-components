<template>
  <div>
    <Icons/>
   
    <AASearchNav :params="search" @filter="filter"/>
    <AAHorzList :data="data"  />

    <section v-if="DEBUG">
      <br/><br/><br/>
      <legend>DEBUG:</legend>
      <div class="card debug">
        <div class="card-body">
          <div class="row">
            <div class="col col-lg-4">
               <legend>q:</legend>
               <pre>{{q}}</pre>
            </div>
            <div class="col col-lg-4">
               <legend>search:</legend>
               <pre>{{search}}</pre>
            </div>
            <div class="col col-lg-4">
               <legend>data:</legend>
               <pre>{{data}}</pre>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Vue         from 'vue'

  import Auth        from '@modules/AuthPlugin'
  import Icons       from '@components/Icons'
  import AAListMixin from '@modules/AAListMixin'

  import AAHorzList  from './AAHorzList'
  import AASearchNav from './AASearchNav'  

  Vue.use(Auth,{env:process.env.NODE_ENV})

  export default {
    name      : 'AAList',
    mixins    : [ AAListMixin ],
    props     : ['env'],
    components: { AAHorzList, AASearchNav, Icons },
    methods   : { filter },
    data,
    mounted
  }
  
  function data(){
    return {
      DEBUG:process.env.VUE_APP_DEBUG,
      data:[],
      search : { page: 1, numPerPage:500, total:500 },
      q:{q:{}}
    }
  }

  async function mounted(){

    this.list(this.q)

    if(this.$isAuthLoaded && (await this.$isAuthLoaded())){
      this.list(this.q)
    }
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

<style scoped>
  .debug {
    background-color:rgba(198, 17, 17, .5);
  }
</style>