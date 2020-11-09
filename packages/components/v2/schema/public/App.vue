<template>
  <div id="app">
    <h3>Classes Loaded: {{ classesSize() }}</h3>
    <h3>Props Loaded: {{ propsSize() }}</h3>
    <h3>Enums Loaded: {{ enumsSize() }}</h3>
    <h3>Enum Members Loaded: {{ enumsMembersSize() }}</h3>
  </div>
</template>

<script>
import Ajv from "ajv"

import { getJsonSchema, getGraph } from '../src/index.mjs'
import { loadGraph, getClass, classesSize, propsSize, enumsSize, enumsMembersSize, debug, metaIsA } from '@houlagins/schema-dot-organizer/src/index.mjs'

const ajv = new Ajv() 

export default {
  name : 'App',
  methods: { classesSize, propsSize, enumsSize, enumsMembersSize, metaIsA },
  async mounted(){
    await loadGraph(await getGraph())

    this.$forceUpdate()
    
    // for (const iterator of await getJsonSchema()) {
    //   console.log(iterator)
    //   ajv.addSchema(iterator)
    //   break;
    // }
    ajv.addSchema(await getJsonSchema())
    console.log(ajv)
    const validate = ajv.compile(ajv._schemas['https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs'].schema)
    console.log(validate({}))
    console.log(validate.errors)

    debug()
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
