<template>
  <div id="app">
    <AASearch :options="{  lgTop:'160', mdTop:'60', smTop:'30'}" force-env="production"/>
  </div>
</template>

<script>
import '@scbd/www-css'

import AASearch from '../src/index.vue'

export default {
  name      : 'App',
  components: {
    AASearch
  }
}
</script>

