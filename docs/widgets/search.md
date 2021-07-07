---
sidebarDepth: 2
---
# Search

## Description
The component displays a full featured action searching mechanism.

 **Features**:
1. free text search
2. aichi-target filter
3. sdg filter
4. actor type filter
5. SCBD subject filter
6. text search to search available filters
7. Envoke a filter change from external JS program by dispatching event **$scbdFilterChange**
8. url derived search for creating pages and or sharing
    
    a. make a country page such as: <a href="https://www.cbd.int/action-agenda/contributions/?filter=fr" rel="noopener noreferrer" target="_blank"> <OutboundLink/> https://www.cbd.int/action-agenda/contributions/?filter=fr </a>

    b. a page dedicated to a target: <a href="https://www.cbd.int/action-agenda/contributions/?filter=AICHI-TARGET-01" rel="noopener noreferrer" target="_blank"> <OutboundLink/> https://www.cbd.int/action-agenda/contributions/?filter=AICHI-TARGET-01 </a> 


## Install
### Widget
To install as a copy and paste widget. As seen here:  <a href="https://www.cbd.int/action-agenda/contributions" rel="noopener noreferrer" target="_blank"> <OutboundLink/> https://www.cbd.int/action-agenda/contributions/ </a>

::: tip
This component's options can be passed as an attribute on the script tag. [See options details](/widgets/search/#options)
:::

<code-group>
<code-block title="MODERN">

```html

<script nomodule="" id="legacy-notice-legacy" src="https://cdn.cbd.int/@scbd/legacy-notice/dist/widget/index.umd.min.js"></script>

<script  type="module" id="search" src="https://cdn.cbd.int/@action-agenda/search@1.0.8/dist/widget/index.js"></script>

```
</code-block>

<code-block title="MODULE">

```html

<script  type="module" id="search" src="https://cdn.cbd.int/@action-agenda/search@1.0.8/dist/widget/index.js"></script>


```
</code-block>


</code-group>


### Props

<<< @/packages/search/src/index.vue#snippet{27-29}

#### forceEnv
Tell the component which api to use by passing: **dev** | **stg** | **prod**

  **dev** : https://api.cbddev.xyz/api/actions
  
  **stg** : https://api.stg.cbd.int/api/actions
  
  **prod** : https://api.cbd.int/api/actions


#### options

<<< @/packages/search/src/default-options.js#snippet

## I18n

<<< @/packages/search/src/locales/index.js

## Example
<template>
<div id="example-data" class="position-relative p-5 example" >
    <div class="article-container p-3">
      <article >
        <component  :options="{ lgTop: '58' }" v-if="dynamicComponent" :is="dynamicComponent"></component>
      </article>
    </div>
</div>
</template>

<script>
import '../../docs/style.css'

export default {
  methods: { getExamp },
  data() {
    return {
      dynamicComponent: null,
      exampleData: null,
      exampleHeader: null
    }
  },

  mounted () {
    import('../../packages/search/src/index.js').then(module => {
      this.dynamicComponent = module.default
      this.getExamp()
    })
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
<style >
  

  .example{
    background-color: rgb(38, 90, 79);
  }
  .example .article-container{
    background-color: white;
  }
  .example-header{
      max-width: 740px;
    margin: 0 auto;
    padding: 2rem 2.5rem;
  }

</style>