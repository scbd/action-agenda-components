export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/version.mjs',
  $source    : 'https://schema.org/version',
  name       : 'version',
  title      : 'version',
  description: 'The version of the CreativeWork embodied by a specified resource.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Text.mjs' }, { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Number.mjs' } ]
  
}
