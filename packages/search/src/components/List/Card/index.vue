
<template>
  <div class="card card-row mb-5">
    <div class="card-header">
      <div class="row">
        <div class="col-12 text-right">
          <div style="position:relative;">
            <State  v-if="me && me.hasRole('ActionAdmin')" :status="meta.status"/>
            <span class="text-nowrap" v-if="icons.length">
              <span v-for="(icon,index) in icons" v-bind:key="index">
                <img v-if="icon.image && !icon.url" :src="icon.image" :alt="icon.name" class="action-icon mx-1"/>
                <a v-if="icon.image && icon.url" :href="icon.url" hreflang="en" :title="icon.name"> <img :src="icon.image" :alt="icon.name" class="action-icon mx-1"/> </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 1 -->
    <HorzCardAction  v-bind="{...action, actionDetails }" />


    <!-- FOOTER -->
    <div class="card-footer">

      <div class="btn-group" role="group" aria-label="Card actions, view, edit publish, reject">
        <a :href="viewUrl(_id)" type="button" class="btn btn-primary btn-sm">{{$t('View Action')}}</a>
        <button v-on:click="changeStatus(_id,'publish')" v-if="me && me.hasRole('ActionAdmin') && status!=='published'" type="button" class="btn btn-outline-dark btn-sm">{{$t('Publish')}}</button>
        <button v-on:click="changeStatus(_id,'draft')" v-if="me && me.hasRole('ActionAdmin') && status!=='draft'" type="button" class="btn btn-outline-dark btn-sm">{{$t('Unpublish')}}</button>
        <button v-on:click="changeStatus(_id,'reject')" v-if="me && me.hasRole('ActionAdmin') && status!=='rejected'" type="button" class="btn btn-outline-dark btn-sm">{{$t('Reject')}}</button>

      </div>
      <!-- <small class="text-muted float-right">{{meta.modifiedOn|dateFormat}}</small> -->
      <small class="text-muted float-right">{{meta[sortBy]|dateFormat}}</small>
    </div>
  </div>
</template>

<script>
import { lookUp   } from '@action-agenda/cached-apis'
import { get$http } from '@houlagins/load-http'
import   HorzCardAction   from './Body.vue'
import   State            from './State.vue'
import   i18n              from '../../../locales/index.js'

export default {
  name      : 'SearchListCard',
  components: { HorzCardAction, State },
  props     : {
    _id          : { type: String, required: true },
    action       : { type: Object, required: true },
    actionDetails: { type: Object },
    meta         : { type: Object },
    options      : { type: Object, required: true },
    sortBy       : { type: Object, required: true }
  },
  computed: { status },
  methods : { getStatusUrl, changeStatus, loadIcons, viewUrl },
  filters : { dateFormat },
  data,
  created,
  updated,
  i18n
}

function  data(){ return { activeTab: 1, icons: [] } }

async function updated(){ await this.loadIcons() }

async function created(){
  await this.loadIcons()
  this.activeTab = 1
}

function status(){ return this.meta.status }

function viewUrl(_id){
  const { origin, pathname } = window.location

  return `${origin}${stripTrailingSlash(pathname)}/action?action-id=${_id}`
}

function stripTrailingSlash (str){
  return str.endsWith('/') ?
    str.slice(0, -1) :
    str;
}
function getStatusUrl (id, status){ return `${this.options.api}/v2019/actions/${id}/status/${status}` }

function dateFormat (date){
  const d = new Date(date)

  return `${d.getUTCFullYear()}-${monthFormat(d.getUTCMonth())}-${dayFormat(d.getUTCDate())}  `
}

function monthFormat (month){
  if(month < 10)
    return `0${month+1}`
  return month+1
}
function dayFormat (day){
  if(day < 10)
    return `0${day}`
  return day
}

async function changeStatus(_id, status){
  try {
    const $http   = await get$http()
    const apiUrl  = this.getStatusUrl(_id, status)
    const headers = this.auth.token? { Authorization: `Ticket ${this.auth.token}` } : {}
    const result = (await $http.post(apiUrl, { json: { }, headers })).data

    this.$emit('status-change', { _id, status })

    const event = new Event('$me', { bubbles: true })

    event.$me   = this.me
    event.$auth = this.auth
    this.$el.dispatchEvent(event)

    return result
  }
  catch (error){
    console.error('AAList card.changeStatus: ', error)
  }
}

async function loadIcons(){
  const iconData = [ ...(this.actionDetails||{}).actionCategories || [] ]

  if(!iconData.length) return

  for (const [ index, { identifier }={} ] of iconData.entries()){
    if(!identifier) continue
    iconData[index] = await lookUp('all', identifier, true)
    if(!iconData[index]){
      console.error('id', this._id)
      console.error('iconData', iconData)
      console.log('this.actionDetails', this.actionDetails)
      throw new Error('identifier not found')
    }
  }
  this.icons = iconData
}
</script>

<style scoped>
  .nav-item{ cursor:pointer; }
  .tabs{max-width: 50%;}
  .action-icon{max-width: 1.5em;}
</style>