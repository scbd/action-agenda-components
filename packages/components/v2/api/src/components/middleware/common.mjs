import   isPlainObject  from 'lodash.isplainobject';
import { authenticate } from '../middleware/authorizer.mjs'
import { logger       } from '../logger.mjs'

import { setPartnerConfig, setAllLocale, setPartnerSchema } from './$context/index.mjs'

export const useCommonToAllMiddleware = () => {

  return [ removeMetas, setPartnerConfig, setAllLocale, authenticate, setPartnerSchema, logger ]
}

function removeMetas (req, res, next){
  const { body } = req

  if(!body || !isPlainObject(body)) return next()
  for (const key in body)
    if(key === 'meta') delete body[key]

  return next()
}