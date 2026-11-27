export default {
  $id                 : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/StatusEnumeration.mjs',
  $source             : 'https://schema.org/StatusEnumeration',
  title               : 'StatusEnumeration',
  description         : 'Lists or enumerations dealing with status types.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/Enumeration.mjs' } ],
  properties          : {
    '@type': { const: 'StatusEnumeration', default: 'StatusEnumeration' }
  }
}