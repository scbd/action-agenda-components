export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Language.mjs',
  $source             : 'https://schema.org/Language',
  title               : 'Language',
  description         : 'Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in <a href="https://en.wikipedia.org/wiki/IETF_language_tag">BCP 47</a> can be used via the <a class="localLink" href="https://schema.org/alternateName">alternateName</a> property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using <a class="localLink" href="https://schema.org/ComputerLanguage">ComputerLanguage</a>.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs' } ],
  properties          : {
    '@type': { const: 'Language', default: 'Language' }
  }
}