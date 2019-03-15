<template>
    <div class="row no-gutters">
      <!-- :class="{'col-sm-11':(image||{}).url,'col-sm-12':!(image||{}).url}" -->
      <div  class="col-sm-12">
        <div class="card-body">
          <!-- <span class="badge badge-info entity-badge">Organization</span> -->
          <h5 class="card-title">{{name.en}} </h5>
          <p class="card-text"><a :href="url" >{{url}}</a></p>
          <p class="card-text">
            <span class="badge badge-pill badge-secondary">{{getCountry.name}}</span>
          </p>

          <p class="card-text">
            <span class="badge badge-pill badge-dark mx-1" v-for="(t,index) in getOrgTypes"  v-bind:key="index"> {{t.name}} </span> &nbsp;
          </p>
        </div>
      </div>
      <!-- <div class="col-sm-1" v-if="image && image.url">
        <img :src="image" class="card-img rounded-0" :alt="name">
      </div> -->
    </div>
</template>

<script>
import LookUp           from "../../modules/ScbdCachedApisLookUp"

export default {
  name: "AAOrganizationView",
  props: {
    name: {
      type:Object,
      required: true
    },   
    types: {
      type:Array,
      required: true
    },
    image: {
      type:Object
    },
    url: {
      type:String,
      required:false
    },
    country: {
      type:Object,
      required:true,
     }  
  },
  data(){
    return {getOrgTypes:[], getCountry:{}}
  },
  async mounted(){
    this.getCountry = await LookUp.getCountries(this.country, true)
    this.getOrgTypes = await LookUp.getOrgTypes(this.types)
  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.entity-badge{
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 0;
}
</style>
