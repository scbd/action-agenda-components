import Express from 'express'

import { loadOrganizationActionRoutes } from './organizations.mjs'
import { loadPlacesActionRoutes       } from './places.mjs'
import { loadStatusActionRoutes       } from './status.mjs'

export const loadActionRoutes = async (router = Express.Router()) => {

  router = await loadOrganizationActionRoutes(router)
  router = await loadPlacesActionRoutes(router)
  router = await loadStatusActionRoutes(router)

  return router
}