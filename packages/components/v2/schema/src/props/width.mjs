export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/width.mjs',
  $source    : 'https://schema.org/width',
  name       : 'width',
  title      : 'width',
  description: 'The width of the item.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Distance.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/QuantitativeValue.mjs' } ]
  
}
