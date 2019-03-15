<template>
  <div class="container-fluid">
    <section v-if="action">
    <h1>{{action.name |lStringFilter}}</h1>

    <div class="card">
      <div class="card-body p-5">
        <div class="row">
          <div class="col-12">
            <p class="desc"> {{action.description |lStringFilter}}</p>
          </div>
          <div class="col-6">
            <h6>Operational Area(s)</h6>
            <p v-for="item in getOperationalAreas" v-bind:key="item.name">{{item.name}}</p>
          </div>
          <div class="col-6">
            <h6>Thematic Areas(s)</h6>
            <p v-for="item in getSubjects" v-bind:key="item.name">{{item.name}}</p>
          </div>

        </div>
      </div>
    </div>

    <h2>Submitted By</h2>
    
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <AAEntityView :entity="action.organizer"/>

          </div>
        </div>
      </div>
    </div>

    <section v-if="hasDetails">
      <h2>Details</h2>

      <div class="card">
        <div class="card-body p-5">
          <div class="row">

              <div class="col-6 mb-4" v-if="action.aichiTargets">
                <h6>Linkages to Aichi Biodiversity Targets</h6>
                <div class="item" v-for="item in getAichiTargets" v-bind:key="item.name">
                  <span >
                    <img class="icon align-top" :src="item.img"/> {{item.name}}
                  </span>
                </div>
              </div>
              <div class="col-6 mb-4" v-if="action.sdgs">
                <h6>Linkages to Sustainable Development Goals</h6>
                <div class="item" v-for="item in getSdgs" v-bind:key="item.name">
                  <span >
                    <img class="icon align-top" :src="item.img"/> {{item.name}}
                  </span>
                </div>
              </div>

            <div class="col-12" v-if="lString(action.linkagesDescription)">
              <h6>Linkage(s) description</h6>
              <p class="desc">{{action.linkagesDescription |lStringFilter}}</p>
            </div>
            <div class="col-12" v-if="lString(action.progressMeasured)">
              <h6>Progress tracking</h6>
              <p class="desc">{{action.progressMeasured |lStringFilter}}</p>
              </div>
          </div>
        </div>
      </div>
    </section>
    
    <section v-if="action.partners">
      <h2>Partners</h2>
      <AAEntityList :list="action.partners"/>
    </section>

    <h2>Contacts</h2>
    <AAEntityList  :list="action.contacts"/>
 </section>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import Auth from "../../modules/AuthPlugin"
Vue.use(Auth, { env: process.env.NODE_ENV })
import {lStringFilter} from '../../modules/helpers'
import AAEntityList from './AAEntityList'
import AAEntityView from './AAEntityView'
import LookUp from "../../modules/ScbdCachedApisLookUp"
export default {
  name: "AAView",
  props: ["env"],
  components:{AAEntityView,AAEntityList},
  data() {
    return {
      action: '',
      getSubjects:'',
      getOperationalAreas:'',
      getSdgs:'',
      getAichiTargets:''
    }
  },
  computed:{hasDetails},
  methods: {
    getActionIdFromQuery,
    getBaseApi,
    getAction,
    getOptions,
    lString:lStringFilter
  },
  filters:{lStringFilter},
  async mounted() {
    let id = this.getActionIdFromQuery();
    if (!id) return false;
    await this.getAction(id);
    if (this.$isAuthLoaded && (await this.$isAuthLoaded()))
       await this.getAction(id)

    this.getSubjects = await LookUp.getSubjects(this.action.subjects)
    this.getOperationalAreas = await LookUp.getGeoLocations(this.action.operationalAreas)
    this.getSdgs = await LookUp.getSDGs(this.action.sdgs)
    this.getAichiTargets = await LookUp.getAichis(this.action.aichiTargets)
  }
};

function hasDetails(){
  let action = this.action
  return  ( action.aichiTargets         || 
            action.sdgs                 ||
            action.linkagesDescription  ||
            action.progressMeasured
          )
}
function getActionIdFromQuery() {
  if (this.$isServer) return false;

  let urlParams = new URLSearchParams(location.search);

  return urlParams.get("action-id");
}

async function getAction(id) {
  try {
    let options = this.getOptions();
    let data = await axios.get(
      `${this.getBaseApi()}/v2019/actions/${id}`,
      options
    );

    this.action = data.data;
    return data.data;
  } catch (e) {
    console.error(e);
  }
}

function getOptions() {
  return this.$baseReqOpts || {};
}
function getBaseApi() {
  if (this.env === "dev") return "https://api.cbddev.xyz/api";

  if (this.env === "stg") return "https://api.staging.cbd.int/api";

  return "https://api.cbd.int/api"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  margin-bottom:2em;
}
.icon{
  margin-right: 1em;
  height: 24px;
  width: 24px;
}
.item {margin-left:3em;}
.item span {margin-left:-3em;}
.item span:first-line {margin-left:0;}
.desc{
  white-space: pre-wrap; 
}
</style>
