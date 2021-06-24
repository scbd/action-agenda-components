<template>
  <div  id="aa-form" >
    <Icons v-once/>
    <h1>form</h1>
  </div>
</template>

<script>
import Icons from '@action-agenda/icons'
import getDefaultOptions from './default-options'

export default {
  name      : 'ActionForm',
  components: { Icons },
  props     : {
    options : { type: Object, required: true },
    forceEnv: { type: String, required: false, default: 'production' }
  },
  computed: { opts },
  errorCaptured
}

function opts (){ return { ...getDefaultOptions(this.options, this.forceEnv) } }


function errorCaptured(err){
  console.error('Action form error:', err)
  console.error(err)
}
</script>

<style scoped>
  @import url('https://cdn.cbd.int/@action-agenda/icons/dist/esm/index.min.css');

  #scbd-search { position: relative; width: 100%; }
  .loading{ position: fixed; bottom: 0; left: 50%; background-color: burlywood; }
  .stick{position: sticky;  z-index: 5; top: 0}
</style>
