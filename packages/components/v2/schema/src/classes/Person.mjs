export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Person.mjs',
  $source             : 'https://schema.org/Person',
  title               : 'Person',
  description         : 'A person (alive, dead, undead, or fictional).',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs' } ],
  properties          : {
    '@type'       : { const: 'Person', default: 'Person' },
    familyName    : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/familyName.mjs' },
    jobTitle      : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/jobTitle.mjs' },
    nationality   : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/nationality.mjs' },
    additionalName: { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/additionalName.mjs' },
    telephone     : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/telephone.mjs' },
    email         : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/email.mjs' },
    givenName     : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/givenName.mjs' }
  }
}