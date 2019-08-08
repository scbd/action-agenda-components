<i18n src="./locales/index.json"></i18n>

<template>
  <section>

    <div class="row" v-if="$me.isAuthenticated">
      <div class="col-lg-12">

        <div  class="form-group" :id="`group.${actor.actorType}.name`" >
            <div class="form-check-inline">
              <input
                v-model="input.useAccount"
                :value="true"
                type="checkbox"
                id="`RadioInline`"
                name="RadioInline`"
                class="form-check-input"
                v-on:change="useAccountToggle()"
              >
              <label class="form-check-label align-text-bottom" for="`RadioInline`" >{{$t('person.useAccount')}}</label>
            </div>
          <hr>
        </div>
        
      </div>
    </div>

    <div class="row">
      <div class="col-lg-9">
            
        <div class="form-group" :id="`group.${actor.actorType}.name`" >
          <label  :for="`${actor.actorType}.name`"> {{ $t(`${actor.actorType}.name.label`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${actor.actorType}.name`"
            type        ="text"
            v-model.trim="actor.name.en"
            v-validate  ="'required|max:140'"
            :class      ="[ getValidationClass($t(`${actor.actorType}.name.label`)) ]" 
            :name       ="$t(`${actor.actorType}.name.label`)"
            :placeholder="$t(`${actor.actorType}.name.placeholder`)" 
            />

          <small v-if="$t(`${actor.actorType}.name.help`)" class="form-text text-muted">{{$t(`${actor.actorType}.name.help`)}}</small>
          <field-error-message :error="errors.collect($t(`${actor.actorType}.name.label`))"/>
        </div>

      </div>

      <div class="col-lg-3">

        <div class="form-group" :id="`group.${actor.actorType}.country`">
          <label  :for="`${actor.actorType}.country`">{{ $t(`${actor.actorType}.country.label`) }} </label>
          <SCBDSelect
            @input="update"
            type="Countries"
            :id="`${actor.actorType}.country`"
            v-model="actor.country"
            tag-view
            v-validate="'required'"
            :state   ="[ getValidationClass($t(`${actor.actorType}.country.label`)) ]" 
            :name="$t(`${actor.actorType}.country.label`)"
            :placeholder="$t(`${actor.actorType}.country.placeholder`)" 
          />
          <small v-if="$t(`${actor.actorType}.country.help`)" class="form-text text-muted">{{$t(`${actor.actorType}.country.help`)}}</small>        
          <field-error-message :error="errors.collect($t(`${actor.actorType}.country.label`))" :state="validateState($t(`${actor.actorType}.country.label`))" />
        </div>

      </div>

      <div class="col-lg-12">

        <div class="form-group" :id="`group.${actor.actorType}.email`" >
          <label  :for="`${actor.actorType}.email`"> {{ $t(`${actor.actorType}.email.label`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${actor.actorType}.email`"
            type        ="text"
            v-model.trim="actor.email"
            v-validate="'email|required'"
            :class   ="[ getValidationClass($t(`${actor.actorType}.email.label`)) ]" 
            :name       ="$t(`${actor.actorType}.email.label`)"
             :placeholder="$t(`${actor.actorType}.email.placeholder`)" 
            />
          <small v-if="$t(`${actor.actorType}.email.help`)" class="form-text text-muted">{{$t(`${actor.actorType}.email.help`)}}</small>        
          <field-error-message :error="errors.collect($t(`${actor.actorType}.email.label`))"/>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
import FormMixin from '@components/AAForm/FormMixin'         
import SCBDSelect  from '@controls/SCBDSelect'             
import HumanParser from 'humanparser'     

export default {
  name      : 'PersonForm',
  mixins    : [ FormMixin ],
  components: { SCBDSelect },
  props: {
    value: { type: [Array, Object], required: true },
    multi: { type: Boolean, default: false }
  },
  data,
  methods: { parseName, update, useAccount, notUseAccount, useAccountToggle, },
  beforeUpdate,
  mounted
}

function data(){
      return {
      input: {
        useAccountInit: false,
        useAccount: false
      },
      actor: {
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

function mounted(){
  this.update()
}

function beforeUpdate() {
  if (!this.input.useAccountInit && this.$me.isAuthenticated) this.useAccountToggle(true)
}

function useAccount() {
  this.$set(this.actor, 'name', { en: this.$me.name })
  this.$set(this.actor, 'email', this.$me.email)
  this.$set(this.actor, 'country', {identifier:this.$me.country})

  this.input.useAccountInit = true
  
  this.update()
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
  let person = this.actor

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

  let person = this.actor
  if(!person.name || !person.name.en) return

  let parsedName = HumanParser.parseName(person.name.en)

  person.salutation.en = parsedName.salutation
  person.firstName .en = parsedName.firstName
  person.middleName.en = parsedName.middleName
  person.lastName  .en = parsedName.lastName
  person.suffix    .en = parsedName.suffix
}
function update() {
  let person = this.cleanForm(this.actor)
  this.parseName()
  this.$emit('input', person)
}
</script>