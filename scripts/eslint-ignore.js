const fs   = require('fs')
const path = require('path')

const eslintIgnoreData = fs.readFileSync(path.resolve(__dirname, '../.eslintignore'), { encoding: 'utf8' })

module.exports = eslintIgnoreData