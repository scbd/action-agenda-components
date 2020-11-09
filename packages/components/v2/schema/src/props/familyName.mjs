export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/familyName.mjs',
  $source    : 'https://schema.org/familyName',
  name       : 'familyName',
  title      : 'familyName',
  description: 'Family name. In the U.S., the last name of a Person.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs' } ]
  
}
