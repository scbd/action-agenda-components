export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/MediaObject.mjs',
  $source             : 'https://schema.org/MediaObject',
  title               : 'MediaObject',
  description         : 'A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject\'s).',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/CreativeWork.mjs' } ],
  properties          : {
    '@type': { const: 'MediaObject', default: 'MediaObject' }
  }
}