<template >
  <section >
    <br/><br/><br/>
    <legend>DEBUG:</legend>
    <div class="card debug">
      <div class="card-body">
        <div class="row">
          <div class="col col-lg-4">
            <legend>form:</legend>
            <pre>{{form}}</pre>
          </div>

          <div class="col col-lg-4">
            <legend>error:</legend>
            <pre>{{error}}</pre>
          </div>

          <div class="col col-lg-4">
            <legend>$me:</legend>
            <pre>{{me}}</pre>
          </div>

          <div class="col col-lg-4">
            <legend>$accountsBaseUrl: {{auth.accountsBaseUrl}}</legend>
            <legend>me.isAuthenticated: {{me.isAuthenticated}}</legend>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<script>


  export default {
    name      : 'DebugForm',
    props: ['form','error']
  }



</script>