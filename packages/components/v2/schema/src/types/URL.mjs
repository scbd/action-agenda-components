export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs',
  $source    : 'http://schema.org/URL',
  title      : 'URL',
  description: 'Data type: URL.',
  format     : 'uri',
  maxLength  : 2083,
  minLength  : 4,
  allOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs'
  } ]
}