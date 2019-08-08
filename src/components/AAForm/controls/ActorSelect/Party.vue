<i18n src="./locales/index.json"></i18n>

<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="form-group" :id="`group.${actor.actorType}.name`" >
          <label  :for="`${actor.actorType}.name`"> {{ $t(`${actor.actorType}.name.label`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${actor.actorType}.name`"
            type        ="text"
            v-model.trim="actor.name.en"
            v-validate  ="'required|max:140'"
            :class      ="[ getValidationClass($t(`${actor.actorType}.name.label`)) ]" 
            :name       ="$t(`${actor.actorType}.name.label`)"
            :placeholder="$t(`${actor.actorType}.name.placeholder`)" 
            />

          <small v-if="$t(`${actor.actorType}.name.help`)" class="form-text text-muted">{{$t(`${actor.actorType}.name.help`)}}</small>
          <field-error-message :error="errors.collect($t(`${actor.actorType}.name.label`))"/>
        </div>
      </div>
    </div>

    <div class="row">

      <div class="col-lg-6">

        <div class="form-group" :id="`group.${actor.actorType}.country`">
          <label  :for="`${actor.actorType}.country`">{{ $t(`${actor.actorType}.country.label`) }} </label>
          <SCBDSelect
            @input="update"
            type="Countries"
            :id="`${actor.actorType}.country`"
            v-model="actor.country"
            tag-view
            v-validate="'required'"
            :state   ="[ getValidationClass($t(`${actor.actorType}.country.label`)) ]" 
            :name="$t(`${actor.actorType}.country.label`)"
            :placeholder="$t(`${actor.actorType}.country.placeholder`)" 
          />
          <small v-if="$t(`${actor.actorType}.country.help`)" class="form-text text-muted">{{$t(`${actor.actorType}.country.help`)}}</small>        
          <field-error-message :error="errors.collect($t(`${actor.actorType}.country.label`))" :state="validateState($t(`${actor.actorType}.country.label`))" />
        </div>
      </div>

      <div class="col-lg-6">
        <div class="form-group" :id="`group.${actor.actorType}.url`" >
          <label  :for="`${actor.actorType}.url`">{{ $t(`${actor.actorType}.url.label`) }} </label>
          <input class="form-control" 
            @input="update"
            :id="`${actor.actorType}.url`"
            type="url"
            v-model.trim="actor.url"
            v-validate="'url'"
            :class   ="[ getValidationClass($t(`${actor.actorType}.url.label`)) ]" 
            :name="$t(`${actor.actorType}.url.label`)"
            :placeholder="$t(`${actor.actorType}.url.placeholder`)" 
          />
          <small v-if="$t(`${actor.actorType}.url.help`)" class="form-text text-muted">{{$t(`${actor.actorType}.url.help`)}}</small>        
          <field-error-message :error="errors.collect($t(`${actor.actorType}.url.label`))" :state="validateState($t(`${actor.actorType}.url.label`))" />
        </div>
      </div>


    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group" :id="`group.${actor.actorType}.types`" >
          <label  :for="`${actor.actorType}.types`">{{ $t(`${actor.actorType}.types.label`) }}  </label>
          <SCBDSelect
            @input="update"
            type="GovernmentType"
            :id="`${actor.actorType}.types`"
            v-model="actor.types"
            multi
            tag-view
            v-validate=""
            :state   ="[ getValidationClass($t(`${actor.actorType}.types.label`)) ]" 
            :name="$t(`${actor.actorType}.types.label`)"
            :placeholder="$t(`${actor.actorType}.types.placeholder`)" 
          />
          <small v-if="$t(`${actor.actorType}.types.help`)" class="form-text text-muted">{{$t(`${actor.actorType}.types.help`)}}</small>        
          <field-error-message :error="errors.collect($t(`${actor.actorType}.types.label`))" :state="validateState($t(`${actor.actorType}.types.label`))" />
        </div>
      </div>

      <div class="col-6" v-if="isOther">
        <div class="form-group" :id="`group.${actor.actorType}.typeOther`" >
          <label  :for="`${actor.actorType}.typeOther`">{{ $t(`${actor.actorType}.typeOther.label`) }} </label>
          <input class="form-control" 
            @input="update"
            :id="`${actor.actorType}.typeOther`"
            type="text"
            v-model.trim="actor.typeOther.en"
            v-validate="'required|max:140'"
            :class   ="[ getValidationClass($t(`${actor.actorType}.typeOther.label`)) ]" 
            :name="$t(`${actor.actorType}.typeOther.label`)"
            :placeholder="$t(`${actor.actorType}.typeOther.placeholder`)" 
          />
          <small v-if="$t(`${actor.actorType}.typeOther.help`)" class="form-text text-muted">{{$t(`${actor.actorType}.types.help`)}}</small>        
          <field-error-message :error="errors.collect($t(`${actor.actorType}.typeOther.label`))" :state="validateState($t(`${actor.actorType}.typeOther.label`))" />
        </div>
      </div>
      <div class="col-lg-12">

        <div class="form-group" :id="`group.${actor.actorType}.image`" l>
          <label :for="`${actor.actorType}.image`"> {{$t(`${actor.actorType}.image.label`)}} </label>
            <Links 
            :id="`${actor.actorType}.image`"
            v-model="actor.image"
            :type="['files','links']"
            :multi='false'
            :name="$t(`${actor.actorType}.image.label`)"/>
  
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  import FormMixin   from '@components/AAForm/FormMixin'
  import SCBDSelect  from '@controls/SCBDSelect'
  import Links       from '@controls/Links'

  export default {
    name: 'PartyForm',
    mixins: [ FormMixin ],
    components: {  SCBDSelect, Links },
    props: {
      value: { type: [Array, Object], required: true },
      multi: { type: Boolean, default: false }
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
    let org = this.cleanForm(this.actor)
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