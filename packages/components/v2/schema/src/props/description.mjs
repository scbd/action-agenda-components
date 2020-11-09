export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/description.mjs',
  $source    : 'http://schema.org/description',
  title      : 'Description',
  description: 'A description of the item.',
  allOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/LString160.mjs'
  } ]
}