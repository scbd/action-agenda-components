<template>
  <div >
    <HorzCard v-bind="action" v-for="(action,index) in data"  v-bind:key="index" v-on:status-change="statusUpdate"/>
    <!-- pagination -->
  </div>
</template>

<script>
  import HorzCard from './AAHorzCard'

  export default {
    name      : 'HorzList',
    components: { HorzCard },
    props     : { 
                  data   :{ type: Array,  defualt: [] },
                  display:{ type: String, default: 'list' } 
                },
    methods   : { statusUpdate }
  }

  function statusUpdate({_id, status}){

    return this.data.map((a)=>{
        if(a._id===_id)
          a.meta.status= statusMap[status]
    })
    this.$forceUpdate()
  }

  const statusMap = {
    publish:'published',
    draft:'draft',
    reject:'rejected'
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
