import   axios                        from 'axios'
import { initializeApiStore, lookUp } from '@action-agenda/cached-apis'

export const getAction = async ({ api }, identifier=getActionIdFromQuery()) => {
  try {
    await initializeApiStore()

    const { data } = await axios.get(`${api}/v2019/actions/${encodeURIComponent(identifier)}`)
    
    return data // normalize here
  }
  catch (e){ console.error('', e) }
}

function getActionIdFromQuery(){
  if (typeof window === 'undefined') return false

  const urlParams = new URLSearchParams(location.search)

  return urlParams.get('action-id') || ''
}
