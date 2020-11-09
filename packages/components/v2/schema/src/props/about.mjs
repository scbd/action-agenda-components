export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/about.mjs',
  $source    : 'https://schema.org/about',
  name       : 'about',
  title      : 'about',
  description: 'The subject matter of the content.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs' } ]
  
}
