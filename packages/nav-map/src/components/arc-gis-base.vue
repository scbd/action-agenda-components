<template>
  <div id="mapView">

  </div>
</template>

<script>
import                                          "@arcgis/core/assets/esri/themes/dark/main.css"
// import WebMap from                              "@arcgis/core/WebMap"                          
import MapView from "@arcgis/core/views/MapView"
// import SceneView from "@arcgis/core/views/SceneView"
import Map from "@arcgis/core/Map"
// import { load as projectionLoad, project } from "@arcgis/core/geometry/projection"             
import config from                              "@arcgis/core/config"
import MapImageLayer from '@arcgis/core/layers/MapImageLayer'
import * as Intl from '@arcgis/core/intl'
// import TileLayer from "@arcgis/core/layers/TileLayer"
// import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import Basemap from '@arcgis/core/Basemap'
// import ElevationLayer from '@arcgis/core/layers/ElevationLayer'
// import BaseElevationLayer from '@arcgis/core/layers/BaseElevationLayer'

// import  SpatialReference from '@arcgis/core/geometry/SpatialReference'
// import Graphic from '@arcgis/core/Graphic'
// import Point from '@arcgis/core/geometry/Point'
// import Mesh from '@arcgis/core/geometry/Mesh'
// import watchUtils from '@arcgis/core/watchUtils'

import getCircleMarker from './circle-markers.js'

const key    = "AAPK646a81c542644891abe68e9b21413e7d9MDczfDifZi8IyvG6QcxfFuNqSRmlqH95-PH9mBOSEf4a4eE2Nwt8wIRsBLWd4NO"


export default {
  name: 'ArcGisMapBase',
  data, created, mounted
}

function data(){ return { map: undefined } }
function created(){
  config.apiKey = key
  config.locale = 'ru'
  config.parseOnLoad = true
  //config.assetsPath = 'https://cdn.jsdelivr.net/npm/@arcgis/core@4.20.2/assets/'
  
 Intl.setLocale("ru")

 const baseTileLayer     = (new MapImageLayer({ url: "https://geoservices.un.org/arcgis/rest/services/ClearMap_Dark/MapServer"}))

const basemap = new Basemap({
  baseLayers: [ baseTileLayer ],
  //baseLayers: [ new TileLayer({ url: "https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/terrain_with_heavy_bathymetry/MapServer", }), ],

})
console.log(basemap)
  this.map  = new Map({ basemap });
}

function mounted(){


  // const layer = new MapImageLayer({ url: "https://geoservices.un.org/arcgis/rest/services/ClearMap_Dark/MapServer" })

  // this.map.add(layer)

  this.mapView = new MapView({ map: this.map, container: 'mapView',  zoom: 64 })

  Intl.setLocale("ru")


  console.log('this.mapView', this.mapView.when)
    
// console.log('this.mapView',this.mapView)
    this.mapView.when(()=>{

      this.mapView.graphics.add(getCircleMarker(100, this.mapView))
    })
}
</script>
<style scoped>
 #mapView {
        padding: 0;
        margin: 0;
        height: 100%;
        max-height: 450px;
        width: 50%;
        background-color: #232a35;
        /* background: radial-gradient(#91c7e3, #3d93bf); */
      }
</style>