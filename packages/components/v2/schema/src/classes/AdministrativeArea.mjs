export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/AdministrativeArea.mjs',
  $source             : 'https://schema.org/AdministrativeArea',
  title               : 'AdministrativeArea',
  description         : 'A geographical region, typically under the jurisdiction of a particular government.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Place.mjs' } ],
  properties          : {
    '@type': { const: 'AdministrativeArea', default: 'AdministrativeArea' }
  }
}