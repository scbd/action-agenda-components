export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/types/DateTime.mjs',
  $source    : 'http://schema.org/DateTime',
  title      : 'DateTime',
  description: 'A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601).',
  allOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/DataType.mjs'
  } ],
  type  : 'string',
  format: 'date-time'
}