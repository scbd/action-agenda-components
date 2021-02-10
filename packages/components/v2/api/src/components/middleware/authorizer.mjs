import   superagent   from 'superagent'
import   getOptions   from '../../default-options.mjs'
import { consola    } from '../logger.mjs'

const ANONYMOUS = { id: 1, anonymous: true, roles: [ 'Everyone' ], scopes: [] }

export const authenticate = async (req, res, next) => {
  const { $context } = req

  const token = req?.headers?.authorization? req.headers.authorization.replace(/^(Ticket|Token|Bearer)\s+/, '') : process.env.AA_TOKEN
  const user  = token? await getUserFromApi(token) : ANONYMOUS

  $context.user  = user;
  $context.token = token;

  return next()
}

async function getUserFromApi(token){
  try {
    const { api  } = getOptions()
    const { body } = await superagent.get(`${api}/v2015/me`)
                                      .accept('application/json')
                                      .set('Authorization', `Token ${token}`)
    return body
  } catch (e){
    return ANONYMOUS
  }
}