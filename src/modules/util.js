const safeStringify = require('fast-safe-stringify')
const stringify     = safeToString

module.exports = { stringify: stringify, debug: debug }

function handleErrorObject(key, value) {
    if (!(value instanceof Error))  return value
      
    return  Object.getOwnPropertyNames(value)
                .reduce((error, key) =>{
                                        error[key] = value[key]
                                        return error
                                    }, 
                        {})
}

function debug() {
    if (!process.env.DEBUG &&  !process.env.VUE_APP_DEBUG) return

    let args = [].slice.call(arguments)

    args.unshift('DEBUG:')
    console.log.apply(console, args)
}

function safeToString(json) {
  try { return JSON.stringify(json) } 
  catch (ex) {
    return safeStringify(json, handleErrorObject, '  ')
  }
}