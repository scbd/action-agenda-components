export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/programName.mjs',
  $source    : 'https://schema.org/programName',
  name       : 'programName',
  title      : 'programName',
  description: 'The program providing the membership.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs' } ]
  
}
