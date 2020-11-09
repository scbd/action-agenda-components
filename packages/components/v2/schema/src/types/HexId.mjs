export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/types/HexId.mjs',
  title      : 'Hex Id',
  description: 'Hex id is a 24 character hex number',
  pattern    : '^[0-9a-fA-F]{24}$',
  minLength  : 24,
  maxLength  : 24,
  allOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs'
  } ]
}