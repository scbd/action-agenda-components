import { consola }  from '../logger.mjs'
import hasher     from 'object-hash'
import { isMongoIdHexString, ObjectID } from '../mongo/index.mjs'

export const parseIdentifier = ({ params }, res, next) => {

  try {
      const { identifier } = params

      if(!isMongoIdHexString(identifier)){
        params.identifier = getStringIdentifier(identifier)

        return next()
      }
      
      params.identifier = new ObjectID(identifier)
      
      return next()

  } catch (e) { 

    consola.error(e)
    return next()
  }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function getStringIdentifier(identifier){
  if(isEmail(identifier)) return hasher(identifier)
  
  return new RegExp(`^${escapeRegExp(identifier)}$`, 'i')
}

function isEmail(email){
    const sQtext         = '[^\\x0d\\x22\\x5c\\x80-\\xff]'                                                      ;
    const sDtext         = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]'                                                     ;
    const sAtom          = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
    const sQuotedPair    = '\\x5c[\\x00-\\x7f]'                                                                 ;
    const sDomainLiteral = `\\x5b(${sDtext}|${sQuotedPair})*\\x5d`                                              ;
    const sQuotedString  = `\\x22(${sQtext}|${sQuotedPair})*\\x22`                                              ;
    const sDomainRef     = sAtom                                                                                ;
    const sSubDomain     = `(${sDomainRef}|${sDomainLiteral})`                                                  ;
    const sWord          = `(${sAtom}|${sQuotedString})`                                                        ;
    const sDomain        = `${sSubDomain}(\\x2e${sSubDomain})*`                                                 ;
    const sLocalPart     = `${sWord}(\\x2e${sWord})*`                                                           ;
    const sAddrSpec      = `${sLocalPart}\\x40${sDomain}`                                                       ; // complete RFC822 email address spec
    const sValidEmail    = `^${sAddrSpec}$`                                                                     ; // as whole string

    const reValidEmail = new RegExp(sValidEmail);

    return reValidEmail.test(email);
}