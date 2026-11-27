export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/editor.mjs',
  $source    : 'https://schema.org/editor',
  name       : 'editor',
  title      : 'editor',
  description: 'Specifies the Person who edited the CreativeWork.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/Person.mjs' } ]
  
}
