<template>
  <section>
    <legend>{{label }}  </legend>
    <div class="card">
      <div class="card-body">
    <div class="row">
      <div class="col-lg-12">
        <BFormRow v-if="$me.isAuthenticated">
          <BCol>
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
              <label class="form-check-label align-text-bottom" for="`RadioInline`" >Use your SCBD account profile data?</label>
            </div>
          </BCol>
          <hr>
        </BFormRow>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <BFormGroup id="fullNameGroup">
          <label  for="form.person.fullName">Name</label>
          <BFormInput
            id="form.person.fullName"
            type="text"
            v-model.trim="form.person.fullName.en"
            @input="update"
            v-validate="'required|max:140'"
            :state="validateState('name',form.person.fullName.en)"
            name="name"
          />

          <field-error-message :error="errors.collect('name')"/>
        </BFormGroup>
      </div>

      <div class="col-lg-6">
        <BFormGroup id="emailGroup">
          <label  for="form.person.email">Email</label>
          <BFormInput
            id="form.person.email"
            type="email"
            v-model.trim="form.person.email"
            @input="update"
            v-validate="'email|required'"
            :state="validateState('contact email',form.person.email)"
            name="contact email"
          />

          <field-error-message :error="errors.collect('contact email')"/>
        </BFormGroup>
      </div>
    </div>


   </div>
  </div>
  </section>
</template>

<script>
import AAFormMixin from '../../modules/AAFormMixin'         
// import SCBDSelect  from './controls/SCBDSelect'             
import HumanParser from 'humanparser'              
export default {
  name: 'Person',
  mixins: [ AAFormMixin ],
  // components: { SCBDSelect },
  props: {
    value: { type: [Array, Object], required: true },
    multi: { type: Boolean, default: false },
    label: { type: String, default: 'Contact' }
  },
  data() {
    return {
      input: {
        useAccountInit: false,
        useAccount: false
      },
      form: {
        person: {
          salutation : {},
          firstName  : {},
          middleName : {},
          lastName   : {},
          suffix     : {},
          fullName   : {},
          country    : '',
          email      : '',
          actorType  : 'person'
        }
      }
    }
  },
  methods: { parseName, update, useAccount, notUseAccount, useAccountToggle,  },
  beforeUpdate
}

function beforeUpdate() {
  if (!this.input.useAccountInit && this.$me.isAuthenticated) this.useAccountToggle(true)
}

function useAccount() {
  // this.input.useAccount = true

  this.$set(this.form.person, 'fullName', { en: this.$me.name })
  this.$set(this.form.person, 'email', this.$me.email)
  this.$set(this.form.person, 'country', {identifier:this.$me.country})

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
  this.$set(this.form.person, 'lastName', { en: '' })
  this.$set(this.form.person, 'email', '')
  this.$set(this.form.person, 'country', '')
  this.update()
}

function parseName() {

  let person = this.form.person
  let parsedName = HumanParser.parseName(person.fullName.en)

  person.salutation.en    = parsedName.salutation
  person.firstName.en = parsedName.firstName
  person.middleName.en = parsedName.middleName
  person.lastName.en  = parsedName.lastName
  person.suffix.en  = parsedName.suffix
}
function update() {
  let person = this.cleanForm(this.form.person)
  this.parseName()
  this.$emit('input', person)
}
</script>