export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/spatialCoverage.mjs',
  $source    : 'https://schema.org/spatialCoverage',
  name       : 'spatialCoverage',
  title      : 'spatialCoverage',
  description: 'The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of      contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates      areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Place.mjs' } ]
  
}
