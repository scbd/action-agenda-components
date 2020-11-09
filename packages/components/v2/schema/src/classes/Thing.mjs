export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs',
  $source             : 'http://schema.org/Thing',
  title               : 'Thing',
  description         : 'The most generic type of item.',
  type                : 'object',
  additionalProperties: false,
  properties          : {
    _id: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/_id.mjs'
    },
    '@context': {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/context.mjs'
    },
    '@type': {
      const  : 'Thing',
      default: 'Thing'
    },
    identifier: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/identifier.mjs'
    },
    name: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/name.mjs'
    },
    alternateName: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/alternateName.mjs'
    },
    description: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/description.mjs'
    },
    url: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/url.mjs'
    },
    sameAs: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/sameAs.mjs'
    },
    image: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/image.mjs'
    },
    mainEntityOfPage: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/mainEntityOfPage.mjs'
    },
    additionalType: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/additionalType.mjs'
    }
  },
  required: [ 'identifier', 'name' ]
}