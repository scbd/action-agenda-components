

export const validateUrl = (value) => (new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi)).test(value)

export const  resetForm = async (root) => {
    let props = Object.keys(root)
  
    for (let i = 0; i < props.length; i++) {
      let prop = root[props[i]]
      let propType = typeof prop
  
      if(propType === 'object') await resetForm(root[props[i]])
      else if(propType === 'array')  root[props[i]] = []
      else root[props[i]] = ''
    }
  }

  export const clone =  (src)  => {
    return JSON.parse(JSON.stringify(src))
  }

  export const dateFormat = (date) => {
    let d = new Date(date)
    return `${d.getUTCDate()} ${getMonth(d.getUTCMonth())} ${d.getUTCFullYear()}`
  }

  export const lStringFilter= (value) => {
    let locale = 'en'
    if(!value) return ''

    if(value[locale]) return value[locale]

    return ''
  }

  function getMonth(num){
    let months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
    return months[num]
  }


