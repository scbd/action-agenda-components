<template>
  <div id="app">
    <ScbdSearch :options="{ preLoadFilter:'SPECIES', lgTop:'160', mdTop:'60', smTop:'30'}" force-env="development"/>
  </div>
</template>

<script>
import '@scbd/www-css'

import ScbdSearch from '../src/index.vue'

export default {
  name      : 'App',
  components: {
    ScbdSearch
  }
}
</script>

