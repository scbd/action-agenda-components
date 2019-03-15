import Vue from "vue";
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate, {fieldsBagName: 'veeFields',fastExit: false})
import BFormGroup from 'bootstrap-vue/es/components/form-group/form-group'
import BContainer from 'bootstrap-vue/es/components/layout/container'
import BCol from 'bootstrap-vue/es/components/layout/col'
import BFormRow from 'bootstrap-vue/es/components/form/form-row'
import BFormInput from 'bootstrap-vue/es/components/form-input/form-input'
import FieldErrorMessage from '../components/AAForm/controls/FieldErrorMessage'
import BButton from 'bootstrap-vue/es/components/button/button'
import  "bootstrap-vue/dist/bootstrap-vue.css"
import { resetForm } from "./helpers"
import {isNil, omitBy, isEmpty, clone, compact} from 'lodash'
export default {
    components: {
        BFormGroup,
        BContainer,
        BCol,
        BFormRow,
        BFormInput,
        FieldErrorMessage,
        BButton,
      },
    methods: { validateState, resetForm, isValid, resetValidation,cleanForm}
}

function cleanForm(value) {
  let form = clone(value)
  form  = omitBy(form , isEmpty)
  form  = omitBy(form , isNil)

  for (const key in form ) {
    if(Array.isArray(form[key])){
      form[key].forEach(element => {
        if (typeof element === 'object') 
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
  console.log('isValid from mixing',isValidFlag)
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
// BFormGroup: ()=>import('bootstrap-vue/es/components/form-group/form-group'),
// BContainer: ()=>import('bootstrap-vue/es/components/layout/container'),
// BCol: ()=>import('bootstrap-vue/es/components/layout/col'),
// BFormRow: ()=>import('bootstrap-vue/es/components/form/form-row'),
// BFormInput: ()=>import('bootstrap-vue/es/components/form-input/form-input'),
// FieldErrorMessage: ()=>import('../components/AAForm/controls/FieldErrorMessage'),
// BButton:() => import('bootstrap-vue/es/components/button/button'),