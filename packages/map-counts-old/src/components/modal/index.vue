<template>
  <div ref="modal" class="aa-modal shadow-sm" >
    <div @click="toggle"  class="toggle">
        <Icon name="cancel" class="fr" style="max-height: 25px; max-width: 25px;"/>
    </div>
    <div >
      <span>
        <strong v-if="country">{{ country.name }}</strong>, 
        <strong>{{ numberOfCommitments }}</strong> 
        {{ $tc('commitment', numberOfCommitments) }}
        {{ $t('madeBy') }} 
        <strong>{{ numberOfActors }}</strong> 
        {{ $tc('actor', numberOfActors) }}
      </span>
    </div>
    <div ref="pie" class="main-row "></div>

    <div>
      <!-- <div class="row">
        <div class="column1"><Icon name="info-outline" class="fl"/></div>
        <div class="column"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
      </div> -->

      <button @click="view" class="btn">
        {{ $t('view') }} {{ $tc('commitment', numberOfCommitments) }}
      </button>
    </div>
  </div>
</template>

<script>
import   messages                      from '../../locales/index.js'
import { Icon                        } from '@action-agenda/icons/dist/esm/index.js'
import { getActorTypesByCountry      } from '../api.js'
import { create, percent             } from '@amcharts/amcharts4/core'
import { getData, initializeApiStore } from '@action-agenda/cached-apis'
import { PieChart, PieSeries, Legend } from '@amcharts/amcharts4/charts'

import '@action-agenda/icons/dist/esm/index.min.mjs.css'

export default {
  name       : 'ActoinAgendaMapPopOver',
  components : { Icon },
  props      : {
                  country: { type: Object, required: true },
                  options: { type: Object, required: true }
                },
  methods    : { toggle, createChart, dispose, view },
  i18n       : { messages },
  data, mounted, beforeDestroy, errorCaptured
}

function data (){
  return { chart: null, numberOfCommitments: 0, numberOfActors: 0 }
}

async function mounted (){
  await initializeApiStore()
  await getData('all')

  const { countsData, numberOfCommitments, numberOfActors } = await getActorTypesByCountry(this.country.code)

  this.createChart({ countsData, numberOfCommitments, numberOfActors  })
}

function createChart({ countsData, numberOfCommitments, numberOfActors  }){
  this.numberOfCommitments = numberOfCommitments
  this.numberOfActors      = numberOfActors

  this.chart               = create(this.$refs.pie, PieChart)
  this.chart.minHeight     = '300px'

  const  pieSeries        = this.chart.series.push(new PieSeries())

  this.chart.radius = 70
  this.chart.labelsEnabled = false
  // this.chart.responsive.enabled = true;
  //pieSeries.chart.template.fontFamily = 'BenchNine, sans-serif'
  pieSeries.labelsEnabled = false
  pieSeries.autoMargins = false;
  pieSeries.paddingLeft = '5px'


  pieSeries.dataFields.value    = "count"
  pieSeries.dataFields.category = "name"
  pieSeries.labels.template.disabled = true
  this.chart.data               =  countsData;

  this.chart.innerRadius = percent(50);

  this.chart.legend = new Legend();
  this.chart.legend.position = 'right';
  // this.chart.legend.marginLeft = '-55px'
  this.chart.legend.labels.template.fontFamily = 'BenchNine, sans-serif'
}

function view(){
  const { basePath } = this.options

  window.location.href = `${basePath}?filter=${this.country.code.toLowerCase()}`
}

function toggle(){
  const isServer = typeof window === 'undefined'

  if(isServer) return

  const event = new CustomEvent('countrySelected', { detail: undefined })

  window.document.dispatchEvent(event)
  this.chart.dispose()
}

function beforeDestroy(){ dispose(this.chart) }
function dispose(chart){ if(chart && chart.dispose) chart.dispose(); }

function errorCaptured(err, vm){
  dispose(vm.$data.chart)
  console.error(err)
}
</script>

<style scoped>
  .aa-modal{
    font-family: -apple-system,BlinkMacSystemFont,segoe ui,Roboto,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    background: #fff; 
    opacity: .9;
    z-index: 1;
    min-width: 400px;
    max-width: 500px;
    /* min-height: 100%; */
    padding: 1rem 1rem 1rem 1rem;
  }
  .shadow-sm { box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important; }

  .fr{ float: right; }

  .fl{ float: left; }
  .row { display: flex; margin: 1em 0 1em 0 ;}

  .main-row {
    min-height: 200px;
    /* display: flex;  */
    margin: 1em 0 1em 0 ;
    /* flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto */
  }
  .column1 { flex: 5%; }
  .column { font-family: -apple-system,BlinkMacSystemFont,segoe ui,Roboto,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;  flex: 95%; }
  .btn{ 
    font-family: -apple-system,BlinkMacSystemFont,segoe ui,Roboto,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
    text-transform: capitalize;
    cursor: pointer;
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .toggle{ cursor: pointer; }
</style>
<style src="@action-agenda/icons/dist/esm/index.min.mjs.css">
</style>