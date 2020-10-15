---
sidebarDepth: 2
---
# Cached API's

## Description

A locally cached version of SCBD's most static API's.


## Install

<code-group>
<code-block title="YARN">

```bash

yarn add @action-agenda/cached-apis

```
</code-block>

<code-block title="NPM">

```bash

npm install @action-agenda/cached-apis

```
</code-block>
</code-group>

### initializeApiStore = (opts = {})
initializes the local store (IndexedDB/WebSQL/local storage) depending on client.

#### Props: (options:Object)

<<< @/packages/cached-apis/src/default-options.mjs#options
##### Options: apisUrls
<<< @/packages/cached-apis/src/default-options.mjs#apisUrls
##### Options: dataSources
<<< @/packages/cached-apis/src/default-options.mjs#dataSources

### getData  = async (dataSource, noCache=false)

### lookUp = async(dataSource, keys, single=false)

## Data References

### Action Categories
<div class="language-text"><pre><code>
{{actionCategories}}
</code></pre></div>

### Thematic Areas
<div class="language-text"><pre><code>
{{subjects}}
</code></pre></div>

### Government Types
<div class="language-text"><pre><code>
{{govTypes}}
</code></pre></div>

### Organization Types
<div class="language-text"><pre><code>
{{orgTypes}}
</code></pre></div>

### Regions 
<div class="language-text"><pre><code>
{{regions}}
</code></pre></div>

### Aichi Biodiversity Targets
<div class="language-text"><pre><code>
{{aichis}}
</code></pre></div>

### SDG's
<div class="language-text"><pre><code>
{{sdgs}}
</code></pre></div>

### Countries
<div class="language-text"><pre><code>
{{countries}}
</code></pre></div>

### Jurisdictions
<div class="language-text"><pre><code>
{{jurisdictions}}
</code></pre></div>


## Example
<template>
<div id="example-data" class="position-relative p-5 example" >
  <div class="inner">
    <h3>lookUp('all', ['528B1187-F1BD-4479-9FB3-ADBD9076D361', 'ca' ,'AICHI-TARGET-10','CBD-SUBJECT-ABS'])</h3>
    <hr/>
    <pre>
    {{lookUp}}
    </pre>
    <a href="#actionCategories" class="header-anchor">#</a>
    <h3 >CachedApis.getData('actionCategories')</h3>
    <hr/>
    <pre>
    {{actionCategories}}
    </pre>
  </div>
</div>
</template>

<script>
import * as CachedApis from './src/index.mjs'

export default {
  methods: { getExamp },
  computed: { cachedApis: () => CachedApis },
  data() {
    return {
      exampleData: null,
      exampleHeader: null,
      sdgs:[],
      aichis:[],
      subjects:[],
      jurisdictions:[],
      govTypes:[],
      orgTypes:[],
      regions:[],
      countries:[],
      lookUp:[],
      actionCategories:[]
    }
  },

  async mounted () {
    CachedApis.initializeApiStore()

    this.lookUp =  await CachedApis.lookUp('all', ['528B1187-F1BD-4479-9FB3-ADBD9076D361', 'ca' ,'AICHI-TARGET-10','CBD-SUBJECT-ABS'])
    this.actionCategories =  await CachedApis.getData('actionCategories')
    this.countries = await CachedApis.getData('countries')
    this.regions = await CachedApis.getData('regions')
    this.orgTypes = await CachedApis.getData('orgTypes')
    this.govTypes = await CachedApis.getData('govTypes')
    this.jurisdictions = await CachedApis.getData('jurisdictions')
    this.subjects = await CachedApis.getData('subjects')
    this.aichis = await CachedApis.getData('aichis')
    this.sdgs = await CachedApis.getData('sdgs')

    this.getExamp()
  },
  destroyed(){
    this.exampleHeader.parentNode.removeChild(this.exampleHeader)
    this.exampleData.parentNode.removeChild(this.exampleData)
  }
}

function getExamp(){

  const test = document.getElementsByTagName('main')[0].lastElementChild.id

  if(test === 'example-data') return

    this.exampleHeader = document.getElementById('example')
    this.exampleData   = document.getElementById('example-data')

  this.exampleHeader.parentNode.removeChild(this.exampleHeader)
  this.exampleData.parentNode.removeChild(this.exampleData)

  const main = document.getElementsByTagName('main')[0]

  this.exampleHeader.classList.add('example-header')
  main.appendChild(this.exampleHeader)
  main.appendChild(this.exampleData)
}
</script>
<style scoped>
  
  .example{
    padding: 3em 3em 3em 3em;
    background-color: rgb(38, 90, 79);
  }
  .example .inner{
    padding: 5em 5em 5em 5em;
    background-color: white;
  }
  .example-header{
      max-width: 740px;
    margin: 0 auto;
    padding: 2rem 2.5rem;
  }

</style>
