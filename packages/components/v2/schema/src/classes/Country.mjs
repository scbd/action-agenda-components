export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Country.mjs',
  $source             : 'https://schema.org/Country',
  title               : 'Country',
  description         : 'A country.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/AdministrativeArea.mjs' } ],
  properties          : {
    '@type': { const: 'Country', default: 'Country' }
  }
}