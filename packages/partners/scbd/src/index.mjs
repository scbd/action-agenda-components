import jsonSchema from './json-schema.mjs'
import graph from './graph.mjs'


export const getJsonSchema = () => jsonSchema
export const getGraph = () => graph

export * from './config.mjs'
export const getSdoConfig = () => ({
  "rootId": "https://cdn.cbd.int/@action-agenda/scbd/dist",
  "enumMembersId": "https://cdn.cbd.int/@action-agenda/scbd/dist/enumMembers",
  "enumClassesId": "https://cdn.cbd.int/@action-agenda/scbd/dist/enumClasses",
  "typesId": "https://cdn.cbd.int/@action-agenda/scbd/dist/types",
  "propsId": "https://cdn.cbd.int/@action-agenda/scbd/dist/props",
  "classesId": "https://cdn.cbd.int/@action-agenda/scbd/dist/classes",
  "customVocabId": "https://cdn.cbd.int/@action-agenda/scbd/dist/vocab",
  "extendsSdoConfig": "https://cdn.cbd.int/@action-agenda/default-config",
  "classes": {
    "ProgramMembership": {
      "anyOf": [{
        "required": ["name"]
      }, {
        "required": ["_id", "@type"]
      }, {
        "required": ["identifier", "@type"]
      }, {
        "required": ["@value"]
      }],
      "props": ["hostingOrganization", "member", "programName"]
    }
  },
  "anyOf": [{
    "required": ["name"]
  }, {
    "required": ["_id", "@type"]
  }, {
    "required": ["identifier", "@type"]
  }, {
    "required": ["@value"]
  }],
  "knownArrays": ["image", "sameAs", "member", "memberOf", "additionalType", "containsPlace", "containedInPlace", "hasMap", "parentOrganization", "subOrganization", "location", "mainEntityOfPage", "potentialAction", "subjectOf", "recipient", "agent", "spatialCoverage", "about"]
})