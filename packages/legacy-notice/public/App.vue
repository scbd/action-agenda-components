<template>
  <div id="app">
    <LegacyNotice/>
  </div>
</template>

<script>
import '@scbd/www-css'

import LegacyNotice from '../src/index.vue'

export default {
  name: 'App',
  components: {
    LegacyNotice
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
