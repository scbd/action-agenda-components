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
                <div v-if="isSelectedType('organization') && form.actor"> 
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

                    <div class="col-lg-6" v-if="form.actor.types">
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
                <div v-if="isSelectedType('public') && form.actor">

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
                 <div v-if="isSelectedType('person') && form.actor">
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

<!-- Action line starts -->

  <legend >{{ $t(`Commitment`) }}</legend>

  <div class="card">
  <div class="card-body">
  <div class="row">

    <div class="col-12">
      <div class="form-group" id="group.form.action.name">
        <label  for="form.action.name"> {{ $t(`Name`) }} </label>
        <input class="form-control" 
          @input      ="update"
          id          ="form.action.name[$i18n.locale]"
          type        ="text"
          v-model.trim="form.action.name[$i18n.locale]"
          v-validate  ="'required|max:140'"
          :class      ="[ getValidationClass(`form.action.name`) ]"
          :name       ="`form.action.name`"
          />
        <field-error-message :error="errors.collect('form.action.name')"/>
      </div>
    </div>

    <div class="col-12">
      <div class="form-group" :id="`group.form.action.description`">
        <label :for="`form.action.description`"> {{ $t(`Description`) }} </label>
        <textarea
            class="form-control"
            id="form.action.description"
            @input="update"
            v-model="form.action.description[$i18n.locale]"
            :rows="3"
            v-validate="'required|max:1000'"
            :class="[ getValidationClass(`form.action.description`) ]"
            :name="`form.action.description`"
        />
        <field-error-message :error="errors.collect(`form.action.description`)" />
      </div>

    </div>
    
    <div class="col-12">
      <div class="form-group" id="group.action.attachments">
        <label :for="`form.action.attachments`"> {{ $t(`Attachment (s)`) }} </label>
        <div class="col-12 mb-3" v-for="item in form.action.attachments" v-bind:key="item.url">
        <a :href="item.url" target="_blank" rel="noopener"> <Icon name="file"/> {{item.name[$i18n.locale]}} </a>
        </div>
        <Links  @input="update" id="form.action.attachments" v-model="form.action.attachments" :type="[ 'files','links' ]" multi name="attachments"/>
      </div>
    </div> 
    
  </div>
  </div>
  </div>

<!-- Action line ends -->

<!-- ActionDetails line starts -->
  <legend >{{ $t(`Commitment Linkages`) }}</legend>
    <div class="card">
    <div class="card-body">
    <div class="row">
    <div class="col-lg-6" >

        <div class="form-group" id="group.form.actionDetails.actionCategories">
          <label for="form.actionDetails.actionCategories"> {{ $t(`Action Themes (s)`) }} </label>
          <SCBDSelect
            @input="update"
            type="actionCategories"
            id="form.actionDetails.actionCategories"
            v-model="form.actionDetails.actionCategories"
            multi
            tag-view
            :state="validateState(`form.actionDetails.actionCategories`,form.actionDetails.actionCategories)"
            :name="'form.actionDetails.actionCategories'"
            v-validate="'required'"
            />
          <field-error-message :error="errors.collect(`form.actionDetails.actionCategories`)"/>
        </div>

      </div>

     <div class="col-lg-6"  >
        <div class="form-group" id="group.form.actionDetails.operationalAreas">
          <label for="form.actionDetails.operationalAreas"> {{ $t(`Geographic Area (s)`) }} </label>
          <SCBDSelect
            type="geoLocations"
            id="form.actionDetails.operationalAreas"
            v-model="form.actionDetails.operationalAreas"
            multi
            tag-view
            :state="validateState(`form.actionDetails.operationalAreas`,form.actionDetails.operationalAreas)"
            :name="`form.actionDetails.operationalAreas`"
            v-validate="'required'"
          />
          <field-error-message :error="errors.collect(`form.actionDetails.operationalAreas`)"/>
        </div>
      </div> 

    </div>

    <div class="row" >
      <div class="col-lg-6" >

        <div class="form-group" id="group.form.actionDetails.aichiTargets">
          <label for="form.actionDetails.aichiTargets"> {{ $t(`Aichi Biodiversity Target (s)`) }} </label>
          <SCBDSelect
            @input="update"
            type="aichis"
            id="form.actionDetails.aichiTargets"
            v-model="form.actionDetails.aichiTargets"
            multi
            tag-view
            :state="validateState(`form.actionDetails.aichiTargets`,form.actionDetails.aichiTargets)"
            :name="`form.actionDetails.aichiTargets`"
            v-validate="'required'"
          />
          <field-error-message :error="errors.collect(`form.actionDetails.aichiTargets`)"/>
        </div>

      </div>
      <div class="col-lg-6" >

        <div class="form-group" id="group.form.actionDetails.sdgs">
          <label for="form.actionDetails.sdgs"> {{ $t(`Sustainable Development Goal (s)`) }} </label>
          <SCBDSelect
            @input="update"
              type="sdgs"
              id="form.actionDetails.sdgs"
              v-model="form.actionDetails.sdgs"
              multi
              tag-view
              :state="validateState(`form.actionDetails.sdgs`,form.actionDetails.sdgs)"
              :name="`form.actionDetails.sdgs`"
              v-validate="'required'"
          />
          <field-error-message :error="errors.collect(`form.actionDetails.sdgs`)"/>
        </div>

      </div>
    </div>
    </div>
    </div>
<!-- ActionDetails line ends -->

<!-- Contact line starts -->
  <!--  <legend>{{ $t('Contacts') }}  </legend>
    <div class="card" >
      <div class="card-body">

        <div class="row" v-if="me.isAuthenticated">
          <div class="col-lg-12">


            <div  class="form-group" :id="`group.form.contact.useAccount`" >
                <div class="form-check-inline">
                  <input
                    v-model="input.useAccount"
                    :value="true"
                    type="checkbox"
                    id="form.contact.useAccount"
                    :name="'form.contact.useAccount'"
                    class="form-check-input"
                    v-on:change="useAccountToggle()"
                  >
                  <label class="form-check-label align-text-bottom" for="form.contact.useAccount" >{{'form.contact.useAccount'}}</label>
                </div>
              <hr>
            </div>
            
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            
            <div class="form-group" id="group.form.contact.name">
              <label  for="form.contact.name"> {{ $t(`Name`) }} </label>
              <input class="form-control" 
                @input      ="update"
                id          ="form.contact.name"
                type        ="text"
                v-model.trim="form.contact.name[$i18n.locale]"
                v-validate  ="'required|max:140'"
                :class      ="[ getValidationClass(`form.contact.name`) ]" 
                :name       ="`form.contact.name`"
                />
              <field-error-message :error="errors.collect(`form.contact.name`)"/>
            </div>

          </div>

          <div class="col-lg-6">

            <div class="form-group" id="group.form.contact.email" >
              <label  for="form.contact.email"> {{ $t(`Email`) }} </label>
              <input class="form-control" 
                @input      ="update"
                id          ="form.contact.email"
                type        ="text"
                v-model.trim="form.contact.email"
                v-validate  ="'email|required'"
                :class      ="[ getValidationClass(`form.contact.email`) ]" 
                :name       ="`form.contact.email`"
              />
    
              <field-error-message :error="errors.collect(`form.contact.email`)"/>
            </div>

          </div>
        </div>

      </div>
    </div> -->

<!-- Contact line ends -->

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
import   FormFeedback            from './components/FeedbackList/index.vue'
import   Partners                from './components/Partners.vue'
import   getLocale               from './components/locale.js'
import { getAction             } from './components/api'

export default {
  name      : 'AAForm',
  mixins    : [ FormMixin ],
  props     : { 
                options : { type: Object, required: true},
                value   : { type: Object, required: true },
              },
  components: { FormFeedback, Partners, SCBDSelect, Links, Icons,
                DebugForm: () => import('./components/DebugForm.vue') //async load of component ... only if needed
              },
  methods   : { loadExistingAction, addError, deleteFeedback, loadCaptcha, save, getRecaptchaToken, onSubmit, toggleSubscription, toggleAccountSignup, updateContacts, validate, isSelectedType, showImage, deleteLogo, useAccount, beforeUpdate, useAccountToggle, notUseAccount, parseName },
  computed  : { config, actionComplete, opts: config, isOther },
  data, 
  created,
  mounted,
  i18n
}
function created(){ initializeApiStore() }

async function mounted(){
  this.toggleSubscription()
  await this.loadCaptcha()
  await this.loadExistingAction()
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
    input     : { subscription:true, type: null, person: {}, organization: {}, party: {}, public: {}, useAccountInit: false, useAccount: false  },
    values    : this.value,
    form      : {
                  actor         : {
                      salutation : { [this.$i18n.locale]: '' },
                      firstName  : { [this.$i18n.locale]: '' },
                      middleName : { [this.$i18n.locale]: '' },
                      lastName   : { [this.$i18n.locale]: '' },
                      suffix     : { [this.$i18n.locale]: '' },
                      name       : { [this.$i18n.locale]: '' },
                      email      : '',        
                      name     : {  [this.$i18n.locale]: ''  },
                      url      : '',
                      image    : { url: '' },
                      types    : [],
                      country  : '',
                      typeOther: { },
                      actorType: formType
                  },
                  orgLogo : '', //temp holder for uploaded image
                  action        : {
                      name        : { [this.$i18n.locale]: '' },
                      description : { [this.$i18n.locale]: '' },
                      attachments : []
                    },
                  actionDetails   : {
                      aichiTargets     : [],
                      sdgs             : [],
                      progressMeasured : { en:'' },
                      thematicAreas    : [],
                      operationalAreas : [],
                      actionCategories : []
                  },
                  partners      : [{ name: { } }],
                  contact: {
                    salutation : {},
                    firstName  : {},
                    middleName : {},
                    lastName   : {},
                    suffix     : {},
                    name       : {},
                    country    : '',
                    email      : '',
                    actorType  : 'person'
                  },
                  subscription  : {},
                  accountSignup : new Date()
                }
  }
}

async function loadExistingAction(){
  const formData = await getAction(this.opts)

  this.form = formData? formData : this.form
}

async function loadCaptcha (){
  if(this.me && this.me.isAuthenticated) return

  const { VueReCaptcha } = await import('vue-recaptcha-v3')

  Vue.use(VueReCaptcha, {
    siteKey       : '6Lfj3pQUAAAAAKszUI1k4i9AceoyRNUd2G7tw74Y',
    loaderOptions : { useRecaptchaNet: true }
  })
}

function isSelectedType(type) {
  if(!this.form || !this.form.actor) return false

  if (this.form.actor.actorType === type) return true;

  return false;
}

// actor function
function isOther(){
  if (!this.form.actor.types || !this.form.actor.types.length) return false

  if(this.form.actor.types.includes('ORG-TYPE-OTHER'))
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

  function useAccount() {
    this.$set(this.form.actor, 'name', { en: this.me.name })
    this.$set(this.form.actor, 'email', this.me.email)
    this.$set(this.form.actor, 'country', {identifier:this.me.country})

    this.form.input.useAccountInit = true
    
    this.update()
  }

  function beforeUpdate() {
    if (!this.input.useAccountInit && this.me.isAuthenticated) this.useAccountToggle(true)
  }

  function useAccountToggle(value){
    if(value != undefined) this.form.input.useAccount = value

      if(!this.form.input.useAccount)
        this.notUseAccount()
      else
        this.useAccount()

      this.update()
  }

  function notUseAccount() {
    let person = this.form.actor

    person.country        = ''
    person.email          = ''
    person.salutation .en = ''
    person.firstName  .en = ''
    person.middleName .en = ''
    person.lastName   .en = ''
    person.suffix     .en = ''
    person.name       .en = ''

    this.$children.forEach(this.validateComponent)
  }

  function parseName() {

    let person = this.form.actor
    if(!person.name || !person.name.en) return

    let parsedName = HumanParser.parseName(person.name.en)

    person.salutation.en = parsedName.salutation
    person.firstName .en = parsedName.firstName
    person.middleName.en = parsedName.middleName
    person.lastName  .en = parsedName.lastName
    person.suffix    .en = parsedName.suffix
  }
// end actor functions

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
