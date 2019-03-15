<template>
  <section>
      <div  class="card" v-for="(entity,key, index) in list" v-bind:key="index">
        <div class="card-body ">
          <AAEntityView :entity="entity" />
        </div>
      </div>
  </section>
</template>

<script>

import AAEntityView from '../AAView/AAEntityView.vue'
export default {
  name: "AAEntityList",
  components:{AAEntityView},
  props: {
    list:{
      type: Array
    }
   
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  margin: 1.5em 0 1.5em 0;
   background-color: rgba(0,0,0,.02)
}
</style>
