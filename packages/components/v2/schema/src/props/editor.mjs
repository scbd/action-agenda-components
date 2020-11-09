export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/editor.mjs',
  $source    : 'https://schema.org/editor',
  name       : 'editor',
  title      : 'editor',
  description: 'Specifies the Person who edited the CreativeWork.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Person.mjs' } ]
  
}
