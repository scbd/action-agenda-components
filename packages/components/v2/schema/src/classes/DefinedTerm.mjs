export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/DefinedTerm.mjs',
  $source             : 'https://schema.org/DefinedTerm',
  title               : 'DefinedTerm',
  description         : 'A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs' } ],
  properties          : {
    '@type': { const: 'DefinedTerm', default: 'DefinedTerm' }
  }
}