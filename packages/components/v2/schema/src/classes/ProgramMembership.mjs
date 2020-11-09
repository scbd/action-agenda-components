export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/ProgramMembership.mjs',
  $source             : 'https://schema.org/ProgramMembership',
  title               : 'ProgramMembership',
  description         : 'Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs' } ],
  properties          : {
    '@type'            : { const: 'ProgramMembership', default: 'ProgramMembership' },
    member             : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/member.mjs' },
    hostingOrganization: { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/hostingOrganization.mjs' },
    programName        : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/programName.mjs' }
  }
}