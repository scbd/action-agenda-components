import consolaModule from 'consola'
import colors from 'colors'

const config = { middlewares: false, controllers: true, val:true }

const { WinstonReporter } = consolaModule

const aConsola   = consolaModule.create({level: 4})
const isDev      = process.env.NODE_ENV !== 'production'

const midware  = ['bgYellow', 'black', 'bold']
const ctrl     = ['bgBlue', 'white', 'bold']
const val      = ['bgRed', 'black']

colors.setTheme({ midware, ctrl, val });

if(isDev) process.env.CONSOLA_LEVEL = 5
// aConsola.addReporter(WinstonReporter) 

export const consola = { ...aConsola, middleware, controller, validation }

export const time = (label) => {
  if(isDev) console.time(label)
}

export const timeEnd = (label) => {
  if(isDev) console.timeEnd(label)
}

export const logger = (req, res, next) => {

  const { method, url, baseUrl, originalUrl, query, headers, body }                    = req
  const { 'content-type': contentType, 'partner-identifier': partnerIdentifier } = headers

  if(isDev ) consola.info(`${method}`, JSON.stringify({ headers: { contentType, partnerIdentifier }, method, url, baseUrl, originalUrl, query }))
  if(isDev ) consola.info(`${method}`, JSON.stringify({ body }))
  
  next()
}

function middleware(name, data=''){
  if(!isDev || !config.middlewares) return

  consola.log(colors.midware(`MIDDLEWARE:`)+` ${name}`, data)
}

function controller(name, data=''){
  if(!isDev || !config.controllers) return

  consola.log(colors.ctrl(`CONTROLLER:`)+` ${name}`, data)
}

function validation(name, data=''){
  if(!isDev || !config.val) return

  consola.log(colors.val(`VALIDATION:`)+` ${name}`, data)
}