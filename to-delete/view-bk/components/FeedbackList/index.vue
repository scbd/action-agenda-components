<template >
  <div class="container-fluid" >
    <PublishRequest v-if="publishRequested"/>
    <Feedback v-for="(e,key) in error" v-bind:key="key" :error="e" :index="key" @deleteFeedback="deleteFeedback"/>
    
    <!-- slot is like an agular transclude -->
    <slot />  
    
    <div v-if="hasSlot">
      <Feedback  v-for="(e,key) in error" v-bind:key="key+100" :error="e" :index="key" @deleteFeedback="deleteFeedback"/>
    </div>
  </div>
</template>

<script>
  import Feedback from './Feedback'
  import PublishRequest from './PublishRequest'

  export default {
    name      : 'FeedbackList',
    props     : [ 'error', 'hasSlot', 'publishRequested'],
    components: { Feedback, PublishRequest, },
    methods   : { deleteFeedback }
  }

  function deleteFeedback(data) { this.$emit('deleteFeedback', data) }
</script>
