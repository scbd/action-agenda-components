export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/height.mjs',
  $source    : 'https://schema.org/height',
  name       : 'height',
  title      : 'height',
  description: 'The height of the item.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/QuantitativeValue.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Distance.mjs' } ]
  
}
