<template>
<FormFeedback :error="error" :publish-requested="publishRequested">
  





    <section  >



      <b-form v-if="(actorType!=='party') || (actorType==='party' && $me.isGov)" @submit="onSubmit"  novalidate>
      <legend>Action  </legend>
      <div class="card">
        <div class="card-body"> 
          <ActorSelect class="mb-3"  v-model="form.actor" :type="[actorType]" @input="updateContacts"/>
          <Action class="mb-3" v-model="form.action" :options="{label:'Action'}"/>
          <Contact class="mb-3" v-model="form.contacts[0]"/>

                  <div  class="row" v-if="config.mailingList">
          <div class="col-lg-12">
            <BFormRow >
              <BCol>
                <div class="form-check-inline">
                  <input
                    v-model="input.subscription"
                    :value="false"
                    type="checkbox"
                    id="`RadioInline`"
                    name="RadioInline`"
                    class="form-check-input"
                    v-on:change="toggleSubscription()">
                  <label
                    class="form-check-label align-text-bottom"
                    for="`RadioInline`"
                  >{{config.mailingList.msg}}</label>
                </div>
              </BCol>
              
            </BFormRow>
             <hr/>
          </div>
        </div>

        <div  v-if="!$me.isAuthenticated && config.accountSignup" class="row" >
          <div class="col-lg-12">
           
            <BFormRow >
              <BCol>
                <div class="form-check-inline">
                  <input
                    v-model="form.accountSignup"
                    :value="false"
                    type="checkbox"
                    id="`RadioInline`"
                    name="RadioInline`"
                    class="form-check-input"
                    v-on:change="toggleAccountSignup()"
                  >
                  <label class="form-check-label align-text-bottom" for="`RadioInline`" >
                    Create an account to access your action for edits or updates<br>
                  </label>
                </div>
              </BCol>
        
            </BFormRow>
             <!-- <small class="form-text text-muted account"> A reset password email will be sent to you.  You can do it manually after submition here: <a href="https://accounts.cbd.int/password/reset">accounts.cbd.int/password/reset</a>.</small> -->
              <hr/>
          </div>
        </div>
        </div>
      </div>

        

      <section v-if="actionComplete">
        <legend>Optional Information - <a href="#ss" class="title-link">Skip and SUBMIT</a></legend>
        <div class="card" v-if="actionComplete">
          <div class="card-body"> 
            <ActionDetails class="mb-3" v-if="actionComplete" v-model="form.actionDetails" :options="{label:'Action Details', subjects:config.subjects, operationalAreas:config.operationalAreas}"/>
            <Partners v-model="form.partners" label="Partners"/>
          </div>
        </div>
      </section>

        <div id="ss" class="text-right">
          <BButton type="submit" variant="primary">Submit</BButton>&nbsp;
        </div>
      </b-form>

       <!-- <div class="alert alert-danger" v-if="error">
        <p>{{error.statusCode}} {{error.code}}</p>
        <div class="card" v-for="(e,key,index) in error.errors" v-bind:key="index">
          &nbsp;{{e.message}}
        </div>
      </div> -->
      <!-- <pre>{{form}}</pre> -->
      <!-- <pre>{{$me}}</pre> -->
    </section>

  </FormFeedback>
</template>

<script>
import   Vue            from 'vue'
import   Auth           from '../../modules/AuthPlugin'
import { VueReCaptcha } from 'vue-recaptcha-v3'

Vue.use(Auth,{env:process.env.NODE_ENV})
Vue.use(VueReCaptcha, {
  siteKey: '6Lfj3pQUAAAAAKszUI1k4i9AceoyRNUd2G7tw74Y',
  loaderOptions: {
    useRecaptchaNet: true
  }
})

//AAForm mixin
import axios       from 'axios'
import AAFormMixin from '../../modules/AAFormMixin'

//bootstrap vue
import bForm         from 'bootstrap-vue/es/components/form/form'


//scbd controls
import ActorSelect   from './controls/ActorSelect/index'
import Contact       from './Contact'
import Action        from './Action'
import ActionDetails from './ActionDetails'
import Partners      from './controls/Partners'
import FormFeedback  from './controls/FormFeedback/index'

  const configMap = {
    'person':{
      contacts:false,
      partners:false,
      anonymous:true, 
      accountSignup:true, 
      mailingList:{list:'action-agenda', tags:['person'], msg:'Join our mailing list and receive updates on the Action Agenda.'}, 
    },
    'organization':{
      operationalAreas:true,
      subjects:true,
      contacts:true,
      partners:true,
      anonymous:true, 
      accountSignup:true, 
      mailingList:{list:'action-agenda', tags:['organization'], msg:'Join our mailing list and receive updates on the Action Agenda.'}, 
    },
    'public':{
      operationalAreas:true,
      subjects:true,
      contacts:true,
      partners:true,
      anonymous:true, 
      accountSignup:true, 
      mailingList:{list:'action-agenda', tags:['public'], msg:'Join our mailing list and receive updates on the Action Agenda.'}, 
    },
    'party':{
      operationalAreas:true,
      subjects:true,
      contacts:true,
      partners:true,
      anonymous:false, 
      accountSignup:true, 
      mailingList:{list:'action-agenda', tags:['party'], msg:'Join our mailing list and receive updates on the Action Agenda.'}, 
    }
  }

export default {
  name: 'AAForm',
  mixins    : [ AAFormMixin ],
  props     : {  actorType: { type: String, required: false }  },
  components: { FormFeedback, bForm, ActorSelect, Action, ActionDetails, Contact, Partners },
  data,
  methods:  {  save, getRecaptchaToken, onSubmit, toggleSubscription, toggleAccountSignup, location, updateContacts },
  computed: { config, actionComplete },
  async mounted(){
    this.toggleSubscription()
  }
}

function updateContacts(){
  if(this.actorType === 'person')
    this.form.contacts[0] = this.form.actor
}

function location(){
  return window.location.href
}

function actionComplete(){
  let name =  this.form.action.name && this.form.action.name.en
  let description =  this.form.action.description && this.form.action.description.en

  return name && description
}

function config(){
  return configMap[this.actorType]
}

async function save() {
      let data 

      try {
        let form    = this.cleanForm(this.form)
        let options = this.$baseReqOpts || {}

        options = await this.getRecaptchaToken(options)
        data    = await axios.post(`${this.$apiBaseUrl}/v2019/actions`,form, options)

        this.publishRequested=true

        return data
    } catch (err) {

     if(err && err.response)
          this.error=err.response.data
 
        console.error(err);
    }
}
async function getRecaptchaToken(options) {
 
  let token = await this.$recaptcha('action')
  if(token) {
    if(!options.headers) options.headers = {}
    options.headers['X-Captcha-Token'] = token 
  }

  return options
}

function validateComponent(vm) {
  if (vm.$validator) vm.$validator.validateAll()
  if (vm.$children ) vm.$children.forEach(validateComponent)
}

function data () {
    return {
      grecaptchaReady: false,
      publishRequested  : false,
      error          : '',
      helpTexts      : [],
      options: { },
      input:{
        subscription:true
      },
      form:{
        actor         : {},
        action        : {},
        actionDetails : {},
        partners      : [ { name: { en: "" } } ],
        contacts      : [{}],
        subscription  : {},
        accountSignup: new Date()

      }
    }
  }
  function onSubmit(evt) {
 
    evt.preventDefault()
    this.$validator.validate()
    this.$children.forEach(validateComponent)
    if(this.$me.isAuthenticated) this.form.accountSignup = false
    this.save()
  }
  function toggleSubscription() {
 
    if(this.form.subscription) this.form.subscription = {list:this.config.mailingList.list, tags:this.config.mailingList.tags, requested:new Date()}
    
  }
  function toggleAccountSignup() {

    if(this.form.accountSignup) this.form.accountSignup = new Date()
    
  }
</script>

<style>
  /* @import url("//s3.amazonaws.com/phoenix.www.cbd.int/themes/custom/bootstrap_sass/css/style.css"); */
  label::after {
      content: attr(data-req) ;
      color: red ;
  }
</style>

<style scoped>
.title-link{
  color: black;
  font-weight: 500;
}
.party-auth{
  padding: 0 2em 0 2em;
}
.alert{
  position:relative;
}
  input[type="file"]:focus {
    outline-width: 0;
    outline: none;
    outline-color: rgba(0, 0, 0, 0);
  }
  .multi-select-form-conrtol {
    padding: 0 0 0 0;
    min-height: 48px;
    border-radius: 5px;
  }
  .custom-control-label {
    color: unset;
    font-size: 13px;
    text-align: left;
    padding: 5px 10px;
  }
  .card {
    margin-bottom: 1.5em;
    /* background-color: #ddd; */
  }

  label::after {
      content: attr(data-req) ;
      color: red ;
  }
  .account{
    margin-top:-5px;
    margin-left:1.5em;
  }
</style>
