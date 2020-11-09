export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/VirtualLocation.mjs',
  $source             : 'https://schema.org/VirtualLocation',
  title               : 'VirtualLocation',
  description         : 'An online or virtual location for attending events. For example, one may attend an online seminar or educational event. While a virtual location may be used as the location of an event, virtual locations should not be confused with physical locations in the real world.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs' } ],
  properties          : {
    '@type': { const: 'VirtualLocation', default: 'VirtualLocation' }
  }
}