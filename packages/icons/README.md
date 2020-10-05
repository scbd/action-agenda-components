---
sidebarDepth: 4
---
# Icons

## Description
A shared set of icons used between components.


## Install

To install in vuejs.

<code-group>
<code-block title="YARN">

```bash

yarn add @action-agenda/icons

```
</code-block>

<code-block title="NPM">

```bash

npm install @action-agenda/icons

```
</code-block>
</code-group>

### Icons Component
Icons renders all the Icon symbol definitions for reference later. 

```html
<template>
  <div id="app">
    <Icons v-once/>
  </div>
</template>
```

```js
import Icons, { Icon } from '@action-agenda/icons'

export default {
  name      : 'App',
  components: { Icons }
}
```

### Icon Component

```html
<template>
  <div >
    <Icon name="close"/>
  </div>
</template>
```

```js
import { Icon } from '@action-agenda/icons'

export default {
  name      : 'AppComp',
  components: { Icon }
}
```

#### Icon Props

<<< @/packages/icons/src/Icon.vue#snippet

<<< @/packages/icons/src/index.js#snippet

## I18n

<<< @/packages/icons/src/locales/index.js

## Example
<template>
<div id="example-data" class="position-relative p-5 example" >
  <component  v-if="dynamicComponent" :is="dynamicComponent"/>
  <div class="p-5 m-5 inner">
    <div v-for="iconName in iconNames" >
      <component  v-if="Icon" :is="Icon" :name="iconName"></component>: {{iconName}}
      <hr/>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: { getExamp },
  data() {
    return {
      dynamicComponent: null,
      Icon: null,
      exampleData: null,
      exampleHeader: null,
      iconNames: []
    }
  },

  mounted () {
    import('./src/index.js').then(module => {
     
      this.dynamicComponent = module.default
      this.Icon = module.Icon
      this.iconNames = module.iconNames
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
