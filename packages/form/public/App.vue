<template>
  <div id="app">
    <AAForm  :options="{ formType: 'public' }" force-env="production"/>
  </div>
</template>

<script>
import '../scripts/index.css'
import AAForm from '../src/index.vue'

export default {
  name      : 'App',
  components: {
    AAForm
  }
}
</script>

