export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Boolean.mjs',
  $source    : 'http://schema.org/Boolean',
  title      : 'Boolean',
  description: 'Boolean: True or False.',
  allOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/DataType.mjs'
  } ],
  type: 'boolean'
}