<template>
  <section id="aa-form">
    <Icons v-once/>
    <FormFeedback :error="error" :publish-requested="feedback.publishRequested" :has-slot="true" @deleteFeedback="deleteFeedback" >
        <form v-if="config && ((actorType!=='party') || (actorType==='party' && me.isGov)) && !feedback.publishRequested" @submit="onSubmit"  novalidate>

          <legend v-if="config.label">{{ $t(`title.${actorType}`) }}</legend>
          <div class="card">
            <div class="card-body">
              <ActorSelect v-if="actorType" class="mb-3"  v-model="form.actor" :type="actorType" @input="updateContacts"/>

              <legend >{{ $t(`Commitment`) }}</legend>

              <div class="card">
                <div class="card-body">
                  <Action class="mb-3" v-model="form.action" />
                </div>
              </div>

              <legend >{{ $t(`Commitment Linkages`) }}</legend>

              <div class="card">
                <div class="card-body">
                  <ActionDetailsRequired class="mb-3" v-model="form.actionDetails" />
                </div>
              </div>

              <Contact v-if="config.contacts" class="mb-3" v-model="form.contacts[0]"/>

              <div  class="row" v-if="config.mailingList">
                <div class="col-lg-12">
                      <div class="form-check-inline">
                        <input
                          v-model="input.subscription"
                          :value="false"
                          type="checkbox"
                          id="action.mailingList"
                          name="mailingList"
                          class="form-check-input"
                          v-on:change="toggleSubscription()"
                        />
                        <label class="form-check-label align-text-bottom" for="action.mailingList" >{{$t('Join our mailing list and receive updates on the Action Agenda.')}}</label>
                      </div>
                  <hr/>
                </div>
              </div>

            </div>
          </div>

          <section v-if="actionComplete">
            <legend>{{$t('Optional Information')}} - <a href="#ss" class="title-link">{{$t('Skip and')}}  <button class="btn btn-primary" type="submit" variant="primary">{{$t('Submit')}}</button></a></legend>
            <div class="card" v-if="actionComplete">
              <div class="card-body"> 

                <ActionDetails class="mb-3" v-if="actionComplete" v-model="form.actionDetails" :options="config.actionDetails"/>
                <Partners v-if="config.partners" v-model="form.partners" :label="$t('Partners')"/>

              </div>
            </div>
          </section>

          <div id="ss" class="text-right mb-3">
            <!-- :disabled="!this.userLoaded" -->
            <button type="submit" class="btn btn-primary" >{{$t('Submit')}}</button> &nbsp;
          </div>

        </form>
    </FormFeedback>

    <DebugForm v-if="false" :form="form" :error="error"/>
  </section>
</template>

<script>
import i18n from './locales/index.js'
import Vue        from 'vue'
import Icons      from '@action-agenda/icons'
import axios      from 'axios'
import consola    from 'consola'
import {camelCase} from 'change-case'
import { initializeApiStore } from '@action-agenda/cached-apis'
import FormMixin from './components/form-mixin.js'
import getDefaultOptions from './default-options.js'
//scbd controls
import ActorSelect   from './components/controls/ActorSelect/index.vue'
import FormFeedback  from './components/FeedbackList/index.vue'
import Contact       from './components/Contact.vue'
import Action        from './components/Action.vue'
import ActionDetails from './components/ActionDetails.vue'
import ActionDetailsRequired from './components/ActionDetailsRequired.vue'
import Partners      from './components/Partners.vue'
import getLocale from './components/locale.js'

export default {
  name      : 'AAForm',
  mixins    : [ FormMixin ],
  props     : { 
                options : { type: Object, required: true}
              },
  components: { FormFeedback, ActorSelect, Action, ActionDetails, ActionDetailsRequired, Contact, Partners, Icons,
                DebugForm: () => import('./components/DebugForm.vue') //async load of component ... only if needed
              },
  methods   : { addError, deleteFeedback, loadCaptcha, save, getRecaptchaToken, onSubmit, toggleSubscription, toggleAccountSignup, updateContacts, validate },
  computed  : { config, actionComplete, opts: config },
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
      input     : { subscription:true },
      form      : {
                    actor         : {},
                    action        : {},
                    actionDetails : {
                      aichiTargets     : [],
                      sdgs             : [],
                      actionCategories : [],
                      operationalAreas : [],
                      progressMeasured : { },
                      thematicAreas    : [],
                    },
                    partners      : [{ name: { } }],
                    contacts      : [  ],
                    subscription  : {},
                    accountSignup : new Date()
                  }
    }
}

function created(){ initializeApiStore() }

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
console.log('getDefaultOptions(propsOptions)[this.actorType]', getDefaultOptions(this.actorType))
  return getDefaultOptions(this.actorType)
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
