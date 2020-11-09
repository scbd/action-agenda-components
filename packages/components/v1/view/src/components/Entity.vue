<template>
  <section v-if="entity">
    <Organization v-bind="entity" v-if="isOrg || isGov"/>
    <Person       v-bind="entity" v-if="isPerson"/>
  </section>
</template>

<script>
import Organization from './Organization.vue'
import Person       from './Person.vue'

export default {
  name      : 'Entity',
  components: { Organization, Person },
  props     : { entity: { type: Object } },
  methods   : { isType },
  computed  : { isGov, isOrg, isPerson }
}

function isType (type){
  const { actorType = '' } = this.entity

  return actorType.includes(type)
}

function isPerson (){ return this.isType('person') }
function isOrg    (){ return this.isType('organization') }
function isGov    (){ return this.isType('public') }

</script>

