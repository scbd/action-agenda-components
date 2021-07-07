const globalProps = { page: { sk: 0, l: 10 } }
const clone       = (obj) => JSON.parse(JSON.stringify(obj))

export const getIsPageZero  = () => globalProps.page.sk < globalProps.page.l
export const resetPaging    = () => globalProps.page = { sk: 0, l: 10 }
export const getPage        = () => Object.freeze(clone(globalProps.page))

export const getNextPage  = () => {
  globalProps.page.sk+= globalProps.page.l

  return getPage()
}
