export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/location.mjs',
  $source    : 'https://schema.org/location',
  name       : 'location',
  title      : 'location',
  description: 'The location of for example where the event is happening, an organization is located, or where an action takes place.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Place.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/PostalAddress.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/VirtualLocation.mjs' } ]
  
}
