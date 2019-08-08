<template>
  <section>
    <div class="mb-3">

      <span v-for="(filter,index) in filters" v-bind:key="index" class="badge badge-secondary py-1 mr-2">
        {{filter | filterDisplay}}
        <span v-on:click="deleteFilter(index)" class="badge badge-light close-badge align-top">
          <svg class="icon align-top">
            <use xlink:href="#icon-close"></use>
          </svg>
        </span>
      </span>
      <span v-if="text.text" class="badge badge-secondary py-1 mr-2">
        {{text.text}}
        <span v-on:click="deleteText()" class="badge badge-light close-badge align-top">
          <svg class="icon align-top">
            <use xlink:href="#icon-close"></use>
          </svg>
        </span>
      </span>
    </div>
  </section>
</template>

<script>
  export default {
    name:    'FiltersApplied',
    props:   { filters: { type: Array }, text:{ type:Object } },
    methods: { deleteFilter, deleteText },
    filters: { filterDisplay }
  }

  function deleteText() { this.$emit('delete-text',true) }

  function deleteFilter(index) { this.$emit('delete-filter',index) }

  function filterDisplay(value) {
    
    if(value.$text)          return value.$text.$search
    if(value['meta.status']) return value['meta.status']
  }
</script>

<style scoped>
  .close-badge       { cursor: pointer; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out; }
  .close-badge:hover { color: #fff; background-color: #343a40; border-color: #343a40; }
</style>