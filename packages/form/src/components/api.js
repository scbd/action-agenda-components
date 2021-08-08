import   axios                        from 'axios'
import { initializeApiStore} from '@action-agenda/cached-apis'

export const getAction = async ({ api }, identifier=getActionIdFromQuery()) => {
  try {
    await initializeApiStore()

    if(!identifier) return undefined
    
    const { data } = await axios.get(`${api}/v2019/actions/${encodeURIComponent(identifier)}`)
    
    return normalize(data)
  }
  catch (e){ console.error('', e) }
}

function getActionIdFromQuery(){
  if (typeof window === 'undefined') return false

  const urlParams = new URLSearchParams(location.search)

  return urlParams.get('identifier') || ''
}

function normalize(data){
  if(!data || !data.actor) return data

  const { types, typeOther } = data.actor

  if(!types) return data
  if(types.includes('ORG-TYPE-OTHER') && ! typeOther) data.actor.typeOther = { en: '' }

  return data
}


