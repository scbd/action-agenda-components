<template>
  <b-form-invalid-feedback>
      <ul class="indent">
        <li v-for="(error,key,index) in error" v-bind:key="index">{{ error }}</li>
      </ul>
  </b-form-invalid-feedback>
</template>

<script>
  import bFormInvalidFeedback from 'bootstrap-vue/es/components/form/form-invalid-feedback'

// import bFormValidFeedback from 'bootstrap-vue/es/components/form/form-valid-feedback'
  export default {
    name: "FieldErrorMessage",
    components:{bFormInvalidFeedback},
    props:['error']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.indent{
    display: block;
    list-style-type: disc;
    padding: 0 0 0 2em;
}
.invalid-feedback {
  display: block;
}
</style>
