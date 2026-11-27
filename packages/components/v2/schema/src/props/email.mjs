export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/email.mjs',
  $source    : 'https://schema.org/email',
  name       : 'email',
  title      : 'email',
  description: 'Email address.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Text.mjs' } ]
  
}
