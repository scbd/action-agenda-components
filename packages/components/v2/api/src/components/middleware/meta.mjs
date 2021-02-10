import { getCollection } from '../mongo/index.mjs'
import { consola       } from '../logger.mjs'

export const meta = async (req, res, next) => {
  const { body, $context } = req
  const   meta             = await getDocumentMeta(body)

  req.body.meta = meta? updateMetaText($context, meta) : newMetaText($context)

  return next()
}

export const updateMetaText = ({ user, partnerIdentifier }, meta )=>{
  meta.modifiedOn        = new Date()
  meta.modifiedBy        = user.id
  meta.modifiedByPartner = partnerIdentifier
  meta.updatedByText     = `${partnerIdentifier}:${user.name}`

  return meta
}

async function getDocumentMeta({ identifier }){
  if(!identifier) return undefined
  
  const identifierValues = identifier.map(({ value }) => value)
  const db               = await getCollection()

  const { meta } = (await db.findOne({ 'identifier.value': { $in: identifierValues } }, { projection: { meta: 1 }})) || {}

  return meta
}

function newMetaText({ user, partnerIdentifier }){
  const createdBy         = user.id
  const modifiedBy        = user.id
  const createdOn         = new Date()
  const modifiedOn        = new Date()
  const updatedByText     = `${partnerIdentifier}:${user.name}`
  const version           = 0

  return { createdBy, modifiedBy, createdOn, modifiedOn, partnerIdentifier, updatedByText, version }
}


