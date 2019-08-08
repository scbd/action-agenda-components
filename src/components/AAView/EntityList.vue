<template>

  <div class="row">
    <div class="col-12 col-md-4" v-for="(entity,key, index) in list" v-bind:key="index">
      <div  class="card" >
        <div class="card-body ">
          <Entity :entity="entity" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Entity from '../AAView/Entity.vue'
  export default {
    name: 'EntityList',
    components:{ Entity },
    props: { list:{ type: Array } },
  }
</script>

<style scoped>
  .card{ margin: 1.5em 0 1.5em 0; background-color: rgba(0,0,0,.02) }
</style>
