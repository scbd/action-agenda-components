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
    :class="state">

    <template slot="option" slot-scope="props" v-if="type==='SDGs' || type==='Aichi' ">
      <div class="row">
        <div class="col-1">
          <img class="option-image" :src="props.option.img" :alt="props.option.name">
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
  import Multiselect    from 'vue-multiselect'
  import { getData, lookUp } from '@action-agenda/cached-apis'


  import 'vue-multiselect/dist/vue-multiselect.min.css'

  export default {
    name      : 'SCBDSelect',
    components: { Multiselect },
    props     : {
                  name        : {},
                  value       : { type: [Array, Object, String], required: true },
                  type        : { type: String, required: true },
                  multi       : { type: Boolean, default: false },
                  tagView     : { type: Boolean, default: false },
                  state       : { type: Array},
                  placeholder : { type: String, default: ' ' }
                },
    methods: { update, load, loadModelWatch },
    data,
    created
  }

  function   data() {
    return {
              values   : this.value,
              options  : [],
              isLoading: false,
              killWatch: false
            }
  }

  async function  created() {
    this.options = await this.load()
    this.$watch('value',loadModelWatch)
  }

  async function loadModelWatch(newValue){
      const lookUpType = this.type === 'geoLocations'? 'all' : this.type

      this.values = await lookUp(lookUpType, newValue)
  }

  function update() {
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

  function load() {  return getData(this.type) }
</script>

<style  scoped>
  .fix            { padding: 0 0 0 0; background-color: #ddd; border-radius: 5px; border-color: transparent; }
  .fix.is-invalid { border-color: #dc3545; border-width: 1px; border-style: solid; }
  .fix.is-valid   { border-color: #28a745; border-width: 1px; border-style: solid; }
  .option-image   { max-height: 30px; }
</style>