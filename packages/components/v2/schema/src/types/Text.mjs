export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs',
  $source    : 'http://schema.org/Text',
  title      : 'Text',
  description: 'Data type: Text. min 1 char, max 2083',
  allOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/DataType.mjs'
  } ],
  type     : 'string',
  minLength: 1,
  maxLength: 2083
}