export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/ImageObject.mjs',
  $source             : 'https://schema.org/ImageObject',
  title               : 'ImageObject',
  description         : 'An image file.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/MediaObject.mjs' } ],
  properties          : {
    '@type'    : { const: 'ImageObject', default: 'ImageObject' },
    thumbnail  : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/thumbnail.mjs' },
    caption    : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/caption.mjs' },
    contentSize: { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/contentSize.mjs' },
    width      : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/width.mjs' },
    uploadDate : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/uploadDate.mjs' },
    height     : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/height.mjs' },
    contentUrl : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/contentUrl.mjs' }
  }
}