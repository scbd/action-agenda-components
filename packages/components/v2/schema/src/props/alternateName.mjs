export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/alternateName.mjs',
  $source    : 'http://schema.org/alternateName',
  title      : 'Alternate Name',
  description: 'An alternative longer name of the item.',
  oneOf      : [ {
    $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/LString160.mjs'
  } ]
}