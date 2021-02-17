export default {
  '@id'                  : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/nationalScope.mjs',
  '@type'                : 'rdf:Property',
  'rdfs:comment'         : 'The the national scope of the organization',
  'rdfs:label'           : 'nationalScope',
  'schema:domainIncludes': {
    '@id': 'schema:Organization'
  },
  'schema:rangeIncludes': {
    '@id': 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/NationalScopeType.mjs'
  }
}