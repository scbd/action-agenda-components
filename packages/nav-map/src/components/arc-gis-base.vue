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
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
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

function data(){ return { map: undefined} }

const countries = new FeatureLayer({
    portalItem: {
      id: "53a1e68de7e4499cad77c80daba46a94"
    }
});
const worldImagery = new TileLayer({
    portalItem: {
      id: "10df2279f9684e4a9f6a7f08febac2a9" // world imagery
    }
});
worldImagery.when(() => {
          worldImagery.sublayers.forEach((layer) => {
            if (layer.popupEnabled === true) {
              layer.popupEnabled = false;
            }
          });
});
const graphicsLayer = new GraphicsLayer({
    blendMode: "destination-in",
    title: "layer"
});
const tileLayer = new TileLayer({
    portalItem: {
      id: "10df2279f9684e4a9f6a7f08febac2a9" // world imagery
    }
});
tileLayer.when(() => {
    tileLayer.sublayers.forEach((layer) => {
        if (layer.popupEnabled === true) {
          layer.popupEnabled = false;
      }
  });
});
const groupLayer = new GroupLayer({
    layers: [
      tileLayer,
      graphicsLayer
    ],
    opacity: 0 // initially this layer will be transparent
});



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
    // this.map  = new Map({ basemap });
    this.map = new Map({
      basemap:basemap,
      layers: [worldImagery, groupLayer]
    });

}

function mounted(){

  // const layer = new MapImageLayer({ url: "https://geoservices.un.org/arcgis/rest/services/ClearMap_Dark/MapServer" })

  // this.map.add(layer)

  this.mapView = new MapView({
      container: 'mapView',
      map: this.map,
      zoom: 6,
      center: [2, 46],
      popup: null,
      constraints: {
        snapToZoom: false,
        minScale: 147914381
      }
    });

  Intl.setLocale("ru")


  console.log('this.mapView', this.mapView.when)
    
// console.log('this.mapView11',this.mapView)
    this.mapView.when(()=>{
      this.mapView.graphics.add(getCircleMarker(100, this.mapView))
      const query = {
        geometry: this.mapView.center,
        returnGeometry: true,
        outFields: ["*"]
          };
      highlightCountry(query, this.mapView.center);
    })

    this.mapView.on("click", async (event) => {
      const query = {
        geometry: this.mapView.toMap(event),
        returnGeometry: true,
        outFields: ["*"]
      };
      highlightCountry(query, query.geometry);
    });


async function highlightCountry(query, zoomGeometry){
  
  const symbol = {
    type: "simple-fill",
    color: "rgba(255, 255, 255, 1)",
    outline: null
  }

  // query the countries layer for a country that intersects the clicked point
  const {
      features: [feature]
    } = await countries.queryFeatures(query);
    // user clicked on a country and the feature is returned
    if (feature) {
      graphicsLayer.graphics.removeAll();
      feature.symbol = symbol;
      // add the country to the graphics layer
      graphicsLayer.graphics.add(feature);
      // zoom to the highlighted country
      this.mapView.goTo(
        {
          target: zoomGeometry,
          extent: feature.geometry.extent.clone().expand(1.8)
        },
        { duration: 1000 }
      );
      // blur the world imagery basemap so that the clicked country can be highlighted
      worldImagery.effect = "blur(8px) brightness(1.2) grayscale(0.8)";
      // set the group layer opacity to 1
      // also increase the layer brightness and add drop-shadow to make the clicked country stand out.
      groupLayer.effect = "brightness(1.5) drop-shadow(0, 0px, 12px)";
      groupLayer.opacity = 1;
    }
    // did not click on a country. remove effects
    else {
      worldImagery.effect = null;
      groupLayer.effect = null;
    }
}

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