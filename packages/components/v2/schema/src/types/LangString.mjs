export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString.mjs',
  title      : 'LangString',
  description: 'Language string in an LString object with very large size to accommodate pages of text',
  allOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs'
  } ],
  minLength: 1,
  maxLength: 5000
}