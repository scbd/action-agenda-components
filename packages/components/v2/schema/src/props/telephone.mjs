export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/telephone.mjs',
  $source    : 'https://schema.org/telephone',
  name       : 'telephone',
  title      : 'telephone',
  description: 'The telephone number.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs' } ]
  
}
