<template functional>
  <div class="alert alert-warning" >
    <p>{{props.error.code}}</p>
    <div class="card mb-3" v-for="(e,key,index) in props.error.errors" v-bind:key="index">
      &nbsp;{{e.message}}
    </div>
  </div>  
</template>