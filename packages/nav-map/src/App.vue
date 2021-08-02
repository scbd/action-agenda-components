<template>
  <div id="app">
    <ArcGisBaseMap />
  </div>
</template>

<script>
import ArcGisBaseMap from './components/arc-gis-base.vue'

export default {
  name: 'App',
  components: { ArcGisBaseMap }
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
  width: 100vw;
  height: 100vh;
}
</style>
