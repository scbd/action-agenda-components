<template>
    <section>
        <nav class="navbar navbar-light bg-light mb-3">
            <div>
                <span v-if="hasPages()">{{pageStart}} to {{pageEnd}} of {{params.total}}</span>
                <span v-if="!hasPages()">Showing {{params.total}}</span>
            </div>

        <ul class="nav">
           <li v-if="$isAdmin" class="nav-item dropdown pointer">
            <span
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">

                Filters 
                <svg class="icon align-middle mb-1">
                  <use xlink:href="#icon-chevron-down"></use>
                </svg>
            </span>
            <div class="dropdown-menu">
                <a class="dropdown-item" v-on:click="typeFiler('draft')">New</a>
                <a class="dropdown-item" v-on:click="typeFiler('published')">Published</a>
                <a class="dropdown-item" v-on:click="typeFiler('rejected')">Rejected</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" v-on:click="typeFiler('deleted')">Deleted</a>
            </div>
            </li> 
        </ul>
        <form class="form-inline">
            <div class="input-group mr-sm-2">
                <input class="form-control " type="params" placeholder=" " aria-label="search" v-model="text">
                <div class="input-group-append">
                    <button class="btn btn-outline-dark btn-sm" type="button"  v-on:click="text=''">
                        <svg class="icon align-middle mb-1">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <button class="btn btn-outline-info my-2 my-sm-0" type="button" v-on:click="textSearch(text)" >Search</button>
        </form>

        </nav>
        <FiltersApplied :text="textFilter" :filters="filters" @delete-filter="deleteFilter" @delete-text="deleteText"/>

 <hr/>
    </section>
</template>

<script>
  import FiltersApplied from './AAFiltersApplied'
  import clone          from 'lodash.clone'

  export default {
    name: 'AAparamsNav',
    components: { FiltersApplied },
    props: { params: { type: Object } },
    computed: { pageStart,pageEnd },
    methods : { hasPages,textSearch,typeFiler,deleteFilter,updateSearchQuery,functionLoadFilters,deleteText },
  }
  
function mounted (){
    this.functionLoadFilters()
}
function  data(){
    return {
        text:'',
        filters:[],
        textFilter:{text:''}
    }
}
function deleteFilter(index){
    this.filters.splice(index,1)
    this.filters = clone(this.filters)
    this.$emit('filter',{filters:this.filters, text:this.textFilter.text})
    this.updateSearchQuery()
}
function deleteText(){

    this.textFilter={text:''}
    this.filters = clone(this.filters)
    this.$emit('filter',{filters:this.filters, text:this.textFilter.text})
    this.updateSearchQuery()
}
function textSearch(text){

    if(!this.textSearch) return 

    this.textFilter.text = text


    this.$emit('filter',{filters:this.filters, text:this.textFilter.text})
    this.text = ''
    this.updateSearchQuery()
}

function typeFiler(status){

    let filter = {'meta.status':status}//{ 'meta':{status:status} }
    this.filters.push(filter)
    this.$emit('filter',{filters:this.filters, text:this.textFilter.text})
    this.updateSearchQuery()
}

function updateSearchQuery(){

    resetSearchParams()
    this.filters.forEach(filter => {
        let filterArray = Object.entries(filter)
        let key         = filterArray[0][0]
        let value       = filterArray[0][1]
        
        addParam(key,value)
    })

    if(this.textFilter.text)
        addParam('$text',this.textFilter.text)
}

function resetSearchParams(){
    let protocol = window.location.protocol,
        host = '//' + window.location.host,
        path = window.location.pathname,
        query = window.location.search;

    let newUrl = protocol + host + path 

    window.history.pushState({path:newUrl}, '' , newUrl)

}

function addParam(key,value){
    let protocol = window.location.protocol,
        host = '//' + window.location.host,
        path = window.location.pathname,
        query = window.location.search;

    let newUrl = protocol + host + path + query + (query ? '&' : '?') + `${encodeURIComponent(key)}=${encodeURIComponent(value)}`

    window.history.pushState({path:newUrl}, '' , newUrl)
}

function functionLoadFilters(){
    let query = window.location.search.substring(1);
    if(!query) return
    let stringPairs = query.split('&')

    stringPairs.forEach(pair => {
        
        let filterArr = pair.split('=')
        let key = decodeURIComponent(filterArr[0])
        let value = decodeURIComponent(filterArr[1])
        if(key==='$text') 
            return this.textFilter.text = value
        let filter = {[`${key}`]:value}
        this.filters.push(filter)
        
    })


    this.$emit('filter',{filters:this.filters, text:this.textFilter.text})
}

function pageEnd(){
    let total = this.params.total
    let end   = this.params.page*this.params.numPerPage

    if(end>total)
        end=total

    return end
}

function pageStart(){
    return this.params.page*this.params.numPerPage-(this.params.numPerPage-1)
}
function hasPages(){
    let {total, pageLength} = this.params
    return total > pageLength
}

</script>

<style scoped>
.pointer{
    cursor: pointer;
}
</style>
