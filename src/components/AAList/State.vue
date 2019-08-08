<template>
  <section>
    <span v-if="is('published')"  class = "badge badge-success state"> Published </span>
    <span v-if="is('draft')"      class = "badge badge-danger state">  New </span>
    <span v-if="is('rejected')"   class = "badge badge-warning state"> Rejected </span>
    <span v-if="is('deleted')"    class = "badge badge-warning state"> Deleted </span>
  </section>
</template>

<script>
  export default {
    name   : 'State',
    props  : { status:{ type: String, required: true } },
    methods: { is }
  }
  function is(status){
    return this.status===status
  }
</script>

<style scoped>
  .state{ position: absolute; top:0px; right: 0px; }
</style>