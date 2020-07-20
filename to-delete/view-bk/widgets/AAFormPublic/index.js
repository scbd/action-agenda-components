import '@babel/polyfill'
import EmbedComp from '@modules/SelfEmbedComponent'

const VERSION              = process.env.VUE_APP_VERSION
const SCBD_CMS_JS_HACK_URL = `https://s3.amazonaws.com/scbd-components/action-agenda/action-form/ajaxscript-4.4.0.min.js?version=${VERSION}`
const COMP_CSS_URL         = `https://s3.amazonaws.com/scbd-components/${process.env.NODE_ENV}/action-agenda/action-form/actionForm.css?version=${VERSION}`
const COMP_JS_URL          = `https://s3.amazonaws.com/scbd-components/${process.env.NODE_ENV}/action-agenda/action-form/actionForm.umd.min.js?version=${VERSION}`

const AA_FORM_OPTS = {
  label:false,
  actionDetails:{      
    operationalAreas: true,
    thematicAreas   : true,
    aichiTargets    : true,
    sdgs            : true,
    progressMeasured: true
  },
  contacts     : true,
  partners     : true,
  anonymous    : true,
  accountSignup: true,
  mailingList  : { list:'action-agenda', tags:['public'] }, 
}

const options = {
  compName          : 'actionForm', //required
  scriptDependancies:[SCBD_CMS_JS_HACK_URL,COMP_JS_URL], // required comp to load
  cssDependancies   :[COMP_CSS_URL],
  propsData         : {formType:'public',options:AA_FORM_OPTS} // props for comp
}

EmbedComp.setOptions(options)