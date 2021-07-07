import { setDefaultOptions, getDefaultOptionsFunction } from '@houlagins/default-options'
import getLocale from './components/locale.js'

const name     = '@action-agenda/form'
const basePath = '/'
const locale   = getLocale()
const formType = 'organization'

  
const person = {
  label:false,
  locale,
  api: 'https://api.cbddev.xyz/api', basePath, locale,
  actionDetails:{      
    operationalAreas:false,
    thematicAreas:false, 
    aichiTargets:true, 
    sdgs:true,
    progressMeasured:true
  },
  contacts:false,
  partners:false,
  anonymous:true, 
  accountSignup:true, 
  mailingList:{list:'action-agenda', tags:['person'], msg:''}, 
}

const organization = {
  locale,
  label:false,
  api: 'https://api.cbddev.xyz/api', basePath, locale,
  actionDetails:{      
    operationalAreas:true,
    thematicAreas:true, 
    aichiTargets:true, 
    sdgs:true,
    progressMeasured:true
  },
  contacts:true,
  partners:true,
  anonymous:true, 
  accountSignup:true, 
  mailingList:{list:'action-agenda', tags:['organization'], msg:'Join our mailing list and receive updates on the Action Agenda.'}, 
}

const publicOrg = {
  locale,
  label:false,
  api: 'https://api.cbddev.xyz/api', basePath, locale,
  actionDetails:{      
    operationalAreas:true,
    thematicAreas:true, 
    aichiTargets:true, 
    sdgs:true,
    progressMeasured:true
  },
  contacts:true,
  partners:true,
  anonymous:true, 
  accountSignup:true, 
  mailingList:{list:'action-agenda', tags:['public'], msg:'Join our mailing list and receive updates on the Action Agenda.'}, 
}

const party = {
  locale,
  label:false,
  api: 'https://api.cbddev.xyz/api', basePath, locale,
  actionDetails:{      
    operationalAreas:true,
    thematicAreas:true, 
    aichiTargets:true, 
    sdgs:true,
    progressMeasured:true
  },
  contacts:true,
  partners:true,
  anonymous:false, 
  accountSignup:true, 
  mailingList:{list:'action-agenda', tags:['party'], msg:'Join our mailing list and receive updates on the Action Agenda.'}, 
}

const dev           = { formType, person, party, public:publicOrg, organization }
const stg           = { ...dev }
const prod          = { ...stg, person: { ...person, api: 'https://www.cbd.int/api' }, party: {...party , api: 'https://www.cbd.int/api' }, public:{... publicOrg, api: 'https://www.cbd.int/api'}, organization: {...organization, api: 'https://www.cbd.int/api'}  }

const environments  = { prod, stg, dev }
const validationMap = { formType: String, forceEnv: String, basePath: String, locale: String, api: String, person: Object, party: Object, public: Object, organization: Object }


setDefaultOptions({ environments, validationMap, name }, name)

export  default getDefaultOptionsFunction(name)