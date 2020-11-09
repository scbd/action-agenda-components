export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/sponsor.mjs',
  $source    : 'https://schema.org/sponsor',
  name       : 'sponsor',
  title      : 'sponsor',
  description: 'A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Person.mjs' } ]
  
}
