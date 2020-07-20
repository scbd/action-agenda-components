<i18n src="./locales/index.json"></i18n>
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

                    {{$t('filters')}} 
                    <svg class="icon align-middle mb-1">
                    <use xlink:href="#icon-chevron-down"></use>
                    </svg>
                </span>
                <div class="dropdown-menu">
                    <a class="dropdown-item" v-for="(status,index) in options.status" v-bind:key="index" v-on:click="typeFiler(status)">{{$t(status)}}</a>
                </div>
                </li> 
            </ul>
        <div class="form-inline">
            <div class="input-group mr-sm-2">
                <input class="form-control" type="text" placeholder=" " aria-label="search" v-model="text" v-on:keydown.enter.prevent="textSearch(text)">
                <div class="input-group-append">
                    <button class="btn btn-outline-dark btn-sm" type="button"  v-on:click="text=''">
                        <svg class="icon align-middle mb-1">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <button class="btn btn-outline-info my-2 my-sm-0" type="button" v-on:click="textSearch(text)" >{{$t('search')}}</button>
        </div>

        </nav>

        <FiltersApplied :text="textFilter" :filters="filters" @delete-filter="deleteFilter" @delete-text="deleteText"/>

        <hr/>
    </section>
</template>

<script>
    import clone          from 'lodash.clone'
    import FiltersApplied from './FiltersApplied'

    export default {
        name      : 'SearchNav',
        components: { FiltersApplied },
        props     : { params: { type: Object } },
        computed  : { pageStart, pageEnd },
        methods   : { hasPages, textSearch, typeFiler, deleteFilter, updateSearchQuery, functionLoadFilters, deleteText },
        data,
        mounted
    }

    function mounted (){ this.functionLoadFilters() }

    function  data(){
        return {
            options: { status:[ 'draft', 'published', 'rejected', 'deleted' ] },
            text      : '',
            filters   : [],
            textFilter: { text:'' }
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
        let { filters, $emit, updateSearchQuery, textFilter  } = this
        let filter      = {'meta.status':status}//{ 'meta':{status:status} }
        filters.push(filter)
        $emit('filter', { filters:filters, text:textFilter.text })
        updateSearchQuery()
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

        let { href, search } = window.location

        let newUrl = href.replace(search,'')

        window.history.pushState({path:newUrl}, '' , newUrl)
    }

    function addParam(key,value){

        let { href, search } = window.location

        let newUrl = href
        if(!search) newUrl += '?'

        newUrl +=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`

        window.history.pushState({path:newUrl}, '' , newUrl)
    }

    function functionLoadFilters(){
        let query = window.location.search.substring(1);
        if(!query) return
        let stringPairs = query.split('&')

        stringPairs.forEach( pair => {
            
            let filterArr = pair.split('=')
            let key       = decodeURIComponent(filterArr[0])
            let value     = decodeURIComponent(filterArr[1])

            if( key === '$text' ) return this.textFilter.text = value

            let filter = {[`${key}`]:value}
            this.filters.push(filter)
        })

        this.$emit('filter',{ filters:this.filters, text:this.textFilter.text })
    }

    function pageEnd(){
        let { total, page, numPerPage } = this.params
        let end                         = page * numPerPage

        if(end>total) end=total

        return end
    }

    function pageStart(){
        let { page, numPerPage } = this.params.page
        return page * numPerPage - (numPerPage-1)
    }

    function hasPages(){
        let { total, pageLength } = this.params
        return total > pageLength
    }
</script>

<style scoped>
    .pointer{ cursor: pointer; }
</style>
