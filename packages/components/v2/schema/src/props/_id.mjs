export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/_id.mjs',
  title      : 'Mongo ID',
  description: 'Mongo ID as 24 character hex',
  oneOf      : [ {
    $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/HexId.mjs'
  } ]
}