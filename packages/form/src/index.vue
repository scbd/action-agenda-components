<template>
  <section id="aa-form">
    <Icons v-once/>
    <FormFeedback :error="error" :publish-requested="feedback.publishRequested" :has-slot="true" @deleteFeedback="deleteFeedback" >
    
        <form v-if="((actorType!=='party') || (actorType==='party' && me.isGov)) && !feedback.publishRequested" @submit="onSubmit"  novalidate>
<!--Actor line starts -->
          <legend v-if="config.label">{{ $t(`title.${actorType}`) }}</legend>
          <div class="card">
            <div class="card-body">
              <div class="mb-3" v-if="actorType" :type="actorType">
                
<!-- Organization code -->
  <div> <!-- excluded v-if="isSelectedType('organization')" to test the code-->
    <div class="row">
      <div class="col-12">
        <div class="form-group" :id="`group.${form.actor.actorType}.name`" >
          <label  :for="`${form.actor.actorType}.name`"> {{ $t(`Name of the lead organization`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${form.actor.actorType}.name`"
            type        ="text"
            v-model.trim="form.actor.name[$i18n.locale]"
            v-validate  ="'required|max:140'"
            :class      ="[ getValidationClass(`${form.actor.actorType}.name`) ]" 
            :name       ="`${form.actor.actorType}.name`"
            />
          <field-error-message :error="errors.collect(`${form.actor.actorType}.name`)"/>
        </div>
      </div>
    </div>

   <div class="row">

      <div class="col-lg-6">
        <div class="form-group" :id="`group.${form.actor.actorType}.url`" >
          <label  :for="`${form.actor.actorType}.url`">{{ $t('Website') }} </label>
          <input class="form-control" 
            @input="update"
            :id="`${form.actor.actorType}.url`"
            type="url"
            v-model.trim="form.actor.url"
            v-validate="'required|url'"
            :class   ="[ getValidationClass(`${form.actor.actorType}.url`) ]" 
            :name="`${form.actor.actorType}.url`"
          />
          <field-error-message :error="errors.collect(`${form.actor.actorType}.url`)" :state="validateState(`${form.actor.actorType}.url`)" />
        </div>
      </div>
     <div class="col-lg-6">
        <div class="form-group" :id="`group.${form.actor.actorType}.image`" l>
          <label :for="`${form.actor.actorType}.image`"> {{$t(`Logo`)}} </label>
            <Links
            @input="update"
            :id="`${form.actor.actorType}.image`"
            v-model="form.actor.image"
            :type="['files','links']"
            :multi='false'
            :name="`${form.actor.actorType}.image`"/>
        </div>
      </div>
    </div>
 
    <div class="row">
      <div class="col-lg-6">

        <div class="form-group" :id="`group.${form.actor.actorType}.country`">
          <label  :for="`${form.actor.actorType}.country`">{{ $t(`Country`) }} </label>
          <SCBDSelect
            @input="update"
            type="countries"
            :id="`${form.actor.actorType}.country`"
            v-model="form.actor.country"
            tag-view
            v-validate="'required'"
            :state   ="[ getValidationClass(`${form.actor.actorType}.country`) ]" 
            :name="`${form.actor.actorType}.country`"
          />
          <field-error-message :error="errors.collect(`${form.actor.actorType}.country`)" :state="validateState(`${form.actor.actorType}.country`)" />
        </div>
      </div>
   <div class="col-lg-6">
        <div class="form-group" :id="`group.${form.actor.actorType}.types`" >
          <label  :for="`${form.actor.actorType}.types`">{{ $t(`Type`) }}  </label>
          <SCBDSelect
            @input="update"
            type="orgTypes"
            :id="`${form.actor.actorType}.types`"
            v-model="form.actor.types"
            multi
            tag-view
            v-validate="'required'"
            :state   ="[ getValidationClass(`${form.actor.actorType}.types`) ]"
            :name="`${form.actor.actorType}.types`"
          />
          <field-error-message :error="errors.collect(`${form.actor.actorType}.types`)" :state="validateState(`${form.actor.actorType}.types`)" />
        </div>
      </div>

      <div class="col-6" v-if="isOther">
        <div class="form-group" :id="`group.${form.actor.actorType}.typeOther`" >
          <label  :for="`${form.actor.actorType}.typeOther`">{{ $t(`Other Type`) }} </label>
          <input class="form-control"
            @input="update"
            :id="`${form.actor.actorType}.typeOther`"
            type="text"
            v-model.trim="form.actor.typeOther[$i18n.locale]"
            v-validate="'required|max:140'"
            :class   ="[ getValidationClass(`${form.actor.actorType}.typeOther`) ]"
            :name="`${form.actor.actorType}.typeOther`"
          />
          <field-error-message :error="errors.collect(`${form.actor.actorType}.typeOther`)" :state="validateState(`${form.actor.actorType}.typeOther`)" />
        </div>
      </div>  

    </div>  
  </div>
<!-- Organization code end -->

<!-- Public code -->
  <div v-if="isSelectedType('public')">
    <div class="row">
      <div class="col-12">
        <div class="form-group" :id="`group.${form.actor.actorType}.name`" >
          <label  :for="`${form.actor.actorType}.name`"> {{ $t(`Name of the lead public organization`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${form.actor.actorType}.name`"
            type        ="text"
            v-model.trim="form.actor.name[$i18n.locale]"
            v-validate  ="'required|max:140'"
            :class      ="[ getValidationClass(`${form.actor.actorType}.name`) ]" 
            :name       ="`${form.actor.actorType}.name`"
            />
          <field-error-message :error="errors.collect(`${form.actor.actorType}.name`)"/>
        </div>
      </div>
    </div>

    <div class="row">

      <div class="col-lg-6">
        <div class="form-group" :id="`group.${form.actor.actorType}.url`" >
          <label  :for="`${form.actor.actorType}.url`">{{ $t('Website') }} </label>
          <input class="form-control" 
            @input="update"
            :id="`${form.actor.actorType}.url`"
            type="url"
            v-model.trim="form.actor.url"
            v-validate="'required|url'"
            :class   ="[ getValidationClass(`${form.actor.actorType}.url`) ]" 
            :name="`${form.actor.actorType}.url`"
          />
          <field-error-message :error="errors.collect(`${form.actor.actorType}.url`)" :state="validateState(`${form.actor.actorType}.url`)" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group" :id="`group.${form.actor.actorType}.image`" l>
          <label :for="`${form.actor.actorType}.image`"> {{$t(`Logo`)}} </label>
            <Links
            @input="update"
            :id="`${form.actor.actorType}.image`"
            v-model="form.actor.image"
            :type="['files','links']"
            :multi='false'
            :name="`${form.actor.actorType}.image`"/>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">

        <div class="form-group" :id="`group.${form.actor.actorType}.country`">
          <label  :for="`${form.actor.actorType}.country`">{{ $t(`Country`) }} </label>
          <SCBDSelect
            @input="update"
            type="countries"
            :id="`${form.actor.actorType}.country`"
            v-model="form.actor.country"
            tag-view
            v-validate="'required'"
            :state   ="[ getValidationClass(`${form.actor.actorType}.country`) ]" 
            :name="`${form.actor.actorType}.country`"
          />
          <field-error-message :error="errors.collect(`${form.actor.actorType}.country`)" :state="validateState(`${form.actor.actorType}.country`)" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group" :id="`group.${form.actor.actorType}.types`" >
          <label  :for="`${form.actor.actorType}.types`">{{ $t(`Type`) }}  </label>
          <SCBDSelect
            @input="update"
            type="govTypes"
            :id="`${form.actor.actorType}.types`"
            v-model="form.actor.types"
            multi
            tag-view
            v-validate=""
            :state   ="[ getValidationClass($t(`${form.actor.actorType}.types`)) ]"
            :name="$t(`${form.actor.actorType}.types`)"
          />
          <field-error-message :error="errors.collect($t(`${form.actor.actorType}.types`))" :state="validateState($t(`${form.actor.actorType}.types`))" />
        </div>
      </div>

      <div class="col-6" v-if="isOther">
        <div class="form-group" :id="`group.${form.actor.actorType}.typeOther`" >
          <label  :for="`${form.actor.actorType}.typeOther`">{{ $t(`Other Type`) }} </label>
          <input class="form-control"
            @input="update"
            :id="`${form.actor.actorType}.typeOther`"
            type="text"
            v-model.trim="form.actor.typeOther[$i18n.locale]"
            v-validate="'required|max:140'"
            :class   ="[ getValidationClass(`${form.actor.actorType}.typeOther`) ]"
            :name="`${form.actor.actorType}.typeOther`"
          />
          <field-error-message :error="errors.collect(`${form.actor.actorType}.typeOther`)" :state="validateState(`${form.actor.actorType}.typeOther`)" />
        </div>
      </div>

    </div>
  </div>
<!-- Public code end -->

<!-- Person code -->
    <div v-if="isSelectedType('person')">
    <div class="row" v-if="me.isAuthenticated">
      <div class="col-lg-12">

        <div  class="form-group" :id="`group.${form.actor.actorType}.name`" >
            <div class="form-check-inline">
              <input
                v-model="form.input.useAccount"
                :value="true"
                type="checkbox"
                id="`RadioInline`"
                name="RadioInline`"
                class="form-check-input"
                v-on:change="useAccountToggle()"
              >
              <label class="form-check-label align-text-bottom" for="`RadioInline`" >{{$t('Use your SCBD account profile data?')}}</label>
            </div>
          <hr>
        </div>
        
      </div>
    </div>

    <div class="row">
      <div class="col-lg-9">
            
        <div class="form-group" :id="`group.${form.actor.actorType}.name`" >
          <label  :for="`${form.actor.actorType}.name`"> {{ $t(`Name`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${form.actor.actorType}.name`"
            type        ="text"
            v-model.trim="form.actor.name[$i18n.locale]"
            v-validate  ="'required|max:140'"
            :class      ="[ getValidationClass(`${form.actor.actorType}.name`) ]"
            :name       ="`${form.actor.actorType}.name`"
            />
          <FieldErrorMessage :error="errors.collect(`${form.actor.actorType}.name`)"/>
        </div>

      </div>

      <div class="col-lg-3">

        <div class="form-group" :id="`group.${form.actor.actorType}.country`">
          <label  :for="`${form.actor.actorType}.country`">{{ $t(`Country`) }} </label>
          <SCBDSelect
            @input="update"
            type="countries"
            :id="`${form.actor.actorType}.country`"
            v-model="form.actor.country"
            tag-view
            v-validate="'required'"
            :state   ="[ getValidationClass(`${form.actor.actorType}.country`) ]" 
            :name="`${form.actor.actorType}.country`"

          />
          <field-error-message :error="errors.collect(`${form.actor.actorType}.country`)" :state="validateState(`${form.actor.actorType}.country`)" />
        </div>

      </div>

      <div class="col-lg-12">

        <div class="form-group" :id="`group.${form.actor.actorType}.email`" >
          <label  :for="`${form.actor.actorType}.email`"> {{ $t(`Email`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${form.actor.actorType}.email`"
            type        ="text"
            v-model.trim="form.actor.email"
            v-validate="'email|required'"
            :class   ="[ getValidationClass(`${form.actor.actorType}.email`) ]"
            :name       ="`${form.actor.actorType}.email`"
            />
          <FieldErrorMessage :error="errors.collect(`${form.actor.actorType}.email`)"/>
        </div>
      </div>
    </div>
    </div>

<!-- Person code end -->

              </div>  
            </div>
          </div>
          
<!-- Actor line end -->

          <div id="ss" class="text-right mb-3">
            <!-- :disabled="!this.userLoaded" -->
            <button type="submit" class="btn btn-primary" >{{$t('Submit')}}</button> &nbsp;
          </div>

        </form>
    </FormFeedback>

    <DebugForm v-if="true" :form="form" :error="error"/>
  </section>
</template>

<script>
import   i18n                 from './locales/index.js'
import   Vue                  from 'vue'
import   Icons                from '@action-agenda/icons'
import   axios                from 'axios'
import   consola              from 'consola'
import   FormMixin            from './components/form-mixin.js'
import   getDefaultOptions    from './default-options.js'
import   SCBDSelect           from './components/controls/SCBDSelect.vue'
import   Links                from './components/controls/Links/index.vue'
//import   HumanParser          from './components/controls/ActorSelect/humanparser'

import { camelCase          } from 'change-case'
import { initializeApiStore } from '@action-agenda/cached-apis'

//scbd controls
import   ActorSelect             from './components/controls/ActorSelect/index.vue'
import   FormFeedback            from './components/FeedbackList/index.vue'
import   Contact                 from './components/Contact.vue'
import   Action                  from './components/Action.vue'
import   ActionDetails           from './components/ActionDetails.vue'
import   ActionDetailsRequired   from './components/ActionDetailsRequired.vue'
import   Partners                from './components/Partners.vue'
import   getLocale               from './components/locale.js'
import { getAction             } from './components/api'

export default {
  name      : 'AAForm',
  mixins    : [ FormMixin ],
  props     : { 
                options : { type: Object, required: true}
              },
  components: { FormFeedback, ActorSelect, Action, ActionDetails, ActionDetailsRequired, Contact, Partners, SCBDSelect, Links, Icons,
                DebugForm: () => import('./components/DebugForm.vue') //async load of component ... only if needed
              },
  methods   : { addError, deleteFeedback, loadCaptcha, save, getRecaptchaToken, onSubmit, toggleSubscription, toggleAccountSignup, updateContacts, validate, isSelectedType, showImage, deleteLogo },
  computed  : { config, actionComplete, opts: config, isOther },
  data, 
  created,
  mounted,
  i18n
}

  function data (){

    const formType = (this.options || {}).formType || ((this.$route || {}).params || {}).type || 'organization'

    return {
      actorType : formType,
      DEBUG     : true,
      error     : {},
      feedback  : {
                    actorType       : formType,
                    publishRequested: false,
                    error           : ''
                  },
      input     : { subscription:true, type: null, person: {}, organization: {}, party: {}, public: {}  },
      values    : this.value,
      form      : {
                    actor         : {
                        salutation : {},
                        firstName  : {},
                        middleName : {},
                        lastName   : {},
                        suffix     : {},
                        name       : {},
                        email      : '',        
                        name     : {  },
                        url      : '',
                        image    : { url: '' },
                        types    : [],
                        country  : '',
                        typeOther: { },
                        actorType: ''
                    },
                      orgLogo : '', //temp holder for uploaded image
                      action        : {},
                      actionDetailsRequired   : {
                        aichiTargets          : [],
                        sdgs                  : [],
                        actionCategories      : [],
                        operationalAreas      : []
                        //progressMeasured      : { },
                        //thematicAreas         : []
                    },
                    actionDetails : {
                      thematicAreas : [],
                      progressMeasured : { }
                    },
                    partners      : [{ name: { } }],
                    contacts      : [  ],
                    subscription  : {},
                    accountSignup : new Date()
                  }
    }
}

function isOther(){
  if (!this.form.actor.types || !this.form.actor.types.length) return false

  for (let i = 0; i < this.form.actor.types.length; i++)
    if(this.form.actor.types[i].identifier === 'ORG-TYPE-OTHER')
      return true
    
  return false
}

function deleteLogo(){
  this.form.orgLogo = ''
  this.form.actor.organization.image = ''
  this.form.$refs.logo.reset()
}

function showImage({ srcElement }){
  if (srcElement.files && srcElement.files[0]){
    const reader = new FileReader()
    const self   = this

    reader.onload = (e) => {
      self.orgLogo = e.target.result
      self.$forceUpdate()
    }
    reader.readAsDataURL(srcElement.files[0])
  }
}

function isSelectedType(type) {
    if (this.input.type === type) return true;
    return false;
  }

async function created(){ 
  initializeApiStore() 
  
  const fetchQuery = getActionIdFromQuery()

  //console.log('fetchQuery', fetchQuery)
  //console.log('this.options',this.options)

  console.log('await getAction.get()',await getAction(this.opts))

  this.form = await getAction(this.opts)
  
  }

function getActionIdFromQuery(){
  if (typeof window === 'undefined') return false

  const urlParams = new URLSearchParams(location.search)

  return urlParams.get('identifier')
}

async function mounted(){
  this.toggleSubscription()
  await this.loadCaptcha()
}

async function loadCaptcha (){
  if(this.me && this.me.isAuthenticated) return

  const { VueReCaptcha } = await import('vue-recaptcha-v3')

  Vue.use(VueReCaptcha, {
    siteKey       : '6Lfj3pQUAAAAAKszUI1k4i9AceoyRNUd2G7tw74Y',
    loaderOptions : { useRecaptchaNet: true }
  })
}

function actionComplete(){
  const locale   = getLocale()
  const { name, description } = this.form.action

  if(!name || !description) return

  return name[locale] && description[locale]
}

function updateContacts(){
  if(this.actorType === 'person') this.form.contacts = [this.form.actor]
}

function config(){
  const propsOptions = this.options? this.options[this.actorType] || this.options : {}

  return getDefaultOptions(propsOptions)[this.actorType]
}

function validate(){
  try {
    const form = this.cleanForm(this.form)

    return axios.post(`${process.env.VUE_APP_API}/v2019/actions/validate`, form, {})
  }
  catch (err){
    if(err && err.response) this.feedback.error=err.response.data
    consola.error(err)
  }
}

async function save(){
  try {
    const form    = this.cleanForm(this.form)
    const options = await this.getRecaptchaToken(this.$baseReqOpts || {})
    const result  = await axios.post(`${this.opts.api}/v2019/actions`, form, options)

    this.feedback.publishRequested=true
    return result
  }
  catch (err){
    consola.error('', err)
    this.addError(err)
  }
}

async function getRecaptchaToken(options){
  if(!options.headers) options.headers = {}

  if(this.me.isAuthenticated) return options

  const token = await this.$recaptcha('action')

  if(token) options.headers['X-Captcha-Token'] = token
  
  return options
}

async function onSubmit(evt){
  evt.preventDefault()
  await this.$validator.validate()
  await this.$children.forEach(this.validateComponent)


  if(this.me.isAuthenticated) this.form.accountSignup = false
  setTimeout(() => {

  if(this.$validator.errors.items.length <=3) this.save()
  else this.addError(new Error(this.$t('Form submition is not valid, kindly review your input.')))

  }, 500)
}

function toggleSubscription(){
  if(!this.form.subscription || !this.actorType || !this.config.mailingList) return

  this.form.subscription = { list: this.config.mailingList.list, tags: this.config.mailingList.tags, requested: new Date()}
}

function toggleAccountSignup(){
  if(!this.form.accountSignup) return

  this.form.accountSignup = new Date()
}

function deleteFeedback({ index, type }){
  delete(this[type][index])
  this.$forceUpdate()
}

function addError(e){
  e.key = camelCase(e.message)
  if(!this.error[e.key])
    this.$set(this.error, [e.key],  e)
}
// <style lang="scss" >
  // *,
  // *::before,
  // *::after { box-sizing: border-box; }

//   #aa-form {
//     @import '@scbd/www-css/dist/scss/import-no-reboot';
//     font-family: 'BenchNine', sans-serif;
//     position: relative; width: 100%;

//     .stick{position: sticky;  z-index: 5; top: 0}
//     .card { margin-bottom:2em; }
//     .partner { background-color: rgba(0,0,0,.02); }
//     .desc { white-space: pre-wrap; }
//     .icon { margin-right: 1em; height: 24px; width: 24px; }
//     .item { margin-left:3em; }
//     .item span { margin-left:-3em; }
//     .item span:first-line { margin-left:0; }
//   }
// </style>
</script>

<style>
  .logo { max-height: 100px  }  
</style>
<style >
  @import url('https://cdn.cbd.int/vue-multiselect@2.1.6/dist/vue-multiselect.min.css');
</style>
<style >
  label::after { content: attr(data-req) ; color: red ; }
  .title-link{ color: black; font-weight: 500; }
  .party-auth{ padding: 0 2em 0 2em; }
  .account{ margin-top:-5px; margin-left:1.5em; }
  .debug { background-color:rgba(198, 17, 17, .5); }
  .alert{ position:relative; }
  input[type="file"]:focus { outline-width: 0; outline: none; outline-color: rgba(0, 0, 0, 0); }
  .multi-select-form-conrtol { padding: 0 0 0 0; min-height: 48px; border-radius: 5px; }
  .custom-control-label { color: unset; font-size: 13px; text-align: left; padding: 5px 10px; }
  .card { margin-bottom: 1.5em; /* background-color: #ddd; */ }
  label::after { content: attr(data-req) ; color: red ; }
</style>
