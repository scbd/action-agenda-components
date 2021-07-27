import   fs                       from 'fs-extra'
import { resolve      , dirname } from 'path'
import { fileURLToPath }          from 'url'     ;

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

main()
function main(){
  makeJsFilesFromMjs()
}


function makeJsFilesFromMjs(){
  const fileName = resolve(__dirname, `../dist/esm/index.mjs`)
  const toFileName = resolve(__dirname, `../dist/esm/index.js`)

  const fileNameMin = resolve(__dirname, `../dist/esm/index.min.mjs`)
  const toFileNameMin = resolve(__dirname, `../dist/esm/index.min.js`)

  fs.copyFileSync(fileName, toFileName)
  fs.copyFileSync(fileNameMin, toFileNameMin)
}
