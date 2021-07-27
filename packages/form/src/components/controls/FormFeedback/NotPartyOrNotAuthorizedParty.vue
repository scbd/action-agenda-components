<template>
  <div class="alert alert-info" v-if="!me.isGov">
    <p><strong>In order to submit an Action as a party to the Convention on Biological Diversity, you must be:</strong></p>
    <p class='party-auth'>
      <ol>
        <!-- ${window.location.href} -->
        <li>Be logged in with with you SCBD account from <a :href="`${$accountsBaseUrl}/signin?returnUrl=`" >accounts.cbd.int</a>, and;</li>
        <li>Be the <a href="https://www.cbd.int/information/nfp.shtml" target="_blank">National Focal Point</a> with the CHM Publishing Authority role given to your account or;</li>  
        <li>Have been granted the CHM National Authorized user role directly by your <a href="https://www.cbd.int/information/nfp.shtml" target="_blank">National Focal Point</a> within the <a href="https://chm.cbd.int" target="_blank">chm.cbd.int</a></li>    
      </ol>
    </p>
  </div>
</template> 

<script>
  export default {
    name: 'NotPartyOrNotAuthorizedParty'
  }
</script>
