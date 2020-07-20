const fs   = require('fs')
const path = require('path')

const npmIgnoreData = fs.readFileSync(path.resolve(__dirname, '../.npmignore'), { encoding: 'utf8' })

module.exports = npmIgnoreData