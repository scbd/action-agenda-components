import Graphic             from '@arcgis/core/Graphic'
import PictureMarkerSymbol from '@arcgis/core/Graphic'

const generateSVGURL = (number) => {
  const prefix = 'data:image/svg+xml;base64,'
  const svgStr = `${prefix}<svg xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25"/><text x="12.5" y="25" font-family="Verdana" font-size="13pt" fill="#fff" dy="0.35em">100${number}</text></svg>`

  return btoa(svgStr)
}

const getSymbol =  (number, { width, height } ) => new PictureMarkerSymbol({
  url: generateSVGURL(number),
  width, height
});

export default (number, { extent }, { width, height } = { width: 50, height: 50 }) => new Graphic({ symbol: getSymbol(number, { width, height }), geometry: extent.center })
