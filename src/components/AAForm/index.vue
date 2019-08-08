<i18n src="./locales/index.json"></i18n>

<template>
<section>
  <FormFeedback :error="error" :has-slot="true" @deleteFeedback="deleteFeedback" >
  
      <form v-if="(actorType!=='party') || (actorType==='party' && $me.isGov)" @submit="onSubmit"  novalidate>

        <legend v-if="config.label">{{ $t(`title.${actorType}`) }}</legend>
        <div class="card">
          <div class="card-body"> 

            <ActorSelect v-if="actorType" class="mb-3"  v-model="form.actor" :type="actorType" @input="updateContacts"/>

            <div class="card">
              <div class="card-body">
                <Action class="mb-3" v-model="form.action" />
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
                      <label class="form-check-label align-text-bottom" for="action.mailingList" >{{$t('mailingList')}}</label>
                    </div>
                <hr/>
              </div>
            </div>

            <div  v-if="!$me.isAuthenticated && config.accountSignup" class="row" >
              <div class="col-lg-12">
                    <div class="form-check-inline">
                      <input
                        v-model="form.accountSignup"
                        :value="false"
                        type="checkbox"
                        id="action.accountSignup"
                        name="action.accountSignup"
                        class="form-check-input"
                        v-on:change="toggleAccountSignup()"
                      />
                      <label class="form-check-label align-text-bottom" for="action.accountSignup" > {{$t('accountSignup')}} </label>
                    </div>
                  <hr/>
              </div>
            </div>

          </div>
        </div>

        <section v-if="actionComplete">
          <legend>Optional Information - <a href="#ss" class="title-link">Skip and <button class="btn btn-primary" type="submit" variant="primary">Submit</button></a></legend>
          <div class="card" v-if="actionComplete">
            <div class="card-body"> 

              <ActionDetails class="mb-3" v-if="actionComplete" v-model="form.actionDetails" :options="config.actionDetails"/>
              <Partners v-if="config.partners" v-model="form.partners" label="Partners"/>

            </div>
          </div>
        </section>

        <div id="ss" class="text-right mb-3">
          <button type="submit" class="btn btn-primary" :disabled="!this.userLoaded">Submit</button> &nbsp;
        </div>

      </form>
  </FormFeedback>
  <DebugForm v-if="DEBUG" :form="form" :$me="$me" :$accountsBaseUrl="$accountsBaseUrl"/>
</section>
</template>

<script>

  import   Vue            from 'vue'
  import   axios          from 'axios'
  import   Auth           from '@modules/AuthPlugin'

  import   winston        from '@modules/config' 
  import   changeCase     from 'change-case'

  Vue.use(Auth,{env:process.env.NODE_ENV})

  import FormMixin from '@components/AAForm/FormMixin'

  //scbd controls
  import ActorSelect   from '@controls/ActorSelect/index'
  import FormFeedback  from '@components/FeedbackList' 
  import Contact       from './Contact'
  import Action        from './Action'
  import ActionDetails from './ActionDetails'
  import Partners      from './Partners'

  //TODO MAKE EXTERNAL CDN
    
  export default {
    name      : 'AAForm',
    mixins    : [ FormMixin ],
    props     : { formType: { type: String, required: false }, 
                  options: { type: Object, required: true}
    },
    components: { FormFeedback, ActorSelect, Action, ActionDetails, Contact, Partners,
                  DebugForm:() => import('./DebugForm')
                },
    methods   : { addError,deleteFeedback, loadCaptcha, save, getRecaptchaToken, onSubmit, toggleSubscription, toggleAccountSignup,  updateContacts, validate },
    computed  : { config, actionComplete },
    data,
    mounted
  }

  function data () {
    let formType
    if(this.$route && this.$route.params && this.$route.params.type && this.$route.params.type!='hack')
      formType = this.$route.params.type
    else if (this.formType)
      formType = this.formType

    return {
      actorType: formType ,
      DEBUG:process.env.VUE_APP_DEBUG,
      userLoaded:false,
      error:{},
      feedback:{
        actorType:formType,
        publishRequested:false,
        error:''
      },
      input:{
        subscription:true
      },
      form:{
        actor         : {},
        action        : {},
        actionDetails : {},
        partners      : [ { name: {} } ],
        contacts      : [{}],
        subscription  : {},
        accountSignup: new Date()

      }
    }
  }

  async function mounted(){
    this.toggleSubscription()
    await this.loadCaptcha()
  }

  async function loadCaptcha (){
    this.userLoaded = ((await this.$isUserLoaded())  )
    if(this.config.anonymous && this.userLoaded && !this.$me.isAuthenticated ){
        let { VueReCaptcha } = await import('vue-recaptcha-v3')
        Vue.use(VueReCaptcha, {
          siteKey: process.env.VUE_APP_G_CAPTCHA_KEY,
          loaderOptions: {
            useRecaptchaNet: true
          }
        })
    }
  }

  function actionComplete(){
    let name =  this.form.action.name && this.form.action.name.en
    let description =  this.form.action.description && this.form.action.description.en

    return name && description
  }

  function updateContacts(){
    if(this.actorType === 'person')
      this.form.contacts[0] = this.form.actor
  }

  function config(){
   return  this.options[this.actorType] || this.options
  }

  async function validate() {
        let data 

        try {
          let form    = this.cleanForm(this.form)

          data    = await axios.post(`${process.env.VUE_APP_API}/v2019/actions/validate`,form, {})

          return data
      } catch (err) {

        if(err && err.response)
          this.feedback.error=err.response.data
  
        console.error(err);
      }
  }

  async function save() {
    let data 

    try {

      let form    = this.cleanForm(this.form)
      let options = this.$baseReqOpts || {}

      options = await this.getRecaptchaToken(options)
      data    = await axios.post(`${process.env.VUE_APP_API}/v2019/actions`,form, options)

      this.feedback.publishRequested=true

      return data
    } catch (err) {
      winston.error('', err) 
      this.addError(err)
    }
  }

  async function getRecaptchaToken(options) {
    if(!options.headers) options.headers = {}

    if(this.$me.isAuthenticated) return options

    let token = await this.$recaptcha('action')
    if(token) 
      options.headers['X-Captcha-Token'] = token 
    
    return options
    
  }

  function onSubmit(evt) {
 
    evt.preventDefault()
    this.$validator.validate()
    this.$children.forEach(this.validateComponent)
    if(this.$me.isAuthenticated) this.form.accountSignup = false
    this.save()
  }

  function toggleSubscription() {
    if(this.form.subscription && this.actorType && this.config.mailingList) 
      this.form.subscription = {list:this.config.mailingList.list, tags:this.config.mailingList.tags, requested:new Date()}
  }

  function toggleAccountSignup() {
    if(this.form.accountSignup) this.form.accountSignup = new Date()
  }

  function deleteFeedback({index, type}){
    delete(this[type][index])
    this.$forceUpdate()
  }

  function addError(e){
    e.key = changeCase.camelCase(e.message)
    if(!this.error[e.key])
      this.$set(this.error,[e.key],  e)
  }
</script>

<style>
  label::after { content: attr(data-req) ; color: red ; }
</style>

<style scoped>
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
