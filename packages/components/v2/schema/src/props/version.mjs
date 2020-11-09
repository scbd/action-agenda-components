export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/version.mjs',
  $source    : 'https://schema.org/version',
  name       : 'version',
  title      : 'version',
  description: 'The version of the CreativeWork embodied by a specified resource.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Number.mjs' } ]
  
}
