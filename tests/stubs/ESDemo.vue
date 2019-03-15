<template >
  <section>
      <EntitySelect
        multi
        label="Partner(s)"
        v-model="form.partners"
        :type="['contact', 'organization']"/>
        <pre>{{form.partners}}</pre>
      <EntitySelect
        multi
        label="Contributor(s)"
        v-model="form.contributors"
        :type="['contact', 'organization']"/>
        <pre>{{form.contributors}}</pre>
      <EntitySelect 
        multi 
        label="Contact(s)" 
        v-model="form.contacts" 
        :type="'contact'"/>
        <pre>{{form.contacts}}</pre>
  </section>
</template>

<script>
import EntitySelect from "../../src/components/AAForm/controls/EntitySelect";

export default {
  name: "ESDemo",
  components: {
    EntitySelect
  },

  data(){
    return {
      form: {
        partners: [],
        contributors: [],
        contacts: []
      }
  }
  }
}

</script>

<style  scoped>

</style>