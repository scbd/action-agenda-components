<template>
  <BContainer fluid>

    <b-form @submit="onSubmit"  novalidate>


      <BFormRow>
        <BCol >
        
          <BFormGroup
            id="OrganizationTypeGroup"
            label="OrganizationType"
            label-for="OrganizationType">

              <scbd-select
                type="OrganizationType"             
                id="OrganizationType"
                v-model="form.organization.type"
                multi
                tag-view
                v-validate="'required'"
                :state="validateState('organization type',form.organization.type.length)"
                name="organization type"/>
      
            <field-error-message :error="errors.collect('organization type')" :state="validateState('organization type',form.organization.type)"/>
          </BFormGroup>
        </BCol>
          </BFormRow>
      <BFormRow>
        <BCol >
          <BFormGroup
            id="JurisdictionGroup"
            label="Jurisdiction "
            label-for="Jurisdiction">

            <scbd-select
              type="Jurisdiction"            
              id="Jurisdiction"
              v-model="form.action.jurisdiction"
              multi
              tag-view
              v-validate="'required'"
              :state="validateState('organization jurisdiction',form.action.jurisdiction)"
              name="organization jurisdiction"/>

            <field-error-message :error="errors.collect('organization jurisdiction')" />
          </BFormGroup>
        </BCol>      </BFormRow>
      <BFormRow>
        <BCol >
          <BFormGroup
            id="SubjectGroup"
            label="Subject "
            label-for="Subject">

            <scbd-select 
              type="Subject"            
              id="Subject" 
              v-model="form.action.subject" 
              multi 
              tag-view
              v-validate="'required'"
              :state="validateState('action subject',form.action.subject)"
              name="action subject"/>

            <field-error-message :error="errors.collect('action subject')" />

          </BFormGroup>
        </BCol>
      </BFormRow>
      <BFormRow>
        <BCol >
          <BFormGroup
            id="AichiGroup"
            label="Aichi "
            label-for="Aichi">

            <scbd-select 
              type="Aichi"
              id="Aichi" 
              v-model="form.action.aichi" 
              multi 
              tag-view
              v-validate="'required'"
              :state="validateState('action aichi biodiversity target',form.action.aichi)"
              name="action aichi biodiversity target"/>

            <field-error-message :error="errors.collect('action aichi biodiversity target')" />
          </BFormGroup>
        </BCol>
              </BFormRow>
      <BFormRow>
        <BCol >
          <BFormGroup
            id="CountriesGroup"
            label="Country "
            label-for="country">

            <scbd-select
              type="Countries"
              id="Countries"
              v-model="form.action.country"
              multi
              tag-view
              v-validate="'required'"
              :state="validateState('Country',form.action.country)"
              name="Country"/>

            <field-error-message :error="errors.collect('Country')" />
          </BFormGroup>
        </BCol>
      </BFormRow>
      <BFormRow>
        <BCol >
          <BFormGroup
            id="RegionsGroup"
            label="Regions "
            label-for="Regions">

            <scbd-select
              type="Regions"
              id="Regions"
              v-model="form.action.Region"
              multi
              tag-view
              v-validate="'required'"
              :state="validateState('Regions',form.action.country)"
              name="Regions"/>

            <field-error-message :error="errors.collect('Regions')" />
          </BFormGroup>
        </BCol>
      </BFormRow>
      <BFormRow>
        <BCol >
          <BFormGroup
            id="GeoLocationGroup"
            label="GeoLocations"
            label-for="GeoLocation">

            <scbd-select
              type="GeoLocation"
              id="GeoLocation"
              v-model="form.action.GeoLocation"
              multi
              tag-view
              v-validate="'required'"
              :state="validateState('GeoLocation',form.action.GeoLocation)"
              name="GeoLocation"/>

            <field-error-message :error="errors.collect('GeoLocation')" />
          </BFormGroup>
        </BCol>
      </BFormRow>
            <BFormRow>
        <BCol >
          <BFormGroup
            id="SDGsGroup"
            label="SDGs"
            label-for="sdgs">

            <scbd-select
              type="SDGs"
              id="SDGs"
              v-model="form.action.sdgs"
              multi
              tag-view
              v-validate="'required'"
              :state="validateState('SDGs',form.action.sdgs)"
              name="SDGs"/>

            <field-error-message :error="errors.collect('SDGs')" />
          </BFormGroup>
        </BCol>
      </BFormRow>
      <b-button type="submit" variant="primary">Submit</b-button> &nbsp;
    </b-form>

  </BContainer>
</template>

<script>
import AAFormMixin from '../../src/modules/AAFormMixin'
import bForm from "bootstrap-vue/es/components/form/form"
import bButton from 'bootstrap-vue/es/components/button/button'
//scbd controls
import SCBDSelect from "../../src/components/AAForm/controls/SCBDSelect"



export default {
  name: "SCBDSelectTest",
    mixins:[AAFormMixin],
  components: {
    'scbd-select':SCBDSelect,
        bForm,
    bButton,
  },
  data() {
    return {
      form: {
        organization: {
          type: []
        },
        action: {
          country: [],
          subject: [],
          aichi: [],
          jurisdiction: [],
          GeoLocation:[],
          Region:[],
          sdgs:[]
        }
      }
    };
  },
    methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$validator.validate()
     
     this.$children.forEach(vm => {
       if(vm.$validator)
        vm.$validator.validateAll();
      });

    },
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* .invalid-feedback {
    display: block;
  } */
  input[type=file]:focus { outline-width:0; outline: none; outline-color: rgba(0,0,0,0)} 
  .multi-select-form-conrtol{
    padding: 0 0 0 0;
    min-height: 48px;
    border-radius: 5px;
}
</style>
