export const localeOptions = { default: 'en-CA' }

export const setAllLocale = (req, res, next) => {
  req.$context.locale = req.locale

  if ('acceptsLanguages' in req)
    if(req.acceptsLanguages()[0] === '**')
      delete req.$context.locale
  
  delete req.locale
  return next()
}

export const lStringProjection = (language)=>{
  return [{
    $addFields: {
      name: `$name.${language}`,
      alternateName: `$alternateName.${language}`,
      description: `$description.${language}`,
      disambiguatingDescription: `$disambiguatingDescription.${language}`,
      text: `$text.${language}`
    }
  }]
}


