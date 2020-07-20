<i18n src="./locales/index.json"></i18n>

<template>
  <div class="card card-row mb-5">
    <!-- HEADER -->
    <div class="card-header">

      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item" v-on:click="changeTab(1)">
          <a class="nav-link" :class="{active:isActiveTab(1)}">{{$t('action')}}</a>
        </li>
        <li class="nav-item"  v-on:click="changeTab(2)">
          <a class="nav-link" :class="{active:isActiveTab(2)}">{{$t('actor')}}</a>
        </li>        
      </ul>

      <State v-if="$isAdmin" :status="meta.status"/>
    </div>

    <!-- TAB 1 -->
    <HorzCardAction  v-bind="action" v-if="isActiveTab(1)" />

    <!-- TAB 2 -->
    <EntityView :entity="actor" v-if="isActiveTab(2)" />
   
    <!-- FOOTER -->
    <div class="card-footer">

      <div class="btn-group" role="group" aria-label="Card actions, view, edit publish, reject">
        <button v-on:click="go(_id)" type="button" class="btn btn-primary btn-sm">{{$t('viewAction')}}</button>
        <!-- <button type="button" class="btn btn-outline-dark btn-sm">Edit</button> -->
        <button v-on:click="changeStatus(_id,'publish')" v-if="$isAdmin && status!=='published'" type="button" class="btn btn-outline-dark btn-sm">Publish</button>
        <button v-on:click="changeStatus(_id,'draft')" v-if="$isAdmin && status!=='draft'" type="button" class="btn btn-outline-dark btn-sm">Unpublish</button>        
        <button v-on:click="changeStatus(_id,'reject')" v-if="$isAdmin && status!=='rejected'" type="button" class="btn btn-outline-dark btn-sm">Reject</button>

      </div>
      <small class="text-muted float-right">{{meta.modifiedOn|dateFormat}}</small>
    </div>
  </div>
</template>

<script>
  import path           from 'path'
  import axios          from 'axios'
  import winston        from 'consola' 
  import EntityView     from '@components/AAView/Entity'
  import ListMixin      from './ListMixin'
  import HorzCardAction from './CardAction'
  import State          from './State'

  export default {
    name      : 'HorzCard',
    mixins    : [ ListMixin ] ,
    components: { HorzCardAction, EntityView, State },
    props: {
      _id    : { type:String, required:true },
      actor  : { type:Object, required:true },
      action : { type:Object, required:true },
      meta   : { type:Object }
    },
    computed: { status },
    methods : { changeTab, isActiveTab, getStatusUrl, changeStatus, go },
    filters : { dateFormat },
    data,
    mounted
  }

  function  data()  { return { activeTab:1 } }

  function mounted() { this.activeTab = 1 }

  function status() { return this.meta.status }

  function changeTab(tab){ this.activeTab=tab }

  function isActiveTab(tab){ return this.activeTab===tab }

  function go(_id){ 
    const { origin, pathname } = window.location

    window.location.href = `${origin}${stripTrailingSlash(pathname)}/action?action-id=${_id}` 
  }

  function stripTrailingSlash (str) {
      return str.endsWith('/') ?
          str.slice(0, -1) :
          str;
  }
  function getStatusUrl (id, status)  { return `${process.env.VUE_APP_API}/v2019/actions/${id}/status/${status}`}

  function dateFormat (date) {
    let d = new Date(date)
    return `${d.getUTCFullYear()}-${monthFormat(d.getUTCMonth())}-${dayFormat(d.getUTCDate())}  `
  }

  function monthFormat (month) {
    if(month < 10)
      return `0${month+1}`
    return month+1
  }
  function dayFormat (day) {
    if(day < 10)
      return `0${day}`
    return day
  }
  function getMainEntityObject () {
    const  { name,type,image,abbreviation,website } = this.organization
    return { name,type,image,abbreviation,website }
  }

  function getActionObject () {
    const { name, description, image } = this.action
    return { name, description, image }
  }

  async function changeStatus(_id,status){
    try {
          let options = this.getOptions()
          let apiUrl  = this.getStatusUrl (_id, status)

          let result =(await axios.post(apiUrl,{},options)).data

          this.$emit('status-change',{_id,status})

          return result
    } catch (error) {
        consola.error('AAList card.changeStatus: ',error)
    }
  }
</script>

<style scoped>
  .nav-item{ cursor:pointer; }
</style>