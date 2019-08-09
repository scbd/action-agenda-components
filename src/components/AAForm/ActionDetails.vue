<i18n src="./locales/index.json"></i18n>

<template>
  <section>

    <div class="row" v-if="options.operationalAreas || options.thematicAreas">
      <div class="col-lg-6" v-if="options.operationalAreas" >

        <div class="form-group" id="group.actionDetails.operationalAreas">
          <label for="actionDetails.operationalAreas"> {{ $t(`actionDetails.operationalAreas.label`) }} </label>
          <SCBDSelect
            type="GeoLocations"
            id="actionDetails.operationalAreas"
            v-model="actionDetails.operationalAreas"
            multi
            tag-view
            :state="validateState($t(`actionDetails.operationalAreas.label`),actionDetails.operationalAreas)"
            :name="$t(`actionDetails.operationalAreas.label`)"
          />
          <small v-if="$t(`actionDetails.operationalAreas.help`)" id="actionDetails.operationalAreas.help" class="form-text text-muted"> {{$t(`actionDetails.operationalAreas.help`)}}</small>
          <field-error-message :error="errors.collect($t(`actionDetails.operationalAreas.label`))"/>
        </div>
      </div>

      <div class="col-lg-6" v-if="options.thematicAreas">

        <div class="form-group" id="group.actionDetails.thematicAreas">
          <label for="actionDetails.thematicAreas"> {{ $t(`actionDetails.thematicAreas.label`) }} </label>
          <SCBDSelect
            type="Subject"
            id="form.actionDetails.subjects"
            v-model="actionDetails.thematicAreas"
            multi
            tag-view
            :state="validateState($t(`actionDetails.thematicAreas.label`),actionDetails.thematicAreas)"
            :name="$t(`actionDetails.thematicAreas.label`)"
            />
          <small v-if="$t(`actionDetails.thematicAreas.help`)" id="actionDetails.thematicAreas.help" class="form-text text-muted"> {{$t(`actionDetails.thematicAreas.help`)}}</small>
          <field-error-message :error="errors.collect($t(`actionDetails.thematicAreas.label`))"/>
        </div>

      </div>
    </div>

    <div class="row" v-if="options.aichiTargets || options.sdgs">
      <div class="col-lg-6" v-if="options.aichiTargets">

        <div class="form-group" id="group.actionDetails.aichiTargets">
          <label for="actionDetails.aichiTargets"> {{ $t(`actionDetails.aichiTargets.label`) }} </label>
          <SCBDSelect
            @input="update"
            type="Aichi"
            id="actionDetails.aichiTargets"
            v-model="actionDetails.aichiTargets"
            multi
            tag-view
            :state="validateState($t(`actionDetails.aichiTargets.label`),actionDetails.aichiTargets)"
            :name="$t(`actionDetails.aichiTargets.label`)"
            :placeholder="$t(`actionDetails.aichiTargets.placeholder`)"
          />
          <small v-if="$t(`actionDetails.aichiTargets.help`)" id="actionDetails.aichiTargets.help" class="form-text text-muted"> {{$t(`actionDetails.aichiTargets.help`)}}</small>
          <field-error-message :error="errors.collect($t(`actionDetails.aichiTargets.label`))"/>
        </div>

      </div>
      <div class="col-lg-6" v-if="options.sdgs">

        <div class="form-group" id="group.actionDetails.sdgs">
          <label for="actionDetails.sdgs"> {{ $t(`actionDetails.sdgs.label`) }} </label>
          <SCBDSelect
            @input="update"
              type="SDGs"
              id="actionDetails.sdgs"
              v-model="actionDetails.sdgs"
              multi
              tag-view
              :state="validateState($t(`actionDetails.sdgs.label`),actionDetails.sdgs)"
              :name="$t(`actionDetails.sdgs.label`)"
              :placeholder="$t(`actionDetails.sdgs.placeholder`)"
          />
          <small v-if="$t(`actionDetails.sdgs.help`)" id="actionDetails.sdgs.help" class="form-text text-muted"> {{$t(`actionDetails.sdgs.help`)}}</small>
          <field-error-message :error="errors.collect($t(`actionDetails.sdgs.label`))"/>
        </div>

      </div>
    </div>

    <div class="row" v-if="options.progressMeasured">
      <div class="col">
        <div class="form-group" id="group.progressMeasured.progressMeasured">
          <label for="actionDetails.progressMeasured"> {{ $t(`actionDetails.progressMeasured.label`) }} </label>
          <textarea
            @input="update"
            id="actionDetails.progressMeasured"
            v-model="actionDetails.progressMeasured.en"
            v-validate="'max:1000'"
            class="form-control" 
            :class      ="[ getValidationClass($t(`action.progressMeasured.label`)) ]" 
            :rows="3"
            :name="$t(`actionDetails.progressMeasured.label`)"
            :placeholder="$t(`actionDetails.progressMeasured.placeholder`)"
          />
          <small v-if="$t(`actionDetails.progressMeasured.help`)" id="actionDetails.progressMeasured.help" class="form-text text-muted"> {{$t(`actionDetails.progressMeasured.help`)}}</small>
          <field-error-message :error="errors.collect($t(`actionDetails.progressMeasured.label`))"/>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import FormMixin   from './FormMixin'
  import SCBDSelect  from '@controls/SCBDSelect'

  export default {
    name      : 'ActionDetails',
    mixins    : [ FormMixin ],
    components: { SCBDSelect },
    props     : { options: { type:Object } },
    methods   : { update },
    data      
  }

  function data() {
    return {
          actionDetails: {
            aichiTargets     : [],
            sdgs             : [],
            progressMeasured : { en:'' },
            thematicAreas    : [],
            operationalAreas : []
          }
      }
  }

  function update() {
    let actionDetails = this.cleanForm(this.actionDetails)
    this.$emit('input', actionDetails)
  }
</script>