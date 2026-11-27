export default {
  $id                 : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/PostalAddress.mjs',
  $source             : 'https://schema.org/PostalAddress',
  title               : 'PostalAddress',
  description         : 'The mailing address.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/ContactPoint.mjs' } ],
  properties          : {
    '@type': { const: 'PostalAddress', default: 'PostalAddress' }
  }
}