<template>
  <iframe style="display:none;" ref="authFrame"
          :src="`${$accountsBaseUrl}/app/authorize.html`">
  </iframe>
</template>

<script>
  export default {
    name: 'AuthIFrame',
    mounted(){
      
      if (!this.$isServer)
        window.addEventListener('message', this.receivePostMessage)
        
      if(!this.$refs || !this.$refs.authFrame) return false

      this.$refs.authFrame.onload = () => {
        this.$refs.authFrame.contentWindow.postMessage(JSON.stringify({ type : 'getAuthenticationToken' }), this.$accountsBaseUrl);
      }
    }
  }
</script>
