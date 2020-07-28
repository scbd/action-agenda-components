<template>
  <div class="col-12 col-md-6 col-xl-4" v-if="tags">
    <h5 class="text-nowrap">{{name}}</h5>
    <table class="table table-striped table-dark table-sm">
      <tbody>
        <tr v-for="tag in tags" v-bind:key="tag.name">
          <th class="align-middle pl-3" scope="row" v-if="tag.image">
            <a v-if="tag.url" :href="tag.url"> <img v-if="tag.image" :src="tag.image" class="icon align-top mxy-1" /> </a>
            <img v-if="!tag.image" :src="tag.image" class="icon align-top mxy-1" />
          </th>
          <td  class="col-10 p-3">
            <a v-if="tag.url" :href="tag.url"> {{tag.name}} </a>
            <span v-if="!tag.url"> {{tag.name}} </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name : 'TagView',
  props: {
    name: { type: String, required: true },
    tags: { type: [ Array, Object ] }
  }
}
</script>

<style scoped>
  td { color: azure !important;}
  a {color: azure !important;}
  .icon { margin-right: 1em; height: 24px; width: 24px; fill: azure !important;}
    .item { margin: .25em 0 .25em 0; }
</style>
