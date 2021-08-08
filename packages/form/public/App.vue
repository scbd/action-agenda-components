<template>
  <div id="app">
    <AAForm  :options="{ formType: 'organization' }" force-env="production"/>
  </div>
</template>

<script>
// import '@scbd/www-css'
import '../scripts/index.css'
import AAForm from '../src/index.vue'

export default {
  name      : 'App',
  components: {
    AAForm
  }
}
</script>

