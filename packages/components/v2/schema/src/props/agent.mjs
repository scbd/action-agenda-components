export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/agent.mjs',
  $source    : 'https://schema.org/agent',
  name       : 'agent',
  title      : 'agent',
  description: 'The direct performer or driver of the action (animate or inanimate). e.g. <em>John</em> wrote a book.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Person.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs' } ]
  
}
