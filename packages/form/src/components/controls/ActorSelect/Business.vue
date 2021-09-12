<template>

  <div>
    <div class="row">
      <div class="col-12">
        <div class="form-group" :id="`group.${actor.actorType}.name`" >
          <label  :for="`${actor.actorType}.name`"> {{ $t(`Organization (please indicate the name of lead organization)`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${actor.actorType}.name`"
            type        ="text"
            v-model.trim="actor.name[$i18n.locale]"
            v-validate  ="'required|max:140'"
            :class      ="[ getValidationClass(`${actor.actorType}.name`) ]" 
            :name       ="`${actor.actorType}.name`"
            />
          <FieldErrorMessage :error="errors.collect(`${actor.actorType}.name`)"/>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="form-group" :id="`group.${actor.actorType}.url`" >
          <label  :for="`${actor.actorType}.url`">{{ $t('Website') }} </label>
          <input class="form-control" 
            @input="update"
            :id="`${actor.actorType}.url`"
            type="url"
            v-model.trim="actor.url"
            v-validate="'required|url'"
            :class   ="[ getValidationClass(`${actor.actorType}.url`) ]" 
            :name="`${actor.actorType}.url`"
          />
          <FieldErrorMessage :error="errors.collect(`${actor.actorType}.url`)" :state="validateState(`${actor.actorType}.url`)" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="form-group" :id="`group.${actor.actorType}.fpname`" >
          <label  :for="`${actor.actorType}.fpname`"> {{ $t(`Name of the focal point in organization`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${actor.actorType}.fpname`"
            type        ="text"
            v-model.trim="actor.fpname[$i18n.locale]"
            v-validate  ="'required|max:140'"
            :class      ="[ getValidationClass(`${actor.actorType}.fpname`) ]" 
            :name       ="`${actor.actorType}.fpname`"
            />
          <FieldErrorMessage :error="errors.collect(`${actor.actorType}.fpname`)"/>
        </div>
      </div>

      <div class="col-12">
        <div class="form-group" :id="`group.${actor.actorType}.email`" >
          <label  :for="`${actor.actorType}.email`"> {{ $t(`Email of the focal point`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${actor.actorType}.email`"
            type        ="text"
            v-model.trim="actor.email"
            v-validate="'email|required'"
            :class   ="[ getValidationClass(`${actor.actorType}.email`) ]"
            :name       ="`${actor.actorType}.email`"
            />
          <FieldErrorMessage :error="errors.collect(`${actor.actorType}.email`)"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import FormMixin  from '../../form-mixin.js'
import SCBDSelect from '../SCBDSelect.vue'
import Links      from '../Links/index.vue'
import i18n       from '../../../locales/index.js'


export default {
  name      : 'BusinessForm',
  mixins    : [ FormMixin ],
  components: { SCBDSelect, Links },
  props     : { value: { type: Object, required: true } },
  methods   : { update },
  computed  : {  },
  data, i18n
}

function data(){
  return {
    actor: {
      name     : {  },
      url      : '',
      fpname   : {  },
      email    : '',
      actorType: 'business'
    }
  }
}

function update(){
  const busin = this.cleanForm(this.actor)

  return this.$emit('input', busin)
}

</script>

<style scoped>
  .logo { max-height: 100px  }
</style>