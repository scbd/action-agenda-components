export const schemaIdRoot  = 'https://cdn.cbd.int/@action-agenda/schema/dist'
export const typesId       = `${schemaIdRoot}/types`
export const propsId       = `${schemaIdRoot}/props`
export const classesId     = `${schemaIdRoot}/classes`
export const enumClassesId = `${schemaIdRoot}/enumClasses`
export const enumMembersId = `${schemaIdRoot}/enumMembers`

export const schemaWritePath      = '/src'
export const typesWritePath       = `${schemaWritePath}/types`
export const propsWritePath       = `${schemaWritePath}/props`
export const classesWritePath     = `${schemaWritePath}/classes`
export const enumClassesWritePath = `${schemaWritePath}/enumClasses`
export const enumMembersWritePath = `${schemaWritePath}/enumMembers`

export const knownArrays = [ 'image', 'sameAs', 'additionalType' ]
export const lstrings    = [ 'name', 'description', 'text' ]

export const classes = {
  AboutPage        : { props: [ 'text', 'mainEntity', 'lastReviewed', 'primaryImageOfPage', 'relatedLink', 'about', 'author', 'dateCreated', 'dateModified', 'editor', 'inLanguage', 'isFamilyFriendly', 'spatialCoverage', 'version' ] },
  CreativeWork     : { props: [  ] },
  Action           : { props: [ 'actionStatus', 'agent', 'endTime', 'startTime', 'location', 'result' ] },
  ImageObject      : { props: [ 'thumbnail', 'caption', 'contentUrl', 'uploadDate', 'width', 'height', 'contentSize' ] },
  Organization     : { props: [ 'logo', 'member'   ] },
  Project          : { props: [ 'sponsor', 'member', 'memberOf', 'location', 'contactPoint', 'logo' ] },
  Person           : { props: [ 'jobTitle', 'familyName', 'additionalName', 'givenName', 'telephone', 'email', 'nationality' ] },
  PropertyValue    : { props: [ 'propertyID', 'value' ] },
  ProgramMembership: { props: [ 'hostingOrganization', 'member', 'programName' ] },
  ContactPoint     : { props: [ 'availableLanguage', 'contactType', 'email', 'telephone' ] }
}

export const mongo = true

export default { enumMembersWritePath, enumClassesWritePath, knownArrays, classes, schemaIdRoot, enumClassesId, enumMembersId, typesId,  propsId, classesId, schemaWritePath, typesWritePath, propsWritePath, classesWritePath, mongo }