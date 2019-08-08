
import BrowserConsole from 'winston-transport-browserconsole'
import { createLogger, format } from 'winston'
import  SCBDTransport from './SCBDInfraLogsWinston'

const BROWSER_CONSOLE_LOG_LEVEL = process.env.BROWSER_CONSOLE_LOG_LEVEL || process.env.VUE_APP_BROWSER_CONSOLE_LOG_LEVEL

const SCBDTrans                = new SCBDTransport({ handleRejections:true, handleExceptions: true,format: format.json(), level:BROWSER_CONSOLE_LOG_LEVEL })
const consoleBrowserInstance   = new BrowserConsole({ format: format.simple(), level:BROWSER_CONSOLE_LOG_LEVEL })

const logger =  createLogger ({  transports: [consoleBrowserInstance,SCBDTrans]  })


export const vueErrorHandler = (err, vm, info) =>{
    let compName = (vm || {})._name
    logger.error(`Exception: ${compName}:${info} Msg:`, err)
}

export default logger