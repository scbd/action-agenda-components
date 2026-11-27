export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/LangString.mjs',
  title      : 'LangString',
  description: 'Language string in an LString object with very large size to accommodate pages of text',
  allOf      : [ {
    $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Text.mjs'
  } ],
  minLength: 1,
  maxLength: 5000
}