export default {
  '@graph': [ {
    '@id'         : 'https://schema.org/Thing',
    '@type'       : 'rdfs:Class',
    'rdfs:comment': 'The most generic type of item.',
    'rdfs:label'  : 'Thing'
  }, {
    '@id'                      : 'https://schema.org/PropertyValue',
    '@type'                    : 'rdfs:Class',
    'https://schema.org/source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass'
    },
    'rdfs:comment'   : 'A property-value pair, e.g. representing a feature of a product or place. Use the \'name\' property for the name of the property. If there is an additional human-readable version of the value, put that into the \'description\' property.<br/><br/>\n\nAlways use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.',
    'rdfs:label'     : 'PropertyValue',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/StructuredValue'
    }
  }, {
    '@id'            : 'https://schema.org/StructuredValue',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.',
    'rdfs:label'     : 'StructuredValue',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Intangible'
    }
  }, {
    '@id'                      : 'https://schema.org/CreativeWork',
    '@type'                    : 'rdfs:Class',
    'https://schema.org/source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews'
    },
    'rdfs:comment'   : 'The most generic kind of creative work, including books, movies, photographs, software programs, etc.',
    'rdfs:label'     : 'CreativeWork',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Thing'
    }
  }, {
    '@id'            : 'https://schema.org/Intangible',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A utility class that serves as the umbrella for a number of \'intangible\' things such as quantities, structured values, etc.',
    'rdfs:label'     : 'Intangible',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Thing'
    }
  }, {
    '@id'            : 'https://schema.org/Organization',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'An organization such as a school, NGO, corporation, club, etc.',
    'rdfs:label'     : 'Organization',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Thing'
    }
  }, {
    '@id'                      : 'https://schema.org/Person',
    '@type'                    : 'rdfs:Class',
    'https://schema.org/source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews'
    },
    'http://www.w3.org/2002/07/owl#equivalentClass': {
      '@id': 'http://xmlns.com/foaf/0.1/Person'
    },
    'rdfs:comment'   : 'A person (alive, dead, undead, or fictional).',
    'rdfs:label'     : 'Person',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Thing'
    }
  }, {
    '@id'            : 'https://schema.org/AboutPage',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Web page type: About page.',
    'rdfs:label'     : 'AboutPage',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/WebPage'
    }
  }, {
    '@id'                        : 'https://schema.org/DefinedTerm',
    '@type'                      : 'rdfs:Class',
    'https://schema.org/category': 'issue-894',
    'https://schema.org/isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'https://schema.org/source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/894'
    },
    'rdfs:comment'   : 'A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term.',
    'rdfs:label'     : 'DefinedTerm',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Intangible'
    }
  }, {
    '@id'                                          : 'https://schema.org/ImageObject',
    '@type'                                        : 'rdfs:Class',
    'http://www.w3.org/2002/07/owl#equivalentClass': {
      '@id': 'http://purl.org/dc/dcmitype/Image'
    },
    'rdfs:comment'   : 'An image file.',
    'rdfs:label'     : 'ImageObject',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/MediaObject'
    }
  }, {
    '@id'                      : 'https://schema.org/Action',
    '@type'                    : 'rdfs:Class',
    'https://schema.org/source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass'
    },
    'rdfs:comment'   : 'An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.<br/><br/>\n\nSee also <a href="http://blog.schema.org/2014/04/announcing-schemaorg-actions.html">blog post</a> and <a href="https://schema.org/docs/actions.html">Actions overview document</a>.',
    'rdfs:label'     : 'Action',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Thing'
    }
  }, {
    '@id'            : 'https://schema.org/WebPage',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.',
    'rdfs:label'     : 'WebPage',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/CreativeWork'
    }
  }, {
    '@id'            : 'https://schema.org/Country',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A country.',
    'rdfs:label'     : 'Country',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/AdministrativeArea'
    }
  }, {
    '@id'            : 'https://schema.org/Place',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Entities that have a somewhat fixed, physical extension.',
    'rdfs:label'     : 'Place',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Thing'
    }
  }, {
    '@id'            : 'https://schema.org/MediaObject',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject\'s).',
    'rdfs:label'     : 'MediaObject',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/CreativeWork'
    }
  }, {
    '@id'                        : 'https://schema.org/StatusEnumeration',
    '@type'                      : 'rdfs:Class',
    'https://schema.org/category': 'issue-2604',
    'https://schema.org/source'  : {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/2604'
    },
    'rdfs:comment'   : 'Lists or enumerations dealing with status types.',
    'rdfs:label'     : 'StatusEnumeration',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Enumeration'
    }
  }, {
    '@id'                        : 'https://schema.org/Project',
    '@type'                      : 'rdfs:Class',
    'https://schema.org/category': 'issue-383',
    'https://schema.org/isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'https://schema.org/source': {
      '@id': 'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab'
    },
    'rdfs:comment'   : 'An enterprise (potentially individual but typically collaborative), planned to achieve a particular aim.\nUse properties from <a class="localLink" href="https://schema.org/Organization">Organization</a>, <a class="localLink" href="https://schema.org/subOrganization">subOrganization</a>/<a class="localLink" href="https://schema.org/parentOrganization">parentOrganization</a> to indicate project sub-structures.',
    'rdfs:label'     : 'Project',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Organization'
    }
  }, {
    '@id'            : 'https://schema.org/Language',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in <a href="https://en.wikipedia.org/wiki/IETF_language_tag">BCP 47</a> can be used via the <a class="localLink" href="https://schema.org/alternateName">alternateName</a> property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using <a class="localLink" href="https://schema.org/ComputerLanguage">ComputerLanguage</a>.',
    'rdfs:label'     : 'Language',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Intangible'
    }
  }, {
    '@id'            : 'https://schema.org/AdministrativeArea',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A geographical region, typically under the jurisdiction of a particular government.',
    'rdfs:label'     : 'AdministrativeArea',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Place'
    }
  }, {
    '@id'            : 'https://schema.org/Distance',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Properties that take Distances as values are of the form \'&lt;Number&gt; &lt;Length unit of measure&gt;\'. E.g., \'7 ft\'.',
    'rdfs:label'     : 'Distance',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Quantity'
    }
  }, {
    '@id'            : 'https://schema.org/Enumeration',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Lists or enumerations—for example, a list of cuisines or music genres, etc.',
    'rdfs:label'     : 'Enumeration',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Intangible'
    }
  }, {
    '@id'            : 'https://schema.org/PostalAddress',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'The mailing address.',
    'rdfs:label'     : 'PostalAddress',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/ContactPoint'
    }
  }, {
    '@id'            : 'https://schema.org/ProgramMembership',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.',
    'rdfs:label'     : 'ProgramMembership',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Intangible'
    }
  }, {
    '@id'            : 'https://schema.org/Quantity',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like \'3 Kg\' or \'4 milligrams\'.',
    'rdfs:label'     : 'Quantity',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Intangible'
    }
  }, {
    '@id'                      : 'https://schema.org/QuantitativeValue',
    '@type'                    : 'rdfs:Class',
    'https://schema.org/source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass'
    },
    'rdfs:comment'   : 'A point value or interval for product characteristics and other purposes.',
    'rdfs:label'     : 'QuantitativeValue',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/StructuredValue'
    }
  }, {
    '@id'                        : 'https://schema.org/VirtualLocation',
    '@type'                      : 'rdfs:Class',
    'https://schema.org/category': 'issue-1842',
    'https://schema.org/isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'https://schema.org/source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/1842'
    },
    'rdfs:comment'   : 'An online or virtual location for attending events. For example, one may attend an online seminar or educational event. While a virtual location may be used as the location of an event, virtual locations should not be confused with physical locations in the real world.',
    'rdfs:label'     : 'VirtualLocation',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/Intangible'
    }
  }, {
    '@id'            : 'https://schema.org/ContactPoint',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A contact point&#x2014;for example, a Customer Complaints department.',
    'rdfs:label'     : 'ContactPoint',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/StructuredValue'
    }
  }, {
    '@id'                              : 'https://schema.org/url',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Thing'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/URL'
    },
    'rdfs:comment': 'URL of the item.',
    'rdfs:label'  : 'url'
  }, {
    '@id'                              : 'https://schema.org/sameAs',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Thing'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/URL'
    },
    'rdfs:comment': 'URL of a reference Web page that unambiguously indicates the item\'s identity. E.g. the URL of the item\'s Wikipedia page, Wikidata entry, or official website.',
    'rdfs:label'  : 'sameAs'
  }, {
    '@id'                              : 'https://schema.org/name',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Thing'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Text'
    },
    'http://www.w3.org/2002/07/owl#equivalentProperty': {
      '@id': 'http://purl.org/dc/terms/title'
    },
    'rdfs:comment'      : 'The name of the item.',
    'rdfs:label'        : 'name',
    'rdfs:subPropertyOf': {
      '@id': 'rdfs:label'
    }
  }, {
    '@id'                              : 'https://schema.org/additionalType',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Thing'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/URL'
    },
    'rdfs:comment'      : 'An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the \'typeof\' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.',
    'rdfs:label'        : 'additionalType',
    'rdfs:subPropertyOf': {
      '@id': 'rdf:type'
    }
  }, {
    '@id'                              : 'https://schema.org/alternateName',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Thing'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Text'
    },
    'rdfs:comment': 'An alias for the item.',
    'rdfs:label'  : 'alternateName'
  }, {
    '@id'                              : 'https://schema.org/description',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Thing'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Text'
    },
    'http://www.w3.org/2002/07/owl#equivalentProperty': {
      '@id': 'http://purl.org/dc/terms/description'
    },
    'rdfs:comment': 'A description of the item.',
    'rdfs:label'  : 'description'
  }, {
    '@id'                              : 'https://schema.org/identifier',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Thing'
    },
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/Text'
    }, {
      '@id': 'https://schema.org/PropertyValue'
    }, {
      '@id': 'https://schema.org/URL'
    } ],
    'http://www.w3.org/2002/07/owl#equivalentProperty': {
      '@id': 'http://purl.org/dc/terms/identifier'
    },
    'rdfs:comment': 'The identifier property represents any kind of identifier for any kind of <a class="localLink" href="https://schema.org/Thing">Thing</a>, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See <a href="/docs/datamodel.html#identifierBg">background notes</a> for more details.',
    'rdfs:label'  : 'identifier'
  }, {
    '@id'                              : 'https://schema.org/mainEntityOfPage',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Thing'
    },
    'https://schema.org/inverseOf': {
      '@id': 'https://schema.org/mainEntity'
    },
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/URL'
    }, {
      '@id': 'https://schema.org/CreativeWork'
    } ],
    'rdfs:comment': 'Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See <a href="/docs/datamodel.html#mainEntityBackground">background notes</a> for details.',
    'rdfs:label'  : 'mainEntityOfPage'
  }, {
    '@id'                              : 'https://schema.org/image',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Thing'
    },
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/URL'
    }, {
      '@id': 'https://schema.org/ImageObject'
    } ],
    'rdfs:comment': 'An image of the item. This can be a <a class="localLink" href="https://schema.org/URL">URL</a> or a fully described <a class="localLink" href="https://schema.org/ImageObject">ImageObject</a>.',
    'rdfs:label'  : 'image'
  }, {
    '@id'                              : 'https://schema.org/disambiguatingDescription',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Thing'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Text'
    },
    'rdfs:comment'      : 'A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.',
    'rdfs:label'        : 'disambiguatingDescription',
    'rdfs:subPropertyOf': {
      '@id': 'https://schema.org/description'
    }
  }, {
    '@id'                              : 'https://schema.org/propertyID',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/PropertyValue'
    },
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/URL'
    }, {
      '@id': 'https://schema.org/Text'
    } ],
    'rdfs:comment': 'A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be\n(1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)\na URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).\nStandards bodies should promote a standard prefix for the identifiers of properties from their standards.',
    'rdfs:label'  : 'propertyID'
  }, {
    '@id'                              : 'https://schema.org/value',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/MonetaryAmount'
    }, {
      '@id': 'https://schema.org/PropertyValue'
    }, {
      '@id': 'https://schema.org/QuantitativeValue'
    } ],
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/StructuredValue'
    }, {
      '@id': 'https://schema.org/Boolean'
    }, {
      '@id': 'https://schema.org/Text'
    }, {
      '@id': 'https://schema.org/Number'
    } ],
    'https://schema.org/source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms'
    },
    'rdfs:comment': 'The value of the quantitative value or property value node.<br/><br/>\n\n<ul>\n<li>For <a class="localLink" href="https://schema.org/QuantitativeValue">QuantitativeValue</a> and <a class="localLink" href="https://schema.org/MonetaryAmount">MonetaryAmount</a>, the recommended type for values is \'Number\'.</li>\n<li>For <a class="localLink" href="https://schema.org/PropertyValue">PropertyValue</a>, it can be \'Text;\', \'Number\', \'Boolean\', or \'StructuredValue\'.</li>\n<li>Use values from 0123456789 (Unicode \'DIGIT ZERO\' (U+0030) to \'DIGIT NINE\' (U+0039)) rather than superficially similiar Unicode symbols.</li>\n<li>Use \'.\' (Unicode \'FULL STOP\' (U+002E)) rather than \',\' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>\n</ul>\n',
    'rdfs:label'  : 'value'
  }, {
    '@id'                              : 'https://schema.org/member',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/ProgramMembership'
    }, {
      '@id': 'https://schema.org/Organization'
    } ],
    'https://schema.org/inverseOf': {
      '@id': 'https://schema.org/memberOf'
    },
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/Person'
    }, {
      '@id': 'https://schema.org/Organization'
    } ],
    'rdfs:comment': 'A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.',
    'rdfs:label'  : 'member'
  }, {
    '@id'                              : 'https://schema.org/logo',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/Service'
    }, {
      '@id': 'https://schema.org/Organization'
    }, {
      '@id': 'https://schema.org/Brand'
    }, {
      '@id': 'https://schema.org/Product'
    }, {
      '@id': 'https://schema.org/Place'
    } ],
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/URL'
    }, {
      '@id': 'https://schema.org/ImageObject'
    } ],
    'https://schema.org/source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms'
    },
    'rdfs:comment'      : 'An associated logo.',
    'rdfs:label'        : 'logo',
    'rdfs:subPropertyOf': {
      '@id': 'https://schema.org/image'
    }
  }, {
    '@id'                              : 'https://schema.org/familyName',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Person'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Text'
    },
    'rdfs:comment': 'Family name. In the U.S., the last name of a Person.',
    'rdfs:label'  : 'familyName'
  }, {
    '@id'                              : 'https://schema.org/relatedLink',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/WebPage'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/URL'
    },
    'rdfs:comment': 'A link related to this web page, for example to other related web pages.',
    'rdfs:label'  : 'relatedLink'
  }, {
    '@id'                              : 'https://schema.org/jobTitle',
    '@type'                            : 'rdf:Property',
    'https://schema.org/category'      : 'issue-2192',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Person'
    },
    'https://schema.org/isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/Text'
    }, {
      '@id': 'https://schema.org/DefinedTerm'
    } ],
    'https://schema.org/source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/2192'
    },
    'rdfs:comment': 'The job title of the person (for example, Financial Manager).',
    'rdfs:label'  : 'jobTitle'
  }, {
    '@id'                              : 'https://schema.org/primaryImageOfPage',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/WebPage'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/ImageObject'
    },
    'rdfs:comment': 'Indicates the main image on the page.',
    'rdfs:label'  : 'primaryImageOfPage'
  }, {
    '@id'                              : 'https://schema.org/nationality',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Person'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Country'
    },
    'rdfs:comment': 'Nationality of the person.',
    'rdfs:label'  : 'nationality'
  }, {
    '@id'                              : 'https://schema.org/lastReviewed',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/WebPage'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Date'
    },
    'rdfs:comment': 'Date on which the content on this web page was last reviewed for accuracy and/or completeness.',
    'rdfs:label'  : 'lastReviewed'
  }, {
    '@id'                              : 'https://schema.org/additionalName',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Person'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Text'
    },
    'rdfs:comment': 'An additional name for a Person, can be used for a middle name.',
    'rdfs:label'  : 'additionalName'
  }, {
    '@id'                              : 'https://schema.org/spatialCoverage',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/CreativeWork'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Place'
    },
    'http://www.w3.org/2002/07/owl#equivalentProperty': {
      '@id': 'http://purl.org/dc/terms/spatial'
    },
    'rdfs:comment'      : 'The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of\n      contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates\n      areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.',
    'rdfs:label'        : 'spatialCoverage',
    'rdfs:subPropertyOf': {
      '@id': 'https://schema.org/contentLocation'
    }
  }, {
    '@id'                              : 'https://schema.org/telephone',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/Person'
    }, {
      '@id': 'https://schema.org/ContactPoint'
    }, {
      '@id': 'https://schema.org/Place'
    }, {
      '@id': 'https://schema.org/Organization'
    } ],
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Text'
    },
    'rdfs:comment': 'The telephone number.',
    'rdfs:label'  : 'telephone'
  }, {
    '@id'                              : 'https://schema.org/editor',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/CreativeWork'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Person'
    },
    'rdfs:comment': 'Specifies the Person who edited the CreativeWork.',
    'rdfs:label'  : 'editor'
  }, {
    '@id'                              : 'https://schema.org/email',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/Person'
    }, {
      '@id': 'https://schema.org/ContactPoint'
    }, {
      '@id': 'https://schema.org/Organization'
    } ],
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Text'
    },
    'rdfs:comment': 'Email address.',
    'rdfs:label'  : 'email'
  }, {
    '@id'                              : 'https://schema.org/about',
    '@type'                            : 'rdf:Property',
    'https://schema.org/category'      : 'issue-1670',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/CommunicateAction'
    }, {
      '@id': 'https://schema.org/CreativeWork'
    }, {
      '@id': 'https://schema.org/Event'
    } ],
    'https://schema.org/inverseOf': {
      '@id': 'https://schema.org/subjectOf'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Thing'
    },
    'https://schema.org/source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/1670'
    },
    'rdfs:comment': 'The subject matter of the content.',
    'rdfs:label'  : 'about'
  }, {
    '@id'                              : 'https://schema.org/givenName',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Person'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Text'
    },
    'rdfs:comment': 'Given name. In the U.S., the first name of a Person.',
    'rdfs:label'  : 'givenName'
  }, {
    '@id'                              : 'https://schema.org/text',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/CreativeWork'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Text'
    },
    'rdfs:comment': 'The textual content of this CreativeWork.',
    'rdfs:label'  : 'text'
  }, {
    '@id'                              : 'https://schema.org/dateCreated',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/DataFeedItem'
    }, {
      '@id': 'https://schema.org/CreativeWork'
    } ],
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/Date'
    }, {
      '@id': 'https://schema.org/DateTime'
    } ],
    'rdfs:comment': 'The date on which the CreativeWork was created or the item was added to a DataFeed.',
    'rdfs:label'  : 'dateCreated'
  }, {
    '@id'                              : 'https://schema.org/isFamilyFriendly',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/CreativeWork'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Boolean'
    },
    'rdfs:comment': 'Indicates whether this content is family friendly.',
    'rdfs:label'  : 'isFamilyFriendly'
  }, {
    '@id'                              : 'https://schema.org/mainEntity',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/CreativeWork'
    },
    'https://schema.org/inverseOf': {
      '@id': 'https://schema.org/mainEntityOfPage'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Thing'
    },
    'rdfs:comment'      : 'Indicates the primary entity described in some page or other CreativeWork.',
    'rdfs:label'        : 'mainEntity',
    'rdfs:subPropertyOf': {
      '@id': 'https://schema.org/about'
    }
  }, {
    '@id'                              : 'https://schema.org/version',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/CreativeWork'
    },
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/Text'
    }, {
      '@id': 'https://schema.org/Number'
    } ],
    'rdfs:comment': 'The version of the CreativeWork embodied by a specified resource.',
    'rdfs:label'  : 'version'
  }, {
    '@id'                              : 'https://schema.org/dateModified',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/DataFeedItem'
    }, {
      '@id': 'https://schema.org/CreativeWork'
    } ],
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/DateTime'
    }, {
      '@id': 'https://schema.org/Date'
    } ],
    'rdfs:comment': 'The date on which the CreativeWork was most recently modified or when the item\'s entry was modified within a DataFeed.',
    'rdfs:label'  : 'dateModified'
  }, {
    '@id'                              : 'https://schema.org/author',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/Rating'
    }, {
      '@id': 'https://schema.org/CreativeWork'
    } ],
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/Organization'
    }, {
      '@id': 'https://schema.org/Person'
    } ],
    'rdfs:comment': 'The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.',
    'rdfs:label'  : 'author'
  }, {
    '@id'                              : 'https://schema.org/inLanguage',
    '@type'                            : 'rdf:Property',
    'https://schema.org/category'      : 'issue-2382',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/BroadcastService'
    }, {
      '@id': 'https://schema.org/CreativeWork'
    }, {
      '@id': 'https://schema.org/WriteAction'
    }, {
      '@id': 'https://schema.org/PronounceableText'
    }, {
      '@id': 'https://schema.org/Event'
    }, {
      '@id': 'https://schema.org/LinkRole'
    }, {
      '@id': 'https://schema.org/CommunicateAction'
    } ],
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/Language'
    }, {
      '@id': 'https://schema.org/Text'
    } ],
    'https://schema.org/source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/2382'
    },
    'rdfs:comment': 'The language of the content or performance or used in an action. Please use one of the language codes from the <a href="http://tools.ietf.org/html/bcp47">IETF BCP 47 standard</a>. See also <a class="localLink" href="https://schema.org/availableLanguage">availableLanguage</a>.',
    'rdfs:label'  : 'inLanguage'
  }, {
    '@id'                              : 'https://schema.org/thumbnail',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/ImageObject'
    }, {
      '@id': 'https://schema.org/VideoObject'
    } ],
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/ImageObject'
    },
    'rdfs:comment': 'Thumbnail image for an image or video.',
    'rdfs:label'  : 'thumbnail'
  }, {
    '@id'                              : 'https://schema.org/caption',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/AudioObject'
    }, {
      '@id': 'https://schema.org/ImageObject'
    }, {
      '@id': 'https://schema.org/VideoObject'
    } ],
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/Text'
    }, {
      '@id': 'https://schema.org/MediaObject'
    } ],
    'rdfs:comment': 'The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the <a class="localLink" href="https://schema.org/encodingFormat">encodingFormat</a>.',
    'rdfs:label'  : 'caption'
  }, {
    '@id'                              : 'https://schema.org/contentSize',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/MediaObject'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Text'
    },
    'rdfs:comment': 'File size in (mega/kilo) bytes.',
    'rdfs:label'  : 'contentSize'
  }, {
    '@id'                              : 'https://schema.org/width',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/VisualArtwork'
    }, {
      '@id': 'https://schema.org/MediaObject'
    }, {
      '@id': 'https://schema.org/Product'
    } ],
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/Distance'
    }, {
      '@id': 'https://schema.org/QuantitativeValue'
    } ],
    'rdfs:comment': 'The width of the item.',
    'rdfs:label'  : 'width'
  }, {
    '@id'                              : 'https://schema.org/uploadDate',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/MediaObject'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Date'
    },
    'rdfs:comment': 'Date when this media object was uploaded to this site.',
    'rdfs:label'  : 'uploadDate'
  }, {
    '@id'                              : 'https://schema.org/height',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/Person'
    }, {
      '@id': 'https://schema.org/Product'
    }, {
      '@id': 'https://schema.org/MediaObject'
    }, {
      '@id': 'https://schema.org/VisualArtwork'
    } ],
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/QuantitativeValue'
    }, {
      '@id': 'https://schema.org/Distance'
    } ],
    'rdfs:comment': 'The height of the item.',
    'rdfs:label'  : 'height'
  }, {
    '@id'                              : 'https://schema.org/contentUrl',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/MediaObject'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/URL'
    },
    'rdfs:comment': 'Actual bytes of the media object, for example the image file or video file.',
    'rdfs:label'  : 'contentUrl'
  }, {
    '@id'                              : 'https://schema.org/endTime',
    '@type'                            : 'rdf:Property',
    'https://schema.org/category'      : 'issue-2493',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/Schedule'
    }, {
      '@id': 'https://schema.org/FoodEstablishmentReservation'
    }, {
      '@id': 'https://schema.org/MediaObject'
    }, {
      '@id': 'https://schema.org/Action'
    } ],
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/Time'
    }, {
      '@id': 'https://schema.org/DateTime'
    } ],
    'https://schema.org/source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/2493'
    },
    'rdfs:comment': 'The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to <em>December</em>. For media, including audio and video, it\'s the time offset of the end of a clip within a larger file.<br/><br/>\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.',
    'rdfs:label'  : 'endTime'
  }, {
    '@id'                              : 'https://schema.org/result',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Action'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Thing'
    },
    'rdfs:comment': 'The result produced in the action. e.g. John wrote <em>a book</em>.',
    'rdfs:label'  : 'result'
  }, {
    '@id'                              : 'https://schema.org/startTime',
    '@type'                            : 'rdf:Property',
    'https://schema.org/category'      : 'issue-2493',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/MediaObject'
    }, {
      '@id': 'https://schema.org/Schedule'
    }, {
      '@id': 'https://schema.org/Action'
    }, {
      '@id': 'https://schema.org/FoodEstablishmentReservation'
    } ],
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/DateTime'
    }, {
      '@id': 'https://schema.org/Time'
    } ],
    'https://schema.org/source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/2493'
    },
    'rdfs:comment': 'The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from <em>January</em> to December. For media, including audio and video, it\'s the time offset of the start of a clip within a larger file.<br/><br/>\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.',
    'rdfs:label'  : 'startTime'
  }, {
    '@id'                              : 'https://schema.org/actionStatus',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Action'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/ActionStatusType'
    },
    'rdfs:comment': 'Indicates the current disposition of the Action.',
    'rdfs:label'  : 'actionStatus'
  }, {
    '@id'                              : 'https://schema.org/agent',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/Action'
    },
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/Person'
    }, {
      '@id': 'https://schema.org/Organization'
    } ],
    'rdfs:comment': 'The direct performer or driver of the action (animate or inanimate). e.g. <em>John</em> wrote a book.',
    'rdfs:label'  : 'agent'
  }, {
    '@id'                              : 'https://schema.org/location',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/Action'
    }, {
      '@id': 'https://schema.org/Organization'
    }, {
      '@id': 'https://schema.org/Event'
    } ],
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/Place'
    }, {
      '@id': 'https://schema.org/PostalAddress'
    }, {
      '@id': 'https://schema.org/Text'
    }, {
      '@id': 'https://schema.org/VirtualLocation'
    } ],
    'rdfs:comment': 'The location of for example where the event is happening, an organization is located, or where an action takes place.',
    'rdfs:label'  : 'location'
  }, {
    '@id'                              : 'https://schema.org/sponsor',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/Event'
    }, {
      '@id': 'https://schema.org/Grant'
    }, {
      '@id': 'https://schema.org/MedicalStudy'
    }, {
      '@id': 'https://schema.org/Organization'
    }, {
      '@id': 'https://schema.org/Person'
    }, {
      '@id': 'https://schema.org/CreativeWork'
    } ],
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/Organization'
    }, {
      '@id': 'https://schema.org/Person'
    } ],
    'rdfs:comment': 'A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.',
    'rdfs:label'  : 'sponsor'
  }, {
    '@id'                              : 'https://schema.org/memberOf',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/Person'
    }, {
      '@id': 'https://schema.org/Organization'
    } ],
    'https://schema.org/inverseOf': {
      '@id': 'https://schema.org/member'
    },
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/ProgramMembership'
    }, {
      '@id': 'https://schema.org/Organization'
    } ],
    'rdfs:comment': 'An Organization (or ProgramMembership) to which this Person or Organization belongs.',
    'rdfs:label'  : 'memberOf'
  }, {
    '@id'                              : 'https://schema.org/contactPoint',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/HealthInsurancePlan'
    }, {
      '@id': 'https://schema.org/Organization'
    }, {
      '@id': 'https://schema.org/Person'
    } ],
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/ContactPoint'
    },
    'rdfs:comment': 'A contact point for a person or organization.',
    'rdfs:label'  : 'contactPoint'
  }, {
    '@id'                              : 'https://schema.org/hostingOrganization',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/ProgramMembership'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Organization'
    },
    'rdfs:comment': 'The organization (airline, travelers\' club, etc.) the membership is made with.',
    'rdfs:label'  : 'hostingOrganization'
  }, {
    '@id'                              : 'https://schema.org/programName',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/ProgramMembership'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Text'
    },
    'rdfs:comment': 'The program providing the membership.',
    'rdfs:label'  : 'programName'
  }, {
    '@id'                              : 'https://schema.org/availableLanguage',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/TouristAttraction'
    }, {
      '@id': 'https://schema.org/LodgingBusiness'
    }, {
      '@id': 'https://schema.org/ContactPoint'
    }, {
      '@id': 'https://schema.org/ServiceChannel'
    } ],
    'https://schema.org/rangeIncludes': [ {
      '@id': 'https://schema.org/Text'
    }, {
      '@id': 'https://schema.org/Language'
    } ],
    'rdfs:comment': 'A language someone may use with or at the item, service or place. Please use one of the language codes from the <a href="http://tools.ietf.org/html/bcp47">IETF BCP 47 standard</a>. See also <a class="localLink" href="https://schema.org/inLanguage">inLanguage</a>',
    'rdfs:label'  : 'availableLanguage'
  }, {
    '@id'                              : 'https://schema.org/contactType',
    '@type'                            : 'rdf:Property',
    'https://schema.org/domainIncludes': {
      '@id': 'https://schema.org/ContactPoint'
    },
    'https://schema.org/rangeIncludes': {
      '@id': 'https://schema.org/Text'
    },
    'rdfs:comment': 'A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.',
    'rdfs:label'  : 'contactType'
  }, {
    '@id'            : 'https://schema.org/ActionStatusType',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'The status of an Action.',
    'rdfs:label'     : 'ActionStatusType',
    'rdfs:subClassOf': {
      '@id': 'https://schema.org/StatusEnumeration'
    }
  }, {
    '@id'         : 'https://schema.org/FailedActionStatus',
    '@type'       : 'https://schema.org/ActionStatusType',
    'rdfs:comment': 'An action that failed to complete. The action\'s error property and the HTTP return code contain more information about the failure.',
    'rdfs:label'  : 'FailedActionStatus'
  }, {
    '@id'         : 'https://schema.org/CompletedActionStatus',
    '@type'       : 'https://schema.org/ActionStatusType',
    'rdfs:comment': 'An action that has already taken place.',
    'rdfs:label'  : 'CompletedActionStatus'
  }, {
    '@id'         : 'https://schema.org/ActiveActionStatus',
    '@type'       : 'https://schema.org/ActionStatusType',
    'rdfs:comment': 'An in-progress action (e.g, while watching the movie, or driving to a location).',
    'rdfs:label'  : 'ActiveActionStatus'
  }, {
    '@id'         : 'https://schema.org/PotentialActionStatus',
    '@type'       : 'https://schema.org/ActionStatusType',
    'rdfs:comment': 'A description of an action that is supported.',
    'rdfs:label'  : 'PotentialActionStatus'
  } ]
}