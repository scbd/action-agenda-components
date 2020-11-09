export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Time.mjs',
  $source    : 'http://schema.org/Time',
  title      : 'Date',
  description: 'A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm]',
  allOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/DataType.mjs'
  } ],
  type  : 'string',
  format: 'time'
}