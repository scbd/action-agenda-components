---
sidebarDepth: 4
---
# Legacy Browser Notice

## Description
Shows the user a notice that their browser is not supported.  Checks for ie10 or ie ie11 and shows notice.


## Install
### Widget
To install as a copy and paste widget. 

::: tip
This component's property 'minVersion' can be passed as an attribute on the script tag. [See options details](/components/legacy-notice/#props)
:::

<code-group>
<code-block title="MODERN">

```html

<script nomodule="" id="view-legacy" src="https://cdn.cbd.int/@action-agenda/legacy-notice@~1.0.1/dist/widget/index.umd.min.js"></script>
<script  type="module" id="view" src="https://cdn.cbd.int/@action-agenda/legacy-notice@~1.0.1/dist/widget/index.min.js"></script> 


```
</code-block>

<code-block title="MODULE">

```html

<script  type="module" id="view" src="https://cdn.cbd.int/@action-agenda/legacy-notice@~1.0.1/dist/widget/index.min.js"></script> 


```
</code-block>

<code-block title="UMD">

```html

<script nomodule="" id="view-legacy" src="https://cdn.cbd.int/@action-agenda/legacy-notice@~1.0.1/dist/widget/index.umd.min.js"></script>

```
</code-block>
</code-group>


### Vuejs
To install as vuejs component.

<code-group>
<code-block title="YARN">

```bash

yarn add @action-agenda/legacy-notice

```
</code-block>

<code-block title="NPM">

```bash

npm install @action-agenda/legacy-notice

```
</code-block>
</code-group>


```js
<template>
  <div id="app">
    <LegacyNotice min-version='10'/>
  </div>
</template>

<script>
import LegacyNotice from '@action-agenda/legacy-notice'

export default {
  name      : 'App',
  components: {
    LegacyNotice
  }
}
</script>

```
### Props

<<< @/packages/legacy-notice/src/index.vue#snippet

```js
  const ie10s = ['10', 'ie10', 'IE10']
  const ie11s = ['11', 'ie11', 'IE11']
  // if passed 'force' the component will render,
```

## I18n

<<< @/packages/legacy-notice/src/locales/index.js

## Example
<template>
<div id="example-data" class="position-relative p-5 example" >
  <component  v-if="dynamicComponent" :is="dynamicComponent" min-version="force"></component>
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