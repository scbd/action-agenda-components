<template>
  <section>
    <legend>{{ label }}</legend>
    <div class="card">
      <div class="card-body">
        <label for="partner.en" v-if="!index">Name</label>
        <div class="row" v-for="(partner,index) in form" v-bind:key="index">
          
          <div class="col-11">
            <BFormGroup id="fullNameGroup">
              
              <BFormInput :id="`form.name.en ${index}`" 
                type="text" 
                :ref="`partner${index}`"
                v-model="form[index].name.en" 
                @input="update" 
                :name="`name of partner ${index}`" />

              <field-error-message :error="errors.collect(`name of partner ${index}`)" />
            </BFormGroup>
          </div>
           <div class="col-1">
             <button v-if="partner.name.en" v-on:click="remove(index)" type="button" class="btn btn-outline-dark btn-sm">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import clone from 'lodash.clone'
import AAFormMixin   from '../../../../modules/AAFormMixin'

export default {
  name      : 'Partners',
  mixins    : [ AAFormMixin ],
  props: {
    value: { type: [Array], required: true },
    label: { type: String }
  },
  data() {
    return {
      index: 0,
      form: this.value || [ { name: { en: "" } } ]
    };
  },
  methods: { update, add, remove }
};

function remove(index) {
  this.form.splice(index, 1)
  this.index--
  this.$forceUpdate()
}

async function add() {
  this.index++
  this.form[this.index]={name:{en:''}}
  this.$nextTick(() => this.$refs[`partner${this.index-1}`][0].focus())
  this.$forceUpdate()
}

function update() {
  if(this.form[this.index].name.en) this.add()
  this.$forceUpdate()
  return this.$emit('input', sendToParent(this.form))
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
