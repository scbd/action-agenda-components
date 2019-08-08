import '@babel/polyfill' // TODO install each polyfill needed to IE9 instead
import EmbedComp from '@modules/SelfEmbedComponent'

const VERSION       = process.env.VUE_APP_VERSION
const COMP_CSS_URL  = `https://s3.amazonaws.com/scbd-components/${process.env.NODE_ENV}/action-agenda/action-list/actionList.css?version=${VERSION}`
const COMP_JS_URL   = `https://s3.amazonaws.com/scbd-components/${process.env.NODE_ENV}/action-agenda/action-list/actionList.umd.min.js?version=${VERSION}`


const options = {
  compName          : 'actionList', //required
  scriptDependancies: [COMP_JS_URL], // required comp to load
  cssDependancies   : [COMP_CSS_URL],
}

EmbedComp.setOptions(options)