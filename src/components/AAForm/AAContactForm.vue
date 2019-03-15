<template>
  <section>
    <div class="row">

      <div class="col-lg-2">
        <BFormGroup id="prefixGroup" label="Prefix" label-for="form.contact.prefix">
          <BFormInput
            id="form.contact.prefix"
            type="text"
            v-model.trim="form.contact.prefix.en"
            @input="update"
            v-validate="'max:140'"
            :state="validateState('contact prefix',form.contact.prefix.en)"
            name="contact prefix"/>

          <field-error-message :error="errors.collect('contact prefix')"/>
        </BFormGroup>
      </div>

      <div class="col-lg-5">
        <BFormGroup id="firstNameGroup" label="First name" label-for="form.contact.firstName">
          <BFormInput
            id="form.contact.firstName"
            type="text"
            v-model.trim="form.contact.firstName.en"
            @input="update"
            v-validate="'max:140'"
            :state="validateState('contact first name',form.contact.firstName.en)"
            name="contact first name"/>

          <field-error-message :error="errors.collect('contact first name')"/>

        </BFormGroup>
      </div>

      <div class="col-lg-5">
        <BFormGroup id="lastNameGroup">
          <label data-req="*" for="form.contact.lastName">Last name </label>
          <BFormInput
            id="form.contact.lastName"
            type="text"
            v-model.trim="form.contact.lastName.en"
            @input="update"
            v-validate="'required|max:140'"
            :state="validateState('contact last name',form.contact.lastName.en)"
            name="contact last name"/>

          <field-error-message :error="errors.collect('contact last name')"/>
        </BFormGroup>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <BFormGroup
          id="departmentGroup"
          label="Organization \ Department"
          label-for="form.contact.department">

          <BFormInput
            id="form.contact.department"
            type="text"
            v-model="form.contact.department.en"
            @input="update"
            v-validate="'max:140'"
            :state="validateState('contact department',form.contact.department.en)"
            name="contact department"/>

          <field-error-message :error="errors.collect('contact department')"/>

        </BFormGroup>
      </div>

      <div class="col-lg-6">
        <BFormGroup id="countryGroup">
          <label data-req="*" for="form.contact.country">Country </label>

          <SCBDSelect
            @input="update"
            type="Countries"
            id="form.contact.country"
            v-model="form.contact.country"
            tag-view
            v-validate="'required'"
            :state="validateState('contact country',form.contact.country.identifier)"
            name="contact country"/> 

          <field-error-message :error="errors.collect('contact country',form.contact.country.identifier)"/>
        </BFormGroup>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <BFormGroup id="emailGroup" >
          <label data-req="*" for="form.contact.email">Email </label>
          <BFormInput
            id="form.contact.email"
            type="email"
            v-model.trim="form.contact.email"
            @input="update"
            v-validate="'email|required'"
            :state="validateState('contact email',form.contact.email)"
            placeholder="example: user@domain.com "
            name="contact email"/>

          <field-error-message :error="errors.collect('contact email')"/>
        </BFormGroup>
      </div>

      <div class="col-lg-6">
        <BFormGroup id="phoneGroup" label="Phone" label-for="form.contact.phone">
          <BFormInput
            id="form.contact.phone"
            type="text"
            v-model.trim="form.contact.phone"
            @input="update"
            placeholder="example: +1 514.288.2220 "
            v-validate="'max:35'"
            :state="validateState('contact phone',form.contact.phone)"
            name="contact phone"/>

          <field-error-message :error="errors.collect('contact phone')"/>
        </BFormGroup>
      </div>
    </div>
  </section>
</template>

<script>

import AAFormMixin from '../../modules/AAFormMixin'
import SCBDSelect from './controls/SCBDSelect'
export default {
  name: 'AGContactForm',
  mixins: [AAFormMixin],
  components: { SCBDSelect },
  props: {
    value: {
      type: [Array, Object],
      required: true
    },
    multi: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        contact: {
          prefix: {},
          firstName: {},
          lastName: {},
          department: {},
          country: '',
          phone: '',
          email: ''
        }
      }
    }
  },
  methods: { update }
}

function update() {
  let contact = this.cleanForm(this.form.contact)
  this.$emit('input', contact)
}
</script>