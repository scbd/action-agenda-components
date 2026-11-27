export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/caption.mjs',
  $source    : 'https://schema.org/caption',
  name       : 'caption',
  title      : 'caption',
  description: 'The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the <a class="localLink" href="https://schema.org/encodingFormat">encodingFormat</a>.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Text.mjs' }, { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/MediaObject.mjs' } ]
  
}
