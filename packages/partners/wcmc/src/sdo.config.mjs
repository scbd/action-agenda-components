import * as extended from '@action-agenda/default-config'

export const extendsSdoConfig  = 'https://cdn.cbd.int/@action-agenda/default-config'

const anyOf = [ { required: [ 'hostingOrganization', 'member' ] }, { required: [ '_id', '@type' ] }, { required: [ 'identifier', '@type' ] } ]

export const classes = {
  ProgramMembership: { anyOf, props: [ 'hostingOrganization', 'member', 'programName' ] }
}

export default { extendsSdoConfig, extended, classes }