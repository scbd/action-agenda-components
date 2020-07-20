<template>
  <div id="app">
    <link rel="stylesheet" href="https://s3.amazonaws.com/phoenix.www.cbd.int/themes/custom/bootstrap_sass/css/style.css" />

    <div id="nav">
      Forms:      
      <router-link to="/aaform/person/hack">Individual</router-link> |
      <router-link to="/aaform/organization/hack">Org</router-link> |
      <router-link to="/aaform/public/hack">Public</router-link> |
      <router-link to="/aaform/party/hack">Party</router-link> 
      <hr><br>
    </div>
    
    <div id="nav">
      List:      
      <router-link to="/list">LIst</router-link> 
      <hr><br>
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
  export default { }
</script>

<style>
  #app { color: #2c3e50; margin: 2em 2em 2em 2em; }
</style>