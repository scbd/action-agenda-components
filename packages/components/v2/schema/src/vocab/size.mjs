export default {
  '@id'                  : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/size.mjs',
  '@type'                : 'rdf:Property',
  'rdfs:comment'         : 'Organization size',
  'rdfs:label'           : 'size',
  'schema:domainIncludes': {
    '@id': 'schema:Organization'
  },
  'schema:rangeIncludes': {
    '@id': 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/OrganizationSize.mjs'
  }
}