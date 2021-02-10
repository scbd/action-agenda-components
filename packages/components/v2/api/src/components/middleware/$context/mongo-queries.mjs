import   getOptions   from '../../../default-options.mjs'

export const buildFieldResolingStages = ({ $context })=>{

  const { config, className, isList } = $context
  const { collectionName            } = getOptions()
  const { knownArrays               } = config.get('sdoConfig')
  const   tree                        = isList? getListResolve(): config.get('sdo').getTree(className||'Thing', knownArrays)

  const pipeline = []

  for (const field  of tree) {

    pipeline.push({  
      $lookup:{  
          from        : collectionName,
          localField  : `${field}._id`,
          foreignField: '_id',
          as          : `${field}TempA`
      }
    })

    pipeline.push({
                    $addFields: {
                      [`${field}`]: { 
                                $cond: { 
                                    if  : { $or:[ { $not: !knownArrays.includes(field) }, { $gt: [{ $size: `$${field}TempA` }, 1] }]},
                                    then: `$${field}TempA`,
                                    else: { 
                                      $cond: { 
                                          if  : { $eq: [{ $size: `$${field}TempA` }, 1] },
                                          then: { $arrayElemAt:[ `$${field}TempA`, 0 ] },
                                          else: { 
                                              $cond:  { 
                                                        if  : { $eq: [{ $size: `$${field}TempA` }, 0] },
                                                        then: `$${field}`,
                                                        else: null
                                                      }
                                                }
                                              }
                                          }
                                        }
                              }
                    }
                  })
    pipeline.push({ $unset: `${field}TempA` })
  }

  return pipeline
}

const listResolves = [
  'url',
  'name',
  'alternateName',
  'description',
  'image',
  'sameAs'
]

function getListResolve(){
  return listResolves
}

