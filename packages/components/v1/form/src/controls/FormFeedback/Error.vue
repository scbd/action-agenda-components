<template>
  <section>
    <div class="alert alert-danger" v-if="error">
      <p>{{error.statusCode}} {{error.code}}</p>
      <div class="card" v-for="(e,key,index) in error.errors" v-bind:key="index">
        &nbsp;{{e.message}}
      </div>
    </div>  
    <slot></slot>
    <div class="alert alert-danger" v-if="error">
      <p>{{error.statusCode}} {{error.code}}</p>
      <div class="card" v-for="(e,key,index) in error.errors" v-bind:key="index">
        &nbsp;{{e.message}}
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'FormFeedback',
    props: {}
  } 
</script>
