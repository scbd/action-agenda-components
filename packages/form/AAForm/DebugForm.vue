<template functional>
  <section >
    <br/><br/><br/>
    <legend>DEBUG:</legend>
    <div class="card debug">
      <div class="card-body">
        <div class="row">
          <div class="col col-lg-4">
            <legend>form:</legend>
            <pre>{{props.form}}</pre>
          </div>

          <div class="col col-lg-4">
            <legend>$me:</legend>
            <pre>{{props.$me}}</pre>
          </div>

          <div class="col col-lg-4">
            <legend>$accountsBaseUrl: {{props.$accountsBaseUrl}}</legend>
            <legend>$me.isAuthenticated: {{props.$me.isAuthenticated}}</legend>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>