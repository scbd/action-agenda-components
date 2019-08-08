<template >
  <component :is="feedBackType" :error="error" :index="index" @deleteFeedback="deleteFeedback"> </component>
</template>

<script>

  export default {
    name      : 'Feedback',
    props     : ['error', 'index'],
    components: { 
                  Error   : ()=>import('./Error'),
                  Validate: ()=>import('./Validate'),
                },
    methods   : { deleteFeedback },
    computed  : { feedBackType } 
  }

  function feedBackType () {

    if(!isHttp(this.error)) return 'Error'

    let { statusCode } = isHttp(this.error)

    if( statusCode===400 )
      return 'Validate'
      
    return 'Error'
  }

  function isHttp (e) {
    if(!e.response) return false
    let { code, statusCode, errors } = e.response.data
    return { code, statusCode, errors }
  }

  function deleteFeedback(data) { this.$emit('deleteFeedback', data) }
  
</script>
