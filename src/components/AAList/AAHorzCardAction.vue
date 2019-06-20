<template>
  <div class="container-fluid">
    <div class="row no-gutters">
      <BCardImg v-if="(coverImage||{}).url" class="action-img" :src="(coverImage||{}).url" :alt="`${name.en} cover image`" bottom />
      <div :class="{'col-sm-11':(image||{}).url,'col-sm-12':!(image||{}).url}" >
        <div class="card-body">
          <h5 class="card-title">{{name.en}}</h5>
          <p class="card-text desc">
            {{description.en}}
          </p>
        </div>
      </div>
      <div class="col-sm-1" v-if="(image||{}).url">
        <img :src="(image||{}).url" class="card-img rounded-0" :alt="`${name.en} icon`">
      </div>
    </div>
  </div>
</template>

<script>
  import BCardImg from 'bootstrap-vue/es/components/card/card-img'

  export default {
    name: "HorzCardAction",
    components:{BCardImg},
    props: {
      name       : { type:Object, required: true },
      description: { type:Object, required: true },
      coverImage : { type:Object },
      image      : { type:Object }    
    }
  }
</script>


<style scoped>
  .action-img{
    max-height: 250px;
  }
  .desc{
    white-space: pre-wrap; 
  }
</style>
