<template>
  <div id="app">
    <AAForm :options="{ }" force-env="development"/>
  </div>
</template>

<script>
import '@scbd/www-css'

import AAForm from '../src/index.vue'

export default {
  name      : 'App',
  components: {
    AAForm
  }
}
</script>

