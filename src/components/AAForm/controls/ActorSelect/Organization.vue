<i18n src="./locales/index.json"></i18n>
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="form-group" :id="`group.${actor.actorType}.name`" >
          <label  :for="`${actor.actorType}.name`"> {{ $t(`${actor.actorType}.name`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${actor.actorType}.name`"
            type        ="text"
            v-model.trim="actor.name.en"
            v-validate  ="'required|max:140'"
            :state      ="validateState($t(`${actor.actorType}.name`),actor.name)"
            :name       ="$t(`${actor.actorType}.name`)"
            />

          <field-error-message :error="errors.collect($t(`${actor.actorType}.name`))"/>
        </div>
      </div>
    </div>

    <div class="row">

      <div class="col-lg-6">
        <div class="form-group" :id="`group.${actor.actorType}.country`">
          <label  :for="`${actor.actorType}.country`">{{ $t(`${actor.actorType}.country`) }} </label>
          <SCBDSelect
            @input="update"
            type="Countries"
            :id="`${actor.actorType}.country`"
            v-model="actor.country"
            tag-view
            v-validate="'required'"
            :state="validateState($t(`${actor.actorType}.country`))"
            :name="$t(`${actor.actorType}.country`)"
          />

          <field-error-message
            :error="errors.collect($t(`${actor.actorType}.country`))"
            :state="validateState($t(`${actor.actorType}.country`))"
          />
        </div>
      </div>

      <div class="col-lg-6">
        <div class="form-group" :id="`group.${actor.actorType}.url`" >
          <label  :for="`${actor.actorType}.url`">{{ $t(`${actor.actorType}.url`) }} </label>
          <input class="form-control" 
            @input="update"
            :id="`${actor.actorType}.url`"
            type="url"
            v-model.trim="actor.url"
            v-validate="'url'"
            :state="validateState($t(`${actor.actorType}.url`),actor.url)"
            :name="$t(`${actor.actorType}.url`)"/>

          <field-error-message :error="errors.collect($t(`${actor.actorType}.url`))"/>
        </div>
      </div>


    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group" :id="`group.${actor.actorType}.types`" >
          <label  :for="`${actor.actorType}.types`">{{ $t(`${actor.actorType}.types`) }}  </label>
          <SCBDSelect
            @input="update"
            type="OrganizationType"
            :id="`${actor.actorType}.types`"
            v-model="actor.types"
            multi
            tag-view
            :name="$t(`${actor.actorType}.types`)"
          />

          <field-error-message
            :error="errors.collect($t(`${actor.actorType}.types`))"
            :state="validateState($t(`${actor.actorType}.types`),actor.types.length)"
          />
        </div>
      </div>
      <div class="col-6" v-if="isOther">
        <div class="form-group" :id="`group.${actor.actorType}.typeOther`" >
          <label  :for="`${actor.actorType}.typeOther`">{{ $t(`${actor.actorType}.typeOther`) }} </label>
          <input class="form-control" 
            @input="update"
            :id="`${actor.actorType}.typeOther`"
            type="text"
            v-model.trim="actor.typeOther.en"
            v-validate="'required|max:140'"
            :state="validateState($t(`${actor.actorType}.typeOther`),actor.typeOther)"
            :name="$t(`${actor.actorType}.typeOther`)"/>

          <field-error-message :error="errors.collect($t(`${actor.actorType}.typeOther`))"/>
        </div>
      </div>
      <div class="col-lg-12">

        <div class="form-group" :id="`group.${actor.actorType}.image`" l>
          <label :for="`${actor.actorType}.image`"> {{$t(`${actor.actorType}.image`)}} </label>
            <Links 
            :id="`${actor.actorType}.image`"
            v-model="actor.image"
            :type="['files','links']"
            :multi='false'
            :name="$t(`${actor.actorType}.image`)"/>

        </div>

      </div>
    </div>
  </div>
</template>

<script>

  import AAFormMixin from '@modules/AAFormMixin'
  import SCBDSelect  from '@controls/SCBDSelect'
  import Links       from '@controls/Links'

  export default {
    name: 'AAOrganizationForm',
    mixins: [AAFormMixin],
    components: {  SCBDSelect, Links },
    props: {
      value: {
        type: [Array, Object],
        required: true
      },
      multi: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        actor: {
            name: {en:''},
            url: '',
            image: {},
            types: [],
            country: '',
            typeOther:{en:''},
            actorType:'organization'
        },
        orgLogo: '', //temp holder for uploaded image
        index: null //index of editable org in array model
      }
    },
    methods: {
      update,
      showImage,
      deleteLogo
    },
    computed:{isOther}
  }

  function isOther(){
    if (!this.actor.types || !this.actor.types.length) return false

    for (let i = 0; i < this.actor.types.length; i++) 
      if(this.actor.types[i].identifier === 'ORG-TYPE-OTHER') 
        return true
      
    return false
  }

  function update() {
    let org = this.cleanForm(this.actor.organization)
    return this.$emit('input', org ) 
  }

  function deleteLogo() {
    this.orgLogo = '' 
    this.actor.organization.image = '' 
    this.$refs.logo.reset() 
  }

  function showImage({ srcElement }) {
    if (srcElement.files && srcElement.files[0]) {
      var reader = new FileReader() 
      let self = this 
      reader.onload = function(e) {
        self.orgLogo = e.target.result 
        self.$forceUpdate() 
      } 
      reader.readAsDataURL(srcElement.files[0]) 
    }
  }
</script>

<style scoped>
  .logo {
    max-height: 100px 
  }
</style>