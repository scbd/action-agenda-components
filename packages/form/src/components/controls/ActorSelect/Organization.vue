
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="form-group" :id="`group.${actor.actorType}.name`" >
          <label  :for="`${actor.actorType}.name`"> {{ $t(`Name of the lead organization`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${actor.actorType}.name`"
            type        ="text"
            v-model.trim="actor.name['en']"
            v-validate  ="'required|max:140'"
            :class      ="[ getValidationClass(`${actor.actorType}.name`) ]" 
            :name       ="`${actor.actorType}.name`"
            />
          <field-error-message :error="errors.collect(`${actor.actorType}.name`)"/>
        </div>
      </div>
    </div>

    <div class="row">

      <div class="col-lg-6">
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
          <field-error-message :error="errors.collect(`${actor.actorType}.url`)" :state="validateState(`${actor.actorType}.url`)" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group" :id="`group.${actor.actorType}.image`" l>
          <label :for="`${actor.actorType}.image`"> {{$t(`Logo`)}} </label>
            <Links
            @input="update"
            :id="`${actor.actorType}.image`"
            v-model="actor.image"
            :type="['files','links']"
            :multi='false'
            :name="`${actor.actorType}.image`"/>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">

        <div class="form-group" :id="`group.${actor.actorType}.country`">
          <label  :for="`${actor.actorType}.country`">{{ $t(`Country`) }} </label>
          <SCBDSelect
            @input="update"
            type="countries"
            :id="`${actor.actorType}.country`"
            v-model="actor.country"
            tag-view
            v-validate="'required'"
            :state   ="[ getValidationClass(`${actor.actorType}.country`) ]" 
            :name="`${actor.actorType}.country`"
          />
          <field-error-message :error="errors.collect(`${actor.actorType}.country`)" :state="validateState(`${actor.actorType}.country`)" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group" :id="`group.${actor.actorType}.types`" >
          <label  :for="`${actor.actorType}.types`">{{ $t(`Type`) }}  </label>
          <SCBDSelect
            @input="update"
            type="orgTypes"
            :id="`${actor.actorType}.types`"
            v-model="actor.types"
            multi
            tag-view
            v-validate="'required'"
            :state   ="[ getValidationClass(`${actor.actorType}.types`) ]"
            :name="`${actor.actorType}.types`"
          />
          <field-error-message :error="errors.collect(`${actor.actorType}.types`)" :state="validateState(`${actor.actorType}.types`)" />
        </div>
      </div>

      <div class="col-6" v-if="isOther">
        <div class="form-group" :id="`group.${actor.actorType}.typeOther`" >
          <label  :for="`${actor.actorType}.typeOther`">{{ $t(`Other Type`) }} </label>
          <input class="form-control"
            @input="update"
            :id="`${actor.actorType}.typeOther`"
            type="text"
            v-model.trim="actor.typeOther['en']"
            v-validate="'required|max:140'"
            :class   ="[ getValidationClass(`${actor.actorType}.typeOther`) ]"
            :name="`${actor.actorType}.typeOther`"
          />
          <field-error-message :error="errors.collect(`${actor.actorType}.typeOther`)" :state="validateState(`${actor.actorType}.typeOther`)" />
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
  name      : 'OrganizationForm',
  mixins    : [ FormMixin ],
  components: { SCBDSelect, Links },
  props     : { value: { type: Object, required: true } },
  methods   : { update, showImage, deleteLogo },
  computed  : { isOther },
  data, i18n
}

function data(){
  return {
    actor: {
      name     : {  },
      url      : '',
      image    : { url: '' },
      types    : [],
      country  : '',
      typeOther: { },
      actorType: 'organization'
    },
    orgLogo : '', //temp holder for uploaded image
    index   : null //index of editable org in array model
  }
}

function isOther(){
  if (!this.actor.types || !this.actor.types.length) return false

  for (let i = 0; i < this.actor.types.length; i++)
    if(this.actor.types[i].identifier === 'ORG-TYPE-OTHER')
      return true
    
  return false
}

function update(){
  const org = this.cleanForm(this.actor)

  return this.$emit('input', org)
}

function deleteLogo(){
  this.orgLogo = ''
  this.actor.organization.image = ''
  this.$refs.logo.reset()
}

function showImage({ srcElement }){
  if (srcElement.files && srcElement.files[0]){
    const reader = new FileReader()
    const self   = this

    reader.onload = (e) => {
      self.orgLogo = e.target.result
      self.$forceUpdate()
    }
    reader.readAsDataURL(srcElement.files[0])
  }
}
</script>

<style scoped>
  .logo { max-height: 100px  }
</style>