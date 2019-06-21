<i18n src="./locales/index.json"></i18n>

<template>
  <div class="row">
      <div class="col-12">
        
        <div class="form-group" id="group.action.name">
          <label  for="action.name"> {{ $t(`action.name.label`) }} </label>
          <input class="form-control" 
            @input      ="update"
            id          ="action.name"
            type        ="text"
            v-model.trim="action.name.en"
            v-validate  ="'required|max:140'"
            :class      ="[ getValidationClass($t(`action.name.label`)) ]" 
            :name       ="$t(`action.name.label`)"
            :placeholder="$t(`action.name.placeholder`)" 
            />

          <small v-if="$t(`action.name.help`)" class="form-text text-muted">{{$t(`action.name.help`)}}</small>
          <field-error-message :error="errors.collect($t(`action.name.label`))"/>
        </div>

      </div>
      <div class="col-12">

        <div class="form-group" :id="`group.action.description`">
          <label :for="`action.description`"> {{ $t(`action.description.label`) }} </label>
          <b-form-textarea 
              id="action.description" 
              @input="update" 
              v-model="action.description.en" 
              :rows="3"
              v-validate="'required|max:1000'"
              :state="validateState($t(`action.description.label`),action.description.en)"
              :name="$t(`action.description.label`)" 
              :placeholder="$t(`action.description.placeholder`)" 
          />
          <small v-if="$t(`action.description.help`)" class="form-text text-muted">{{$t(`action.description.help`)}}</small>
          <field-error-message :error="errors.collect($t(`action.description.label`))" />
        </div>

      </div>
      <div class="col-12">

        <div class="form-group" id="`group.action.attachments">
          <label :for="`action.attachments`"> {{ $t(`action.attachments.label`) }} </label>
          <Links  @input="update" id="attachments" v-model="action.attachments" :type="['files','links']" multi name="attachments"/>
          <small v-if="$t(`action.attachments.help`)" class="form-text text-muted">{{$t(`action.attachments.help`)}}</small>
        </div>

      </div>
  </div>
</template>

<script>

import Links         from '@controls/Links'
import AAFormMixin   from '@/modules/AAFormMixin'
import bFormTextarea from 'bootstrap-vue/es/components/form-textarea/form-textarea'

export default {
  name      : 'Action',
  mixins    : [ AAFormMixin ],
  components: { Links, bFormTextarea },
  props     : { options: { type: Object } },
  methods   : { update },
  data
}

function data() {
  return  {
            action: {
              name        : { en:'' },
              description : { en:'' },
              attachments : []
            }
          }
}

function update() {
  let action = this.cleanForm(this.action)
  this.$emit('input', action)
}
</script>