export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/actionStatus.mjs',
  $source    : 'https://schema.org/actionStatus',
  name       : 'actionStatus',
  title      : 'actionStatus',
  description: 'Indicates the current disposition of the Action.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/enumClasses/ActionStatusType.mjs' } ]
  
}
