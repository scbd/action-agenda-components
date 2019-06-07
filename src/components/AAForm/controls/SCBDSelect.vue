<template >
  <multiselect
    v-model="values"
    :placeholder="placeholder"
    track-by="identifier"
    label="name"
    :options="options"
    :multiple="multi"
    :taggable="tagView"
    @input="update"
    hideSelected
    class="fix"
    :class="{'is-invalid':state===false}">

    <template slot="option" slot-scope="props" v-if="type==='SDGs' || type==='Aichi' ">
      <div class="row">
        <div class="col-1">
          <img class="option-image" :src="props.option.img" alt="No Man’s Sky">
        </div>
        <div class="col-11">
          <span>{{ props.option.name }}.</span>
          <span class="small muted">{{ props.option.desc }}</span>
        </div>
      </div>
    </template>
  
  </multiselect>
</template>

<script>
import ScbdCachedApis from '../../../modules/ScbdCachedApis'
import Multiselect from 'vue-multiselect'
import LookUp from '../../../modules/ScbdCachedApisLookUp'
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {
  name: 'SCBDSelect',
  components: { Multiselect },
  props: {
    name: {},
    value: {
      type: [Array, Object, String],
      required: true
    },
    type: {
      type: String,
      required: true
    },
    multi: {
      type: Boolean,
      default: false
    },
    tagView: {
      type: Boolean,
      default: false
    },
    state: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: 'Search or select'
    }
  },
  data() {
    return {
      values: this.value  ,
      options: [],
      isLoading: false,
      killWatch: false
    }
  },
  created: async function() {
    this.options = await this.load()
   // this.values = this.value
    this.killWatch = this.$watch('value',loadModelWatch)
  },
  methods: { update, load, loadModelWatch }
}

async function loadModelWatch(newValue,oldValue,){
  if(!oldValue && newValue){
     this.values=newValue
     this.killWatch()
     this.values = await LookUp[`get${this.type}`](newValue, true)
  }
}
function update() {
  // .map(clean)
  let returnValues 
  if(!this.multi)
    returnValues = clean(this.values)
  else 
    returnValues = this.values.map(clean)

  this.$emit('input',returnValues )
}
function clean(item) {
  if(item.code)
    return { code: item.code}
  return { identifier: item.identifier }
}
function load() {
  return ScbdCachedApis[`get${this.type}`]()
}
</script>

<style  scoped>
.fix {
  padding: 0 0 0 0;
  background-color: #ddd;
  border-radius: 5px;
  border-color: transparent;
}
/* .multiselect__tags .multiselect__tags-wrap input */
.fix.is-invalid {
  border-color: #dc3545;
border-width: 1px;
border-style: solid;
}

.option-image {
  max-height: 30px;
}

</style>