export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/logo.mjs',
  $source    : 'https://schema.org/logo',
  name       : 'logo',
  title      : 'logo',
  description: 'An associated logo.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/URL.mjs' }, { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/ImageObject.mjs' } ]
  
}
