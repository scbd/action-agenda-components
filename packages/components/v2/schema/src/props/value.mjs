export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/value.mjs',
  $source    : 'https://schema.org/value',
  name       : 'value',
  title      : 'value',
  description: 'The value of the quantitative value or property value node.<br/><br/><ul><li>For <a class="localLink" href="https://schema.org/QuantitativeValue">QuantitativeValue</a> and <a class="localLink" href="https://schema.org/MonetaryAmount">MonetaryAmount</a>, the recommended type for values is \'Number\'.</li><li>For <a class="localLink" href="https://schema.org/PropertyValue">PropertyValue</a>, it can be \'Text;\', \'Number\', \'Boolean\', or \'StructuredValue\'.</li><li>Use values from 0123456789 (Unicode \'DIGIT ZERO\' (U+0030) to \'DIGIT NINE\' (U+0039)) rather than superficially similiar Unicode symbols.</li><li>Use \'.\' (Unicode \'FULL STOP\' (U+002E)) rather than \',\' to indicate a decimal point. Avoid using these symbols as a readability separator.</li></ul>',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/StructuredValue.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Boolean.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Number.mjs' } ]
  
}
