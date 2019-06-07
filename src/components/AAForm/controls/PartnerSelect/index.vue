<template >
  <section>
    <legend>{{label}}  </legend>
    <div class="card">
      <div class="card-body">

        


        <div class="text-right" v-if="multi && (isSelectedType('organization') || isSelectedType('person') || isSelectedType('public') || isSelectedType('party'))">
          <div class="btn-group">
            <button v-on:click="add()" type="button" class="btn btn-primary btn-sm">Add</button>          
            <button v-on:click="resetForm(input)" type="button" class="btn btn-outline-dark btn-sm">Clear</button>
          </div>
           <hr>
        </div>
       

      </div>
    </div>
  </section>
</template>

<script>

import   BCol           from 'bootstrap-vue/es/components/layout/col'
import   {BFormRow}     from 'bootstrap-vue/es/components'
import  { resetForm }   from '../../../../modules/helpers'

export default {
  name: 'ActorSelect',
  components: { BFormRow, BCol },
  props: {
    value: { type: [Array, Object], required: true },
    label: { type: String,},

  },
  data() { return { values: this.value } },
  methods: { update, add, remove, },
  filters:{ json:(v)=>JSON.stringify(v) },
  updated
};

function remove (index) {
  this.values.splice(index,1)
}

async function add() {

    let newEntry = this.input[this.input.type]
    newEntry = clone(newEntry)
    this.values.push(newEntry)
    this.$emit("input", this.values)

    this.resetValidation()
}

function update() {
  return this.$emit("input", this.values)
}


</script>

<style  scoped>
.card{
  margin-bottom: 1.5em;
  background-color:#ddd;
}
.card .entity{
 background-color:#FFF;

}
.form-check-input{
margin: 0 10px 5px 10px;
}
.card-footer{
  background-color: rgba(0,0,0,.03);
}
</style>