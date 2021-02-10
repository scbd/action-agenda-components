import   Express                    from 'express'
import { consola                  } from '../../logger.mjs'
import { useCommonToAllMiddleware } from '../../middleware/index.mjs'

import { invalidParameter, internalServerError } from '../../http-responses.mjs'
import { isRefInArray, getDocs, updateArrayProp } from './util.mjs'

export const loadOrganizationActionRoutes = async (router = Express.Router()) => {

  router.post (`/:identifier/member/:organizationIdentifier`   , ...useCommonToAllMiddleware(), member)
  router.post (`/:identifier/memberOf/:organizationIdentifier` , ...useCommonToAllMiddleware(), memberOf )

  router.post (`/:identifier/subOrganization/:organizationIdentifier`   , ...useCommonToAllMiddleware(), subOrganization)
  router.post (`/:identifier/parentOrganization/:organizationIdentifier` , ...useCommonToAllMiddleware(), parentOrganization )

  return router
}

async function member(req, res) {
  try {
    consola.controller('/:identifier/member/:organizationIdentifier')
    const { self, organization } = await getDocs(req, res, 'Organization')

    if(!self || !organization) return 

    if(isRefInArray(organization, self.member)) return res.status(200).send({ exists: 1 })
    if( self._id === organization._id) return res.status(200).send({ exists: 0, updated: 0 })
    
    await updateMember(req, self, organization)

    await updateMemberOf(req, organization, self)

    return res.status(200).send({ exists: 0 })
  }
  catch(e){

    if(e.response?.body && Object.keys(e.response?.body).length)
      return invalidParameter(e.response.body, res, e.response.body.field, e.response.body.message, e.response.body.errors )

    consola.error('failed to post/insert document', e)
    return internalServerError(req, res)
  }
}

async function memberOf(req, res) {
  try {
    consola.controller(`/:identifier/memberOf/:organizationIdentifier`)
    const { self, organization } = await getDocs(req, res, 'Organization')

    if(!self || !organization) return 

    if(isRefInArray(organization, self.member)) return res.status(200).send({ exists: 1 })
    if( self._id === organization._id) return res.status(200).send({ exists: 0, updated: 0 })

    await updateMemberOf(req, self, organization )

    await updateMember(req, organization, self )

    return res.status(200).send({  })
  }
  catch(e){
    if(e.response?.body && Object.keys(e.response?.body).length)
      return invalidParameter(e.response.body, res, e.response.body.field, e.response.body.errors )

    consola.error('failed to post/insert document',e)
    return internalServerError(req, res)
  }
}

async function subOrganization(req, res) {
  try {
    consola.controller('/:identifier/subOrganization/:organizationIdentifier')
    const { self, organization } = await getDocs(req, res, 'Organization')

    if(!self || !organization) return 

    if(isRefInArray(organization, self.member)) return res.status(200).send({ exists: 1 })
    if( self._id === organization._id) return res.status(200).send({ exists: 0, updated: 0 })

    await updateSubOrganization(req, self, organization)

    await updateParentOrganization(req, organization, self)

    return res.status(200).send({ exists: 0 })
  }
  catch(e){

    if(e.response?.body && Object.keys(e.response?.body).length)
      return invalidParameter(e.response.body, res, e.response.body.field, e.response.body.message, e.response.body.errors )

    consola.error('failed to post/insert document', e)
    return internalServerError(req, res)
  }
}

async function parentOrganization(req, res) {
  try {
    consola.controller('/:identifier/sparentOrganization/:organizationIdentifier')
    const { self, organization } = await getDocs(req, res, 'Organization')

    if(!self || !organization) return 

    if(isRefInArray(organization, self.member)) return res.status(200).send({ exists: 1 })
    if( self._id === organization._id) return res.status(200).send({ exists: 0, updated: 0 })

    await updateParentOrganization(req, self, organization)

    await updateSubOrganization(req, organization, self)

    return res.status(200).send({ exists: 0 })
  }
  catch(e){

    if(e.response?.body && Object.keys(e.response?.body).length)
      return invalidParameter(e.response.body, res, e.response.body.field, e.response.body.message, e.response.body.errors )

    consola.error('failed to post/insert document', e)
    return internalServerError(req, res)
  }
}
async function updateMember({ $context }, self, org){ return updateArrayProp( { $context }, 'member', self, org) }

async function updateMemberOf({ $context }, self, org){ return updateArrayProp( { $context }, 'memberOf', self, org)  }

async function updateParentOrganization({ $context }, self, org){ return updateArrayProp( { $context }, 'parentOrganization', self, org)  }

async function updateSubOrganization({ $context }, self, org){ return updateArrayProp( { $context }, 'subOrganization', self, org)  }