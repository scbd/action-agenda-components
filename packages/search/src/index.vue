<template>
  <div  id="aa-search" >
    <Icons v-once/>
    <div :style="{ top: `${top}px` }" class="stick">
      <FilterNav @$scbdFilterChange="onScbdFilterChange" :get-counts="getCounts" adminRole="ActionAdmin" />
      <Feedback v-bind="{ total, page, totalPages, loading }" />
    </div>
    <List v-if="total && rows.length" :rows="rows" @updateRows="updateSorting" :options="opts" :on-scroll="onScroll"  />
  </div>
</template>

<script>
import Icons from '@action-agenda/icons'
import i18n from './locales/index.js'

import { getList, getCounts, resetCache, initializeApi, updateOptions } from './components/actions-api/index.js'

import List              from './components/List/index.vue'
import getDefaultOptions from './default-options'
import FilterNav         from './components/FilterNav.vue'
import Feedback          from './components/Feedback.vue'

export default {
  name      : 'ScbdSearch',
  components: { FilterNav, Feedback, List, Icons },
  // #region snippet
  props     : {
    options : { type: Object, required: false },
    forceEnv: { type: String, required: false, default: 'production' }
  },
  // #endregion snippet
  methods : { onScbdFilterChange, getCounts, setRowsAndTotal, onScroll, onNextPageLoaded, preLoadFilter, updateSorting },
  computed: { opts, totalPages, top },
  created,
  data,
  errorCaptured,
  i18n
}

function updateSorting(updatedRows) {
  this.rows = updatedRows
}

async function created(){
  initializeApi({ ... this.opts, getToken: () => (this.auth || {}).token })

  if(this.opts.preLoadFilter) this.preLoadFilter(this.opts.preLoadFilter)
  await this.setRowsAndTotal()

  window.document.addEventListener('$me', async () => {
    if(!this.me || !this.me.isAuthenticated) return
    resetCache()
    await this.setRowsAndTotal()
  })

  if(this.opts.listenExternally)
    window.document.addEventListener('$scbdFilterChange', this.onScbdFilterChange)
}

function data (){ return { rows: [], total: 0, page: 1, loading: false, notResized: true } }
function opts (){ return { ...getDefaultOptions(this.options, this.forceEnv) } }

function onScroll($el){
  const self = this

  updateOptions({ $el })
  return async() => {
    const { pageYOffset } = window
    const { scrollHeight, scrollTop:scrollTopDocEl, offsetHeight } = window.document.documentElement
    const { scrollTop:scrollTopBody                              } = window.document.body
    const   scrollTop                                              = scrollTopBody || scrollTopDocEl

    const   currentScrollPosition                   = Math.abs(offsetHeight + (pageYOffset || scrollTop))
    const   isLessThanHalfScrolled                  = currentScrollPosition <= (scrollHeight / 2)
    const   isListComplete                          = (self.page === self.totalPages)

    if(isListComplete || isLessThanHalfScrolled || self.loading) return  //do nothing

    self.loading = true
    window.addEventListener('$nextPageLoaded', self.onNextPageLoaded)
    
    const nextPageRows = await getList(true)

    self.rows.push(...nextPageRows)
  }
}

function onNextPageLoaded($event){
  const { $page: { sk } } = $event

  this.page = (sk / 10) +1
  window.removeEventListener('$nextPageLoaded', this.onNextPageLoaded)
  setTimeout(() => this.loading = false, 100)
}

function totalPages(){
  return Math.ceil(this.total/10)
}

async function onScbdFilterChange(){
  this.page    = 1
  this.total   = 0

  await this.setRowsAndTotal()
}

async function setRowsAndTotal(){
  this.loading    = true

  const { total } = await getCounts()
  
  this.total   = total
  this.rows    = await getList()
  this.loading = false
}

function preLoadFilter(filter){
  if(!filter) return

  addSearchParam(filter)
}

function addSearchParam(value){
  const { origin, search, pathname } = new URL(window.location)
  const newSearchParam              = `filter=${encodeURIComponent(value)}`
  const hasFilterAlready            = search.includes(value)
  const newSearch                   = !search? `?${newSearchParam}` : `${search}&${newSearchParam}`
  const newUrl                      = `${origin}${pathname}${hasFilterAlready? search : newSearch}`
  
  window.history.pushState({ path: newUrl }, '', newUrl)
}

function top(){
  const size = getSize()

  return this.opts[`${size}Top`] || 0
}

function getSize(){
  const viewPort = getWidth()

  if(viewPort <= 480) return 'sm'
  if(viewPort > 480 && viewPort <= 768) return 'md'
  if(viewPort > 768) return 'lg'
}

function getWidth(){
  if(typeof window === 'undefined') return 0

  return Math.max(window.document.documentElement.clientWidth || 0, window.innerWidth || 0)
}
function errorCaptured(err){
  console.error('ActionSearch error:', err)
  console.error(err)
}

// <style lang="scss" >
//   *,
//   *::before,
//   *::after { box-sizing: border-box; }

//   #aa-search {
//     @import '@scbd/www-css/dist/scss/import-no-reboot';
//     font-family: 'BenchNine', sans-serif;
//     position: relative; width: 100%;

//     .stick{position: sticky;  z-index: 5; top: 0}
//     .card { margin-bottom:2em; }
//     .partner { background-color: rgba(0,0,0,.02); }
//     .desc { white-space: pre-wrap; }
//     .icon { margin-right: 1em; height: 24px; width: 24px; }
//     .item { margin-left:3em; }
//     .item span { margin-left:-3em; }
//     .item span:first-line { margin-left:0; }
//   }
// </style>

</script>
<style src="@action-agenda/icons/dist/esm/index.min.mjs.css"></style>
