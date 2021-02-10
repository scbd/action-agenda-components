import Express                from 'express'
import bodyParser             from 'body-parser'
import createLocaleMiddleware from 'express-locale'


import { loadPostRoute            } from './post.mjs'
import { loadSchemaRoutes         } from './schema.mjs'
import { loadGetRoutes            } from './get.mjs'
import { loadListRoutes           } from './list.mjs'
import { loadPutRoute             } from './put.mjs'
import { localeOptions            } from '../middleware/$context/index.mjs'
import { loadActionRoutes         } from './actions/index.mjs'

export const loadRoutes = async (router = Express.Router()) => {

  router.use(bodyParser.json())
  router.use(createLocaleMiddleware(localeOptions))

  router = await loadSchemaRoutes(router)
  router = await loadListRoutes(router)
  router = await loadGetRoutes(router)
  router = await loadPostRoute(router)
  router = await loadPutRoute(router)
  router = await loadActionRoutes(router)
  
  return router
}