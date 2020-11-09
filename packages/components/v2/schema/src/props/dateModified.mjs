export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/dateModified.mjs',
  $source    : 'https://schema.org/dateModified',
  name       : 'dateModified',
  title      : 'dateModified',
  description: 'The date on which the CreativeWork was most recently modified or when the item\'s entry was modified within a DataFeed.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/DateTime.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Date.mjs' } ]
  
}
