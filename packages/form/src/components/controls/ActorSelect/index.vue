<template >
  <section>
    
    <Organization @input="update" v-model="input.organization" v-if="isSelectedType('organization')"/>

    <Public @input="update" v-model="input.public" v-if="isSelectedType('public')"/>
    
    <Person  @input="update"  v-model="input.person"  v-if="isSelectedType('person')"/>

  </section>
</template>



<script>
  import   Person         from './Person.vue'
  import   Organization   from './Organization.vue'
  import   Public         from './Public.vue'

  export default {
    name      : 'ActorSelect',
    components: { Person, Organization, Public },
    props: {
      value: { type: Object, required: true },
      type : { type: String, required: true }
    },
    methods: { update, updateType ,isSelectedType },
    filters: { json:(v)=>JSON.stringify(v) },
    data,
    mounted,
  }

  function mounted (){
    this.updateType()
    this.update()
  }

  function data (){
    return {
      input: { type: null, person: {}, organization: {}, party: {}, public: {} },
      values: this.value
    }
  }

  function update() {
    return this.$emit('input', this.input[this.input.type])
  }

  function updateType() {
    this.input.type = this.type
    this.input[this.input.type] = this.value
  }

  function isSelectedType(type) {
    if (this.input.type === type) return true;
    return false;
  }
</script>

