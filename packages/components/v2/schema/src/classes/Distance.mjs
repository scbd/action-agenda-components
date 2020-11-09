export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Distance.mjs',
  $source             : 'https://schema.org/Distance',
  title               : 'Distance',
  description         : 'Properties that take Distances as values are of the form \'&lt;Number&gt; &lt;Length unit of measure&gt;\'. E.g., \'7 ft\'.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Quantity.mjs' } ],
  properties          : {
    '@type': { const: 'Distance', default: 'Distance' }
  }
}