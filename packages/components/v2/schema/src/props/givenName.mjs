export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/givenName.mjs',
  $source    : 'https://schema.org/givenName',
  name       : 'givenName',
  title      : 'givenName',
  description: 'Given name. In the U.S., the first name of a Person.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs' } ]
  
}
