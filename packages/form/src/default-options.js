import getLocale from './components/locale.js'

const basePath      = '/'
const formType      = 'organization'
const label         = '' // form label
const api           = 'https://api.cbd.int/api'

const actionDetails = { // show these input fields
                        operationalAreas: true,
                        thematicAreas   : true,
                        aichiTargets    : true,
                        sdgs            : true,
                        progressMeasured: true
                      }

const contacts      = true // show these input fields
const partners      = true // show these input fields
const anonymous     = true // allow anon to fill form or make them sign in with accounts.cbd.int
const accountSignup = true // if anon, auto create account or associate account based on email.
const mailingList   = { list: 'action-agenda', tags: [ 'organization' ], msg: 'Join our mailing list and receive updates on the Action Agenda.' }

const options = {
  formType, api, basePath, getLocale, label, actionDetails, contacts, partners, anonymous, accountSignup, mailingList
}

const organizationOptions         = options
const publicOrganizationOptions   = { ...organizationOptions, formType: 'public',   mailingList: { ...mailingList, tags:[ 'public' ] } }
const businessOrganizationOptions = { ...organizationOptions, formType: 'business', mailingList: { ...mailingList, tags:[ 'business' ] } }

const personOptions               = { ...organizationOptions,       formType: 'person', mailingList: { ...mailingList, tags:[ 'person' ] } }
const partyOptions                = { ...publicOrganizationOptions, formType: 'party' ,  anonymous: false, accountSignup: false, mailingList: { ...mailingList, tags:['party'] } }

const formTypeMap = new Map([
  [ 'organization', organizationOptions         ],
  [ 'public'      , publicOrganizationOptions   ],
  [ 'person'      , personOptions               ],
  [ 'business'    , businessOrganizationOptions ],
  [ 'party'       , partyOptions                ]
])

export default (formType) => formTypeMap.get(formType) || organizationOptions