export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/contentUrl.mjs',
  $source    : 'https://schema.org/contentUrl',
  name       : 'contentUrl',
  title      : 'contentUrl',
  description: 'Actual bytes of the media object, for example the image file or video file.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs' } ]
  
}
