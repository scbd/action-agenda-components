<i18n src="@/locales/index.json"></i18n>
<template>
  <div class="alert alert-warning" >
    <p>{{error.code}}</p>
    <div class="card mb-3" v-for="(e,key,index) in error.errors" v-bind:key="index">
      &nbsp;{{e.message}}
    </div>
  </div>  
</template>

<script>
  import mixin from './FeedbackMixin'

  export default {
    name    : 'Validate',
    mixins  : [mixin],
    mounted
  }

  function mounted(){
    console.log(this.error)
  }
</script>