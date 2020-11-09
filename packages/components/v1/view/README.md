---
sidebarDepth: 5
---
# View

## Description
This component displays a single commitment that is published, or not published with appropriate roles.

## Install

### Widget
To install as a copy and paste widget. As seen here:  <a href="https://www.cbd.int/action-agenda/contributions/action/?action-id=5eeba456395529000178dcbf" rel="noopener noreferrer" target="_blank"> <OutboundLink/> https://www.cbd.int/action-agenda/contributions/action/?action-id=5eeba456395529000178dcbf  </a>

::: tip
This component's options can be passed as an attribute on the script tag. [See options details](/components/view/#options)
:::

<code-group>
<code-block title="MODERN">

```html

<script nomodule="" id="view-legacy" src="https://cdn.cbd.int/@action-agenda/view@~1.0.0/dist/widget/index.umd.min.js"></script>
<script  type="module" id="view" src="https://cdn.cbd.int/@action-agenda/view@~1.0.0/dist/widget/index.min.js"></script> 


```
</code-block>

<code-block title="MODULE">

```html

<script  type="module" id="view" src="https://cdn.cbd.int/@action-agenda/view@~1.0.0/dist/widget/index.min.js"></script> 


```
</code-block>

<code-block title="UMD">

```html

<script nomodule="" id="view-legacy" src="https://cdn.cbd.int/@action-agenda/view@~1.0.0/dist/widget/index.umd.min.js"></script>

```
</code-block>
</code-group>


### Vuejs
To install as vuejs component.

<code-group>
<code-block title="YARN">

```bash

yarn add @action-agenda/view

```
</code-block>

<code-block title="NPM">

```bash

npm install @action-agenda/view

```
</code-block>
</code-group>


```js
<template>
  <AAView identifier="5f1a9e9c66d0dd000181331d" ></AAView>
</template>

<script>
import AAView from '@action-agenda/view'

import '@scbd/www-css'

export default { name      : 'App',
                 components: { AAView } 
               }
</script>

```
### Props

<<< @/packages/components/v1/view/src/index.vue#snippet


#### identifier
Can be passed a prop on the element or as a url search param:

?action-id=5dbc8120f247140001197c8a

<a href="https://www.cbd.int/action-agenda/contributions/action/?action-id=5dbc8120f247140001197c8a" rel="noopener noreferrer" target="_blank"> <OutboundLink/> https://www.cbd.int/action-agenda/contributions/action/?action-id=5dbc8120f247140001197c8a</a>


#### forceEnv
Tell the component which api to use by passing: **dev** | **stg** | **prod**

  **dev** : https://api.cbddev.xyz/api/actions
  
  **stg** : https://api.stg.cbd.int/api/actions
  
  **prod** : https://api.cbd.int/api/actions


#### options

<<< @/packages/components/v1/view/src/default-options.js#snippet

## I18n

<<< @/packages/components/v1/view/src/locales/index.js

## Example

<template>
<div id="example-data" class="position-relative p-5 example" >
    <div class="article-container p-3">
      <article >
        <component identifier="5f1a9e9c66d0dd000181331d" v-if="dynamicComponent" :is="dynamicComponent"></component>
      </article>
    </div>
</div>
</template>

<script>
import '../../../../docs/style.css'

export default {
  methods: {getExamp},
  data() {
    return {
      dynamicComponent: null,
      exampleData: null,
      exampleHeader: null
    }
  },

  mounted () {
    import('./src/index.js').then(module => {
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
<style scoped>
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