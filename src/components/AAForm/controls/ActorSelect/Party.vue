<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <BFormGroup id="hqcGroup">

          <label  for="form.organization.country">Government of actor </label>
          <SCBDSelect
            @input="update"
            type="Countries"
            id="form.organization.country"
            v-model="form.organization.country"
            tag-view
            v-validate="'required'"
            :state="validateState('government of actor')"
            name="government of actor"/>

          <field-error-message :error="errors.collect('government of actor')"/>
        </BFormGroup>
      </div>

      <div class="col-6">
        <BFormGroup id="orgNameGroup" >
          <label  for="form-organization-name">Name of actor </label>
          <BFormInput
            @input="update"
            id="form-organization-name"
            type="text"
            v-model.trim="form.organization.name.en"
            v-validate="'required|max:140'"
            :state="validateState('name',form.organization.name)"
            name="name"/>

          <field-error-message :error="errors.collect('organization name')"/>
           <small id="actionDescriptionHelpText" class="form-text text-muted"> Office, department or branch of the government </small>
        </BFormGroup>
      </div>
      
       <div class="col-lg-6">
        <BFormGroup id="orgWebsiteGroup" label="Website of actor" label-for="form-organization-website">
          <BFormInput
            @input="update"
            id="form-organization-website"
            type="url"
            v-model.trim="form.organization.url"
            v-validate="'url'"
            :state="validateState('website of actor',form.organization.url)"
            name="website of actor"/>

          <field-error-message :error="errors.collect('website of actor')"/>
        </BFormGroup>
      </div>
    </div>

    <div class="row">
        <div class="col-lg-6">
        <BFormGroup id="orgTypeGroup">
          <label  for="form.organization.type">Type  </label>
          <SCBDSelect
            @input="update"
            type="GovernmentType"
            id="form.organization.type"
            v-model="form.organization.types"
            multi
            tag-view
            v-validate="'required'"
            :state="validateState('government type',form.organization.types.length)"
            name="government type"/>

          <field-error-message :error="errors.collect('government type')"/>
        </BFormGroup>
      </div>
      <div class="col-6" v-if="isOther">
        <BFormGroup id="orgNameGroup" >
          <label  for="form-typeOther-name">Other Type </label>
          <BFormInput
            @input="update"
            id="form-typeOther-name"
            type="text"
            v-model.trim="form.organization.typeOther.en"
            v-validate="'required|max:140'"
            :state="validateState('organization type other',form.organization.typeOther)"
            name="organization type other"/>

          <field-error-message :error="errors.collect('organization type other')"/>
        </BFormGroup>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <BFormGroup id="logoGroup" label="Logo" label-for="form-organization-logo">
            <Links 
            id="form-organization-logo"
            v-model="form.organization.image"
            :type="['files','links']"
            :multi='false'
            name="logo"/>
        </BFormGroup>
        <BContainer v-if="orgLogo && validateState('logo',true)">
          <div class="row">
            <div class="col-11">
              <img :src="orgLogo" class="logo">
            </div>
            <div class="col-11">
              <button v-on:click="deleteLogo" type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </BContainer>
      </div>
    </div>
  </div>
</template>

<script>

  import AAFormMixin from '../../../../modules/AAFormMixin'
  import SCBDSelect  from '../../controls/SCBDSelect'
  import Links       from '../../controls/Links'

  export default {
    name      : 'AAGovernmentForm',
    mixins    : [AAFormMixin],
    components: { SCBDSelect, Links },
    props: {
      value: { type: [Array, Object], required: true },
      multi: { type: Boolean, default: false }
    },
    data() {
      return {
        form: {
          organization: {
            name: {en:''},
            url: '',
            image: {},
            types: [],
            country: '',
            actorType: 'party'
          }
        },
        orgLogo: '', //temp holder for uploaded image
        index: null //index of editable org in array model
      }
    },
    methods: { update, showImage, deleteLogo },
    computed:{isOther}
  }

  function update() {
    let org = this.cleanForm(this.form.organization)
    return this.$emit('input', org ) 
  }

  function deleteLogo() {
    this.orgLogo = '' 
    this.form.organization.image = '' 
    this.$refs.logo.reset() 
  }

  function isOther(){
    if (!this.form.organization.types || !this.form.organization.types.length) return false

    for (let i = 0; i < this.form.organization.types.length; i++) 
      if(this.form.organization.types[i].identifier === 'ORG-TYPE-OTHER') 
        return true
      
    return false
  }

  function showImage({ srcElement }) {
    if (srcElement.files && srcElement.files[0]) {
      var reader = new FileReader() 
      let self = this 
      reader.onload = function(e) {
        self.orgLogo = e.target.result 
        self.$forceUpdate() 
      } 
      reader.readAsDataURL(srcElement.files[0]) 
    }
  }
</script>

<style scoped>
  .logo {
    max-height: 100px 
  }
</style>