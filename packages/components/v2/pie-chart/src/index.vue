<template>
  <div>
    <h3>{{$t(opts.source)}}</h3>
    <chart :data="data" :options="this.opts"/>
  </div>
</template>

<script>
import   getOptions                   from './default-options'
import   i18n                         from './locales/index.mjs'
import   Chart                        from './components/chart.vue'
import { lookUp, initializeApiStore } from '@action-agenda/cached-apis'

export default {
  name      : 'PieChart',
  components: { Chart },
  // #region snippet
  props     : {
    options : { type: Object, required: false },
    forceEnv: { type: String, required: false }
  },
  // #endregion snippet
  methods : { setData },
  computed: {  opts },
  mounted,
  data,
  i18n
}

function data(){
  return {
    data: []
  }
}

async function mounted(){
  await initializeApiStore()
  window.addEventListener('$actionAgendaCounts', this.setData)
}

async function setData({ $counts }){
  const { source } = this.opts

  if($counts.sources[source])
    this.data = $counts.sources[source]? await getSource(source)($counts.sources) : []
}

function opts (){ return { ...getOptions(this.options, this.forceEnv) } }

const sourceMap = { aichis, sdgs, documentStates, actionCategories, orgTypes, govTypes, jurisdictions, subjects, countries, regions, actors }

async function getName(key, prop='name'){
  const item = await lookUp('all', key, true)

  return item[prop]
}

function getSource(source){
  return sourceMap[source]
}

function aichis({ aichis }){
  return Promise.all(Object.entries(aichis).map(async ([ name, value ]) => ({ name: await getName(name), value })))
}

function sdgs({ sdgs }){
  return Promise.all(Object.entries(sdgs).map(async ([ name, value ]) => ({ name: await getName(name), value })))
}

function documentStates({ documentStates }){
  return  Promise.all(Object.entries(documentStates).map(async ([ name, value ]) => ({ name: await getName(name), value })))
}

function actionCategories({ actionCategories }){
  return  Promise.all(Object.entries(actionCategories).map(async ([ name, value ]) => ({ name: await getName(name), value })))
}

function orgTypes({ orgTypes }){
  return  Promise.all(Object.entries(orgTypes).map(async ([ name, value ]) => ({ name: await getName(name), value })))
}

function actors({ orgTypes, govTypes }){
  return Promise.all(Object.entries(orgTypes).map(async ([ name, value ]) => ({ name: await getName(name), value })).concat(Object.entries(govTypes).map(async ([ name, value ]) => ({ name: await getName(name), value }))))
}

function govTypes({ govTypes }){
  return Promise.all(Object.entries(govTypes).map(async ([ name, value ]) => ({ name: await getName(name), value })))
}

function jurisdictions({ jurisdictions }){
  if(!jurisdictions) return []
  return Promise.all(Object.entries(jurisdictions).map(async ([ name, value ]) => ({ name: await getName(name), value })))
}

function subjects({ subjects }){
  return Promise.all(Object.entries(subjects).map(async ([ name, value ]) => ({ name: await getName(name), value })))
}

function countries({ countries }){
  return Promise.all(Object.entries(countries).map(async ([ name, value ]) => ({ name: await getName(name), value })))
}

function regions({ regions }){
  return  Promise.all(Object.entries(regions).map(async ([ name, value ]) => ({ name: await getName(name), value })))
}

</script>

<style scoped>

  .debug{
    border: 1px solid red;
  }
</style>
