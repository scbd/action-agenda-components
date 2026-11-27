export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/nationality.mjs',
  $source    : 'https://schema.org/nationality',
  name       : 'nationality',
  title      : 'nationality',
  description: 'Nationality of the person.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/Country.mjs' } ]
  
}
