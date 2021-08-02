<template>
  <div id="scbd-map-nav" style="position:relative; width:100%">
    <Icons />
    <PopOver  v-if="hasPopOver && selectedCountry && map" :country="selectedCountry" :options="map.options" />
    <div class="cont" ref='map'></div>
  </div>
</template>

<script>
import { MapBuilder } from './builder.js'
import { Mixin      } from '@scbd/amc4-base-map/dist/es/index.mjs'
import   getOptions   from './options.js'
import   PopOver      from './modal/index.vue'
import   Icons        from '@action-agenda/icons/dist/esm/index.mjs'

// import '@action-agenda/icons/dist/esm/index.min.mjs.css'

export default {
  name       : 'ActionAgendaMap',
  props      : {
    options: { type: Object, default: () => ({}) }
  },
  components : { PopOver, Icons },
  mixins     : [ Mixin ],
  methods    : { constructMap },
  computed   : { hasPopOver },
  data, mounted
}

function data(){
  return { selectedCountry: undefined, map: undefined, opts: {} }
}
async function mounted (){
  this.opts = { ...(await getOptions()), ...this.options }
  
  this.constructMap()
}


function hasPopOver(){
  return this.opts.modal
}

function constructMap(){
  this.map = new MapBuilder(this.$refs.map, this.opts)

  window.document.addEventListener('countrySelected', (e) => { this.selectedCountry=e.detail })
}
</script>

<style scoped>
#scbd-map-nav{ background-color: #BBDEFB;}
.cont { width: 100%; height: 450px; }
</style>
<style src="@action-agenda/icons/dist/esm/index.min.mjs.css">

</style>