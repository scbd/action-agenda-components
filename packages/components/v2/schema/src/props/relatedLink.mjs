export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/relatedLink.mjs',
  $source    : 'https://schema.org/relatedLink',
  name       : 'relatedLink',
  title      : 'relatedLink',
  description: 'A link related to this web page, for example to other related web pages.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs' } ]
  
}
