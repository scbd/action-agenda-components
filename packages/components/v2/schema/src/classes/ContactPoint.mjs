export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/ContactPoint.mjs',
  $source             : 'https://schema.org/ContactPoint',
  title               : 'ContactPoint',
  description         : 'A contact point&#x2014;for example, a Customer Complaints department.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/StructuredValue.mjs' } ],
  properties          : {
    '@type'          : { const: 'ContactPoint', default: 'ContactPoint' },
    availableLanguage: { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/availableLanguage.mjs' },
    telephone        : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/telephone.mjs' },
    email            : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/email.mjs' },
    contactType      : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/contactType.mjs' }
  }
}