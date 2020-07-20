<template>
  <section >
    <Organization v-bind="entity" v-if="isOrg"/>
    <Person       v-bind="entity" v-if="isPerson"/>
    <Government   v-bind="entity" v-if="isGov"/>
  </section>
</template>

<script>
import Organization from './Organization.vue'
import Person       from './Person.vue'
import Government   from './Government.vue'

export default {
  name      : 'Entity',
  components: { Person, Organization, Government },
  props     : { entity: { type: Object } },
  computed  : { isPerson, isOrg, isGov },
  data

}

function data(){
  return{ actorType: this.entity.actorType }
}

function isTypesGov({types}){
  let test = ['1C3A4FF4-9AB7-4A34-BE06-E07F575B7A32','8830904C-8AF4-4C2F-AADB-363D98D854DA']
  for (let i = 0; i < types.length; i++) 
    if(test.includes(types[i].identifier))
      return true
  return false
}

function isPerson (){ return this.actorType.includes('person') }
function isOrg    (){ return this.actorType.includes('organization') }
function isGov    (){ return this.actorType.includes('government') }

</script>

