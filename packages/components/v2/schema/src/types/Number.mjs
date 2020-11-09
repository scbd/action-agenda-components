export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Number.mjs',
  $source    : 'http://schema.org/Number',
  title      : 'Boolean',
  description: 'Use values from 0123456789 (Unicode \'DIGIT ZERO\' (U+0030) to \'DIGIT NINE\' (U+0039)) rather than superficially similiar Unicode symbols.Use \'.\' (Unicode \'FULL STOP\' (U+002E)) rather than \',\' to indicate a decimal point. Avoid using these symbols as a readability separator.',
  allOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/DataType.mjs'
  } ],
  type: 'number'
}