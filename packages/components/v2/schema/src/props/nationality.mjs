export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/nationality.mjs',
  $source    : 'https://schema.org/nationality',
  name       : 'nationality',
  title      : 'nationality',
  description: 'Nationality of the person.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Country.mjs' } ]
  
}
