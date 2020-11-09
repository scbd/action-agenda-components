export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Quantity.mjs',
  $source             : 'https://schema.org/Quantity',
  title               : 'Quantity',
  description         : 'Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like \'3 Kg\' or \'4 milligrams\'.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs' } ],
  properties          : {
    '@type': { const: 'Quantity', default: 'Quantity' }
  }
}