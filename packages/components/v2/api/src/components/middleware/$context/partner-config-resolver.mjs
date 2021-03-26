import { partnerIdentifiers, getConfig, setPartnerContext } from '../../partner-config.mjs'

export const  setPartnerConfig = async(req, res, next) => {
  
  consola.warn('MIDDLEWARE parsePartnerIdentifier')

  if(!req?.headers['partner-identifier'] || !partnerIdentifiers.includes(req.headers['partner-identifier']))
    return res.status(403).send({ statusCode: 403, code:'forbidden', message: `Operation is not allowed: missing approved Action Agenda Partner Identifier: ${req.headers['partner-identifier']}` });

  const $context          = {}
  const partnerIdentifier = req.headers['partner-identifier'] || 'scbd'
  
  setPartnerContext(partnerIdentifier)

  $context.partnerIdentifier = partnerIdentifier
  $context.config            = !$context.config? await getConfig() : $context.config
  req.$context               = $context

  return next()
}
