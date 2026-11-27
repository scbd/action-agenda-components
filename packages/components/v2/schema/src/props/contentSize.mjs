export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/contentSize.mjs',
  $source    : 'https://schema.org/contentSize',
  name       : 'contentSize',
  title      : 'contentSize',
  description: 'File size in (mega/kilo) bytes.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Text.mjs' } ]
  
}
