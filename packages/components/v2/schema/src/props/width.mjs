export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/width.mjs',
  $source    : 'https://schema.org/width',
  name       : 'width',
  title      : 'width',
  description: 'The width of the item.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/Distance.mjs' }, { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/QuantitativeValue.mjs' } ]
  
}
