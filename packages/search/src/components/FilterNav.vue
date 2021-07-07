
<template>
  <section id="aa-search-filter-nav" >
      <nav class="position-relative navbar navbar-light bg-light px-0 filter-nav">
          <div class="col-12 px-0">
            <AllFiltersSelect
                  id="filter-all"
                  v-model="filters"
                  :options="options"
                  :add-text-search="addTextSearch"
                  :on-change="onChange"
                  :countsMap="countsMap"

                  ref="allFiltersSelect"
                  class="px-0"
              />
          </div>
      </nav>
  </section>
</template>

<script>
import { getData, lookUp } from '@action-agenda/cached-apis'
import   AllFiltersSelect  from './AllFiltersSelect.vue'
import { getUnLocale                                  } from '@houlagins/locale'

export default {
  name : 'SearchFilterNav',
  props: {
    getCounts: { type: Function, required: true },
    adminRole: { type: [ Array, String ] }
  },
  components: { AllFiltersSelect },
  methods   : { initialize, addTextSearch, updateSearchQuery, onChange, readSearchParams, addFilter, injectTextAsOption },
  data,
  created,
  errorCaptured
}

async function created(){
  await this.initialize()
  this.readSearchParams()
  window.document.addEventListener('$me', () => {
    if(this.me && this.me.isAuthenticated)
      this.initialize()
  })
}

function  data(){
  return {
    inputText            : '',
    filters              : [],
    options              : [],
    textFilterOptionGroup: {
      filter: '',
      data  : []
    },
    countsMap: undefined
  }
}

function onChange(e,v){
  console.log(e)
  console.log(v)
  setTimeout(this.updateSearchQuery, 100)
  setTimeout(() => this.$emit('$scbdFilterChange'), 600)
  setTimeout(() => this.initialize(), 800)
}

async function initialize(){
  const [ counts, allOptionGroups ] = await Promise.all([ this.getCounts(), getData('all') ])
  const allFiltersUsed              = new Set(Object.keys(counts.filterCounts))
  const onlyOptionsUsed             = [] //only show filters if at least one record is tagged

  const locale =  scbdCMSLocale() || getUnLocale()

  for (const { filter, data } of [ ... allOptionGroups ]){
    const cloneGroup = { filter: filter[locale] }

    cloneGroup.data  = data.filter(({ identifier }) => allFiltersUsed.has(identifier))

    onlyOptionsUsed.push(cloneGroup)
  }

  this.textFilterOptionGroup.filter = this.$t('Free Text Searches')
  this.options                      = [ ...onlyOptionsUsed, this.textFilterOptionGroup ]


  if(!isAdmin(this.me, this.adminRole)) this.options.shift()

  this.countsMap = counts.filterCounts
}

function isAdmin($me={}, role){
  if(!$me.hasRole || (role && !role.length)) return false

  if(Array.isArray(role))
    for (const aRole of role)
      if($me.hasRole(aRole)) return true
  
  if(typeof role === 'string') return $me.hasRole(role)

  return false
}


function updateSearchQuery(){
  resetSearchParams()
  this.filters.forEach(({ identifier }) => addParam(identifier))
}

async function addFilter(identifier){
  const foundFilter = await lookUp('all', identifier, true)

  if(foundFilter && !Array.isArray(foundFilter))
    this.filters.push(foundFilter)

  if(identifier.includes('FREETEXT-'))
    this.injectTextAsOption(identifier.replace('FREETEXT-', ''))
}

function readSearchParams(){
  const params  = (new URL(document.location)).searchParams
  const filters = params.getAll('filter')

  filters.forEach(identifier => this.addFilter(identifier))
}

function resetSearchParams(){
  const { href, search } = window.location
  const newUrl           = href.replace(search, '')

  window.history.pushState({ path: newUrl }, '', newUrl)
}

function addParam(value){
  const { origin, search, pathname } = new URL(window.location)
  const newSearchParam              = `filter=${encodeURIComponent(value)}`
  const newSearch                   = !search? `?${newSearchParam}` : `${search}&${newSearchParam}`
  const newUrl                      = `${origin}${pathname}${newSearch}`
  
  window.history.pushState({ path: newUrl }, '', newUrl)
}

function injectTextAsOption(text){
  const textFilter = createTextFilterObject(text)

  this.textFilterOptionGroup.data.push(textFilter)
  this.filters.push(textFilter)
}

function addTextSearch(text){
  this.injectTextAsOption(text)

  setTimeout(() => this.updateSearchQuery(), 100)
  setTimeout(() => this.$emit('$scbdFilterChange'), 600)
}

function createTextFilterObject(name){ return { identifier: `FREETEXT-${name}`, name } }

function errorCaptured(err){
  console.error('@scbd/search.SearchFilterNav error:', err)
  console.error(err)
}

function scbdCMSLocale (){
  if(typeof window === 'undefined') return ''

  const pref = window.document.cookie.replace(/(?:(?:^|.*;\s*)Preferences\s*=\s*([^;]*).*$)|^.*$/, '$1')

  if(pref) return (pref.replace('Locale=', ''))

  return ''
}

</script>


