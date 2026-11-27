export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/url.mjs',
  $source    : 'http://schema.org/url',
  title      : 'url',
  description: 'URL of the item.',
  oneOf      : [ {
    $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/URL.mjs'
  } ]
}