<template>
  <div class="container-fluid" >
  <section v-show="showSubmitted">
    <div class="text-center">
      <h1>Thank you! Your action has been submitted and is pending review.</h1>
    </div>
  </section>

  <section v-show="!showSubmitted">
    <div class="alert alert-danger" v-if="error">
      <p>{{error.statusCode}} {{error.code}}</p>
      <div class="card" v-for="(e,key,index) in error.errors" v-bind:key="index">
        &nbsp;{{e.message}}
      </div>
    </div>
    <b-form @submit="onSubmit"  novalidate>
      <EntitySelect
        class="mb-3"
        label="Submitter"
        v-model="form.organizer"
        :type="['organization','contact']"/>

      <legend>Action</legend>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <BFormGroup id="firstNameGroup" >
                <label data-req="*" for="form.name">Name of the action </label>
                <BFormInput
                  id="form.name"
                  type="text"
                  v-validate="'required|max:140'"
                  :state="validateState('action name',form.name)"
                  v-model.trim="form.name.en"
                  name="action name"
                />
                <field-error-message :error="errors.collect('action name')"/>
              </BFormGroup>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <BFormGroup
                ref="actionDescription"
                id="actionDescription">

                <label data-req="*" for="form.description">Description </label>
                <b-form-textarea
                  id="form.description"
                  v-model="form.description.en"
                  :rows="3"
                  v-validate="'required|max:1000'"
                  :state="validateState('action description',form.description.en)"
                  name="action description"
                />
                <small id="actionDescriptionHelpText" class="form-text text-muted">
                  Short summary of the action and how it contributes to biodiversity objectives.
                </small>
                <field-error-message :error="errors.collect('action description')"/>
              </BFormGroup>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <BFormGroup id="testGroup" label="Attachments" label-for="attachments">
        
                 <Links 
                  id="attachments"
                  v-model="form.attachments"
                  :type="['files','links']"
                  multi
                  name="attachments"/>

              </BFormGroup>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <BFormGroup>

                <label data-req="*" for="form.target">Operational Area(s) </label>
                <SCBDSelect
                  type="GeoLocations"
                  id="form.target"
                  v-model="form.operationalAreas"
                  multi
                  tag-view
                  v-validate="'required'"
                  :state="validateState('operational area(s)',form.operationalAreas)"
                  name="operational area(s)"
                />

                <field-error-message :error="errors.collect('operational area(s)')"/>
              </BFormGroup>
            </div>
            <div class="col-lg-6">
              <BFormGroup  id="subjectGroup">
                <label data-req="*" for="form.subjects">Thematic Areas(s) </label>
                <SCBDSelect
                  type="Subject"
                  id="form.subjects"
                  v-model="form.subjects"
                  multi
                  tag-view
                  v-validate="'required'"
                  :state="validateState('action Thematic Areas',form.subjects.length)"
                  name="action Thematic Areas"/>

                <field-error-message :error="errors.collect('action Thematic Areas')"/>
              </BFormGroup>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <BFormGroup
                id="aichiGroup"
                label="Linkages to Aichi Biodiversity Targets "
                label-for="form.aichi">

                <SCBDSelect
                  type="Aichi"
                  id="form.aichi"
                  v-model="form.aichiTargets"
                  multi
                  tag-view
                  name="action aichi biodiversity target"
                />
              </BFormGroup>
            </div>
            <div class="col-lg-6">
              <BFormGroup
                id="SDGsGroup"
                label="Linkages to Sustainable Development Goals "
                label-for="SDGs">

                <SCBDSelect
                  type="SDGs"
                  id="DGs"
                  v-model="form.sdgs"
                  multi
                  tag-view
                  name="SDGs"
                />
              </BFormGroup>
            </div>
          </div>
          <div class="row" v-if="form.aichiTargets.length || form.sdgs.length">
            <div class="col">
              <BFormGroup
                ref="actionDescriptionLinkages"
                id="actionDescriptionLinkages"
                label="Linkage(s) description"
                label-for="form.descriptionLinkages"
              >
                <b-form-textarea
                  id="form.descriptionLinkages"
                  v-model="form.linkagesDescription.en"
                  v-validate="'max:1000'"
                  :state="validateState('action linkage description',form.linkagesDescription.en)"
                  :rows="3"
                  name="action linkage description"
                />
                <small
                  id="actionlinkages"
                  class="form-text text-muted">
                  Describe how your action contributes to progress on the SDGs and/or ABTs selected above.
                </small>
                <field-error-message :error="errors.collect('action linkage description')"/>
              </BFormGroup>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <BFormGroup
                ref="actionProgressMeasured"
                id="actionProgressMeasured"
                label="Progress tracking"
                label-for="form.progressMeasured"
              >
                <b-form-textarea
                  id="form.progressMeasured"
                  v-model="form.progressMeasured.en"
                  v-validate="'max:1000'"
                  :state="validateState('progress measured',form.progressMeasured.en)"
                  :rows="3"
                  name="progress measured"
                />
                <small id="actionprogressMeasured" class="form-text text-muted">
                  Describe how your Action measures progress. Provide a link if relevant.
                </small>
                <field-error-message :error="errors.collect('progress measured')"/>
              </BFormGroup>
            </div>
          </div>
        </div>
      </div>

      <EntitySelect
        class="mb-3"
        multi
        label="Partner(s)"
        v-model="form.partners"
        :type="['contact', 'organization']"/>

      <EntitySelect 
        class="mb-3"
        multi 
        label="Contact(s)" 
        v-model="form.contacts" 
        :type="'contact'"/>

      <div class="text-right">

        <BButton type="submit" variant="primary">Submit</BButton>&nbsp;
      </div>
    </b-form>

  </section>
  </div>
  
</template>

<script>
import Vue from 'vue'
import Auth from '../../modules/AuthPlugin'
import { VueReCaptcha } from 'vue-recaptcha-v3'

Vue.use(Auth,{env:process.env.NODE_ENV})
Vue.use(VueReCaptcha, {
  siteKey: '6Lfj3pQUAAAAAKszUI1k4i9AceoyRNUd2G7tw74Y',
  loaderOptions: {
    useRecaptchaNet: true
  }
})

//AAForm mixin
import axios from 'axios'
import AAFormMixin from '../../modules/AAFormMixin'

//bootstrap vue
import bForm from 'bootstrap-vue/es/components/form/form'
import bFormTextarea from 'bootstrap-vue/es/components/form-textarea/form-textarea'

//scbd controls
import EntitySelect from './controls/EntitySelect'
import SCBDSelect from './controls/SCBDSelect'
import Links from './controls/Links'

export default {
  name: 'AAForm',
  mixins: [AAFormMixin],
  components: {
    SCBDSelect,
    bForm,
    bFormTextarea,
    EntitySelect,
    Links
  },
  data() {
    return {
      grecaptchaReady:false,
      showSubmitted:false,
      error:'',
      helpTexts: [],
      options: {
        mainEntityTypes: [
          {
            name: 'Organization',
            value: 'organization'
          },
          {
            name: 'Individual',
            value: 'contact'
          }
        ]
      },
      form:{
        organizer: {},
        name: {en:''},
        description: {en:''},
        website:'',
        attachments: [],
        operationalAreas: [],
        subjects: [],
        aichiTargets: [],
        sdgs: [],
        linkagesDescription: {en:''},
        progressMeasured: {en:''},
        partners: [],
        contacts: []
      }
    }
  },
  methods: {
    save,
    getRecaptchaToken,
    onSubmit(evt) {
 
      evt.preventDefault()
      this.$validator.validate()

      this.$children.forEach(validateComponent)
      this.save()
    }
  }
  
}
async function save() {
      let data 

      try {
        let form    = this.cleanForm(this.form)
        let options = this.$baseReqOpts || {}

        options = await this.getRecaptchaToken(options)
        data    = await axios.post(`${this.$apiBaseUrl}/v2019/actions`,form, options)

        this.showSubmitted=true

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
  if (vm.$children) vm.$children.forEach(validateComponent)
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
    background-color: #ddd;
  }

  label::after {
      content: attr(data-req) ;
      color: red ;
  }
</style>
