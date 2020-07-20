<i18n src="../locales/index.json"></i18n>
<template>
  <div class="card my-3">
    <div class="card-body">

    <div class="card-title">
      <div v-if="image" class="text-center"><img class="img-fluid" :src="image.url" /></div>
      <h3 class="text-center">{{salutation}} {{firstName}} {{middleName}} {{lastName}} {{suffix}}</h3>
    </div>

    <div class="card-text">
      <table class="table table-striped table-dark table-sm">
        <tbody>
        <tr v-if="department">
          <th class="align-middle" scope="row" >{{$t('Department')}}: </th>
          <td  class="col-10 p-3">
            {{department}}
          </td>
        </tr>
        <tr v-if="email">
          <th class="align-middle" scope="row" >{{$t('Email')}}: </th>
          <td  class="col-10 p-3">
            <a :href="`mailto:${email}`">{{email}}</a>
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
        <tr v-if="phone">
          <th class="align-middle" scope="row" >{{$t('Phone')}}: </th>
          <td class="col-10 p-3">
            {{phone}}
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

    </div>
  </div>
</template>

<script>

export default {
  name : 'PersonView',
  props: {
    suffix    : { type: String },
    salutation: { type: String },
    firstName : { type: String },
    middleName: { type: String },
    lastName  : { type: String, required: true },
    department: { type: String },
    country   : { type: Object },
    phone     : { type: String },
    email     : { type: String, required: true },
    image     : { type: String },
    actorType : { type: String }
  }
}
</script>

<style scoped>
  .entity-badge{ position: absolute; top: 0; left: 0; border-top-left-radius: 0; }
  a {color: azure !important; text-decoration: underline;}
  td { color: azure !important;}
  th { color: azure !important;}
  .a-link {color: azure !important; text-decoration: underline;}
</style>