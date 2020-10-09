<template>
  <section >
    <Icons/>
    <div class="container-fluid" >

      <section v-if="record.action">
        <h1>{{record.action.name}}</h1>
        <div class="card my-3">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <p class="desc"> {{record.action.description}}</p>
              </div>
              <div class="col-12 mb-3" v-for="item in record.action.attachments" v-bind:key="item.url">
                <a :href="item.url" target="_blank" rel="noopener"> <Icon name="file"/> {{item.name}} </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="record.actor">
        <h2>{{$t('Submitted By')}}</h2>

        <Entity :entity="record.actor"/>

      </section>
      
      <section v-if="record.actionDetails">
        <h2>{{$t('Action Details')}}</h2>

        <div class="card my-3">
          <div class="card-body p-3">
            <div class="row">
              <TagView :name="$t('Action Agenda Theme (s)')" :tags="record.actionDetails.actionCategories" />
              <TagView :name="$t('Aichi Biodiversity Target (s)')" :tags="record.actionDetails.aichiTargets" />
              <TagView :name="$t('Sustainable Development Goal (s)')" :tags="record.actionDetails.sdgs" />
              <TagView :name="$t('Operational Areas (s)')" :tags="record.actionDetails.operationalAreas" />
              <TagView :name="$t('Thematic Areas (s)')" :tags="record.actionDetails.thematicAreas" />

              <div class="col-12" v-if="record.actionDetails.progressMeasured">
                <h5>{{$t('Progress Measured')}}</h5>
                <p class="desc">{{record.actionDetails.progressMeasured}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="record.partners">
        <h2>{{$t('Partner (s)')}}</h2>
        <div class="row my-3" >
          <div class="col-12 col-md-4 col-lg-3 mb-2" v-for=" p in record.partners" :key="p.name" >
            <div class="card partner " >
              <div class="card-body">
                {{p.name}}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="record.contacts">
        <h2>{{$t('Contact')}}</h2>

        <Entity :entity="record.contacts[0]"/>
      </section>
    </div>

    <section v-if="me && me.isAdmin && record.meta">
      <table class="table table-striped table-sm">
        <tbody>
          <tr >
            <th class="align-middle" scope="row" >{{$t('Status')}} </th>
            <td  class="col-10 p-3">
              {{$t(record.meta.status)}}
            </td>
          </tr>
          <tr >
            <th class="align-middle" scope="row" >{{$t('Created')}} </th>
            <td  class="col-10 p-3">
              {{record.meta.createdOn}}
            </td>
          </tr>
          <tr v-if="record.meta.modifiedOn !== record.meta.createdOn">
            <th class="align-middle" scope="row" >{{$t('Modified')}} </th>
            <td  class="col-10 p-3">
              {{record.meta.modifiedOn}}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>

<script>

import   Icons, { Icon } from '@action-agenda/icons'
import   getOptions      from './default-options'
import { getAction  }    from './components/api'
import   Entity          from './components/Entity.vue'
import   TagView         from './components/TagView.vue'
import   i18n            from './locales/index.js'

export default {
  name : 'AAView',
  // #region snippet
  props: {
    identifier: { type: String, required: false },
    options   : { type: Object, required: false },
    forceEnv  : { type: String, required: false }
  },
  // #endregion snippet
  components: { Icons, Icon, Entity, TagView },
  computed  : { hasDetails, opts },
  mounted,
  data,
  i18n
}

function data(){
  return {
    record: {}
  }
}

async function mounted(){
  this.record = await getAction(this.opts, this.identifier) || { action: { name: this.$t('404 Action not found') } }

  window.document.addEventListener('$me', async() => {
    if(!this.me || !this.me.isAuthenticated) return

    this.record = await getAction(this.opts, this.identifier) || { action: { name: this.$t('404 Action not found') } }
  })
}

function opts (){ return { ...getOptions(this.options, this.forceEnv), getToken: () => this.auth.token } }

function hasDetails(){
  const { aichiTargets, sdgs, linkagesDescription, progressMeasured } = this.actionDetails

  return  (aichiTargets || sdgs || linkagesDescription || progressMeasured)
}

</script>

<style scoped>
  @import url('https://cdn.cbd.int/@action-agenda/icons/dist/esm/index.min.css');
  .card { margin-bottom:2em; }
  .partner { background-color: rgba(0,0,0,.02); }
  .desc { white-space: pre-wrap; }
  .icon { margin-right: 1em; height: 24px; width: 24px; }
  .item { margin-left:3em; }
  .item span { margin-left:-3em; }
  .item span:first-line { margin-left:0; }
</style>
