export default {
  props   : [ 'error', 'index' ],
  methods : { del, getTranslatedFeedback },
  computed: { name, description }
}

function name        (){ return this.getTranslatedFeedback('name') }
function description (){ return this.getTranslatedFeedback('description') }
function del         (){ this.$emit('deleteFeedback', { index: this.index, type: 'error' }) }

function getTranslatedFeedback(propName) {
  let translated =  this.$t(`${this.error.key}.${propName}`)
  if(translated === `${this.error.key}.${propName}`) return this.error.message
  return translated
}