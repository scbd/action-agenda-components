export default {
  props   : [ 'error', 'index' ],
  methods : { del, requestDescriptionText },
  computed: { name, description }
}

function name        (){ return this.$t(this.error.message) }

function del         (){ this.$emit('deleteFeedback', { index: this.index, type: 'error' }) }

function description (){

  if(this.error.config) return this.requestDescriptionText(this.error)

  return this.error.desciprtion? this.$t(this.error.desciprtion) : ''
}

function requestDescriptionText(error){
  const { url, method } = error.config

  return `
  ${this.$t('URL')}   : ${url}
  ${this.$t('Method')}: ${method}
  `
}