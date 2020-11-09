export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/memberOf.mjs',
  $source    : 'https://schema.org/memberOf',
  name       : 'memberOf',
  title      : 'memberOf',
  description: 'An Organization (or ProgramMembership) to which this Person or Organization belongs.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/ProgramMembership.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs' } ]
  
}
