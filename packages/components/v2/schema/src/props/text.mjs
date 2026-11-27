export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/text.mjs',
  $source    : 'https://schema.org/text',
  name       : 'text',
  title      : 'text',
  description: 'The textual content of this CreativeWork.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Text.mjs' } ]
  
}
