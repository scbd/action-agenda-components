export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/StructuredValue.mjs',
  $source             : 'https://schema.org/StructuredValue',
  title               : 'StructuredValue',
  description         : 'Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs' } ],
  properties          : {
    '@type': { const: 'StructuredValue', default: 'StructuredValue' }
  }
}