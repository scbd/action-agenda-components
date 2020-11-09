export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/caption.mjs',
  $source    : 'https://schema.org/caption',
  name       : 'caption',
  title      : 'caption',
  description: 'The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the <a class="localLink" href="https://schema.org/encodingFormat">encodingFormat</a>.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/MediaObject.mjs' } ]
  
}
