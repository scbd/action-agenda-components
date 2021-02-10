import express from 'express'
import http    from 'http'
import https   from 'https'
import cors    from 'cors'
import events  from 'events'

import   getOptions              from './default-options.mjs'
import { initMongo             } from './components/mongo/init.mjs'
import { loadRoutes            } from './components/controllers/index.mjs'
import { consola               } from './components/logger.mjs'
import { errorHandler, notFound} from './components/http-responses.mjs'

http  .globalAgent .maxSockets               = 200
https .globalAgent .maxSockets               = 200
events.EventEmitter.prototype ._maxListeners = 100

main()

async function main(){
  const { port } = getOptions()
  const app    = express()
  const server = http.createServer(app)

  app.set('json spaces', 2)
  app.use(cors())

  app.use(`/api/v2021/aa`, await loadRoutes());

  // app.use((req, res)=> notFound(res))
  app.use(errorHandler)

  server.listen(port || process.env.PORT || 8000, listening  );
}

function listening(){
  const { port } = getOptions()

  consola.info(`API server started. Listening on port ${port || process.env.PORT || 8000}. env: ${process.env.NODE_ENV}`)
  initMongo()
}