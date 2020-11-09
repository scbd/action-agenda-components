export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/alternateName.mjs',
  $source    : 'http://schema.org/alternateName',
  title      : 'Alternate Name',
  description: 'An alternative longer name of the item.',
  oneOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/LString160.mjs'
  } ]
}