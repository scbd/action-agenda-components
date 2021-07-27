<template>
  <div class="row">

    <div class="col-12">
      <div class="form-group" id="group.action.name">
        <label  for="action.name"> {{ $t(`Name`) }} </label>
        <input class="form-control" 
          @input      ="update"
          id          ="action.name"
          type        ="text"
          v-model.trim="action.name[$i18n.locale]"
          v-validate  ="'required|max:140'"
          :class      ="[ getValidationClass(`action.name`) ]"
          :name       ="`action.name`"
          />
        <field-error-message :error="errors.collect('action.name')"/>
      </div>
    </div>

    <div class="col-12">
      <div class="form-group" :id="`group.action.description`">
        <label :for="`action.description`"> {{ $t(`Description`) }} </label>
        <textarea
            class="form-control"
            id="action.description"
            @input="update"
            v-model="action.description[$i18n.locale]"
            :rows="3"
            v-validate="'required|max:1000'"
            :class="[ getValidationClass(`action.description`) ]"
            :name="`action.description`"
        />
        <field-error-message :error="errors.collect(`action.description`)" />
      </div>

    </div>
    <div class="col-12">
      <div class="form-group" id="group.action.attachments">
        <label :for="`action.attachments`"> {{ $t(`Attachment (s)`) }} </label>
        <Links  @input="update" id="action.attachments" v-model="action.attachments" :type="[ 'files','links' ]" multi name="attachments"/>
      </div>
    </div>

    <div class="col-12">
      <div class="form-group" id="group.action.startdate">
        <label  for="action.startdate"> {{ $t(`Start Date`) }} </label>
        <input class="form-control" 
          @input      ="update"
          id          ="action.startdate"
          type        ="date"
          v-model.trim="action.startdate[$i18n.locale]"
          v-validate  ="'required|max:140'"
          :class      ="[ getValidationClass(`action.startdate`) ]"
          :name       ="`action.startdate`"
          />
        <field-error-message :error="errors.collect('action.startdate')"/>
      </div>
    </div>

    <div class="col-12">
      <div class="form-group" id="group.action.enddate">
        <label  for="action.enddate"> {{ $t(`End Date`) }} </label>
        <input class="form-control" 
          @input      ="update"
          id          ="action.enddate"
          type        ="date"
          v-model.trim="action.enddate[$i18n.locale]"
          v-validate  ="'required|max:140'"
          :class      ="[ getValidationClass(`action.enddate`) ]"
          :name       ="`action.enddate`"
          />
        <field-error-message :error="errors.collect('action.enddate')"/>
      </div>
    </div>    

  </div>
</template>

<script>
  import Links       from './controls/Links/index.vue'
  import FormMixin   from './form-mixin.js'
  import SCBDSelect  from './controls/SCBDSelect.vue'
  import i18n        from '../locales/index.js'
  import getLocale   from './locale.js'

  export default {
    name      : 'Action',
    mixins    : [ FormMixin ],
    components: { Links, SCBDSelect },
    props     : { options: { type: Object } },
    methods   : { update },
    data, i18n
  }

  function data() {
    const locale   = getLocale()

    return  {
              action: {
                name        : { [locale]: '' },
                description : { [locale]: '' },
                attachments : [],
                startdate   : { [locale]: '' },
                enddate     : { [locale]: '' }
              }
            }
  }

  function update() {
    let action = this.cleanForm(this.action)
    this.$emit('input', action)
  }
</script>