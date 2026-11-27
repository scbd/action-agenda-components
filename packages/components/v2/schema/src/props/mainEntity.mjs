export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/mainEntity.mjs',
  $source    : 'https://schema.org/mainEntity',
  name       : 'mainEntity',
  title      : 'mainEntity',
  description: 'Indicates the primary entity described in some page or other CreativeWork.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/Thing.mjs' } ]
  
}
