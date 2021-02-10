import   Mongo            from 'mongodb'
import { loadMongoQuery } from './sanitizer.mjs'
import { consola        } from '../../logger.mjs'

export const  parseQuery = (req, res, next) => {
  // consola.warn('Middleware: parseQuery', req.params)
  try {
      const { $context, query } = req
      const { dbQuery, agDbQuery } = loadMongoQuery(req.query)

      $context.agDbQuery = agDbQuery
      $context.dbQuery   = dbQuery

      // consola.warn('Middleware: parseReadPreference')
      
      return parseReadPreference(req, res, next);

  } catch(error) {
    consola.error(error)
    return res.status(400).send({ statusCode: 400, message: error });
  }
}

export const parseReadPreference = ({ $context }, res, next) => {
  const { dbQuery, query } = $context

  if(dbQuery.rp) return next(); // already loaded
      
  if(!query?.rp) return next();  // no pref

  const rp = Mongo.ReadPreference.PRIMARY_PREFERRED

  $context.dbQuery = {...(dbQuery || {}), ...{ rp }};

  return next()
}

