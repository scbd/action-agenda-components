export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/mainEntityOfPage.mjs',
  $source    : 'http://schema.org/mainEntityOfPage',
  title      : 'mainEntityOfPage',
  description: 'Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See <a href="/docs/datamodel.html#mainEntityBackground">background notes</a> for details.',
  oneOf      : [ {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs'
  }, {
    $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/CreativeWork.mjs'
  } ]
}