import { buildWidget, dependencyRef } from '@scbd/self-embedding-component'
import { name, version              } from '../package.json'

const options   = buildOptions()
const propsData = { options }

const { VUE } = dependencyRef
const dependencies      = { all: [ VUE ] }

const config            = { version, name, propsData, dependencies }

buildWidget(config)

function buildOptions(){
  const basePath              = '/countries'
  const countryParamName      = 'country'
  const euIdentifier          = 'eur'
  const initEu                = false // false means manually init eu with custom functionality

  return { countryParamName, euIdentifier, initEu, basePath }
}
