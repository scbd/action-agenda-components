export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/givenName.mjs',
  $source    : 'https://schema.org/givenName',
  name       : 'givenName',
  title      : 'givenName',
  description: 'Given name. In the U.S., the first name of a Person.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Text.mjs' } ]
  
}
