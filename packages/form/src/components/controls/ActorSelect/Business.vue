<template>

  <div>
    <div class="row">
      <div class="col-6">
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

      <div class="col-6">
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
          <label  :for="`${actor.actorType}.fpname`"> {{ $t(`Name of focal point in organization`) }} </label>
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

      <div class="col-lg-6">
        <div class="form-group" :id="`group.${actor.actorType}.email`" >
          <label  :for="`${actor.actorType}.email`"> {{ $t(`Email of focal point`) }} </label>
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

    <div class="row">
      <div class="col">
        <div class="form-group" :id="`group.${actor.actorType}.location`" >
          <label  :for="`${actor.actorType}.location`"> {{ $t(`Location`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${actor.actorType}.location`"
            type        ="text"
            v-model.trim="actor.location[$i18n.locale]"
            v-validate  ="'required|max:140'"
            :class      ="[ getValidationClass(`${actor.actorType}.location`) ]" 
            :name       ="`${actor.actorType}.location`"
            />
          <FieldErrorMessage :error="errors.collect(`${actor.actorType}.location`)"/>
        </div>
      </div>
      <div class="col">
        <div class="form-group" :id="`group.${actor.actorType}.gscope`" >
          <label  :for="`${actor.actorType}.gscope`"> {{ $t(`Geographic scope`) }} </label>
          <SCBDSelect
            @input="update"
            type="gscopes"
            :id="`${actor.actorType}.gscope`"
            v-model="actor.gscope"
            tag-view
            v-validate="'required'"
            :state   ="[ getValidationClass(`${actor.actorType}.gscope`) ]" 
            :name="`${actor.actorType}.gscope`"
          />                       
          <FieldErrorMessage :error="errors.collect(`${actor.actorType}.gscope`)"/>
        </div>
      </div>
      <div class="col">
        <div class="form-group" :id="`group.${actor.actorType}.size`" >
          <label  :for="`${actor.actorType}.size`"> {{ $t(`Size`) }} </label>
          <SCBDSelect
            @input="update"
            type="sizes"
            :id="`${actor.actorType}.size`"
            v-model="actor.size"
            tag-view
            v-validate="'required'"
            :state   ="[ getValidationClass(`${actor.actorType}.size`) ]" 
            :name="`${actor.actorType}.size`"
          />                    
          <FieldErrorMessage :error="errors.collect(`${actor.actorType}.size`)"/>
        </div>
      </div>
    </div>    

    <div class="row">
      <div class="col-lg-6">
        <div class="form-group" :id="`group.${actor.actorType}.organiz`" >
          <label  :for="`${actor.actorType}.organiz`"> {{ $t(`Type of organization`) }} </label>
          <SCBDSelect
            @input="update"
            type="organizs"
            :id="`${actor.actorType}.organiz`"
            v-model="actor.organiz"
            tag-view
            v-validate="'required'"
            :state   ="[ getValidationClass(`${actor.actorType}.organiz`) ]" 
            :name="`${actor.actorType}.organiz`"
          />          
          <FieldErrorMessage :error="errors.collect(`${actor.actorType}.organiz`)"/>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group" :id="`group.${actor.actorType}.image`" l>
          <label :for="`${actor.actorType}.image`"> {{$t(`Logo (please upload the logo of your organization)`)}} </label>
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
    <legend >{{ $t(`COMMITMENT / INITIATIVE`) }}</legend>    
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <div class="form-group" :id="`group.${actor.actorType}.title`" >
              <label  :for="`${actor.actorType}.title`"> {{ $t(`Title`) }} </label>
              <input class="form-control" 
                @input      ="update"
                :id         ="`${actor.actorType}.title`"
                type        ="text"
                v-model.trim="actor.name[$i18n.locale]"
                v-validate  ="'required|max:140'"
                :class      ="[ getValidationClass(`${actor.actorType}.title`) ]" 
                :name       ="`${actor.actorType}.title`"
                />
              <FieldErrorMessage :error="errors.collect(`${actor.actorType}.title`)"/>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group" :id="`group.${actor.actorType}.initiative`" >
              <label  :for="`${actor.actorType}.initiative`"> {{ $t(`Has the initiative set a defined target?`) }} </label>
              <SCBDSelect
                @input="update"
                type="initiatives"
                :id="`${actor.actorType}.initiative`"
                v-model="actor.initiative"
                tag-view
                v-validate="'initiative'"
                :state   ="[ getValidationClass(`${actor.actorType}.initiative`) ]" 
                :name="`${actor.actorType}.initiative`"
              />               
              <FieldErrorMessage :error="errors.collect(`${actor.actorType}.initiative`)"/>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group" :id="`group.${actor.actorType}.description`">
              <label :for="`${actor.actorType}.description`"> {{ $t(`Description`) }} </label>
              <textarea
                  class="form-control"
                  :id="`${actor.actorType}.description`"
                  @input="update"
                  v-model="actor.description[$i18n.locale]"
                  :rows="3"
                  v-validate="'required|max:1000'"
                  :class="[ getValidationClass(`${actor.actorType}.description`) ]"
                  :name="`${actor.actorType}.description`"
              />
              <field-error-message :error="errors.collect(`${actor.actorType}.description`)" />
            </div>
          </div>
        </div>

    <div class="row">
      <div class="col">
        <div class="form-group" :id="`group.${actor.actorType}.partners`" >
          <label  :for="`${actor.actorType}.partners`"> {{ $t(`Partners`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${actor.actorType}.partners`"
            type        ="text"
            v-model.trim="actor.partners[$i18n.locale]"
            v-validate  ="'required|max:140'"
            :class      ="[ getValidationClass(`${actor.actorType}.partners`) ]" 
            :name       ="`${actor.actorType}.partners`"
            />
          <FieldErrorMessage :error="errors.collect(`${actor.actorType}.partners`)"/>
        </div>
      </div>
      <div class="col">
        <div class="form-group" :id="`group.${actor.actorType}.comfpname`" >
          <label  :for="`${actor.actorType}.comfpname`"> {{ $t(`Focal Point`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${actor.actorType}.comfpname`"
            type        ="text"
            v-model.trim="actor.comfpname[$i18n.locale]"
            v-validate  ="'required|max:140'"
            :class      ="[ getValidationClass(`${actor.actorType}.comfpname`) ]" 
            :name       ="`${actor.actorType}.comfpname`"
            />
          <FieldErrorMessage :error="errors.collect(`${actor.actorType}.comfpname`)"/>
        </div>
      </div>
      <div class="col">
        <div class="form-group" :id="`group.${actor.actorType}.cdetials`" >
          <label  :for="`${actor.actorType}.cdetials`"> {{ $t(`Contact detials`) }} </label>
          <input class="form-control" 
            @input      ="update"
            :id         ="`${actor.actorType}.cdetials`"
            type        ="text"
            v-model.trim="actor.cdetials"
            v-validate="'email|required'"
            :class   ="[ getValidationClass(`${actor.actorType}.cdetials`) ]"
            :name       ="`${actor.actorType}.cdetials`"
            />
          <FieldErrorMessage :error="errors.collect(`${actor.actorType}.cdetials`)"/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-group" :id="`group.${actor.actorType}.url1`" >
          <label  :for="`${actor.actorType}.url1`">{{ $t('Web address') }} </label>
          <input class="form-control" 
            @input="update"
            :id="`${actor.actorType}.url1`"
            type="url"
            v-model.trim="actor.url1"
            v-validate="'required|url'"
            :class   ="[ getValidationClass(`${actor.actorType}.url1`) ]" 
            :name="`${actor.actorType}.url1`"
          />
          <FieldErrorMessage :error="errors.collect(`${actor.actorType}.url1`)" :state="validateState(`${actor.actorType}.url`)" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group" :id="`group.${actor.actorType}.image1`" l>
          <label :for="`${actor.actorType}.image1`"> {{$t(`Logo (For the commitment/action if available or the logo for the lead organization)`)}} </label>
            <Links
            @input="update"
            :id="`${actor.actorType}.image1`"
            v-model="actor.image1"
            :type="['files','links']"
            :multi='false'
            :name="`${actor.actorType}.image1`"/>
        </div>
      </div> 
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
  methods   : { update, deleteLogo },
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
      location : {  },
      gscope   : [],
      size     : [],
      organiz  : [],
      image    : { url: '' },
      title    : {  },
      initiative  : [],
      description : {  },
      partners : {  },
      comfpname : {  },
      cdetials    : '',
      url1      : '',
      image1   : { url: '' },      
      actorType: 'business'
    },
     orgLogo : '' //temp holder for uploaded image
  }
}

function update(){
  const busin = this.cleanForm(this.actor)

  return this.$emit('input', busin)
}

function deleteLogo(){
  this.orgLogo = ''
  this.actor.business.image = ''
  this.$refs.logo.reset()
}
</script>

<style scoped>
  .logo { max-height: 100px  }
</style>