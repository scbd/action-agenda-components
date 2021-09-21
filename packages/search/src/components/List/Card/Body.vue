<template>
  <div class="container-fluid" >
    <div class="row no-gutters row-background-color">
        <div v-if="image" class="col-sm-1">
          <div class="logo-container"> 
            <img class="logo-image" :src='image.url' :alt='getLogoName'/>
          </div> 
        </div>
        <div class="col-sm-11">
          <div class="card-body">
          <h5 class="card-title">  {{nameComp}}, {{actorCountry}} - {{actorTypeComp}}</h5>
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
import   i18n              from '../../../locales/index.js'

export default {
  name : 'CardBody',
  props: {
    name         : { type: Object, required: true },
    description  : { type: Object, required: true },
    actionDetails: { type: Object },
    country      : { type: Object, required: true },
    actorType    : { type: Object, required: true },
    image        : { type: Object, required: true }   
  },

  computed: { nameComp, descriptionComp, actorTypeComp, getLogoName },
  methods : { loadIcons, countryComp },
  updated,
  created,
  data,
  i18n
}

function data(){
  return { icons: [], actorCountry:''}
}

async function updated(){
  await this.loadIcons()
  await this.countryComp()
}
async function created(){
  await this.loadIcons()
  await this.countryComp()
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

async function countryComp() {
  if (!this.country) return

  const nameOfCountry = await lookUp('countries',this.country.identifier, true)
  
  this.actorCountry = nameOfCountry.name    
}

function actorTypeComp() {
  if (!this.actorType) return 
  
  return String(this.actorType)
}

function descriptionComp(){
  const locale = getUnLocale()

  return this.description[locale] || this.description['en']
}

function getLogoName() {
  const locale = this.$i18n.locale

  return this.image.name[locale] || this.image.name['en']
}

</script>

<style scoped>
  .action-img{ max-height: 250px; }
  .desc{ white-space: pre-wrap;  }
  .action-icon{max-width: 2em; margin-bottom: .5em;}
</style>
