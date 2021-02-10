import { getVersionsCollection, getCollection } from '../mongo/connection.mjs'
import { consola                              } from '../logger.mjs'
import   hasher                                 from 'object-hash'

export const versioning = async ({ $context }, res, next) => {
  const versionDoc = await documentExists($context.operationClone)

  versionDoc? saveVersion($context.operationClone) : await createVersionDataStructure($context.operationClone)  // if not exists create document data struct else update versions
  
  return next()
}

async function documentExists({ _id }){
  if(!_id) return undefined

  const db = await getVersionsCollection()

  return await db.findOne({ _id })
}

async function saveVersion(doc){
  const docClone = JSON.parse(JSON.stringify(doc))

  delete docClone.meta 

  const hash        = hasher(JSON.stringify(docClone))

  if(doc.meta.hash === hash) return 

  const vCollection = await getVersionsCollection()
  const collection  = await getCollection()
  const { _id }     = doc
  const query       = { _id }

  doc.meta.hash     = hash
  doc.meta.version  = isNumber(doc.meta.version)? doc.meta.version+1 : 0

  const vUpdate    = vCollection.updateOne(query, { $push: { versions: doc } })
  const metaUpdate = collection.updateOne(query, { $set: { 'meta.version': doc.meta.version, 'meta.hash': hash } })

  return Promise.all([vUpdate, metaUpdate])
}

async function createVersionDataStructure(doc){
  const docClone    = JSON.parse(JSON.stringify(doc))

  delete docClone.meta 

  const hash        = hasher(JSON.stringify(docClone))
  
  doc.meta.hash     = hash

  const vCollection = await getVersionsCollection()
  const collection  = await getCollection()
  const versionDoc  = getDataStructureTemplate(doc)
  const { _id }     = doc
  const query       = { _id }

  const vUpdate    = vCollection.insertOne(versionDoc)
  const metaUpdate = collection.updateOne(query, { $set: { 'meta.hash': hash } })

  return Promise.all([vUpdate, metaUpdate])
}

function getDataStructureTemplate(doc){
  return { _id: doc._id, versions: [doc], drafts: {} }
}

function isNumber(n){ return Number(n) === n }