<template >
  <div class="container-fluid" >
    <Feedback v-for="(e,key) in error" v-bind:key="key" :error="e" :index="key" @deleteFeedback="deleteFeedback"/>

    <slot />
    
    <div v-if="hasSlot">
      <Feedback  v-for="(e,key) in error" v-bind:key="key+100" :error="e" :index="key" @deleteFeedback="deleteFeedback"/>
    </div>
  </div>
</template>

<script>
  import Feedback from './Feedback'

  export default {
    name      : 'FeedbackList',
    props     : ['error','hasSlot'],
    components: { Feedback },
    methods   : { deleteFeedback },
    computed  : { feedBackType } 
  }

  function feedBackType () {
    
  }

  function deleteFeedback(data) { this.$emit('deleteFeedback', data) }
  
</script>
