export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/inLanguage.mjs',
  $source    : 'https://schema.org/inLanguage',
  name       : 'inLanguage',
  title      : 'inLanguage',
  description: 'The language of the content or performance or used in an action. Please use one of the language codes from the <a href="http://tools.ietf.org/html/bcp47">IETF BCP 47 standard</a>. See also <a class="localLink" href="https://schema.org/availableLanguage">availableLanguage</a>.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Language.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs' } ]
  
}
