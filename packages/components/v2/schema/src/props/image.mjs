export default {
  $id            : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/image.mjs',
  $source        : 'http://schema.org/image',
  title          : 'image',
  description    : 'An image of the item. This can be a <a class="localLink" href="https://schema.org/URL">URL</a> or a fully described <a class="localLink" href="https://schema.org/ImageObject">ImageObject</a>.',
  type           : 'array',
  minItems       : 1,
  maxItems       : 100,
  additionalItems: false,
  items          : {
    anyOf: [ {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs'
    }, {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/ImageObject.mjs'
    } ]
  }
}