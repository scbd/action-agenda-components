<template>
  <section>

    <div class="row" v-if="options.thematicAreas">
      <div class="col-lg-12" >

        <div class="form-group" id="group.actionDetails.thematicAreas">
          <label for="actionDetails.thematicAreas"> {{ $t(`Thematic Areas (s)`) }} </label>
          <SCBDSelect
            type="subjects"
            id="form.actionDetails.subjects"
            v-model="actionDetails.thematicAreas"
            multi
            tag-view
            :state="validateState(`actionDetails.thematicAreas`,actionDetails.thematicAreas)"
            :name="`actionDetails.thematicAreas`"
            />
          <field-error-message :error="errors.collect(`actionDetails.thematicAreas`)"/>
        </div>

      </div>
    </div>

    <div class="row" v-if="options.progressMeasured">
      <div class="col">
        <div class="form-group" id="group.progressMeasured.progressMeasured">
          <label for="actionDetails.progressMeasured"> {{ $t(`Progress tracking`) }} </label>
          <textarea
            @input="update"
            id="actionDetails.progressMeasured"
            v-model="actionDetails.progressMeasured[$i18n.locale]"
            v-validate="'max:1000'"
            class="form-control" 
            :class      ="[ getValidationClass(`action.progressMeasured`) ]" 
            :rows="3"
            :name="`actionDetails.progressMeasured`"
            :placeholder="$t(`Describe how you measure progress. Provide a link if relevant.`)"
          />
          <field-error-message :error="errors.collect(`actionDetails.progressMeasured`)"/>
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
    name      : 'ActionDetails',
    mixins    : [ FormMixin ],
    components: { SCBDSelect },
    props     : { 
      options : { type:Object },
      value   : { type: Object, required: true },
      },
    methods   : { update },
    data, i18n
  }

  function data() {
    return {
          actionDetails: this.value
      }
  }

  function update() {
    let actionDetails = this.cleanForm(this.actionDetails)
    this.$emit('input', actionDetails)
  }
</script>