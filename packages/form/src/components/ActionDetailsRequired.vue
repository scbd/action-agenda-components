<template>
  <section>
<!-- v-if="options.operationalAreas || options.thematicAreas" -->
    <div class="row" >
      <div class="col-lg-6" >

        <div class="form-group" id="group.actionDetailsRequired.actionCategories">
          <label for="actionDetailsRequired.actionCategories"> {{ $t(`Action Themes (s)`) }} </label>
          <SCBDSelect
            type="actionCategories"
            id="form.actionDetailsRequired.actionCategories"
            v-model="actionDetailsRequired.actionCategories"
            multi
            tag-view
            :state="validateState(`actionDetailsRequired.actionCategories`,actionDetailsRequired.actionCategories)"
            :name="`actionDetailsRequired.actionCategories`"
            v-validate="'required'"
            />
          <field-error-message :error="errors.collect(`actionDetailsRequired.actionCategories`)"/>
        </div>

      </div>

      <div class="col-lg-6"  >
        <div class="form-group" id="group.actionDetailsRequired.operationalAreas">
          <label for="actionDetailsRequired.operationalAreas"> {{ $t(`Geographic Area (s)`) }} </label>
          <SCBDSelect
            type="geoLocations"
            id="actionDetailsRequired.operationalAreas"
            v-model="actionDetailsRequired.operationalAreas"
            multi
            tag-view
            :state="validateState(`actionDetailsRequired.operationalAreas`,actionDetailsRequired.operationalAreas)"
            :name="`actionDetailsRequired.operationalAreas`"
            v-validate="'required'"
          />
          <field-error-message :error="errors.collect(`actionDetailsRequired.operationalAreas`)"/>
        </div>
      </div>

    </div>

    <div class="row" >
      <div class="col-lg-6" >

        <div class="form-group" id="group.actionDetailsRequired.aichiTargets">
          <label for="actionDetailsRequired.aichiTargets"> {{ $t(`Aichi Biodiversity Target (s)`) }} </label>
          <SCBDSelect
            @input="update"
            type="aichis"
            id="actionDetailsRequired.aichiTargets"
            v-model="actionDetailsRequired.aichiTargets"
            multi
            tag-view
            :state="validateState(`actionDetailsRequired.aichiTargets`,actionDetailsRequired.aichiTargets)"
            :name="`actionDetailsRequired.aichiTargets`"
            v-validate="'required'"
          />
          <field-error-message :error="errors.collect(`actionDetailsRequired.aichiTargets`)"/>
        </div>

      </div>
      <div class="col-lg-6" >

        <div class="form-group" id="group.actionDetailsRequired.sdgs">
          <label for="actionDetailsRequired.sdgs"> {{ $t(`Sustainable Development Goal (s)`) }} </label>
          <SCBDSelect
            @input="update"
              type="sdgs"
              id="actionDetailsRequired.sdgs"
              v-model="actionDetailsRequired.sdgs"
              multi
              tag-view
              :state="validateState(`actionDetailsRequired.sdgs`,actionDetailsRequired.sdgs)"
              :name="`actionDetailsRequired.sdgs`"
              v-validate="'required'"
          />
          <field-error-message :error="errors.collect(`actionDetailsRequired.sdgs`)"/>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  import FormMixin   from './form-mixin.js'
  import SCBDSelect  from './controls/SCBDSelect.vue'
  import i18n        from '../locales/index.js'

  export default {
    name      : 'actionDetailsRequired',
    mixins    : [ FormMixin ],
    components: { SCBDSelect },
    props     : { 
      options: { type:Object },
      value       : { type: Object, required: true },
      },
    methods   : { update },
    data,  i18n
  }

  function data() {
    return {
          actionDetailsRequired: this.value
      }
  }

  function update() {
    let actionDetailsRequired = this.cleanForm(this.actionDetailsRequired)
    this.$emit('input', actionDetailsRequired)
  }
</script>