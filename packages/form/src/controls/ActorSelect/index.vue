<template >
  <section>
    
    <Organization @input="update" v-model="input.organization" v-if="isSelectedType('organization')"/>

    <Party @input="update" v-model="input.party" v-if="isSelectedType('party')"/>

    <Public @input="update" v-model="input.public" v-if="isSelectedType('public')"/>
    
    <Person  @input="update"  v-model="input.person"  v-if="isSelectedType('person')"/>

  </section>
</template>



<script>
  import   Person         from './Person'
  import   Organization   from './Organization'
  import   Party          from './Party'
  import   Public         from './Public'

  export default {
    name      : 'ActorSelect',
    components: { Person, Party, Organization, Public },
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

