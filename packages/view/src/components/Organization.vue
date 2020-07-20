<i18n src="../locales/index.json"></i18n>

<template>
  <div class="card my-3">
    <div class="card-body">

      <div class="card-title">
        <div v-if="image" class="text-center"><img class="img-fluid" :src="image.url" /></div>
        <h3 class="text-center">{{name}} </h3>
      </div>

      <div class="card-text">
        <table class="table table-striped table-dark table-sm">
          <tbody>
            <tr v-if="url">
              <th class="align-middle" scope="row" >{{$t('Website')}}: </th>
              <td  class="col-10 p-3">
                <a v-if="hasProtocol" :href="url" >{{url}}</a>
                <span v-if="!hasProtocol">{{url}}</span>
              </td>
            </tr>
            <tr v-if="country">
              <th class="align-middle" scope="row" >{{$t('Country')}}: </th>
              <td class="col-10 p-3">
                <a :href="country.url">
                  <img class="mb-1" :src="country.image" />
                  <p class="a-link">{{country.name}}</p>
                </a>
              </td>
            </tr>
            <tr v-if="actorType">
              <th class="align-middle text-nowrap" scope="row" >{{$t('Actor Type')}}: </th>
              <td class="col-10 p-3 ">
                {{$t(actorType)}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="card-text">
        <span class="badge badge-pill badge-dark mx-1" v-for="(t,index) in types"  v-bind:key="index"> {{t.name}} </span> &nbsp;
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name : 'OrganizationView',
  props: {
    name     : { type: String, required: true },
    types    : { type: [ Array, Object ], required: true },
    image    : { type: Object },
    url      : { type: String, required: false },
    country  : { type: Object, required: true },
    actorType: { type: String }
  },
  computed: { hasProtocol }

}

function hasProtocol(){ return (this.url || '').includes('http') }
</script>

<style scoped>
  .entity-badge{ position: absolute; top: 0; left: 0; border-top-left-radius: 0; }
  a {color: azure !important; text-decoration: underline;}
  .a-link {color: azure !important; text-decoration: underline;}
  td { color: azure !important;}
  th { color: azure !important;}
</style>
