export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/contactType.mjs',
  $source    : 'https://schema.org/contactType',
  name       : 'contactType',
  title      : 'contactType',
  description: 'A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs' } ]
  
}
