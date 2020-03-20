import safeStringify from 'fast-safe-stringify'
import axios from 'axios'


export const debug = ()  => {
    if (!process.env.DEBUG &&  !process.env.VUE_APP_DEBUG) return

    let args = [].slice.call(arguments)

    args.unshift('DEBUG:')
    console.log.apply(console, args)
}

export const safeToString = (json) => {
  try { return JSON.stringify(json) } 
  catch (ex) {
    return safeStringify(json, handleErrorObject, '  ')
  }
}

export const trimHyperTextProtocol = (urlStr) => {
  try{
    const { host, pathname, search } = new URL(urlStr)
    const cleanPath                  = pathname.length===1? '' : pathname

    return `${host}${cleanPath}${search}`
  } catch (ex) { return urlStr }
}

export const testUri = async(url) => {
  const { data } = await axios.post('https://injo3jyxlb.execute-api.us-east-1.amazonaws.com/stg/test', { url })

  return data
}

function handleErrorObject(key, value) {
  if (!(value instanceof Error))  return value
    
  return  Object.getOwnPropertyNames(value)
              .reduce((error, key) =>{
                                      error[key] = value[key]
                                      return error
                                  }, 
                      {})
}