export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/thumbnail.mjs',
  $source    : 'https://schema.org/thumbnail',
  name       : 'thumbnail',
  title      : 'thumbnail',
  description: 'Thumbnail image for an image or video.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/ImageObject.mjs' } ]
  
}
