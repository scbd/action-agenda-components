<template>
  <div class="row no-gutters">
    <div  :class="{'col-sm-11':image,'col-sm-12':!image}">

      <div class="card-body">
        <!-- <span class="badge badge-info entity-badge">Individual</span> -->
        <h5 class="card-title">
          {{(prefix||{}).en}} {{(firstName||{}).en}} {{(lastName||{}).en}}
        </h5>
        <p class="card-text text-muted" v-if="department">
          {{(department||{}).en}}
        </p>
        <p class="card-text">
          <span class="badge badge-pill badge-secondary">{{getCountry.name}}</span>
        </p>
        <p class="card-text">
            <a :href="`mailto:${email}`" class="badge badge-pill badge-dark" >{{email}}</a>
            <a :href="`tel:${phone}`" class="badge badge-pill badge-dark">{{phone}}</a>
        </p>
      </div>
    </div>
    <div class="col-sm-1" v-if="image">
      <img :src="image" class="card-img rounded-0" :alt="name">
    </div>
  </div>
</template>

<script>
  import LookUp from '@/modules/ScbdCachedApisLookUp'

  export default {
    name: 'Person',
    props: {
      prefix    : { type: [Object], default:()=>{} },
      firstName : { type: [Object], default:()=>{} },
      lastName  : { type: Object, required: true },
      department: { type: [Object], default:()=>{} },
      country: {
        type      : Object,
        identifier: { type: String, required: true },
        name      : { type: String, required: true }
      },
      phone: { type: String },
      email: { type: String, required: true },
      image:{ type:String }
    },
    data,
    mounted
  }

  function data(){ return { getCountry: {} } }

  async function mounted(){
    this.getCountry = await LookUp.getCountries(this.country, true)
  }
</script>

<style scoped>
  .entity-badge{ position: absolute; top: 0; left: 0; border-top-left-radius: 0; }
</style>
