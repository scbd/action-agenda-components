<template>
  <iframe 
          style = "display:none;"
          ref   = "authFrame"
          :src  = "`${$accountsBaseUrl}/app/authorize.html`">
  </iframe>
</template>

<script>
  export default {
    name: 'AuthIFrame',
    mounted
  }

  function mounted(){
    if (!this.$isServer) window.addEventListener('message', this.receivePostMessage)
      
    if(!this.$refs || !this.$refs.authFrame) return false

    this.$refs.authFrame.onload = () => {
      let msg = JSON.stringify({ type : 'getAuthenticationToken' })
      this.$refs.authFrame.contentWindow.postMessage(msg, this.$accountsBaseUrl)
      this.$setLoaded(true)
    }
  }
</script>
