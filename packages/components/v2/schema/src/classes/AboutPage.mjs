export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/AboutPage.mjs',
  $source             : 'https://schema.org/AboutPage',
  title               : 'AboutPage',
  description         : 'Web page type: About page.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/WebPage.mjs' } ],
  properties          : {
    '@type'           : { const: 'AboutPage', default: 'AboutPage' },
    relatedLink       : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/relatedLink.mjs' },
    primaryImageOfPage: { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/primaryImageOfPage.mjs' },
    lastReviewed      : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/lastReviewed.mjs' },
    spatialCoverage   : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/spatialCoverage.mjs' },
    editor            : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/editor.mjs' },
    about             : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/about.mjs' },
    text              : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/text.mjs' },
    dateCreated       : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/dateCreated.mjs' },
    isFamilyFriendly  : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/isFamilyFriendly.mjs' },
    mainEntity        : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/mainEntity.mjs' },
    version           : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/version.mjs' },
    dateModified      : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/dateModified.mjs' },
    author            : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/author.mjs' },
    inLanguage        : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/inLanguage.mjs' }
  }
}