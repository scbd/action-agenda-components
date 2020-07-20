<template>
  <div class="cont">
    <div >
      <span v-if="is('published')"  class = "badge badge-success "> Published </span>
      <span v-if="is('draft')"      class = "badge badge-danger ">  New </span>
      <span v-if="is('rejected')"   class = "badge badge-warning "> Rejected </span>
      <span v-if="is('deleted')"    class = "badge badge-warning "> Deleted </span>
    </div>
  </div>
</template>

<script>
export default {
  name   : 'State',
  props  : { status: { type: String, required: true } },
  methods: { is }
}

function is(status){ return this.status===status }
</script>

<style scoped>
.cont{position:absolute; width:100%; text-align: center;}
@media only screen and (max-width: 576px) {
  .cont{ text-align: left;}
}
</style>


