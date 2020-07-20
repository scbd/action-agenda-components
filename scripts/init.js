const fs   = require('fs')
const path = require('path')

const packagesPath     = path.resolve(__dirname, '../packages/')
const esLintConfigFile = 'module.exports = ' + JSON.stringify(require('../.eslintrc')) // eslint-disable-line
const esLintIgnore     = require('./eslint-ignore') // eslint-disable-line
const npmIgnore     = require('./npm-ignore') // eslint-disable-line
const packageNames     = readPackageNames()

for (const packageName of packageNames){
  const writePath = `${packagesPath}/${packageName}/`

  fs.writeFileSync(`${writePath}.eslintrc.js`,  esLintConfigFile)
  fs.writeFileSync(`${writePath}.eslintignore`, esLintIgnore)
  fs.writeFileSync(`${writePath}.npmignore`, npmIgnore)
}


function readPackageNames(){
  return fs.readdirSync(packagesPath)
    .filter((name) => name !== '.DS_Store')
}