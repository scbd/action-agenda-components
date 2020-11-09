export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Date.mjs',
  $source    : 'http://schema.org/Date',
  title      : 'Date',
  description: 'A date value in ISO 8601 date format.',
  allOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/DataType.mjs'
  } ],
  type  : 'string',
  format: 'date'
}