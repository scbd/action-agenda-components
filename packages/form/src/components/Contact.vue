<template>
  <section>
    <legend>{{ $t('Contacts') }}  </legend>
    <div class="card">
      <div class="card-body">

        <div class="row" v-if="me.isAuthenticated">
          <div class="col-lg-12">


            <div  class="form-group" :id="`group.contact.useAccount`" >
                <div class="form-check-inline">
                  <input
                    v-model="input.useAccount"
                    :value="true"
                    type="checkbox"
                    id="contact.useAccount"
                    :name="'contact.useAccount'"
                    class="form-check-input"
                    v-on:change="useAccountToggle()"
                  >
                  <label class="form-check-label align-text-bottom" for="contact.useAccount" >{{'contact.useAccount'}}</label>
                </div>
              <hr>
            </div>
            
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            
            <div class="form-group" id="group.contact.name">
              <label  for="contact.name"> {{ $t(`Name`) }} </label>
              <input class="form-control" 
                @input      ="update"
                id          ="contact.name"
                type        ="text"
                v-model.trim="contact.name[$i18n.locale]"
                v-validate  ="'required|max:140'"
                :class      ="[ getValidationClass(`contact.name`) ]" 
                :name       ="`contact.name`"
                />
              <field-error-message :error="errors.collect(`contact.name`)"/>
            </div>

          </div>

          <div class="col-lg-6">

            <div class="form-group" id="group.contact.email" >
              <label  for="contact.email"> {{ $t(`Email`) }} </label>
              <input class="form-control" 
                @input      ="update"
                id          ="contact.email"
                type        ="text"
                v-model.trim="contact.email"
                v-validate  ="'email|required'"
                :class      ="[ getValidationClass(`contact.email`) ]" 
                :name       ="`contact.email`"
              />
    
              <field-error-message :error="errors.collect(`contact.email`)"/>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  import FormMixin   from './form-mixin.js'
  import HumanParser from 'humanparser' 
  import i18n        from '../locales/index.js'
  export default {
    name:    'Person',
    mixins:  [ FormMixin ],
    props:   { value: { type: Object, required: true }, },
    methods: { parseName, update, useAccount, notUseAccount, useAccountToggle },
    beforeUpdate,
    data, i18n
  }

  function data() {
    if(!this.value)this.value = {}
    return {
        input: {
          useAccountInit: false,
          useAccount: false
        },
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
        }
      }
  }


  function useAccount() {
    this.$set(this.contact, 'name', { en: this.me.name })
    this.$set(this.contact, 'email', this.me.email)
    this.$set(this.contact, 'country', {identifier:this.me.country})

    this.input.useAccountInit = true
    this.update()
  }
  
  function beforeUpdate() {
    if (!this.input.useAccountInit && this.me.isAuthenticated) this.useAccountToggle(true)
  }

  function useAccountToggle(value){

    if(value != undefined) this.input.useAccount = value

      if(!this.input.useAccount)
        this.notUseAccount()
      else
        this.useAccount()

      this.update()
      
  }

  function notUseAccount() {
    let person = this.contact

    person.country        = ''
    person.email          = ''
    person.salutation.en  = ''
    person.firstName.en    = ''
    person.middleName.en  = ''
    person.lastName.en    = ''
    person.suffix.en       = ''
    person.name.en        = ''
    this.update()
  }


  function parseName() {
    let person = this.contact
    if(!person.name || !person.name.en) return

    let parsedName = HumanParser.parseName(person.name.en)

    person.salutation.en  = parsedName.salutation
    person.firstName.en   = parsedName.firstName
    person.middleName.en  = parsedName.middleName
    person.lastName.en    = parsedName.lastName
    person.suffix.en      = parsedName.suffix
  }

  function update() {
    let person = this.cleanForm(this.contact)
    this.parseName()
    this.$emit('input', person)
  }
</script>