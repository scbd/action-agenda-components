export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/CreativeWork.mjs',
  $source             : 'https://schema.org/CreativeWork',
  title               : 'CreativeWork',
  description         : 'The most generic kind of creative work, including books, movies, photographs, software programs, etc.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs' } ],
  properties          : {
    '@type': { const: 'CreativeWork', default: 'CreativeWork' }
  }
}