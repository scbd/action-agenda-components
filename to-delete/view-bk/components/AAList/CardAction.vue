<template>
  <div class="container-fluid" >
    <div class="row no-gutters">
      <div class="col-sm-12" >
        <div class="card-body">
          <h5 class="card-title">{{nameComp}}</h5>
          <p class="card-text desc"> {{descriptionComp}} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const changeCase = require('change-case')
  export default {
    name: 'CardAction',
    props: {
      name       : { type: Object, required: true }, 
      description: { type: Object, required: true }
    },
    computed:{nameComp,descriptionComp}
  }

  function nameComp(){
    return changeCase.title(this.name[process.env.VUE_APP_I18N_LOCALE])
  }
  function descriptionComp(){
    return this.description[process.env.VUE_APP_I18N_LOCALE]
  }
</script>

<style scoped>
  .action-img{ max-height: 250px; }
  .desc{ white-space: pre-wrap;  }
</style>
