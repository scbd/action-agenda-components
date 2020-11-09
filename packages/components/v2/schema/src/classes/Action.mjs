export default {
  $id                 : 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Action.mjs',
  $source             : 'https://schema.org/Action',
  title               : 'Action',
  description         : 'An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.<br/><br/>See also <a href="http://blog.schema.org/2014/04/announcing-schemaorg-actions.html">blog post</a> and <a href="https://schema.org/docs/actions.html">Actions overview document</a>.',
  type                : 'object',
  additionalProperties: false,
  allOf               : [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs' } ],
  properties          : {
    '@type'     : { const: 'Action', default: 'Action' },
    endTime     : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/endTime.mjs' },
    result      : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/result.mjs' },
    startTime   : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/startTime.mjs' },
    actionStatus: { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/actionStatus.mjs' },
    agent       : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/agent.mjs' },
    location    : { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/props/location.mjs' }
  }
}