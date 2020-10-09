<template>
  <div class="chart" ref="pie" :style="style"/>
</template>

<script>
import * as am4core       from '@amcharts/amcharts4/core';
import * as am4charts     from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';


am4core.useTheme(am4themes_animated);

export default {
  name : 'Chart',
  props: {
    data   : { type: Array, required: false  },
    options: { type: Object, required: false  }
  },
  mounted,
  computed: { style },
  data,
  beforeDestroy,
  watch   : {
    data(newData){
      if (!Array.isArray(newData)) return

      this.chart.data = this.data
      this.chart.invalidateData()
    }
  }
}
function data(){
  return {
    chart: null
  }
}

function beforeDestroy(){ dispose(this.map); }
function dispose(map){ if (map && map.dispose) map.dispose(); }

function mounted(){
  this.chart      = am4core.createFromConfig(this.options.config, this.$refs.pie, am4charts.PieChart)
  this.chart.data = this.data
}

function style(){
  return {
    height: this.options.height || '450px'
  }
}
</script>

<style scoped>
  .chart{
    width: 100%;
  }
  .debug{
    border: 1px solid red;
  }
</style>
