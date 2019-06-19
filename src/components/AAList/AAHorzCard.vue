<template>
  <div class="card card-row mb-5">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item" v-on:click="changeTab(1)">
          <a class="nav-link" :class="{active:isActiveTab(1)}"   >Action</a>
        </li>
        <li class="nav-item"  v-on:click="changeTab(2)">
          <a class="nav-link" :class="{active:isActiveTab(2)}"> Submitter</a>
        </li>
                     
      </ul>
      <AAState v-if="$isAdmin" :meta="meta"/>
    </div>

    <AAHorzCardAction 
      v-bind="getActionObject()"
      v-if="isActiveTab(1)"
    />

    <AAEntityView
      :entity="organizer"
      v-if="isActiveTab(2)"
    />
   
    
    <div class="card-footer">
      <div class="btn-group" role="group" aria-label="Card actions, view, edit publish, reject">
        <button v-on:click="go(_id)" type="button" class="btn btn-primary btn-sm">View Action</button>
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
import AAHorzCardAction from './AAHorzCardAction'
import AAEntityView     from '../AAView/AAEntityView'
import AAState          from './AAState'
import AAListMixin      from '../../modules/AAListMixin'
import axios            from 'axios'

export default {
  name: "AAHorzCard",
  mixins: [AAListMixin],
  components:{AAHorzCardAction,AAEntityView,AAState },
  props: {
    _id:{
      type:String,
      required:true,
    },
    organizer:{
      type:Object,
      required:true,
    },  
    name:{
      type:Object,
      required:true
    },
    description:{
      type:Object,
      required:true
    },
    meta:{
      type:Object
    },
    
  },
  data() {
    return {
      activeTab:1
    }
  },
  computed:{
    status
  },
  methods:{
    changeTab,
    isActiveTab,
    getMainEntityObject,
    getActionObject,
    getStatusUrl,
    changeStatus,
    go
  },
  filters:{dateFormat}
}



function dateFormat (date) {
    let d = new Date(date)
    return `${d.getUTCDate()} ${getMonth(d.getUTCMonth())} ${d.getUTCFullYear()}`
  }

function status(){
  return this.meta.status
}

function getMainEntityObject () {
  const  { name,type,image,abbreviation,website } = this.organization
  return { name,type,image,abbreviation,website }
}

function getActionObject () {

  return { name:this.name, description:this.description, image:this.image }
}

function changeTab(tab){
  this.activeTab=tab
}

function isActiveTab(tab){
  return this.activeTab===tab
}
function getStatusUrl (id, status)  {

  return `${this.$apiBaseUrl}/v2019/actions/${id}/status/${status}`
}

async function changeStatus(_id,status){
  try {
        let options = this.getOptions()
        let apiUrl  = this.getStatusUrl (_id, status)

        let result =(await axios.post(apiUrl,{},options)).data

        this.$emit('status-change',{_id,status})

        return result
  } catch (error) {
      console.error('AAListMixin.changeStatus',error)
  }
}

function go(_id){
  window.location.href = `https://www.cbd.int/action-agenda/contributions/action/?action-id=${_id}`
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .card-row {
  margin-bottom: 1em;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}
.nav-link {
  font-size: 16px;
  line-height: 24px;
}

.nav-link,
.nav-link:hover {
  color: #007bff;
}
.debug {
  border: red solid 1px;
} */
.nav-item{
  cursor:pointer;
}
</style>
