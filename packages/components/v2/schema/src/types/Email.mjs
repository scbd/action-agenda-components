export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Email.mjs',
  title      : 'Email address',
  description: 'email address, min length 3 char and max 254',
  format     : 'email',
  minLength  : 3,
  maxLength  : 254,
  allOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs'
  } ]
}