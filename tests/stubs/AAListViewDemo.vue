<template>
  <div class="container">

    <AAHorzList />

  </div>
</template>

<script>
import AAHorzList from "../../src/components/AAList/index";
import actions from './actions'

export default {
  name: "AAList",
  components: {
    AAHorzList
  },
  props: {
    dataFn: {
      type: Function,
    }
  },
  data() {
    return {
      data: ()=>{return actions}
    };
  },
  mounted() {
    this.data = this.dataFn({ page: 0, pageLength: 20 });
  }
};
</script>
<style>
/* @import url("//s3.amazonaws.com/phoenix.www.cbd.int/themes/custom/bootstrap_sass/css/style.css"); */
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
