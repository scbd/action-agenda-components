export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/QuantitativeValue.mjs',
  $source             : 'https://schema.org/QuantitativeValue',
  title               : 'QuantitativeValue',
  description         : 'A point value or interval for product characteristics and other purposes.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/StructuredValue.mjs' } ],
  properties          : {
    '@type': { const: 'QuantitativeValue', default: 'QuantitativeValue' }
  }
}