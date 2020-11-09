export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/contentSize.mjs',
  $source    : 'https://schema.org/contentSize',
  name       : 'contentSize',
  title      : 'contentSize',
  description: 'File size in (mega/kilo) bytes.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs' } ]
  
}
