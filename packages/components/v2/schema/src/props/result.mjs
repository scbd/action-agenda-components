export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/result.mjs',
  $source    : 'https://schema.org/result',
  name       : 'result',
  title      : 'result',
  description: 'The result produced in the action. e.g. John wrote <em>a book</em>.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs' } ]
  
}
