<template>
   <div class="sort-list-container">
      <select  v-model="sortBy" name="sort-by" @change="sortRows()" class="sort-list" >
        <option value="" disabled selected hidden> Sort By</option>
        <option value="modifiedOn">Date Updated</option>
        <option value="createdOn">Date Created</option>
      </select>
</template>

<script>

import i18n from '../locales/index.js'

export default {
    name: 'Sort',
    props: { 
      sort : {type: Object, required: true } },
    data,
    i18n

}

function data () {
    return { sortBy: ''}
}
</script>

<style>

</style>