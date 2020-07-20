<i18n src="./locales/index.json"></i18n>

<template>
  <section>
    <Icons/>
    <div class="container-fluid" v-if="action">

        <h1>{{action.name | lStringFilter}}</h1>

        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <p class="desc"> {{action.description |lStringFilter}}</p>
              </div>
              <div class="col-12 mb-3" v-for="item in action.attachments" v-bind:key="item.url">
                <a :href="item.url" target="_blank" rel="noopener"><svg class="icon"><use xlink:href="#icon-file"></use></svg> {{item.name|lStringFilter}} </a>
              </div>
            </div>
          </div>
        </div>

        <h2>{{$t('submittedBy')}}</h2>
        
        <div class="card">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-12">
                <Entity :entity="actor"/>
              </div>
            </div>
          </div>
        </div>



        <section v-if="partners.length && partners[0].name.en">
          <h2>{{$t('partners')}}</h2>
          <div class="row" v-if="partners.length && partners[0].name" >
            <div class="col-12 col-md-4 mb-3" v-for="partner,index in partners" :key="partner.name+index" >
              <div class="card partner" >
                <div class="card-body">
                    {{partner.name |lStringFilter}}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section v-if="contacts">
          <h2>{{$t('contacts')}}</h2>
          <EntityList  :list="contacts"/>
        </section>

        <section v-if="hasDetails">
          <h2>{{$t('details')}}</h2>

          <div class="card">
            <div class="card-body p-5">
              <div class="row">
                  <div class="col-6 mb-4">
                    <h6>{{$t('operationalAreas')}}</h6>
                    <p v-for="item in getOperationalAreas" v-bind:key="item.name">{{item.name}}</p>
                  </div>
                  <div class="col-6 mb-4">
                    <h6>{{$t('thematicAreas')}}</h6>
                    <p v-for="item in getSubjects" v-bind:key="item.name">{{item.name}}</p>
                  </div>
                  <div class="col-6 mb-4" v-if="actionDetails.aichiTargets">
                    <h6>{{$t('aichiTargets')}}</h6>
                    <div class="item" v-for="item in getAichiTargets" v-bind:key="item.name">
                      <span >
                        <img class="icon align-top" :src="item.img"/> {{item.name}}
                      </span>
                    </div>
                  </div>
                  <div class="col-6 mb-4" v-if="actionDetails.sdgs">
                    <h6>{{$t('sdgs')}}</h6>
                    <div class="item" v-for="item in getSdgs" v-bind:key="item.name">
                      <span >
                        <img class="icon align-top" :src="item.img"/> {{item.name}}
                      </span>
                    </div>
                  </div>

                <div class="col-12" v-if="lString(action.progressMeasured)">
                  <h6>{{$t('progress')}}</h6>
                  <p class="desc">{{action.progressMeasured |lStringFilter}}</p>
                  </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  </section>
</template>

<script>
  import Vue          from 'vue'
  import axios        from 'axios'
  import Icons        from '@components/Icons'
  import consola      from 'consola' 
  import Auth         from '@modules/AuthPlugin'
  import LookUp       from '@modules/ScbdCachedApisLookUp'
  import EntityList   from './EntityList'
  import Entity       from './Entity'

  Vue.use(Auth)

  export default {
    name      : 'AAView',
    components: { Icons, Entity, EntityList },
    methods   : { getActionIdFromQuery, getAction, lString:lStringFilter },
    filters   : { lStringFilter },
    computed  : { hasDetails },
    mounted,
    data
  }

  function data() {
    return {
              action             : '',
              actionDetails      : '',
              actor              : '',
              contacts           : '',
              meta               : '',
              partners           : '',
              meta               : '',
              getSubjects        : '',
              getOperationalAreas: '',
              getSdgs            : '',
              getAichiTargets    : ''
            }
  }

  async function mounted() {

    let id = this.getActionIdFromQuery()
    if (!id) return false  //TODO show 404

    await this.getAction(id)

    if (this.$isAuthLoaded && (await this.$isAuthLoaded())) await this.getAction(id)

    //TODO do this async
    this.getSubjects         = await LookUp.getSubjects    (this.actionDetails.thematicAreas        )
    this.getOperationalAreas = await LookUp.getGeoLocations(this.actionDetails.operationalAreas)
    this.getSdgs             = await LookUp.getSDGs        (this.actionDetails.sdgs            )
    this.getAichiTargets     = await LookUp.getAichis      (this.actionDetails.aichiTargets    )

  }

  function lStringFilter(value) {
    //TODO load locale from browser
    let locale = 'en'
    if(!value) return ''

    if(value[locale]) return value[locale]

    return ''
  }

  function hasDetails(){

    let { aichiTargets, sdgs, linkagesDescription, progressMeasured } = this.actionDetails
    return  ( aichiTargets || sdgs || linkagesDescription || progressMeasured )
  }

  function getActionIdFromQuery() {
    if (this.$isServer) return false

    let urlParams = new URLSearchParams(location.search)

    return urlParams.get('action-id')
  }

  async function getAction(id) {
    try {
      let apiUrl = `${process.env.VUE_APP_API}/v2019/actions/${id}`
      let data   = (await axios.get( apiUrl, this.$baseReqOpts )).data 
 
      for (let key in data) this[key] = data[key]
      
      return data
    } 
    catch (e) { consola.error('', e) }
  }

</script>


<style scoped>
  .card { margin-bottom:2em; }
  .partner { background-color: rgba(0,0,0,.02); }
  .desc { white-space: pre-wrap; }
  .icon { margin-right: 1em; height: 24px; width: 24px; }
  .item { margin-left:3em; }
  .item span { margin-left:-3em; }
  .item span:first-line { margin-left:0; }
</style>
