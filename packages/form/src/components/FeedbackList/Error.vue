
<template >
    <div class="alert alert-danger alert-dismissible" >
      <h5>  {{ name }} </h5>
      <div> <pre>{{ description }} </pre></div>
      <button v-on:click="del()" type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true"> &times; </span>
      </button>
    </div>  
</template>

<script>
  import mixin from './FeedbackMixin.js'
  import i18n from '../../locales/index.js'
  
  export default {
    name    : 'Error',
    mixins  : [ mixin ],
    i18n
  }
</script>

