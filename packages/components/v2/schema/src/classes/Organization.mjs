export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs',
  $source             : 'https://schema.org/Organization',
  title               : 'Organization',
  description         : 'An organization such as a school, NGO, corporation, club, etc.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs' } ],
  properties          : {
    '@type': { const: 'Organization', default: 'Organization' },
    member : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/member.mjs' },
    logo   : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/logo.mjs' }
  }
}