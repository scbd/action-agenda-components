<template>
  <section>
    <!-- <legend>{{options.label}}</legend> -->
        <!-- <div class="card">
          <div class="card-body"> -->
            

          <div class="row" >
            <div class="col-lg-6" v-if="options.operationalAreas">
              <BFormGroup>

                <label  for="form.actionDetails.target">Operational Area(s) </label>
                <SCBDSelect
                  type="GeoLocations"
                  id="form.actionDetails.target"
                  v-model="form.actionDetails.operationalAreas"
                  multi
                  tag-view
                  :state="validateState('operational area(s)',form.actionDetails.operationalAreas)"
                  name="operational area(s)"
                />

                <field-error-message :error="errors.collect('operational area(s)')"/>
              </BFormGroup>
            </div>
            <div class="col-lg-6" v-if="options.subjects">
              <BFormGroup  id="subjectGroup">
                <label  for="form.actionDetails.subjects">Thematic Areas(s) </label>
                <SCBDSelect
                  type="Subject"
                  id="form.actionDetails.subjects"
                  v-model="form.actionDetails.subjects"
                  multi
                  tag-view
                  :state="validateState('action Thematic Areas',form.actionDetails.subjects.length)"
                  name="action Thematic Areas"/>

                <field-error-message :error="errors.collect('action Thematic Areas')"/>
              </BFormGroup>
            </div>
          </div>




            <div class="row">
              <div class="col-lg-6">
                <BFormGroup
                  id="aichiGroup"
                  label="Linkages to Aichi Biodiversity Targets "
                  label-for="form.actionDetails.aichi">

                  <SCBDSelect
                     @input="update"
                    type="Aichi"
                    id="form.actionDetails.aichi"
                    v-model="form.actionDetails.aichiTargets"
                    multi
                    tag-view
                    name="action aichi biodiversity target"
                  />
                </BFormGroup>
              </div>
              <div class="col-lg-6">
                <BFormGroup
                  id="SDGsGroup"
                  label="Linkages to Sustainable Development Goals "
                  label-for="SDGs">

                  <SCBDSelect
                   @input="update"
                    type="SDGs"
                    id="DGs"
                    v-model="form.actionDetails.sdgs"
                    multi
                    tag-view
                    name="SDGs"
                  />
                </BFormGroup>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <BFormGroup
                  ref="actionProgressMeasured"
                  id="actionProgressMeasured"
                  label="Progress tracking"
                  label-for="form.actionDetails.progressMeasured"
                >
                  <b-form-textarea
                   @input="update"
                    id="form.actionDetails.progressMeasured"
                    v-model="form.actionDetails.progressMeasured.en"
                    v-validate="'max:1000'"
                    :state="validateState('progress measured',form.actionDetails.progressMeasured.en)"
                    :rows="3"
                    name="progress measured"
                  />
                  <small id="actionprogressMeasured" class="form-text text-muted">
                    Describe how your Action measures progress. Provide a link if relevant.
                  </small>
                  <field-error-message :error="errors.collect('progress measured')"/>
                </BFormGroup>
              </div>
            </div>
          <!-- </div>
        </div> -->
  </section>
</template>

<script>

import AAFormMixin   from '../../modules/AAFormMixin'
import SCBDSelect    from './controls/SCBDSelect'
import bFormTextarea from 'bootstrap-vue/es/components/form-textarea/form-textarea'

export default {
  name: 'ActionDetails',
  mixins: [AAFormMixin],
  components: { SCBDSelect, bFormTextarea },
  props: {
    options: {
      type:Object
    }
  },
  data() {
    return {
      form: {
        actionDetails: {
          aichiTargets       : [],
          sdgs               : [],
          progressMeasured   : { en:'' },
          subjects:[],
          operationalAreas:[]
        }
      }
    }
  },
  methods: { update }
}

function update() {
  let actionDetails = this.cleanForm(this.form.actionDetails)
  this.$emit('input', actionDetails)
}
</script>