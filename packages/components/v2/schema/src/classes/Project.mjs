export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Project.mjs',
  $source             : 'https://schema.org/Project',
  title               : 'Project',
  description         : 'An enterprise (potentially individual but typically collaborative), planned to achieve a particular aim.Use properties from <a class="localLink" href="https://schema.org/Organization">Organization</a>, <a class="localLink" href="https://schema.org/subOrganization">subOrganization</a>/<a class="localLink" href="https://schema.org/parentOrganization">parentOrganization</a> to indicate project sub-structures.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs' } ],
  properties          : {
    '@type'     : { const: 'Project', default: 'Project' },
    member      : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/member.mjs' },
    sponsor     : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/sponsor.mjs' },
    location    : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/location.mjs' },
    memberOf    : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/memberOf.mjs' },
    logo        : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/logo.mjs' },
    contactPoint: { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/contactPoint.mjs' }
  }
}