<template>
  <div id="app">
    <link rel="stylesheet" href="https://s3.amazonaws.com/phoenix.www.cbd.int/themes/custom/bootstrap_sass/css/style.css" />
    <Icons/>
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
    <!-- <div id="nav">
      List:      
      <router-link to="/list">List</router-link> |
      <hr><br>
    </div> -->
      <!-- <div id="nav">
      Child Components: 
      <router-link to="/component/scbdselect">Scbd Select</router-link> |
      <router-link to="/component/entityselect">Entity Select</router-link> |
      <router-link to="/component/links">Links</router-link> |
      <router-link to="/component/AAContact">AAContact</router-link> |
      <router-link to="/component/AAOrganization">AAOrganization</router-link> |
    </div> -->
  
    
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
import Icons from "./components/Icons";

export default {
    components:{Icons}
}
</script>




<style>
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
    color: #2c3e50;
    margin: 2em 2em 2em 2em;
  }

  /* @import url("//s3.amazonaws.com/phoenix.www.cbd.int/themes/custom/bootstrap_sass/css/style.css"); */
/* 
  @import url("//s3.amazonaws.com/phoenix.www.cbd.int/themes/custom/bootstrap_sass/css/style.css");
  @import url("//s3.amazonaws.com/phoenix.www.cbd.int/themes/contrib/bootstrap_barrio/css/components/form.css"); */
</style>