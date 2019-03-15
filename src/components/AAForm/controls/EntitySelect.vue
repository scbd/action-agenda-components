<template >
  <section>
    <legend>{{label}}</legend>
    <div class="card">
      <div class="card-body">
        <BFormRow v-if="!isSingleType()">
          <BCol>
            <div
              v-for="(type,index) in options.entityTypes"
              v-bind:key="index"
              class="form-check-inline"
            >
              <input
                v-model="input.type"
                :value="type.value"
                type="radio"
                id="`${type.value}RadioInline`"
                name="`${type.value}RadioInline`"
                class="form-check-input"
              >
              <label class="form-check-label align-text-bottom" for="`${type.value}RadioInline`">{{type.name}}</label>
            </div>
          </BCol>
          <hr>
        </BFormRow>
        <AAOrganization
          @input="update"
          v-model="input.organization"
          v-if="isSelectedType('organization')"/>

        <AAGovernment
          @input="update"
          v-model="input.government"
          v-if="isSelectedType('government')"/>

        <AAContact 
          @input="update" 
          v-model="input.contact" 
          v-if="isSelectedType('contact')"/>

        <div class="text-right" v-if="multi && (isSelectedType('organization') || isSelectedType('contact') || isSelectedType('government'))">
          <div class="btn-group">
          <button v-on:click="add()" type="button" class="btn btn-primary btn-sm">Add</button>          
          <button v-on:click="resetForm(input)" type="button" class="btn btn-outline-dark btn-sm">Clear</button>
          </div>
        </div>
        <hr>
        <section v-if="multi">
      <div  class="card" v-for="(entity,key, index) in values" v-bind:key="index">
        <div class="card-body entity">
          <AAEntityView :entity="entity" />
        </div>
        <div class="card-footer">
          <div class="btn-group" role="group" aria-label="Card actions, view, edit publish, reject">
            <!-- <button type="button" class="btn btn-outline-dark btn-sm">Edit</button> -->
            <button v-on:click="remove(index)" type="button" class="btn btn-outline-dark btn-sm">Delete</button>
          </div>
          <!-- <small class="text-muted float-right">{{meta.modifiedOn|dateFormat}}</small> -->
        </div>
      </div>
      </section>
      </div>
    </div>
  </section>
</template>

<script>
import AAContact from "../AAContactForm"
import AAOrganization from "../AAOrganizationForm"
import AAGovernment from "../AAGovernmentForm"
import BCol from "bootstrap-vue/es/components/layout/col"
import BFormRow from "bootstrap-vue/es/components/form/form-row"
import { resetForm } from "../../../modules/helpers"

export default {
  name: "SCBDSelect",
  components: {
    AAContact,
    AAGovernment,
    AAOrganization,
    BFormRow,
    BCol,
    AAEntityView:() => import('../../AAView/AAEntityView')
  },
  props: {
    value: {
      type: [Array, Object],
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: [Array, String],
      required: true
    },
    multi: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      input: {
        type: null,
        contact: {},
        organization: {},
        government: {}
      },
      options: {
        entityTypes: [
          {
            name: "Individual",
            value: "contact"
          },
           {
            name: "Organization",
            value: "organization"
          },  
          {
            name: "Government",
            value: "government"
          },        
        ]
      },
      values: this.value
    }

  },
    mounted(){
      this.updateType()
    },
  methods: { update, isSingleType, isSelectedType, add, isValid ,updateType,resetForm,remove,resetValidation }
};

function remove (index) {
  this.values.splice(index,1)
}
async function add() {

  if (await this.isValid()) {
    let newEntry = this.input[this.input.type]
console.log(newEntry)
    newEntry = clone(newEntry)
    this.values.push(newEntry)
    this.$emit("input", this.values)
    await this.resetForm(this.input)
    if(this.isSingleType())
      this.input.type = this.isSingleType()
    this.resetValidation()
  }
}
function update() {
  if(!this.multi) 
    return this.$emit("input", this.input[this.input.type])
    // {
    //     type: this.input.type,
    //     [this.input.type]: this.input[this.input.type]
    //   }
}

async function isValid() {
  let isValid = false;

  for (let i = 0; i < this.$children.length; i++) {
    let vm = this.$children[i];
    if (vm.$validator) await vm.$validator.validateAll();
    isValid = !vm.$validator.errors.count();
  }
  return isValid;
}

async function resetValidation() {

  for (let i = 0; i < this.$children.length; i++) {
    let vm = this.$children[i];
    if (vm.$validator) await vm.$validator.reset();
  }

}

function isSingleType() {
  if (typeof this.type === "string") return this.type;
  if (this.type.length == 1) return this.type[0];
  return false;
}

function updateType() {

  if(this.isSingleType() && typeof this.input.type!=='string')
    this.input.type = this.isSingleType()

}
function isSelectedType(type) {
  if (this.isSingleType() === type) return true;
  if (this.input.type === type) return true;
  return false;
}

function clone (src) {
  return JSON.parse(JSON.stringify(src));
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