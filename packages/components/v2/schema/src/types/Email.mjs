export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Email.mjs',
  title      : 'Email address',
  description: 'email address, min length 3 char and max 254',
  format     : 'email',
  minLength  : 3,
  maxLength  : 254,
  allOf      : [ {
    $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/Text.mjs'
  } ]
}