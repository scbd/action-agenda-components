<i18n src="./locales/index.json"></i18n>
<template>
  <section>
    <legend>{{ $t('partners.sectionName') }}</legend>
    <div class="card">
      <div class="card-body">
        <div class="row" v-for="(partner,index) in partners" v-bind:key="index">
          
          <div class="col-8 col-md-10 col-lg-11">
            <div class="form-group" id="group.partner.name" >
              <label  :for="`contact.name`"> {{ $t(`partners.name.label`) }} </label>
              <input class="form-control" 
                @input      ="update"
                :ref        ="`partner${index}`"
                :id         ="`partner${index}`"
                type        ="text"
                v-model     ="partners[index].name.en"
                v-validate  ="'required|max:140'"
                :state      ="validateState($t(`partners.name.label`),partners[index].name.en)"
                :name       ="$t(`partners.name.label`)"
                :placeholder="$t(`partners.name.placeholder`)" 
                />
              <small v-if="$t(`contact.name.help`)" class="form-text text-muted">{{$t(`partners.name.help`)}}</small>
              <field-error-message :error="errors.collect($t(`partners.name.placeholder`))" />
            </div>
          </div>
           <div class="col-4 col-md-2 col-lg-1">
             <button v-if="partner.name.en" v-on:click="remove(index)" type="button" class="btn btn-outline-dark btn-sm">{{$t(`partners.delete`)}}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import clone       from 'lodash.clone'
  import AAFormMixin from '@modules/AAFormMixin'

  export default {
    name    : 'Partners',
    mixins  : [ AAFormMixin ],
    props   : {  value: { type: [Array], required: true } },
    methods : { update, add, remove },
    data
  };

  function data () {
    return {
      index: 0,
      partners: this.value || [ { name: { en: "" } } ]
    }
  }

  function remove(index) {
    this.partners.splice(index, 1)
    this.index--
    this.$forceUpdate()
  }

  async function add() {
    this.index++
    this.partners[this.index]={name:{en:''}}
    this.$nextTick(() => this.$refs[`partner${this.index-1}`][0].focus())
    this.$forceUpdate()
  }

  function update() {
    if(this.partners[this.index].name.en) this.add()
    this.$forceUpdate()
    return this.$emit('input', sendToParent(this.partners))
  }

  function sendToParent(form) {
    let cloneForm = clone(form)
    cloneForm.splice(form.length-1, 1)
    return cloneForm
  }
</script>

<style scoped>
  .card {
    margin-bottom: 1.5em;
    background-color: #ddd;
  }

  .card .entity {
    background-color: #fff;
  }

  .form-check-input {
    margin: 0 10px 5px 10px;
  }

  .card-footer {
    background-color: rgba(0, 0, 0, 0.03);
  }
</style>
