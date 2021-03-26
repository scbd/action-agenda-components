export const vocabName         = 'Action Agenda Network'
export const vocabAbbreviation = 'AAN'

export const anyOf = [ { required: [ 'name', '@type' ] }, { required: [ '_id', '@type' ] }, { required: [ 'identifier', '@type' ] }, { required: [ '@value', '@type' ] } ]

export const customClasses = {
  //Schema/Thing/Organization
  NOORG              : { anyOf },
  Partnership        : { anyOf },
  Association        : { anyOf },
  IGO                : { anyOf },
  Coalition          : { anyOf },
  SoleProprietorship : { anyOf },
  IPLC               : { anyOf },

  //Schema/Action
  CommitmentAction : { anyOf: [ { required: [ '@type', 'actionStatus', 'agent', 'endTime', 'startTime' ] }, { required: [ '_id', '@type' ] }, { required: [ 'identifier', '@type' ] } ] },

  //Schema/Thing/Intangible/Enumeration - as additional type on Organization
  NationalScopeType : { anyOf }
}

//schema.org classes
export const classes = {

  //CreativeWorks
  CreativeWork     : { props: [ 'text', 'isFamilyFriendly','spatialCoverage', 'temporalCoverage', 'mainEntity', 'lastReviewed',  'about', 'author', 'dateCreated', 'dateModified', 'editor', 'inLanguage', 'isFamilyFriendly', 'spatialCoverage', 'version'], anyOf },
  Dataset          : { props: [ 'variableMeasured', 'includedInDataCatalog' ], anyOf },
  DataCatalog      : { props: [ 'dataset' ], anyOf },

  WebPage          : { props: [ 'lastReviewed', 'primaryImageOfPage', 'relatedLink', 'significantLink' ], anyOf },
  AboutPage        : { anyOf },
  ProfilePage      : { anyOf },
  MediaObject      : { props: [ 'thumbnail', 'encodingFormat', 'contentUrl', 'uploadDate', 'width', 'height', 'contentSize' ], anyOf: [ { required: [ 'name', 'contentUrl' ] }, { required: [ '_id', '@type' ] }, { required: [ 'identifier', '@type' ] } ]  },
  VideoObject      : { props: [ 'caption'], anyOf: [ { required: [ 'name', 'contentUrl' ] }, { required: [ '_id', '@type' ] }, { required: [ 'identifier', '@type' ] } ]  },
  ImageObject      : { props: [ 'caption'], anyOf: [ { required: [ 'name', 'contentUrl' ] }, { required: [ '_id', '@type' ] }, { required: [ 'identifier', '@type' ] } ]  },

  //Schema/Thing/Organization
  Organization     : { props: [ 'size', 'address','foundingDate', 'nationalScope', 'nonprofitStatus','event', 'funder', 'knowsLanguage', 'numberOfEmployees', 'logo', 'member', 'memberOf','areaServed', 'parentOrganization', 'subOrganization', 'location', 'contactPoint', 'telephone', 'sponsor' ], anyOf },
  Project          : { anyOf },

  Consortium             : { anyOf },
  Corporation            : { anyOf },
  EducationalOrganization: { anyOf },
  GovernmentOrganization : { anyOf },
  MedicalOrganization    : { anyOf },
  NGO                    : { anyOf },
  FundingAgency          : { anyOf },
  UNCS                   : { anyOf },

  //Intangible(s)
  QuantitativeValue: { props: [ 'value', 'minValue', 'maxValue' ], anyOf:[ { required: [ 'value', '@type' ] }, { required: [ '_id', '@type' ] }, { required: [ '@value', '@type' ] } ] },
  ContactPoint     : { props: [ 'availableLanguage', 'contactType', 'email', 'telephone' ], anyOf },
  Language         : { anyOf },
  GeoCoordinates   : { props: [ 'address', 'addressCountry', 'latitude', 'longitude', 'postalCode' ], anyOf },
  StructuredValue  : { props: [ 'name','description','maxValue', 'minValue', 'value' ], anyOf },
  OrganizationSize : { anyOf },

  //Schema/Thing/Intangible/Enumeration
  Enumeration      : { anyOf },
  NonprofitType    : { anyOf },
  ActionStatusType : { anyOf }, //ActiveActionStatus CompletedActionStatus FailedActionStatus PotentialActionStatus
  StatusEnumeration: { anyOf },

  //Person(s)
  Person           : { props: [ 'affiliation', 'worksFor', 'jobTitle', 'familyName', 'additionalName', 'givenName', 'telephone', 'email', 'nationality', 'honorificPrefix', 'honorificSuffix' ], anyOf: [ { required: [ 'name', 'email' ] }, { required: [ '_id', '@type' ] } ] },

  //Place(s)
  Place             : { props: [ 'address','containsPlace', 'containedInPlace', 'hasMap', 'geo', 'logo' ], anyOf },
  Landform          : { anyOf },
  AdministrativeArea: { anyOf },

  //Place(s)>AdministrativeArea(s)
  Country           : { anyOf },
  State             : { anyOf },
  City              : { anyOf },

  //Actions(s)
  Action : { props: [ 'actionStatus', 'agent', 'endTime', 'startTime', 'location', 'result', 'participant' ], anyOf },

  //Schema > Thing > Action > InteractAction > CommunicateAction
  CommunicateAction:  { props: [ 'actionStatus', 'about', 'inLanguage', 'recipient' ], anyOf: [ { required: [ 'about', '@type', 'recipient', 'actionStatus' ] }, { required: [ '_id', '@type' ] }, { required: [ 'identifier', '@type' ] } ] },

  //Custom Classes
  ...customClasses
}

export default { anyOf, vocabName, vocabAbbreviation, classes }