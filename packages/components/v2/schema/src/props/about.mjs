export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/about.mjs',
  $source    : 'https://schema.org/about',
  name       : 'about',
  title      : 'about',
  description: 'The subject matter of the content.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/Thing.mjs' } ]
  
}
