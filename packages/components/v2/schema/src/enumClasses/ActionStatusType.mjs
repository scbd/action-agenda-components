export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/enumClasses/ActionStatusType.mjs',
  $source    : 'https://schema.org/ActionStatusType',
  title      : 'ActionStatusType',
  description: 'The status of an Action.',
  type       : 'string',
  anyOf      : [
    { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/enumMembers/FailedActionStatus.mjs' },
    { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/enumMembers/CompletedActionStatus.mjs' },
    { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/enumMembers/ActiveActionStatus.mjs' },
    { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/enumMembers/PotentialActionStatus.mjs' }
  ]
}