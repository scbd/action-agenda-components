export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/familyName.mjs',
  $source    : 'https://schema.org/familyName',
  name       : 'familyName',
  title      : 'familyName',
  description: 'Family name. In the U.S., the last name of a Person.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Text.mjs' } ]
  
}
