export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/lastReviewed.mjs',
  $source    : 'https://schema.org/lastReviewed',
  name       : 'lastReviewed',
  title      : 'lastReviewed',
  description: 'Date on which the content on this web page was last reviewed for accuracy and/or completeness.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Date.mjs' } ]
  
}
