export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString60.mjs',
  title      : 'LangString60',
  description: 'Language string in an LString object with the recommended name/title size from google based on indexation and mobile view.',
  allOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs'
  } ],
  minLength: 1,
  maxLength: 60
}