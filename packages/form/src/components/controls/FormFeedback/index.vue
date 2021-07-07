<template >
  <div class="container-fluid" >
    <PublishRequest v-if="publishRequested"/>

    <NotPartyOrNotAuthorizedParty v-if="actorType==='party'"/>
    <!-- actorType==='party' &&  -->
    <Validate  v-if="error.statusCode" :error="error"/>
    <slot v-if="!publishRequested"></slot>
    <Validate  v-if="error.statusCode" :error="error"/>
  </div>
</template>

<script>
  import Validate       from './Validate.vue'
  import PublishRequest from './PublishRequest.vue'
  import NotPartyOrNotAuthorizedParty from './NotPartyOrNotAuthorizedParty.vue'

  export default { 
    name: 'FormFeedback',
    props:['error', 'actorType', 'publishRequested'],
    components: { Validate, PublishRequest, NotPartyOrNotAuthorizedParty },
  }
</script>
