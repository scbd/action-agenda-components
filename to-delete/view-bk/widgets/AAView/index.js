import '@babel/polyfill'
import 'url-search-params-polyfill'
import EmbedComp from '@modules/SelfEmbedComponent'

const VERSION       = process.env.VUE_APP_VERSION
const COMP_CSS_URL  = `https://s3.amazonaws.com/scbd-components/${process.env.NODE_ENV}/action-agenda/action-view/actionView.css?version=${VERSION}`
const COMP_JS_URL   = `https://s3.amazonaws.com/scbd-components/${process.env.NODE_ENV}/action-agenda/action-view/actionView.umd.min.js?version=${VERSION}`


const options = {
  compName          : 'actionView', //required
  scriptDependancies: [COMP_JS_URL], // required comp to load
  cssDependancies   : [COMP_CSS_URL],
}

EmbedComp.setOptions(options)
