<template>
  <div class="invalid-feedback">
      <ul class="indent">
        <li v-for="(error,key,index) in error" v-bind:key="index">{{ error }}</li>
      </ul>
  </div>
</template>

<script>

  export default {
    name: "FieldErrorMessage",
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
