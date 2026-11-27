export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/thumbnail.mjs',
  $source    : 'https://schema.org/thumbnail',
  name       : 'thumbnail',
  title      : 'thumbnail',
  description: 'Thumbnail image for an image or video.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/ImageObject.mjs' } ]
  
}
