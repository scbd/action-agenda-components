import Vue from 'vue';
import VeeValidate from 'vee-validate'
import { isNil, omitBy, isEmpty, clone } from 'lodash'

import   BFormGroup   from 'bootstrap-vue/es/components/form-group/form-group'
import   BContainer   from 'bootstrap-vue/es/components/layout/container'
import   BCol         from 'bootstrap-vue/es/components/layout/col'
import   BFormInput   from 'bootstrap-vue/es/components/form-input/form-input'
import   BButton      from 'bootstrap-vue/es/components/button/button'
import { BFormRow }   from 'bootstrap-vue/es/components'

import  FieldErrorMessage  from '@components/AAForm/controls/FieldErrorMessage'

import  'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VeeValidate, {fieldsBagName: 'veeFields',fastExit: false})

export default {
    components: { BFormGroup, BContainer, BCol, BFormRow, BFormInput, FieldErrorMessage, BButton },
    methods   : { validateState, resetForm, isValid, resetValidation, cleanForm }
}

async function resetForm (root)  {
  let props = Object.keys(root)

  for (let i = 0; i < props.length; i++) {
    let prop = root[props[i]]
    let propType = typeof prop

    if(propType === 'object') await resetForm(root[props[i]])
    else if(propType === 'array')  root[props[i]] = []
    else root[props[i]] = ''
  }
}

function cleanForm(value) {
  let form = clone(value)
  if(form && form.contacts && form.contacts.length==1 && isEmpty(form.contacts[0]))
    delete(form.contacts)
  
  // if(form && form.partners && form.partners.length==1 && (isEmpty(form.partners[0]) || isEmpty(form.partners[0].name)))
  //   delete(form.partners)

  form  = omitBy(form , isEmpty)
  form  = omitBy(form , isNil)
  
  for (const key in form ) {
    if(Array.isArray(form[key])){
     
      form[key].forEach(element => {
        console.log('element',element)
        if (typeof element === 'object'  ) 
          element= cleanForm(element)
      })
    }else if (typeof form[key] === 'object') 
      form[key] = cleanForm(form[key])
    
  }
  return form 
}

async function isValid() {
  let isValidFlag = false;
  if(this.$validator)
    await this.$validator.validateAll()

  for (let i = 0; i < this.$children.length; i++) {
    let vm = this.$children[i];
    if (vm.$validator) await vm.$validator.validateAll();
    isValidFlag = !vm.$validator.errors.count();      
  }

  return isValidFlag
}

async function resetValidation() {
  if(this.$validator) this.$validator.reset()
  for (let i = 0; i < this.$children.length; i++) {
    let vm = this.$children[i];
    if (vm.$validator) await vm.$validator.reset();
  }

}

function validateState(ref,value) {
    if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) 
      return (!this.errors.has(ref) && !value) ? null : !this.errors.has(ref) 
    
    return null
}
