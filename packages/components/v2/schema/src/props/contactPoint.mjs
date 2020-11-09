export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/contactPoint.mjs',
  $source    : 'https://schema.org/contactPoint',
  name       : 'contactPoint',
  title      : 'contactPoint',
  description: 'A contact point for a person or organization.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/ContactPoint.mjs' } ]
  
}
