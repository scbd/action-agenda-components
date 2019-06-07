<template>
  <section>
    <legend>{{options.label}}</legend>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <BFormGroup id="firstNameGroup" >
                  <label  for="form.action.name">Name of the action </label>
                  <BFormInput
                    id="form.action.name"
                    type="text"
                    v-validate="'required|max:140'"
                    :state="validateState('action name',form.action.name)"
                    @input="update"
                    v-model.trim="form.action.name.en"
                    name="action name"
                  />
                  <field-error-message :error="errors.collect('action name')"/>
                </BFormGroup>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <BFormGroup
                  ref="actionDescription"
                  id="actionDescription">

                  <label  for="form.action.description">Description </label>
                  <b-form-textarea
                    id="form.action.description"
                    @input="update"
                    v-model="form.action.description.en"
                    :rows="3"
                    v-validate="'required|max:1000'"
                    :state="validateState('action description',form.action.description.en)"
                    name="action description"
                  />
                  <small id="actionDescriptionHelpText" class="form-text text-muted">
                    Short summary of the action and how it contributes to biodiversity objectives.
                  </small>
                  <field-error-message :error="errors.collect('action description')"/>
                </BFormGroup>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <BFormGroup id="testGroup" label="Images and additional information" label-for="attachments">
                  <Links  @input="update" id="attachments" v-model="form.attachments" :type="['files','links']" multi name="attachments"/>
                </BFormGroup>
              </div>
            </div>

          </div>
        </div>
  </section>
</template>

<script>

import Links         from './controls/Links'
import AAFormMixin   from '../../modules/AAFormMixin'
import SCBDSelect    from './controls/SCBDSelect'
import bFormTextarea from 'bootstrap-vue/es/components/form-textarea/form-textarea'

export default {
  name: 'Action',
  mixins: [AAFormMixin],
  components: { SCBDSelect, Links, bFormTextarea },
  props: {
    options: {
      type: Object, // later user options to overwrite props
    }
  },
  data() {
    return {
      form: {
        action: {
          name               : { en:'' },
          description        : { en:'' },
          attachments        : []
        }
      }
    }
  },
  methods: { update }
}

function update() {
  let action = this.cleanForm(this.form.action)
  this.$emit('input', action)
}
</script>