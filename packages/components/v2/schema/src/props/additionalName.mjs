export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/additionalName.mjs',
  $source    : 'https://schema.org/additionalName',
  name       : 'additionalName',
  title      : 'additionalName',
  description: 'An additional name for a Person, can be used for a middle name.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs' } ]
  
}
