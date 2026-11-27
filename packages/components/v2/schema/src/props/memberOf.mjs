export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/memberOf.mjs',
  $source    : 'https://schema.org/memberOf',
  name       : 'memberOf',
  title      : 'memberOf',
  description: 'An Organization (or ProgramMembership) to which this Person or Organization belongs.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/ProgramMembership.mjs' }, { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/Organization.mjs' } ]
  
}
