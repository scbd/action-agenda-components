export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/disambiguatingDescription.mjs',
  $source    : 'http://schema.org/disambiguatingDescription',
  title      : 'Description',
  description: 'A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.',
  allOf      : [ {
    $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/types/LString160.mjs'
  } ]
}