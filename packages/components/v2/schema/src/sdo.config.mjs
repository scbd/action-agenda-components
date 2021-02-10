export const schemaIdRoot  = 'https://cdn.cbd.int/@action-agenda/schema/dist'
export const typesId       = `${schemaIdRoot}/types`
export const propsId       = `${schemaIdRoot}/props`
export const classesId     = `${schemaIdRoot}/classes`
export const enumClassesId = `${schemaIdRoot}/enumClasses`
export const enumMembersId = `${schemaIdRoot}/enumMembers`
export const customVocabId = `${schemaIdRoot}/vocab`

export const schemaWritePath      = '/src'
export const typesWritePath       = `${schemaWritePath}/types`
export const propsWritePath       = `${schemaWritePath}/props`
export const classesWritePath     = `${schemaWritePath}/classes`
export const enumClassesWritePath = `${schemaWritePath}/enumClasses`
export const enumMembersWritePath = `${schemaWritePath}/enumMembers`

export const vocabName         = 'Action Agenda Network'
export const vocabAbbreviation = 'AAN'
export const vocabReadPath     = `${schemaWritePath}/vocab`

export const knownArrays   = [ 'image', 'sameAs', 'member', 'memberOf', 'additionalType', 'containsPlace', 'containedInPlace', 'hasMap', 'parentOrganization', 'subOrganization', 'location', 'mainEntityOfPage','potentialAction', 'subjectOf', 'recipient', 'agent', 'spatialCoverage', 'about' ]
export const lstrings      = [ 'name', 'alternateName', 'description', 'disambiguatingDescription', 'text', 'caption' ]

export const anyOf        = [ { required: [ 'name' ] },          { required: [ '_id', '@type' ] }, { required: [ 'identifier', '@type' ] }, { required: [ '@value' ] } ]
export const requiredType = [ { required: [ 'name', '@type' ] }, { required: [ '_id', '@type' ] }, { required: [ 'identifier', '@type' ] }, { required: [ '@value' ] } ]

const noDefaultType = true //must be used with requiredType - may be obsolete ... default type caused too many problems

export const customClasses = {
  //Schema/Thing/Organization
  NOORG              : { anyOf:requiredType, noDefaultType },
  Partnership        : { anyOf:requiredType, noDefaultType },
  Association        : { anyOf:requiredType, noDefaultType },
  IGO                : { anyOf:requiredType, noDefaultType },
  Coalition          : { anyOf:requiredType, noDefaultType },
  SoleProprietorship : { anyOf:requiredType, noDefaultType },
  IPLC               : { anyOf:requiredType, noDefaultType },

  //Schema/Action
  CommitmentAction : { anyOf: [{ required: [ '@type', 'actionStatus', 'agent', 'endTime', 'startTime' ] } ], noDefaultType },

  //Schema/Thing/Intangible/Enumeration - as additional type on Organization
  NationalScopeType : { anyOf:requiredType, noDefaultType }

}

//schema.org classes
export const classes = {

  //CreativeWorks
  CreativeWork     : { props: [ 'text', 'isFamilyFriendly','spatialCoverage', 'temporalCoverage', 'mainEntity', 'lastReviewed',  'about', 'author', 'dateCreated', 'dateModified', 'editor', 'inLanguage', 'isFamilyFriendly', 'spatialCoverage', 'version'], anyOf },
  Dataset          : { props: [ 'variableMeasured', 'includedInDataCatalog'], noDefaultType },
  DataCatalog      : { props: ['dataset'], noDefaultType },

  WebPage          : { props: [ 'lastReviewed', 'primaryImageOfPage', 'relatedLink', 'significantLink' ], anyOf:requiredType, noDefaultType },
  AboutPage        : { anyOf:requiredType, noDefaultType },
  ProfilePage      : { anyOf:requiredType, noDefaultType },
  MediaObject      : { props: [ 'thumbnail', 'encodingFormat', 'contentUrl', 'uploadDate', 'width', 'height', 'contentSize' ], anyOf: [ { required: [ 'name', 'contentUrl' ] }, { required: [ '_id' ] } ], noDefaultType  },
  VideoObject      : { props: [ 'caption'], anyOf: [ { required: [ 'name', 'contentUrl' ] }, { required: [ '_id' ] } ], noDefaultType  },
  ImageObject      : { props: [ 'caption'], anyOf: [ { required: [ 'name', 'contentUrl' ] }, { required: [ '_id' ] } ], noDefaultType  },

  //Schema/Thing/Organization
  Organization     : { props: [ 'size', 'address','foundingDate', 'nationalScope', 'nonprofitStatus','event', 'funder', 'knowsLanguage', 'numberOfEmployees', 'logo', 'member', 'memberOf','areaServed', 'parentOrganization', 'subOrganization', 'location', 'contactPoint', 'telephone', 'sponsor' ], anyOf },
  Project          : { anyOf:requiredType, noDefaultType },

  Consortium             : { anyOf:requiredType, noDefaultType },
  Corporation            : { anyOf:requiredType, noDefaultType },
  EducationalOrganization: { anyOf:requiredType, noDefaultType },
  GovernmentOrganization : { anyOf:requiredType, noDefaultType },
  MedicalOrganization    : { anyOf:requiredType, noDefaultType },
  NGO                    : { anyOf:requiredType, noDefaultType },
  FundingAgency          : { anyOf:requiredType, noDefaultType },
  UNCS                   : { anyOf:requiredType, noDefaultType },

  //Intangible(s)
  QuantitativeValue:  { props: [ 'value', 'minValue', 'maxValue' ], anyOf:[ { required: [ 'value' ] }, { required: [ '_id' ] }, { required: [ '@value' ] } ] },
  ProgramMembership: { anyOf, props: [ 'hostingOrganization', 'member', 'programName' ] },
  ContactPoint     : { anyOf, props: [ 'availableLanguage', 'contactType', 'email', 'telephone' ] },
  Language         : { anyOf },
  GeoCoordinates : { props: [ 'address', 'addressCountry', 'latitude', 'longitude', 'postalCode' ], anyOf:requiredType, noDefaultType },
  StructuredValue: { props: [ 'name','description','maxValue', 'minValue', 'value' ], anyOf:requiredType, noDefaultType  },
  OrganizationSize: {  anyOf:requiredType, noDefaultType },

  //Schema/Thing/Intangible/Enumeration
  Enumeration      : { anyOf:requiredType, noDefaultType },
  NonprofitType    : { anyOf:requiredType, noDefaultType },
  ActionStatusType : { anyOf:requiredType, noDefaultType }, //ActiveActionStatus CompletedActionStatus FailedActionStatus PotentialActionStatus
  StatusEnumeration: { anyOf:requiredType, noDefaultType },

  //Person(s)
  Person           : { props: [ 'affiliation', 'worksFor', 'jobTitle', 'familyName', 'additionalName', 'givenName', 'telephone', 'email', 'nationality', 'honorificPrefix', 'honorificSuffix' ], anyOf: [ { required: [ 'name', 'email' ] },  { required: [ '_id' ] } ] },

  //Place(s)
  Place             : { props: ['address','containsPlace', 'containedInPlace', 'hasMap', 'geo', 'logo'], anyOf:requiredType, noDefaultType },
  Landform          : { anyOf:requiredType, noDefaultType },
  AdministrativeArea: { anyOf:requiredType, noDefaultType },

  //Place(s)>AdministrativeArea(s)
  Country           : { anyOf:requiredType, noDefaultType },
  State             : { anyOf:requiredType, noDefaultType },
  City              : { anyOf:requiredType, noDefaultType },

  //Actions(s)
  Action : { props: [ 'actionStatus', 'agent', 'endTime', 'startTime', 'location', 'result', 'participant' ], anyOf },
  //Schema > Thing > Action > InteractAction > CommunicateAction
  CommunicateAction:  { props: [ 'actionStatus', 'about', 'inLanguage', 'recipient' ], anyOf: [{ required: [ 'about', '@type', 'recipient', 'actionStatus' ] } ] } ,

  //Custom Classes
  ...customClasses
}



export default { anyOf, vocabReadPath, vocabName, vocabAbbreviation, customVocabId, enumMembersWritePath, enumClassesWritePath, knownArrays, classes, schemaIdRoot, enumClassesId, enumMembersId, typesId,  propsId, classesId, schemaWritePath, typesWritePath, propsWritePath, classesWritePath }