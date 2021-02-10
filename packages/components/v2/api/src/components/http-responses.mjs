import { consola , time, timeEnd } from './logger.mjs'

const TYPE = 'application/json'

export const  notModified        = ( res, message) =>  { 
  res.set('ref', JSON.stringify(message))
  return res.status(304).send({ statusCode: 304, code:'notModified'})
}
export const forbidden           = ({ method }, res, message) => res.status(403).send({ method, statusCode: 403, code:'forbidden', message: `Operation is not allowed${message? ': '+message : ''}` });
export const notFound            = (req, res, message) => {
  return res.status(404).send({ method: req.method, statusCode: 404, code:'notFound',  message: `Not found${message? ': '+message : ''}` });
}
export const invalidParameter    = ({ method }, res, field, message, errors) => res.status(400).send({ method, statusCode: 400, code:'invalidParameter', field:field, message: `Invalid parmeter value for: ${field} ${message}`, errors });
export const mandatory           = ({ method }, res, field, message) => res.status(400).send({ method, statusCode: 400, code:'mandatory', field:field,  message: `Value is mandatory:  ${field} - ${message}` });
export const badRequest          = ({ method }, res, message, errors) => res.status(400).send({ method, statusCode: 400, code:'badRequest', message: `Bad Request${message? ': '+message : ''}`, errors });
export const internalServerError = ({ method }, res,message) => res.status(500).send({ method, statusCode: 500, code:'internalServerError', message: `Internal Server Error${message? ': '+message : ''}`});
export const serviceUnavailable  = ({ method }, res,message) => res.status(503).send({ method, statusCode: 503, code:'serviceUnavailable', message: `Service Unavailable${message? ': '+message : ''}` });

export const errorHandler = (err, req, res, next) => {
    
  consola.error(`Unhandled exception occurred on HTTP request ${req.method} ${req.url}`);
  consola.error(err);

  try {

      if(res.headersSent){
          res.write('\n\nInternal Server Error writing response\n');
          res.end();
      }
      else {
          res.status(500).send('Internal Server Error\n');
      }
  }
  catch(ex) {
    consola.error("error writing error to http response ", ex);
  }

  next();
}

//TODO - this needs review it references list and has list trow on error
export const cursorToDocument = async (req, res, next) => {

  const { params, $context } = req
  const { cursor, isList, requestType, className } = $context

  time(`${requestType} request cursorToDocument took:`)

  const results = await cursor.limit(2).toArray();

 // if(results.length > 1) internalServerError(res, 'Error multiple documents found on single document query')//throw new Error('Error multiple documents found on single document query')

  if(isList)
    results[0]? res.status(200).send($context.mapFn(results[0])) : notFound(req, res, `List not found by class: ${className}`)
  else
    results[0]? res.status(200).send($context.mapFn(results[0])) : notFound(req, res, `Document with identifier not found: ${params.identifier}`)
  //next()
  return timeEnd(`${requestType} request cursorToDocument took:`);
}

export const streamCursor = async (req, res, next) => {
  const { method, $context } = req
  const { cursor, isCount  } = $context

  if(isCount) return cursorToDocument(req, res, next)

  time('LIST request streamCursor took:')

  const isHeadRequest = method === 'HEAD'
  const acceptsJson   = req.accepts(TYPE)

  if(isHeadRequest) {
      res.send();
      return cursor;
  }

  if(!acceptsJson ) return invalidParameter(req, res, 'Accept(HTTP-Header)', `Only support ${TYPE}`)

  await writeList(req, res)

  timeEnd('LIST request streamCursor took:');

  return cursor;
}



async function writeList(req, res){
  const { $context        } = req
  const { cursor  , mapFn } = $context

  res.type(TYPE);
  res.set ('stream-cursor', 'yes');
  res.status(200);
  res.write('[');

  let doc
  let count = 0;
  while((doc = await cursor.next())) {

    doc = await mapFn(doc);

    if(count++) res.write(',');

    res.write('\n');
    res.write(JSON.stringify(doc));
  }

  res.write('\n]\n');
  res.end();
}