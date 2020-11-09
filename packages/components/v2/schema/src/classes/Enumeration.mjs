export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Enumeration.mjs',
  $source             : 'https://schema.org/Enumeration',
  title               : 'Enumeration',
  description         : 'Lists or enumerations—for example, a list of cuisines or music genres, etc.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs' } ],
  properties          : {
    '@type': { const: 'Enumeration', default: 'Enumeration' }
  }
}