export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs',
  $source             : 'https://schema.org/Intangible',
  title               : 'Intangible',
  description         : 'A utility class that serves as the umbrella for a number of \'intangible\' things such as quantities, structured values, etc.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs' } ],
  properties          : {
    '@type': { const: 'Intangible', default: 'Intangible' }
  }
}