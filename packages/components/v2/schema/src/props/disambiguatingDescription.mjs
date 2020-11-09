export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/disambiguatingDescription.mjs',
  $source    : 'http://schema.org/disambiguatingDescription',
  title      : 'Description',
  description: 'A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.',
  allOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/LString160.mjs'
  } ]
}