export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/uploadDate.mjs',
  $source    : 'https://schema.org/uploadDate',
  name       : 'uploadDate',
  title      : 'uploadDate',
  description: 'Date when this media object was uploaded to this site.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Date.mjs' } ]
  
}
