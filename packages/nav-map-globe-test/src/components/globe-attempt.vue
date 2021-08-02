<template>
  <div id="mapView">

  </div>
</template>

<script>
import                                          "@arcgis/core/assets/esri/themes/dark/main.css"
// import WebMap from                              "@arcgis/core/WebMap"                          
// import MapView from "@arcgis/core/views/MapView"
import SceneView from "@arcgis/core/views/SceneView"
import Map from "@arcgis/core/Map"
// import { load as projectionLoad, project } from "@arcgis/core/geometry/projection"             
import config from                              "@arcgis/core/config"
//import MapImageLayer from '@arcgis/core/layers/MapImageLayer'
import TileLayer from "@arcgis/core/layers/TileLayer"
// import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import Basemap from '@arcgis/core/Basemap'
// import ElevationLayer from '@arcgis/core/layers/ElevationLayer'
// import BaseElevationLayer from '@arcgis/core/layers/BaseElevationLayer'

// import  SpatialReference from '@arcgis/core/geometry/SpatialReference'
// import Graphic from '@arcgis/core/Graphic'
// import Point from '@arcgis/core/geometry/Point'
// import Mesh from '@arcgis/core/geometry/Mesh'
// import watchUtils from '@arcgis/core/watchUtils'


const key = "AAPK646a81c542644891abe68e9b21413e7d9MDczfDifZi8IyvG6QcxfFuNqSRmlqH95-PH9mBOSEf4a4eE2Nwt8wIRsBLWd4NO"

export default {
  name: 'ArcGisMapBase',
  data, mounted
}

function data(){
  return { map: undefined }
}
function mounted(){
  config.apiKey = key

  //const R                = 6358137 // approximate radius of the Earth in m
  //const offset           = 300000 // offset from the ground used for the clouds
  // const spatialReference = new SpatialReference({ wkid: 3857 })


  // function load(){
  //   this.spatialReference = spatialReference
  // }
  //const whenBaseTileLayer = () => console.log('when')
  //const baseTileLayer     = (new TileLayer({ url: "https://geoservices.un.org/arcgis/rest/services/ClearMap_Dark/MapServer"})) //https://geoservices.un.org/arcgis/rest/services/ClearMap_Dark/MapServer
                            //.then(whenBaseTileLayer)
                            // baseTileLayer.spatialReference = spatialReference
// console.log(baseTileLayer)
// console.log(spatialReference)
        // const ExaggeratedElevationLayer = BaseElevationLayer.createSubclass({
        //   properties: { exaggerationTopography: null, exaggerationBathymetry: null },

        //   load: function() {
        //     this._elevation = new ElevationLayer({ url: "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer", })
        //     this.addResolvingPromise(this._elevation.load())
        //   },

        //   fetchTile: function(level, row, col) {
        //     return this._elevation.fetchTile(level, row, col).then(
        //       function(data) {
        //         for (let i = 0; i < data.values.length; i++) {
        //           if (data.values[i] >= 0) {
        //             data.values[i] =
        //               data.values[i] * this.exaggerationTopography
        //           } else {
        //             data.values[i] =
        //               data.values[i] * this.exaggerationBathymetry
        //           }
        //         }
        //         return data
        //       }.bind(this)
        //     )
        //   },
        // })


        const basemap = new Basemap({
          // baseLayers: [ baseTileLayer ], 
          baseLayers: [ new TileLayer({ url: "https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/terrain_with_heavy_bathymetry/MapServer", }), ],//https://geoservices.un.org/arcgis/rest/services/ClearMap_Dark/MapServer
          // ground: {
          //   layers: [ new ExaggeratedElevationLayer({ exaggerationBathymetry: 60, exaggerationTopography: 40 }) ],
          // },
        })        
        

  // const layer = new MapImageLayer({ url: "https://geoservices.un.org/arcgis/rest/services/ClearMap_Dark/MapServer" })

        const map = new Map({
           basemap: basemap,
          // ground: {
          //   layers: [
          //     new ExaggeratedElevationLayer({
          //       exaggerationBathymetry: 60,
          //       exaggerationTopography: 40,
          //     }),
          //   ],
          // },
        })
        // map.spatialReference = spatialReference
console.log('map.basemap.spatialReference',map)
// map.add(layer)
    const view = new SceneView({
          container: "mapView",
          map: map,
          alphaCompositingEnabled: true,
          qualityProfile: "high",
          viewingMode: "global",
          camera: {
            position: [-55.03975781, 14.94826384, 19921223.30821],
            heading: 2.03,
            tilt: 0.13,
          },
          environment: {
            background: { type: "color", color: [255, 252, 244, 0], },
            starsEnabled: false,
            atmosphereEnabled: false,
            lighting: {
              directShadowsEnabled: false,
              date:
                "Sun Jun 23 2019 19:19:18 GMT+0200 (Central European Summer Time)",
            },
          },
          constraints: {
            altitude: { min: 10000000, max: 25000000, },
          },
          popup: {
            dockEnabled: true,
            dockOptions: { position: "top-right", breakpoint: false, buttonEnabled: false, },
            collapseEnabled: false,
          },
          highlightOptions: { color: [255, 255, 255], haloOpacity: 0.5, },
          // spatialReference
        })
console.log(view)
//  const origin = new Point({ x: 0, y: -90, z: -(2 * R), })

        // const oceanSurfaceMesh = Mesh.createSphere(origin, {
        //   size: {
        //     width: 2 * R,
        //     depth: 2 * R,
        //     height: 2 * R,
        //   },
        //   densificationFactor: 5,
        //   material: {
        //     color: [0, 210, 210, 0.8],
        //     metallic: 0.9,
        //     roughness: 0.8,
        //     doubleSided: false,
        //   },
        // })

        // const oceanSurface = new Graphic({
        //   geometry: oceanSurfaceMesh,
        //   symbol: {
        //     type: "mesh-3d",
        //     symbolLayers: [
        //       {
        //         type: "fill",
        //       },
        //     ],
        //   },
        // })

        // view.graphics.add(oceanSurface)

        // const cloudsSphere = Mesh.createSphere(
        //   new Point({
        //     x: 0,
        //     y: -90,
        //     z: -(2 * R + offset)
        //   }),
        //   {
        //     size: 2 * (R + offset),
        //     material: {
        //       colorTexture: "https://raw.githubusercontent.com/RalucaNicola/the-globe-of-extremes/master/clouds-nasa.png",
        //       doubleSided: false
        //     },
        //     densificationFactor: 4
        //   }
        // );

        // cloudsSphere.components[0].shading = "flat";

        // const clouds = new Graphic({
        //   geometry: cloudsSphere,
        //   symbol: {
        //     type: "mesh-3d",
        //     symbolLayers: [{ type: "fill" }]
        //   }
        // });

        // view.graphics.add(clouds);

        // let isPlaying = true;

        // view.when(function() {
        //   watchUtils.whenFalseOnce(view, "updating", rotate)
        // });

        // function rotate() {
        //   if (isPlaying) {
        //     const camera = view.camera.clone()
        //     camera.position.longitude -= 0.2
        //     view.goTo(camera, { animate: false })
        //     requestAnimationFrame(rotate)
        //   }
        // }

  // this.map    = new Map({  });

  // const layer = new MapImageLayer({ url: "https://geoservices.un.org/arcgis/rest/services/ClearMap_Dark/MapServer" })

  // this.map.add(layer)

  // this.view = new SceneView({ map: this.map, container: 'mapView',
  // // zoom: 64,

  //         viewingMode: "global",
  //         qualityProfile: "high",
  //         environment: {
  //           background: {
  //             type: "color",
  //             color: [255, 255, 255, 1]
  //           },
  //           starsEnabled: false,
  //           atmosphereEnabled: false
  //         }
  //       });
}
</script>
<style scoped>
 #mapView {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        background: radial-gradient(#91c7e3, #3d93bf);
      }
</style>