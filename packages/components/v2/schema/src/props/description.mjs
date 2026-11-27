export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/description.mjs',
  $source    : 'http://schema.org/description',
  title      : 'Description',
  description: 'A description of the item.',
  allOf      : [ {
    $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/LString160.mjs'
  } ]
}