export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/telephone.mjs',
  $source    : 'https://schema.org/telephone',
  name       : 'telephone',
  title      : 'telephone',
  description: 'The telephone number.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Text.mjs' } ]
  
}
