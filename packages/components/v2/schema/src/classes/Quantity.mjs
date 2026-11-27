export default {
  $id                 : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/Quantity.mjs',
  $source             : 'https://schema.org/Quantity',
  title               : 'Quantity',
  description         : 'Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like \'3 Kg\' or \'4 milligrams\'.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/Intangible.mjs' } ],
  properties          : {
    '@type': { const: 'Quantity', default: 'Quantity' }
  }
}