export default {
  '@id'     : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/action-agenda-network-vocab.mjs',
  '@context': {
    '@version' : 0.1,
    '@language': 'en',
    aan        : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/action-agenda-network-vocab.mjs',
    rdf        : 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    rdfs       : 'http://www.w3.org/2000/01/rdf-schema#',
    schema     : 'https://schema.org/'
  },
  '@graph': [ {
    '@id'         : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/InternationalNationalScope.mjs',
    '@type'       : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/NationalScopeType.mjs',
    'rdfs:comment': 'Existing, occurring, or carried on between two or more nations.',
    'rdfs:label'  : 'InternationalNationalScope'
  }, {
    '@id'         : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/SubnationalNationalScope.mjs',
    '@type'       : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/NationalScopeType.mjs',
    'rdfs:comment': 'Relating to single Administrative area within a nation',
    'rdfs:label'  : 'SubnationalNationalScope'
  }, {
    '@id'         : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/NationalNationalScope.mjs',
    '@type'       : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/NationalScopeType.mjs',
    'rdfs:comment': 'Relating to a nation; common to or characteristic of a whole nation or multiple subnational parts there of.',
    'rdfs:label'  : 'NationalNationalScope'
  }, {
    '@id'         : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/TrueNonprofit.mjs',
    '@type'       : 'schema:NonprofitType',
    'rdfs:comment': 'An organization operations do not generate profit.',
    'rdfs:label'  : 'TrueNonprofit'
  }, {
    '@id'         : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/FalseNonprofit.mjs',
    '@type'       : 'schema:NonprofitType',
    'rdfs:comment': 'An organization operations do not generate profit.',
    'rdfs:label'  : 'FalseNonprofit'
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/OrganizationSize.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Size of an organization by the number of employees',
    'rdfs:label'     : 'OrganizationSize',
    'rdfs:subClassOf': {
      '@id': 'schema:QuantitativeValue'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/CommitmentAction.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A pledge or undertaking made by an Actor towards a Thing',
    'rdfs:label'     : 'CommitmentAction',
    'rdfs:subClassOf': {
      '@id': 'schema:Action'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/NOORG.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Action agenda org reference that has not been whos type and non profit status has not been confirmed',
    'rdfs:label'     : 'NOORG',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/IPLC.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Indigenous peoples and local communities (IPLCs) are, typically, ethnic groups who are descended from and identify with the original inhabitants of a given region, in contrast to groups that have settled, occupied or colonized the area more recently.',
    'rdfs:label'     : 'IPLC',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/IGO.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'An intergovernmental organization (IGO) or international organization is an organization composed primarily of sovereign states (referred to as member states), or of other intergovernmental organizations. IGOs are established by a treaty that acts as a charter creating the group.',
    'rdfs:label'     : 'IGO',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/Coalition.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Coalition  is the denotation for a group formed when two or more people or Organizations agree to work together temporarily in a partnership to achieve a common goal.',
    'rdfs:label'     : 'Coalition',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
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
  }, {
    '@id'                  : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/size.mjs',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Organization size',
    'rdfs:label'           : 'size',
    'schema:domainIncludes': {
      '@id': 'schema:Organization'
    },
    'schema:rangeIncludes': {
      '@id': 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/OrganizationSize.mjs'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/UNCS.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'United Nations Common System',
    'rdfs:label'     : 'UNCS',
    'rdfs:subClassOf': {
      '@id': 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/IGO.mjs'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/SoleProprietorship.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A Sole Proprietorship is an unincorporated business with only one owner who pays personal income tax on profits earned. Sole proprietorships are easy to establish and dismantle, due to a lack of government involvement, making them popular with small business owners and contractors.',
    'rdfs:label'     : 'SoleProprietorship',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/Partnership.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Partnership consists of two or more legal entities pooling their resources to operate a shared objective.',
    'rdfs:label'     : 'Partnership',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/REIG.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Regional economic integration organization',
    'rdfs:label'     : 'REIG',
    'rdfs:subClassOf': {
      '@id': 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/IGO.mjs'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/Association.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Association is a connection or cooperative link between people or organizations',
    'rdfs:label'     : 'Association',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/default-config/dist/vocab/NationalScopeType.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : '',
    'rdfs:label'     : 'NationalScopeType',
    'rdfs:subClassOf': {
      '@id': 'schema:Enumeration'
    }
  } ]
}