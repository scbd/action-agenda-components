export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/mainEntity.mjs',
  $source    : 'https://schema.org/mainEntity',
  name       : 'mainEntity',
  title      : 'mainEntity',
  description: 'Indicates the primary entity described in some page or other CreativeWork.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs' } ]
  
}
