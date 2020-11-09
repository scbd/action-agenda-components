export default {
  $id       : 'action',
  version   : '2019',
  title     : 'Actions',
  collection: 'actions',
  type      : 'object',
  properties: {
    //mainEntityOfPage -> AboutPage - main text display
    _id       : { $ref: '#/definitions/guid' }, //  *._id
    identifier: {// *.identifier
      type           : 'array',
      minItems       : 1,
      maxItems       : 10,
      additionalItems: false,
      items          : { $ref: '#/definitions/propValue' }
    },
    actor: { // Project.sponsor oneOf: Person, NGO, GovernmentOrganization, Corporation
      oneOf: [ { $ref: '#/definitions/personActor' }, { $ref: '#/definitions/organizationActor' }, { $ref: '#/definitions/publicActor' } ]
    },
    action: { // Project
      type      : 'object',
      properties: {
        name       : { $ref: '#/definitions/lstring' }, // Project.name
        description: { $ref: '#/definitions/description' }, // Project.description
        attachments: { // Project.subjectOf.MediaObject
          type           : 'array',
          minItems       : 1,
          maxItems       : 100,
          additionalItems: false,
          items          : { $ref: '#/definitions/attachment' }

        }
      },
      additionalProperties: false,
      required            : [ 'name', 'description' ]
    },
    actionDetails: {
      type      : 'object',
      properties: {
        operationalAreas: { // Project.areaServed.AdministrativeArea && Project.areaServed.GeoShape
          type           : 'array',
          minItems       : 1,
          maxItems       : 100,
          additionalItems: false,
          items          : {
            type                : 'object',
            additionalProperties: false,
            required            : [
              'identifier'
            ],
            properties: {
              identifier: {
                type     : 'string',
                minLength: 2,
                maxLength: 50
              }
            }
          }
        },
        thematicAreas: {  // Project.parentOrganization

          type           : 'array',
          minItems       : 1,
          maxItems       : 100,
          additionalItems: false,
          items          : {
            type                : 'object',
            additionalProperties: false,
            required            : [
              'identifier'
            ],
            properties: {
              identifier: {
                type     : 'string',
                minLength: 2,
                maxLength: 50
              }
            }
          }
        },
        aichiTargets: { // Project.parentOrganization
          type           : 'array',
          minItems       : 1,
          maxItems       : 100,
          additionalItems: false,
          items          : {
            type                : 'object',
            additionalProperties: false,
            required            : [
              'identifier'
            ],
            properties: {
              identifier: {
                type     : 'string',
                minLength: 15,
                maxLength: 15
              }
            }
          }
        },
        sdgs: { // Project.parentOrganization
          type    : 'array',
          minItems: 1,
          maxItems: 100,
          items   : {
            type                : 'object',
            additionalProperties: false,
            properties          : {
              identifier: {
                type     : 'string',
                format   : 'uri',
                maxLength: 2083,
                minLength: 4
              }
            }
          },
          additionalItems: false
        },
        progressMeasured: { $ref: '#/definitions/description' }, // Action : [AssessAction, AchieveAction, CreateAction, PlanAction, UpdateAction]
        website         : { $ref: '#/definitions/url' } // Project.url
      },
      additionalProperties: false

    },
    partners: { // Project.member : anyOf:  Person, NGO, GovernmentOrganization, Corporation
      type           : 'array',
      minItems       : 1,
      maxItems       : 100,
      additionalItems: false,
      items          : { oneOf: [ { $ref: '#/definitions/organization' } ] }
    },
    contacts: { // Project.contactPoint Project.employee.contactPoint
      type           : 'array',
      minItems       : 1,
      maxItems       : 100,
      additionalItems: false,
      items          : { $ref: '#/definitions/personContact' }
    },
    subscription: { //Person.memberOf ProgramMembership
      type      : 'object',
      required  : [ 'list' ],
      properties: {
        list: { type: 'string', minLength: 1, maxLength: 256 },
        tags: {
          type           : 'array',
          minItems       : 0,
          maxItems       : 100,
          additionalItems: false,
          items          : { type: 'string', minLength: 1, maxLength: 256 }
        }
      },
      additionalProperties: false
    },
    accountSignup: { //Person.memberOf ProgramMembership
      oneOf: [ { type: 'string', format: 'date-time' }, { type: 'boolean' } ]
    }
  },
  definitions: {
    propValue: {
      type                : 'object',
      additionalProperties: false,
      required            : [ 'value', 'name' ],
      properties          : {
        name : { type: 'string', minLength: 3, maxLength: 256 },
        value: { type: 'string', minLength: 3, maxLength: 256 }
      }
    },
    country: {
      type                : 'object',
      additionalProperties: false,
      required            : [ 'identifier' ],
      properties          : {
        identifier: { type: 'string', minLength: 2, maxLength: 2 }
      }
    },
    guid  : { type: 'string', pattern: '^[0-9a-fA-F]{24}$', minLength: 24, maxLength: 24 },
    person: {
      type      : 'object',
      properties: {
        actorType : { enum: [ 'person' ]               },
        salutation: { $ref: '#/definitions/lstring' },
        firstName : { $ref: '#/definitions/lstring' },
        middleName: { $ref: '#/definitions/lstring' },
        lastName  : { $ref: '#/definitions/lstring' },
        suffix    : { $ref: '#/definitions/lstring' },
        name      : { $ref: '#/definitions/lstring' },
        email     : { type: 'string', format: 'email', minLength: 3, maxLength: 254 },
        country   : { $ref: '#/definitions/country' }
      },
      additionalProperties: false
    },

    personActor: {
      $ref    : '#/definitions/person',
      required: [ 'lastName', 'email', 'country', 'actorType' ]
    },
    personContact: {
      $ref    : '#/definitions/person',
      required: [ 'lastName', 'email' ]
    },

    organization: {
      type      : 'object',
      properties: {
        name     : { $ref: '#/definitions/lstring' },
        url      : { $ref: '#/definitions/url' },
        country  : { $ref: '#/definitions/country' },
        image    : { $ref: '#/definitions/attachment' },
        typeOther: { $ref: '#/definitions/lstring' },
        types    : {
          type           : 'array',
          minItems       : 1,
          maxItems       : 100,
          additionalItems: false,
          items          : {
            type                : 'object',
            additionalProperties: false,
            required            : [
              'identifier'
            ],
            properties: {
              identifier: {
                type     : 'string',
                minLength: 1,
                maxLength: 36
              }
            }
          },
          other: { $ref: '#/definitions/lstring' }
        }
      },
      required: [ 'name' ]
          
    },
    organizationActor: {
      allOf: [
        { $ref: '#/definitions/organization' },
        {
          properties: { actorType: { enum: [ 'organization' ] } },
          required  : [ 'name', 'country', 'actorType' ]
        }
      ]
    },
    publicActor: {
      allOf: [
        { $ref: '#/definitions/organization' },
        {
          properties: { actorType: { enum: [ 'public' ] } },
          required  : [ 'name', 'country', 'actorType' ]
        }
      ]
    },
    attachment: {
      type      : 'object',
      properties: {
        url : { type: 'string', format: 'uri', maxLength: 2083, minLength: 4 },
        tag : { type: 'string', minLength: 1, maxLength: 20 },
        name: { $ref: '#/definitions/lstring' }
      },
      required            : [ 'url' ],
      additionalProperties: false
    },
    description: {
      type      : 'object',
      properties: {
        ar: { type: 'string', minLength: 1, maxLength: 1500 },
        en: { type: 'string', minLength: 1, maxLength: 1500 },
        es: { type: 'string', minLength: 1, maxLength: 1500 },
        fr: { type: 'string', minLength: 1, maxLength: 1500 },
        ru: { type: 'string', minLength: 1, maxLength: 1500 },
        zh: { type: 'string', minLength: 1, maxLength: 1500 }
      },
      additionalProperties: false
    },
    lstring: {
      type      : 'object',
      properties: {
        ar: { type: 'string', minLength: 1, maxLength: 240 },
        en: { type: 'string', minLength: 1, maxLength: 240 },
        es: { type: 'string', minLength: 1, maxLength: 240 },
        fr: { type: 'string', minLength: 1, maxLength: 240 },
        ru: { type: 'string', minLength: 1, maxLength: 240 },
        zh: { type: 'string', minLength: 1, maxLength: 240 }
      },
      additionalProperties: false
    },
    url: { type: 'string', format: 'uri', maxLength: 2083, minLength: 4 }

  },
  required            : [ 'actor', 'action', 'contacts' ],
  additionalProperties: false,
  security            : {
    schema: [ 'Everyone' ],
    list  : [ 'Everyone' ],
    read  : [ 'Everyone' ],
    create: [ 'Everyone' ],
    update: [ 'ActionAdmin' ],
    delete: [ 'ActionAdmin' ]
  },
  notification: { queue: 'action' }
}