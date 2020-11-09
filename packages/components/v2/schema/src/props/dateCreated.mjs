export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/dateCreated.mjs',
  $source    : 'https://schema.org/dateCreated',
  name       : 'dateCreated',
  title      : 'dateCreated',
  description: 'The date on which the CreativeWork was created or the item was added to a DataFeed.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Date.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/DateTime.mjs' } ]
  
}
