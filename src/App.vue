<template>
  <div id="app">
    <link rel="stylesheet" href="https://s3.amazonaws.com/phoenix.www.cbd.int/themes/custom/bootstrap_sass/css/style.css" />
    <Icons/>
    <div id="nav">
      Views:      

      <router-link to="/aaform">AAForm</router-link> |
      <router-link to="/aalistview">AAListView</router-link> |
      <router-link to="/aaview">AAView</router-link> |
    </div>
      <!-- <div id="nav">
      Child Components: 
      <router-link to="/component/scbdselect">Scbd Select</router-link> |
      <router-link to="/component/entityselect">Entity Select</router-link> |
      <router-link to="/component/links">Links</router-link> |
      <router-link to="/component/AAContact">AAContact</router-link> |
      <router-link to="/component/AAOrganization">AAOrganization</router-link> |
    </div> -->
    <hr><br>
    <router-view/>
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