import { get$http             } from '@houlagins/load-http'
import { getOptions           } from './options'
import { getPage, getNextPage, resetPaging, getIsPageZero } from './paging'
import   getQuery               from './query'

const globalProps = { cache: new Map(), lastQuery: undefined }

export const list = async (next = false) => {
  try{
    const { cache }    = globalProps
    const   $http      = await get$http()
    const   isNewQuery = !next && !getIsPageZero()

    if(isNewQuery) resetPaging()

    const   page                         = next? getNextPage() : getPage()
    const [ api, headers, searchParams ] = await getQuery(page)
    
    const rows = cache.has(searchParams.toString())? cache.get(searchParams.toString()) : await $http.get(api, { headers, searchParams }).then((res) => res.json())

    updateCache(searchParams, rows)

    if(next) setTimeout(() => emitNextPageLoaded(), 250) //$nextPageLoaded

    return rows
  }
  catch(e){
    const msg = e.response? e.response.status : ''

    if(msg) return console.error(msg, e)

    return console.error(e)
  }
}

export const resetListCache = reset


function reset(){
  globalProps.lastQuery = undefined
  globalProps.cache.clear()
}

async function emitNextPageLoaded(){
  const { $el } = await getOptions()

  if(!$el) throw new Error('actions-api->list->emitNextPageLoaded: error $el not set vie actions-api->options->')
  const event = new Event('$nextPageLoaded', { bubbles: true })

  event.$page = getPage()

  $el.dispatchEvent(event)
}

function updateCache(searchParams, rows){
  const { cache } = globalProps

  globalProps.lastQuery = searchParams
  
  if(cache.has(searchParams.toString())) return

  cache.set(searchParams.toString(), rows)
}