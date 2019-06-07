<template>
  <section>
    <div class="container-fluid">
      <div id="am-graph" class="debug"></div>
    </div>
  </section>
</template>
<script>
import * as core from "@amcharts/amcharts4/core";
import * as charts from "@amcharts/amcharts4/charts";
import am4themes_animated  from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import * as forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import Vue from 'vue'
core.useTheme(am4themes_dark);
core.useTheme(am4themes_animated);
const themesAnimated = am4themes_animated 
const themesDark = am4themes_dark
Vue.prototype.$am4 =  {

  core,
  charts,
  themesAnimated,
  themesDark,
  forceDirected

}

export default {
  data,
  methods: { createGraph },
  mounted
};
const graphData = [
  {
    name: "[font-size: 40px; font-weight:bold;]Vision \n 2050[/]",
    value: 5000,
    color:'#74f274',
    children: [
      {
        name: "[font-size: 30px; font-weight:bold;]2030 \nAgenda[/]",
        color: "#dc67ce",
        value: 4000,
        color:'#e9d629',
        children: [
          {
            name: "2021-2030 \ngoals and \ntargets achieved",
            value: 3500,
            distance: 1000,
            color: "#a367dc",
            children: [
              { name: "Land degradation \nreduced", value: 3500 ,color: "#a367dc"},
              {
                name: "Climate change \nadaption \nand\n mitigation",
                value: 3500,
                color: "#a367dc"
              },
              {
                name: "Goal: \nBio Value",
                value: 3000,
                id: "gbv",
                link: ["gbwu", "tsv"],
                color: "#a367dc"
              },

              {
                name: "Goal: \nBio Wisely used",
                value: 3000,
                id: "gbwu",
                color: "#a367dc",
                link: ["gbv", "gbc", "tswu"]
              },

              {
                name: "Goal: \nBio Conserved",
                value: 3000,
                id: "gbc",
                color: "#a367dc",
                link: ["gbwu", "gbcr", "tsc"]
              },

              {
                name: "Goal: \nBio Restored",
                value: 3000,
                id: "gbcr",
                link: ["gbc", "tsc"],
                color: "#a367dc"
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "matna",
    name:
      "[font-size: 14px; font-weight:bold;]  Most Aichi\n Biodiversity\n targets\n not achieved[/]",
    value: 4000,
    color: "#e23474",
    children: [
      {
        id: "losaldi",
        name:
          "[font-size: 14px; font-weight:bold;]Baseline: \nLoss of species,\n ecosystem and\n land degradation\n increasing[/]",
        value: 4000,
        link: ["p2020bf"],
        color:'#c234e2',
        children: [
          {
            id: "p2020bf",
            name:
              "[font-size: 18px; font-weight:bold;]Post 2020 \nBiodiversity \nFramework[/]",
            value: 5000,
            color: "#dfc8f4",
            children: [
              {
                name: "[font-size: 11px; font-weight:bold;]Target/sub-targets: \nRestoration[/]",
                value: 3000,
                id: "tsc",
                link: ["gbwu", "gbv", "gbc", "gbcr"],
                color: "#dfc8f4"
              },
              {
                name: "[font-size: 11px; font-weight:bold;]Target/sub-targets: \nConservation[/]",
                value: 3000,
                id: "tsc",
                link: ["gbwu", "gbv", "gbc", "gbcr"],
                color: "#dfc8f4"
              },
              {
                name: "[font-size: 11px; font-weight:bold;]Target/sub-targets:\n Wise use[/]",
                value: 3000,
                id: "tswu",
                link: ["gbwu", "gbv", "gbc", "gbcr"],
                color: "#dfc8f4"
              },
              {
                name: "[font-size: 11px; font-weight:bold;]Target/sub-targets: \nValuation[/]",
                value: 3000,
                id: "tsv",
                link: ["gbwu", "gbv", "gbc", "gbcr"],
                color: "#dfc8f4"
              }
            ]
          }
        ]
      }
    ]
  }
];

function mounted() {
  this.createGraph();
  console.log("this.chartthis.chart", this.chart);
}
function createGraph() {
  console.log(this.$am4);
  this.chart = this.$am4.core.create(
    "am-graph",
    this.$am4.forceDirected.ForceDirectedTree
  );
  this.networkSeries = this.chart.series.push(
    new this.$am4.forceDirected.ForceDirectedSeries()
  );

  this.chart.data = this.data;

  this.networkSeries.dataFields.value = "value";
  this.networkSeries.dataFields.name = "name";
  this.networkSeries.dataFields.children = "children";
  this.networkSeries.dataFields.linkWith = "link";
  this.networkSeries.dataFields.id = "id";

  this.networkSeries.dataFields.color = "color";

  this.networkSeries.nodes.template.outerCircle.fill = "#ffffff";
  this.networkSeries.nodes.template.tooltipText = "{name}";
  this.networkSeries.nodes.template.fillOpacity = 1;
  this.networkSeries.manyBodyStrength = -15;
  this.networkSeries.links.template.strength = 0.8;
  this.networkSeries.minRadius = this.$am4.core.percent(2);
  this.networkSeries.links.template.distance = 2;
  this.networkSeries.nodes.template.label.text = "[font-weight:bold;color:#222222;]{name}[/]";
  this.networkSeries.fontSize = 12;
 
}
function data() {
  return {
    data: graphData,
    chart: {},
    networkSeries: {}
  };
}
</script>

<style>
.container {
  min-height: 100vh;
  min-width: 100%;

  justify-content: center;
  align-items: center;
  text-align: center;
  color:#000
}

#am-graph {
  width: 100%;
  height: 95vh;
}
.debug {
  border: red solid 1px;
}
</style>
