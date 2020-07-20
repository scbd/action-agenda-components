<i18n src="./locales/index.json"></i18n>

<template>
  <div class="row no-gutters">
    <div  class="col-sm-12">
      <div class="card-body">

        <h5 class="card-title">{{getCountry.name}} </h5>
        <p class="card-text">
          {{name.en}}
        </p>
        <p class="card-text"><a :href="url" >{{url}}</a></p>
        <p class="card-text">
          <span class="badge badge-pill badge-dark mx-1" v-for="(t,index) in getOrgTypes"  v-bind:key="index"> {{t.name}} </span> &nbsp;
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import LookUp from '@modules/ScbdCachedApisLookUp'

export default {
  name: 'OrganizationView',
  props: {
    name   : { type:Object, required: true },
    types  : { type:Array, required: true },
    image  : { type:Object },
    url    : { type:String, required:false },
    country: { type:Object, required:true }  
  },
  data,
  mounted
}

  function data(){ return { getOrgTypes: [], getCountry: {} } }

  async function mounted(){
    this.getCountry  = await LookUp.getCountries(this.country, true)
    this.getOrgTypes = await LookUp.getOrgTypes(this.types)
  }
</script>

<style scoped>
  .entity-badge{ position: absolute; top: 0; left: 0; border-top-left-radius: 0; }
</style>
