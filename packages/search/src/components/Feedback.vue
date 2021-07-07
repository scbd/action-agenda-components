
<template >
  <section  class="feedback mb-3">
    <hr class="my-0"/>
    <div class="container-fluid">
      <div class="row" style="min-height: 3em;">
        <div class="col-4 px-1 my-auto">
          {{total}} {{$t('results')}}
        </div>
        <div class="col-4">
          <Loading v-show="loading"/>
        </div>
        <div class="col-4 px-1 my-auto text-right">
          <span v-if="totalPages && totalPages>1" class="text-nowrap"><span class="d-none d-sm-inline">{{$t('page')}}: </span><span v-if="page>1">1 -</span> {{page}} of {{totalPages}}</span>
        </div>
      </div>
    </div>
    <hr class="my-0"/>
  </section>
</template>
<script>
import Loading from './Loading.vue'
import i18n from '../locales/index.js'

export default {
  name      : 'Feedback',
  components: { Loading },
  props     : {
    total     : { type: Number, required: true },
    page      : { type: Number, required: true },
    totalPages: { type: Number, required: true },
    loading   : { type: Boolean, required: true }
  },
  i18n
}
</script>
<style scoped>
  .feedback{ background-color: whitesmoke; }
</style>