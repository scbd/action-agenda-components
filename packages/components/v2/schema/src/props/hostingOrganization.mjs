export default {
  $id        : 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/props/hostingOrganization.mjs',
  $source    : 'https://schema.org/hostingOrganization',
  name       : 'hostingOrganization',
  title      : 'hostingOrganization',
  description: 'The organization (airline, travelers\' club, etc.) the membership is made with.',
  
  oneOf: [ { $ref: 'https://cdn.jsdelivr.net/npm/@action-agenda/schema/dist/classes/Organization.mjs' } ]
  
}
