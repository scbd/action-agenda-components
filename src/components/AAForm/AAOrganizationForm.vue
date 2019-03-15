<template>
  <div>
    <div class="row">
      <div class="col-12">
        <BFormGroup id="orgNameGroup" >
          <label data-req="*" for="form-organization-name">Name </label>
          <BFormInput
            @input="update"
            id="form-organization-name"
            type="text"
            v-model.trim="form.organization.name.en"
            v-validate="'required|max:140'"
            :state="validateState('organization name',form.organization.name)"
            name="organization name"/>

          <field-error-message :error="errors.collect('organization name')"/>
        </BFormGroup>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <BFormGroup id="orgWebsiteGroup" label="Website" label-for="form-organization-website">
          <BFormInput
            @input="update"
            id="form-organization-website"
            type="url"
            v-model.trim="form.organization.url"
            placeholder="https:// "
            v-validate="'url'"
            :state="validateState('website url',form.organization.url)"
            name="website url"/>

          <field-error-message :error="errors.collect('website url')"/>
        </BFormGroup>
      </div>

      <div class="col-lg-6">

              <BFormGroup id="logoGroup" label="Logo" label-for="form-organization-logo">
        
                 <Links 
                  id="attachments"
                  v-model="form.organization.image"
                  :type="['files','links']"
                  :multi='false'
                  name="logo"/>

              </BFormGroup>
        <!-- <BFormGroup id="orgLogoGroup" label="Logo" label-for="form-organization-logo">
          <b-form-file
            ref="logo"
            @input="update"
            v-show="(orgLogo && !validateState('logo',true)) || !orgLogo"
            v-model="form.organization.image"
            id="form-organization-logo"
            @change="showImage"
            v-validate="'size:50'"
            :state="validateState('logo',true)"
            multiple
            name="logo"/>

          <field-error-message :error="errors.collect('logo')"/>
        </BFormGroup> -->
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
    <div class="row">
      <div class="col-lg-6">
        <BFormGroup id="orgTypeGroup">
          <label data-req="*" for="form.organization.type">Type  </label>
          <SCBDSelect
            @input="update"
            type="OrganizationType"
            id="form.organization.type"
            v-model="form.organization.types"
            multi
            tag-view
            v-validate="'required'"
            :state="validateState('organization type',form.organization.types.length)"
            name="organization type"
          />

          <field-error-message
            :error="errors.collect('organization type')"
            :state="validateState('organization type',form.organization.types.length)"
          />
        </BFormGroup>
      </div>
      <div class="col-lg-6">
        <BFormGroup id="hqcGroup">

          <label data-req="*" for="form.organization.country">Location  </label>
          <SCBDSelect
            @input="update"
            type="Countries"
            id="form.organization.country"
            v-model="form.organization.country"
            tag-view
            v-validate="'required'"
            :state="validateState('Headquarters Country')"
            name="Headquarters Country"
          />

          <field-error-message
            :error="errors.collect('Headquarters Country')"
            :state="validateState('Headquarters Country')"
          />
        </BFormGroup>
      </div>
    </div>
  </div>
</template>

<script>

  import AAFormMixin from '../../modules/AAFormMixin' 
  import SCBDSelect from './controls/SCBDSelect' 
  import Links from './controls/Links'

  export default {
    name: 'AAOrganizationForm',
    mixins: [AAFormMixin],
    components: {  SCBDSelect, Links },
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
          organization: {
            name: {en:''},
            url: '',
            image: {},
            types: [],
            country: ''
          }
        },
        orgLogo: '', //temp holder for uploaded image
        index: null //index of editable org in array model
      }
    },
    methods: {
      update,
      showImage,
      deleteLogo
    }
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