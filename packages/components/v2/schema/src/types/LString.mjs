export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/types/LString.mjs',
  title      : 'LString',
  description: 'SCBD lang mapped string object',
  type       : 'object',
  properties : {
    ar: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString.mjs'
    },
    en: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString.mjs'
    },
    es: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString.mjs'
    },
    fr: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString.mjs'
    },
    ru: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString.mjs'
    },
    zh: {
      $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString.mjs'
    }
  },
  additionalProperties: false
}