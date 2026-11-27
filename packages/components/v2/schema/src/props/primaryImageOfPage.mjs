export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/primaryImageOfPage.mjs',
  $source    : 'https://schema.org/primaryImageOfPage',
  name       : 'primaryImageOfPage',
  title      : 'primaryImageOfPage',
  description: 'Indicates the main image on the page.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/ImageObject.mjs' } ]
  
}
