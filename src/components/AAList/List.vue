<template>
  <div >
    <Card v-for="(action,index) in data" v-bind:key="index" v-bind="action"   v-on:status-change="statusUpdate"/>
    <!-- TODO pagination -->
  </div>
</template>

<script>
  import Card from './Card'

  const statusMap = { publish:'published', draft:'draft', reject:'rejected' }

  export default {
    name      : 'List',
    components: { Card },
    props     : { 
                  data   :{ type: Array,  defualt: [] },
                  display:{ type: String, default: 'list' } 
                },
    methods   : { statusUpdate }
  }

  function statusUpdate({_id, status}){

    return this.data.map((a)=>{ if(a._id === _id) a.meta.status = statusMap[status] })

    this.$forceUpdate()
  }

</script>

