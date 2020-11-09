import { initializeApiStore                   } from '@action-agenda/cached-apis'
import { initializeOptions                    } from './options'
import { list, resetListCache   } from './list'
import { counts, resetCountsCache } from './counts'

export { updateOptions } from  './options' // eslint-disable-line
export const getList   = list
export const getCounts = counts

export const initializeApi = (options) => {
  initializeApiStore()
  initializeOptions(options)
}

export const resetCache = () => {
  resetListCache()
  resetCountsCache()
}