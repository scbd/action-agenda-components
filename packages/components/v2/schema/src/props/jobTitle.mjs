export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/jobTitle.mjs',
  $source    : 'https://schema.org/jobTitle',
  name       : 'jobTitle',
  title      : 'jobTitle',
  description: 'The job title of the person (for example, Financial Manager).',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/DefinedTerm.mjs' } ]
  
}
