export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/availableLanguage.mjs',
  $source    : 'https://schema.org/availableLanguage',
  name       : 'availableLanguage',
  title      : 'availableLanguage',
  description: 'A language someone may use with or at the item, service or place. Please use one of the language codes from the <a href="http://tools.ietf.org/html/bcp47">IETF BCP 47 standard</a>. See also <a class="localLink" href="https://schema.org/inLanguage">inLanguage</a>',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Language.mjs' } ]
  
}
