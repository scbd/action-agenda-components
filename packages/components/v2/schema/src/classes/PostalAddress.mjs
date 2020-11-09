export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/PostalAddress.mjs',
  $source             : 'https://schema.org/PostalAddress',
  title               : 'PostalAddress',
  description         : 'The mailing address.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/ContactPoint.mjs' } ],
  properties          : {
    '@type': { const: 'PostalAddress', default: 'PostalAddress' }
  }
}