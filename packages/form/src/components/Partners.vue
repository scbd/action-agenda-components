<template>
  <section>
    <legend>{{ $t('Partners') }}</legend>
    <div class="card">
      <div class="card-body">
        <div class="row" v-for="(partner,index) in partners" v-bind:key="index">
          
          <div class="col-4 col-md-5 col-lg-6">
            <div class="form-group" id="group.partner.name" >
              <label  :for="`partner${index}`"> {{ $t(`Name`) }} </label>
              <input class="form-control"
                @input      ="update"
                :ref        ="`partner${index}`"
                :id         ="`partner${index}`"
                type        ="text"
                v-model     ="partners[index].name['en']"
                v-validate  ="'required|max:140'"
                :state      ="validateState(`partner${index}`,partners[index].name['en'])"
                :name       ="`partner${index}`"
                />
              <field-error-message v-if="!isLast(index)" :error="errors.collect(`partner${index}`)" />
            </div>
          </div>
          <div class="col-4 col-md-5 col-lg-5">
            <div class="form-group" id="group.partner.name" >
              <label  :for="`partner${index}.website`"> {{ $t(`Website`) }} </label>
              <input class="form-control"
                @input      ="update"
                :ref        ="`partner${index}.website`"
                :id         ="`partner${index}.website`"
                type        ="url"
                v-model     ="partners[index].url"
                v-validate="'required|url'"
                :state      ="validateState(`partner${index}.website`,partners[index].url)"
                :name       ="`partner${index}.website`"
                />
              <field-error-message  v-if="!isLast(index)" :error="errors.collect(`partner${index}.website`)" />
            </div>
          </div>
          <div class="col-4 col-md-2 col-lg-1">
            <button v-if="partner.name.en" v-on:click="remove(index)" type="button" class="btn btn-outline-dark btn-sm">{{$t(`Delete`)}}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AAFormMixin from './form-mixin.js'
import i18n        from '../locales/index.js'
import getLocale   from './locale.js'

export default {
  name    : 'Partners',
  mixins  : [ AAFormMixin ],
  props   : { value: { type: [Array], required: true } },
  methods : { update, add, remove, isLast },
  data, i18n
};

function isLast(index){
  return this.partners.length -1 == index
}
function data (){
  return {
    index   : 0,
    partners: this.value
  }
}

function remove(index){
  this.partners.splice(index, 1)
  this.index--

}

function add(){
  const locale = getLocale()

  this.index++
  this.partners[this.index]={ name: { [locale]: '' } }
  
  this.$emit('input', this.partners)
}

function update(){
  const locale = getLocale()
  const   latestPartner = this.partners[this.index]
  const   hasErrors     = (this.errors.collect(`partner${this.index}.website`)).length

  if(latestPartner.name[locale] && latestPartner.url && !hasErrors) this.add()


  return setTimeout(() => this.$emit('input', this.partners), 500)
}


</script>

<style scoped>
  .card             { margin-bottom: 1.5em; background-color: #ddd; }
  .card .entity     { background-color: #fff; }
  .form-check-input { margin: 0 10px 5px 10px; }
  .card-footer      { background-color: rgba(0, 0, 0, 0.03); }
</style>
