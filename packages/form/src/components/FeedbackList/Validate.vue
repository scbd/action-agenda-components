

<template>
  <div class="alert alert-warning alert-dismissible">
      <h5>  {{$t('Form is not valid')}} </h5>
      <div> 
          <pre>{{this.error.response.data.errors}}</pre>
      </div>
          <button v-on:click="del()" type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true"> &times; </span>
      </button>
  </div>  
</template>

<script>
  import mixin from './FeedbackMixin.js'
  import i18n from '../../locales/index.js'

  export default {
    name    : 'Validate',
    mixins  : [ mixin ], i18n
  }
</script>