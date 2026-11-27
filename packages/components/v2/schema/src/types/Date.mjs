export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Date.mjs',
  $source    : 'http://schema.org/Date',
  title      : 'Date',
  description: 'A date value in ISO 8601 date format.',
  allOf      : [ {
    $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/DataType.mjs'
  } ],
  type  : 'string',
  format: 'date'
}