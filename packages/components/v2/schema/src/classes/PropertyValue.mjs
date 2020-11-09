export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/PropertyValue.mjs',
  $source             : 'https://schema.org/PropertyValue',
  title               : 'PropertyValue',
  description         : 'A property-value pair, e.g. representing a feature of a product or place. Use the \'name\' property for the name of the property. If there is an additional human-readable version of the value, put that into the \'description\' property.<br/><br/>Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/StructuredValue.mjs' } ],
  properties          : {
    '@type'   : { const: 'PropertyValue', default: 'PropertyValue' },
    propertyID: { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/propertyID.mjs' },
    value     : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/value.mjs' }
  }
}