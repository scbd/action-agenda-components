<template>
  <section v-if="entity">
    <AAOrganizationView v-bind="entity" v-if="isOrg()"/>
    <AAContactView v-bind="entity" v-if="isContact()"/>
    <AAGovernmentView v-bind="entity" v-if="isGov()"/>
  </section>
</template>

<script>
import AAOrganizationView from '../AAView/AAOrganizationView.vue'
import AAContactView      from '../AAView/AAContactView.vue'
import AAGovernmentView   from '../AAView/AAGovernmentView.vue'
export default {
  name: "AAHorzCardMainEntity",
  components:{AAContactView,AAOrganizationView,AAGovernmentView},
  props: {
    entity:{
      type: Object
    }
  },
  methods:{isContact,isOrg,type, isGov},

}
function type(){
  if(this.entity.lastName) return 'contact'
  if(isTypesGov(this.entity))   return 'government'
  return 'organization'
}

function isTypesGov({types}){
  let test = ['1C3A4FF4-9AB7-4A34-BE06-E07F575B7A32','8830904C-8AF4-4C2F-AADB-363D98D854DA']
  for (let i = 0; i < types.length; i++) 
    if(test.includes(types[i].identifier))
      return true
  
  return false
}
function isContact (){
  return this.type()==='contact'
}
function isOrg (){
  return this.type()==='organization'
}
function isGov (){
  return this.type()==='government'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
