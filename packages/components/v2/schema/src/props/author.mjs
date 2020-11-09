export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/author.mjs',
  $source    : 'https://schema.org/author',
  name       : 'author',
  title      : 'author',
  description: 'The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Person.mjs' } ]
  
}
