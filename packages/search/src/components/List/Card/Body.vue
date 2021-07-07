<template>
  <div class="container-fluid" >
    <div class="row no-gutters">
      <div class="col-sm-12" >
        <div class="card-body">
          <h5 class="card-title">{{nameComp}}</h5>
          <p class="card-text desc"> {{descriptionComp}} </p>
          <span v-if="icons.length">
            <span v-for="(icon,index) in icons" v-bind:key="index">
              <img v-if="icon && icon.image && !icon.url" :src="icon.image" :alt="icon.name" class="action-icon mx-1"/>
              <a v-if="icon && icon.image && icon.url" :href="icon.url" hreflang="en" :title="icon.name"> <img :src="icon.image" :alt="icon.name" class="action-icon mx-1"/> </a>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { lookUp      } from '@action-agenda/cached-apis'
import { getUnLocale } from '@houlagins/locale'

export default {
  name : 'CardBody',
  props: {
    name         : { type: Object, required: true },
    description  : { type: Object, required: true },
    actionDetails: { type: Object }
  },
  computed: { nameComp, descriptionComp },
  methods : { loadIcons },
  updated,
  created,
  data
}

function data(){
  return { icons: [] }
}


async function updated(){
  await this.loadIcons()
}
async function created(){
  await this.loadIcons()
}

async function loadIcons(){
  if(!this.actionDetails) return

  const { aichiTargets, sdgs } = this.actionDetails
  const iconData               = [ ...[ ...aichiTargets||[], ...sdgs||[] ] ]

  if(!iconData.length) return

  for (const [ index, { identifier }={} ] of iconData.entries())
    if(identifier)
      iconData[index] = await lookUp('all', identifier, true)

  this.icons = iconData
}

function nameComp(){
  const locale = getUnLocale()
  
  return this.name[locale] || this.name['en']
}

function descriptionComp(){
  const locale = getUnLocale()

  return this.description[locale] || this.description['en']
}
</script>

<style scoped>
  .action-img{ max-height: 250px; }
  .desc{ white-space: pre-wrap;  }
  .action-icon{max-width: 2em; margin-bottom: .5em;}
</style>
