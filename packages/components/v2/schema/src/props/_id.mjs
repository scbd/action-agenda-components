export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/_id.mjs',
  title      : 'Mongo ID',
  description: 'Mongo ID as 24 character hex',
  oneOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/HexId.mjs'
  } ]
}