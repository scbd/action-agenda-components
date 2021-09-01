<template >
  <div class="list" ref="list">
    <div class="sort-list-container">
      <select  v-model="sortBy" name="sort-by" @change="sortRows()" class="sort-list" >
        <option value="" selected disabled> Sort By</option>
        <option value="modifiedOn">Date Updated</option>
        <option value="createdOn">Date Created</option>
      </select>
    </div>

    <card v-for="(action,index) in rows" v-bind:key="index"   v-bind="cardProps(action)"/>
    <!-- <card  v-for="(action,index) in sortRows2('modifiedOn', 'asc')" v-bind:key="index"   v-bind="cardProps(action)"/> -->

  </div>
</template>

<script>
import Card     from './Card/index.vue'

export default {
  name      : 'SearchList',
  components: { Card },
  props     : {
    rows    : { type: Array, required: true },
    options : { type: Object, required: true },
    onScroll: { type: Function, required: true }
  },
  methods: { cardProps, sortRows },
  mounted,
  beforeDestroy,
  data
}

function data () {return { sortBy: '' }} 

function sortRows () {

  console.log(this.sortBy)

  // let modifier = 1
  // if (this.sortBy == 'createdOn') modifier = -1
  // const sortedRows = this.rows.slice().sort( (a,b) => {
  //   if ( new Date(a.meta[this.sortBy]) < new Date(b.meta[this.sortBy])) return 1 * modifier
  //   if ( new Date(a.meta[this.sortBy]) > new Date(b.meta[this.sortBy])) return -1 * modifier
  //   return 0
  // })
  const sortedRows = this.rows.slice().sort( (a,b) => { 
    if (this.sortBy=='createdOn') 
      return new Date(a.meta[this.sortBy]) - new Date(b.meta[this.sortBy])
    return new Date(b.meta[this.sortBy]) - new Date(a.meta[this.sortBy])
    })

  this.rows = sortedRows
  this.$emit('update-sortedRows',this.rows)
}


// Temp Test Function to sort by direction as well - ascending and descending
function sortRows2(sortBy, sortDirection) {
let modifier = 1
if (sortDirection=='desc') modifier = -1

const sortedRows = this.rows.slice().sort( (a,b) => {
    if (a.meta[sortBy] < b.meta[sortBy]) return 1 * modifier
    if (a.meta[sortBy] > b.meta[sortBy]) return -1 * modifier
    return 0
  })  
  console.log(sortedRows)
  return sortedRows
}

function mounted(){
  window.addEventListener('scroll', this.onScroll(this.$el))
}

function beforeDestroy(){
  window.removeEventListener('scroll', this.onScroll(this.$el))
}

function cardProps(action){
  return { ...action, options: this.options }
}
</script>
<style scoped>
  .list{margin: 60px 0 0 0;}
</style>


