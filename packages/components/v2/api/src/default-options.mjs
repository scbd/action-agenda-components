import { setDefaultOptions, getDefaultOptionsFunction } from '@houlagins/default-options'
import   readPkg                                        from 'read-pkg'

const { name     } = readPkg.sync()

export default getDefaultOptionsFunction(name)

const port                  = 8000
const selfUrl               = `http://localhost:${port}`
const basePath              = '/api/v2021/aa'
const dbName                = 'aa-db'
const mongoUrl              = `mongodb://127.0.0.1:27017/${dbName}`
const cdn                   = 'https://cdn.cbd.int'
const collectionName        = 'action-agenda'
const versionCollectionName = 'action-agenda-versions'

const dev          = { api: 'https://api.cbddev.xyz/api', cdn, mongoUrl, dbName,  basePath, selfUrl, collectionName, versionCollectionName, port  }
const stg          = {  ...dev, api: 'https://stg.cbd.int/api' }
const prod         = {  ...stg, api: 'https://www.cbd.int/api' }

const environments  = { prod, stg, dev }

// #region options
const validationMap =
{ 
  forceEnv: String,  /* default: production */
  api     : String,  /* default: https://www.cbd.int/api */
  cdn     : String,  /* default: https://cdn.cbd.int/ */
  mongoUrl: String,  /* default: mongodb://127.0.0.1:27017/aa-db */
  dbName: String,
  basePath: String,
  selfUrl: String,
  collectionName: String,
  versionCollectionName: String,
  port : Number
}
// #endregion options

setDefaultOptions({ environments, validationMap, name }, name)

