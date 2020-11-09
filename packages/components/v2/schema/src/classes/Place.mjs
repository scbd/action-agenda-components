export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Place.mjs',
  $source             : 'https://schema.org/Place',
  title               : 'Place',
  description         : 'Entities that have a somewhat fixed, physical extension.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs' } ],
  properties          : {
    '@type': { const: 'Place', default: 'Place' }
  }
}