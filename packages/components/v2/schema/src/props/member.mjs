export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/member.mjs',
  $source    : 'https://schema.org/member',
  name       : 'member',
  title      : 'member',
  description: 'A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Person.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs' } ]
  
}
