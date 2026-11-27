export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/actionStatus.mjs',
  $source    : 'https://schema.org/actionStatus',
  name       : 'actionStatus',
  title      : 'actionStatus',
  description: 'Indicates the current disposition of the Action.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/enumClasses/ActionStatusType.mjs' } ]
  
}
